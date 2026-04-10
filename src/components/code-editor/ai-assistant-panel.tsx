import axios from 'axios';
import clsx from 'clsx';
import { useCallback, useEffect, useRef, useState } from 'react';

import type * as monaco from 'monaco-editor';
import {
  HiArrowDownTray,
  HiCheckCircle,
  HiClipboardDocument,
  HiCodeBracket,
  HiPaperAirplane,
  HiSparkles,
  HiXMark,
} from 'react-icons/hi2';

import { Button } from '@components/button';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  selectionLines?: { start: number; end: number };
}

interface ContentPart {
  type: 'text' | 'code';
  content: string;
  lang?: string;
}

interface AIAssistantPanelProps {
  editor: monaco.editor.IStandaloneCodeEditor | null;
  hostname: string;
  authToken?: string;
  language: string;
  systemPrompt?: string;
  theme: 'light' | 'dark';
  onClose: () => void;
}

function parseContentParts(text: string): ContentPart[] {
  const parts: ContentPart[] = [];
  const codeBlockRegex = /```(\w*)\n?([\s\S]*?)```/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = codeBlockRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      const textContent = text.slice(lastIndex, match.index).trim();
      if (textContent) {
        parts.push({ type: 'text', content: textContent });
      }
    }
    parts.push({
      type: 'code',
      content: match[2].trim(),
      lang: match[1] || undefined,
    });
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    const remaining = text.slice(lastIndex).trim();
    if (remaining) {
      parts.push({ type: 'text', content: remaining });
    }
  }

  if (parts.length === 0) {
    parts.push({ type: 'text', content: text });
  }

  return parts;
}

const MIN_WIDTH = 240;
const MAX_WIDTH = 640;
const DEFAULT_WIDTH = 360;

const AIAssistantPanel = ({
  editor,
  hostname,
  authToken,
  language,
  systemPrompt,
  theme,
  onClose,
}: AIAssistantPanelProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedBlockId, setCopiedBlockId] = useState<string | null>(null);
  const [panelWidth, setPanelWidth] = useState(DEFAULT_WIDTH);
  const [activeSelection, setActiveSelection] = useState<{
    start: number;
    end: number;
  } | null>(null);

  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const startWidthRef = useRef(DEFAULT_WIDTH);

  const isLight = theme === 'light';

  // Scroll to bottom within the panel container — avoids scrollIntoView
  // propagating up and scrolling the host page.
  useEffect(() => {
    const container = messagesContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages, isLoading]);

  // Track the editor's live selection so we can show a chip in the input box.
  useEffect(() => {
    if (!editor) return;
    const disposable = editor.onDidChangeCursorSelection(({ selection }) => {
      if (selection.isEmpty()) {
        setActiveSelection(null);
      } else {
        setActiveSelection({
          start: selection.startLineNumber,
          end: selection.endLineNumber,
        });
      }
    });
    return () => disposable.dispose();
  }, [editor]);

  // Resize drag logic — panel is on the right, drag left = wider
  const onResizeMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    startWidthRef.current = panelWidth;
    e.preventDefault();
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const delta = startXRef.current - e.clientX;
      const newWidth = Math.min(
        MAX_WIDTH,
        Math.max(MIN_WIDTH, startWidthRef.current + delta)
      );
      setPanelWidth(newWidth);
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  // Editor helpers
  const getEditorContext = useCallback(() => {
    if (!editor)
      return {
        selectedText: '',
        fullCode: '',
        selectionLines: null as null | { start: number; end: number },
      };
    const selection = editor.getSelection();
    const model = editor.getModel();
    const fullCode = model?.getValue() ?? '';
    const hasSelection = !!(selection && !selection.isEmpty());
    const selectedText = hasSelection
      ? model?.getValueInRange(selection) ?? ''
      : '';
    const selectionLines =
      hasSelection && selection
        ? { start: selection.startLineNumber, end: selection.endLineNumber }
        : null;
    return { selectedText, fullCode, selectionLines };
  }, [editor]);

  const insertCode = useCallback(
    (code: string) => {
      if (!editor) return;
      const model = editor.getModel();
      if (!model) return;

      const selection = editor.getSelection();
      const hasSelection = !!(selection && !selection.isEmpty());

      // Determine and clear the target range first
      const clearRange =
        hasSelection && selection ? selection : model.getFullModelRange();

      editor.executeEdits('ai-assistant', [{ range: clearRange, text: '' }]);

      // Snapshot the start position (Monaco columns are 1-based)
      const startLine = clearRange.startLineNumber;
      const startCol = clearRange.startColumn;

      const CHARS_PER_TICK = 4; // characters streamed per frame
      const DELAY_MS = 10; // ms between frames — lower = faster

      let charIndex = 0;

      const animate = () => {
        charIndex = Math.min(charIndex + CHARS_PER_TICK, code.length);
        const partial = code.slice(0, charIndex);

        // Calculate the end position of the text inserted so far
        const lines = partial.split('\n');
        const endLine = startLine + lines.length - 1;
        const endCol =
          lines.length === 1
            ? startCol + lines[0].length
            : lines[lines.length - 1].length + 1;

        editor.executeEdits('ai-assistant-stream', [
          {
            range: {
              startLineNumber: startLine,
              startColumn: startCol,
              endLineNumber: endLine,
              endColumn: endCol,
            },
            text: partial,
          },
        ]);

        if (charIndex < code.length) {
          setTimeout(animate, DELAY_MS);
        } else {
          editor.focus();
        }
      };

      animate();
    },
    [editor]
  );

  const sendMessage = useCallback(async () => {
    const trimmedInput = input.trim();
    if (!trimmedInput || isLoading) return;

    const { selectedText, fullCode, selectionLines } = getEditorContext();

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      content: trimmedInput,
      selectionLines: selectionLines ?? undefined,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const contextParts: string[] = [];

      // Prepend prior conversation history so the AI remembers previous turns
      if (messages.length > 0) {
        const historyLines = messages
          .map(
            (m) => `[${m.role === 'user' ? 'User' : 'Assistant'}]: ${m.content}`
          )
          .join('\n');
        contextParts.push(`Previous conversation:\n${historyLines}`);
      }

      if (fullCode.trim()) {
        contextParts.push(
          `Current ${language} code:\n\`\`\`${language}\n${fullCode}\n\`\`\``
        );
      }
      if (selectedText.trim()) {
        const lineLabel = selectionLines
          ? ` (Lines ${selectionLines.start}–${selectionLines.end})`
          : '';
        contextParts.push(
          `Selected text${lineLabel}:\n\`\`\`${language}\n${selectedText}\n\`\`\``
        );
      }
      contextParts.push(`Request: ${trimmedInput}`);

      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };
      if (authToken) {
        headers['Authorization'] = `Bearer ${authToken}`;
      }

      const requestBody: { prompt: string; systemPrompt?: string } = {
        prompt: contextParts.join('\n\n'),
      };
      if (systemPrompt) {
        requestBody.systemPrompt = systemPrompt;
      }

      const response = await axios.post(
        `${hostname}/api/v2/ai/generate`,
        requestBody,
        { headers }
      );

      const aiText: string = response.data?.data?.[0]?.text ?? '';

      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), role: 'assistant', content: aiText },
      ]);
    } catch (err) {
      console.error('AI Assistant panel error:', err);
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: 'assistant',
          content: 'Something went wrong. Please try again.',
        },
      ]);
    } finally {
      setIsLoading(false);
      setActiveSelection(null);
      // Return focus to the textarea so the page does not scroll elsewhere.
      inputRef.current?.focus();
    }
  }, [
    input,
    isLoading,
    messages,
    getEditorContext,
    hostname,
    authToken,
    language,
    systemPrompt,
  ]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Always stop propagation so key events don't bubble to the Monaco editor
    e.stopPropagation();
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleCopy = (blockId: string, code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedBlockId(blockId);
      setTimeout(() => setCopiedBlockId(null), 1500);
    });
  };

  // Bounce dot animation-delay classes — static so Tailwind can include them.
  const bounceDots = [
    'animate-bounce',
    'animate-bounce [animation-delay:150ms]',
    'animate-bounce [animation-delay:300ms]',
  ] as const;

  return (
    // width is driven by JS state — the only inline style in the file.
    <div
      className='relative flex h-full shrink-0'
      style={{ width: panelWidth }}
    >
      {/* Drag-to-resize handle on the left edge */}
      <div
        className='absolute left-0 top-0 bottom-0 w-1 z-20 cursor-col-resize group'
        onMouseDown={onResizeMouseDown}
        title='Drag to resize'
      >
        <div className='w-full h-full bg-[#6038E8] opacity-0 group-hover:opacity-25 transition-opacity duration-150' />
      </div>

      {/* Panel body */}
      <div
        className={clsx('flex flex-col w-full h-full border-l', {
          'border-[#d9dade] bg-[#eff0f2]': isLight,
          'border-[#2e3340] bg-[#1a1d24]': !isLight,
        })}
      >
        {/* Header */}
        <div
          className={clsx(
            'flex items-center justify-between px-4 py-2.5 shrink-0 h-10 border-b',
            {
              'bg-[#e8e9ec] border-[#d9dade]': isLight,
              'bg-[#15181e] border-[#2e3340]': !isLight,
            }
          )}
        >
          <div className='flex items-center gap-2'>
            <HiSparkles size={15} className='text-[#6038E8]' />
            <span className='text-sm font-semibold text-[#6038E8]'>
              Code Assistant
            </span>
          </div>
          <button
            type='button'
            className={clsx(
              'flex items-center justify-center w-6 h-6 rounded opacity-60 hover:opacity-100 transition-opacity',
              {
                'text-[#383a42]': isLight,
                'text-[#abb2bf]': !isLight,
              }
            )}
            onClick={onClose}
            aria-label='Close Code Assistant panel'
          >
            <HiXMark size={16} />
          </button>
        </div>

        {/* Messages area */}
        <div
          ref={messagesContainerRef}
          className={clsx(
            'flex-1 overflow-y-auto p-4 flex flex-col gap-4 min-h-0',
            {
              'bg-[#eff0f2]': isLight,
              'bg-[#1a1d24]': !isLight,
            }
          )}
        >
          {/* Empty state */}
          {messages.length === 0 && !isLoading && (
            <div className='flex flex-col items-center justify-center h-full gap-3 text-center select-none'>
              <HiSparkles size={28} className='text-[#6038E8] opacity-40' />
              <p
                className={clsx('text-sm leading-relaxed opacity-50', {
                  'text-[#383a42]': isLight,
                  'text-[#abb2bf]': !isLight,
                })}
              >
                Ask Code Assistant to write,
                <br />
                explain, or modify your code.
              </p>
              <p
                className={clsx('text-xs', {
                  'text-[#888c96]': isLight,
                  'text-[#636870]': !isLight,
                })}
              >
                Select code first to use it as context.
              </p>
            </div>
          )}

          {/* Message thread */}
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={clsx('flex flex-col gap-1', {
                'items-end': msg.role === 'user',
                'items-start': msg.role === 'assistant',
              })}
            >
              <span
                className={clsx('text-xs font-medium px-1', {
                  'text-[#6038E8]': msg.role === 'user',
                  'text-[#888c96]': msg.role === 'assistant' && isLight,
                  'text-[#636870]': msg.role === 'assistant' && !isLight,
                })}
              >
                {msg.role === 'user' ? (
                  'You'
                ) : (
                  <span className='flex flex-row items-center gap-1'>
                    <HiSparkles size={13} className='text-[#6038E8]' />
                    Assistant
                  </span>
                )}
              </span>

              {msg.role === 'user' ? (
                <div className='flex flex-col items-end gap-1 max-w-[90%]'>
                  {msg.selectionLines && (
                    <span className='flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-[#6038E8]/15 text-[#6038E8] border border-[#6038E8]/25 select-none cursor-pointer'>
                      <span className='opacity-60'>&#x23;</span>
                      Lines {msg.selectionLines.start}-{msg.selectionLines.end}
                    </span>
                  )}
                  <div className='bg-[#6038E8] text-white px-3 py-2 rounded-xl rounded-tr-sm text-sm leading-relaxed wrap-break-word w-full'>
                    {msg.content}
                  </div>
                </div>
              ) : (
                <div className='flex flex-col gap-2 w-full'>
                  {parseContentParts(msg.content).map((part, i) => {
                    if (part.type === 'code') {
                      const blockId = `${msg.id}-${i}`;
                      const isCopied = copiedBlockId === blockId;
                      return (
                        <div
                          key={i}
                          className={clsx('rounded-lg overflow-hidden border', {
                            'border-[#d9dade] bg-[#e2e4e8]': isLight,
                            'border-[#2e3340] bg-[#0f1217]': !isLight,
                          })}
                        >
                          {/* Code block toolbar */}
                          <div
                            className={clsx(
                              'flex items-center justify-between px-3 py-1.5 border-b',
                              {
                                'bg-[#d8dadf] border-[#d9dade]': isLight,
                                'bg-[#0c0f14] border-[#2e3340]': !isLight,
                              }
                            )}
                          >
                            <span
                              className={clsx(
                                'text-[11px] font-mono opacity-60',
                                {
                                  'text-[#383a42]': isLight,
                                  'text-[#abb2bf]': !isLight,
                                }
                              )}
                            >
                              {part.lang || language}
                            </span>
                            <div className='flex items-center gap-1'>
                              <button
                                type='button'
                                className={clsx(
                                  'flex items-center gap-1 px-1.5 py-0.5 rounded text-[11px] transition-opacity',
                                  isCopied
                                    ? 'opacity-100 text-green-500'
                                    : 'opacity-60 hover:opacity-100',
                                  {
                                    'text-[#383a42]': !isCopied && isLight,
                                    'text-[#abb2bf]': !isCopied && !isLight,
                                  }
                                )}
                                onClick={() =>
                                  handleCopy(blockId, part.content)
                                }
                                title='Copy code'
                              >
                                {isCopied ? (
                                  <HiCheckCircle size={13} />
                                ) : (
                                  <HiClipboardDocument size={13} />
                                )}
                                <span>{isCopied ? 'Copied' : 'Copy'}</span>
                              </button>
                              <button
                                type='button'
                                className='flex items-center gap-1 px-1.5 py-0.5 rounded text-[11px] text-[#6038E8] opacity-80 hover:opacity-100 transition-opacity font-medium'
                                onClick={() => insertCode(part.content)}
                                title='Insert into editor at cursor'
                              >
                                <HiArrowDownTray size={13} />
                                <span>Insert</span>
                              </button>
                            </div>
                          </div>
                          {/* Code content */}
                          <pre
                            className={clsx(
                              'p-3 text-[12px] overflow-x-auto font-mono leading-relaxed',
                              {
                                'text-[#383a42]': isLight,
                                'text-[#abb2bf]': !isLight,
                              }
                            )}
                          >
                            <code>{part.content}</code>
                          </pre>
                        </div>
                      );
                    }
                    return (
                      <p
                        key={i}
                        className={clsx('text-sm leading-relaxed', {
                          'text-[#383a42]': isLight,
                          'text-[#abb2bf]': !isLight,
                        })}
                      >
                        {part.content}
                      </p>
                    );
                  })}
                </div>
              )}
            </div>
          ))}

          {/* Typing indicator */}
          {isLoading && (
            <div className='flex items-center gap-2 pl-1'>
              <HiSparkles size={13} className='text-[#6038E8] opacity-70' />
              <div className='flex gap-1 items-center'>
                {bounceDots.map((dotClass, i) => (
                  <span
                    key={i}
                    className={clsx(
                      'w-1.5 h-1.5 bg-[#6038E8] rounded-full opacity-70',
                      dotClass
                    )}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Input area */}
        <div
          className={clsx('p-3 flex flex-col gap-1.5 shrink-0 border-t', {
            'bg-[#e8e9ec] border-[#d9dade]': isLight,
            'bg-[#15181e] border-[#2e3340]': !isLight,
          })}
        >
          <div
            className={clsx(
              'flex flex-col rounded-lg transition-shadow focus-within:ring-1 focus-within:ring-[#6038E8]/50 border overflow-hidden',
              {
                'bg-[#f5f5f7] border-[#d9dade]': isLight,
                'bg-[#12151b] border-[#2e3340]': !isLight,
              }
            )}
          >
            {/* Selection reference chip — shown when editor has an active selection */}
            {activeSelection && (
              <div className={clsx('flex items-center gap-1.5 px-2 pt-2 pb-1')}>
                <div
                  className={clsx(
                    'flex items-center gap-1 pl-1.5 pr-1 py-0.5 rounded text-[11px] font-medium border select-none',
                    {
                      'bg-[#6038E8]/10 border-[#6038E8]/30 text-[#6038E8]':
                        true,
                    }
                  )}
                >
                  <HiCodeBracket size={11} />
                  <span className='font-mono'>
                    {activeSelection.start === activeSelection.end
                      ? `Line ${activeSelection.start}`
                      : `Lines ${activeSelection.start}–${activeSelection.end}`}
                  </span>
                  <button
                    type='button'
                    className='ml-0.5 opacity-60 hover:opacity-100 transition-opacity'
                    onClick={() => {
                      setActiveSelection(null);
                      // Also clear the editor selection
                      if (editor) {
                        const pos = editor.getPosition();
                        if (pos)
                          editor.setSelection({
                            startLineNumber: pos.lineNumber,
                            startColumn: pos.column,
                            endLineNumber: pos.lineNumber,
                            endColumn: pos.column,
                          });
                      }
                    }}
                    aria-label='Dismiss selection'
                  >
                    <HiXMark size={10} />
                  </button>
                </div>
              </div>
            )}

            <div className='flex gap-2 p-2'>
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                onKeyUp={(e) => e.stopPropagation()}
                onKeyPress={(e) => e.stopPropagation()}
                placeholder='Ask Code Assistant'
                rows={2}
                className={clsx(
                  'flex-1 resize-none bg-transparent outline-none text-sm leading-relaxed placeholder:opacity-35',
                  {
                    'text-[#383a42]': isLight,
                    'text-white': !isLight,
                  }
                )}
              />
              <Button
                type='button'
                variant='default'
                className='self-end p-1.5 h-auto bg-[#6038E8] hover:bg-[#4f2ec9] shrink-0 disabled:opacity-40'
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  sendMessage().then(() => inputRef.current?.focus());
                }}
                disabled={!input.trim() || isLoading}
              >
                <HiPaperAirplane size={14} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistantPanel;
