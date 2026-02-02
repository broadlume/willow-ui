import clsx from 'clsx';
import { useCallback, useEffect, useRef, useState } from 'react';

import Editor, { EditorProps, Monaco } from '@monaco-editor/react';
import * as emmetMonaco from 'emmet-monaco-es';
import type * as monaco from 'monaco-editor';
import * as prettierParserBabel from 'prettier/parser-babel';
import * as prettierParserHtml from 'prettier/parser-html';
import * as prettierParserCss from 'prettier/parser-postcss';
import * as prettier from 'prettier/standalone';

import { Button } from '@components/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@components/popover/popover';
import {
  EMMET_SUPPORTED_LANGUAGES,
  oneDarkProTheme,
  oneLightProTheme,
} from './utils';

// icons
import {
  HiClipboardDocumentCheck,
  HiCodeBracketSquare,
  HiEllipsisVertical,
  HiMiniMoon,
  HiMiniSun,
  HiPaintBrush,
} from 'react-icons/hi2';

// Simplified theme type - just light and dark
type CustomTheme = 'light' | 'dark';

interface CodeEditorProps {
  code?: string;
  onChange?: (code: string) => void;
  language?: string;
  theme?: CustomTheme;
  height?: string;
  width?: string;
  options?: EditorProps['options'];
  asyncTokenSuggestions?: (query: string) => Promise<string[]>;
  enableTokenSuggestion?: boolean;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  code: passedCode = '',
  onChange: passedOnChange,
  language = 'html',
  theme: passedTheme = 'dark',
  height = '90vh',
  width = '100%',
  options: passedOptions,
  asyncTokenSuggestions,
  enableTokenSuggestion = true,
}: CodeEditorProps) => {
  const [code, setCode] = useState<string>(passedCode);
  const [theme, setTheme] = useState<CustomTheme>(passedTheme);
  const [statusMessage, setStatusMessage] = useState('');
  const [suggestionPage, setSuggestionPage] = useState(1);
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);
  const providersRef = useRef<monaco.IDisposable[]>([]);

  const options: EditorProps['options'] = {
    fontSize: 14,
    fontFamily: 'Fira Code',
    lineNumbers: 'on',
    lineNumbersMinChars: 3,
    minimap: { enabled: true },
    scrollbar: {
      alwaysConsumeMouseWheel: false,
      verticalScrollbarSize: 8,
      horizontalScrollbarSize: 8,
    },
    autoClosingBrackets: 'always',
    autoClosingQuotes: 'always',
    cursorBlinking: 'smooth',
    cursorSmoothCaretAnimation: 'on',
    selectOnLineNumbers: true,
    glyphMargin: false,
    folding: true,
    lineDecorationsWidth: 10,
    lineHeight: 22,
    wordWrap: 'on',
    ...passedOptions,
  };

  // Helper function to initialize Emmet for all supported languages
  const initializeEmmet = (monaco: Monaco) => {
    // Group languages by emmet type for efficient initialization
    const emmetGroups = EMMET_SUPPORTED_LANGUAGES.reduce((groups, config) => {
      if (!groups[config.emmetType]) {
        groups[config.emmetType] = [];
      }
      groups[config.emmetType].push(config.language);
      return groups;
    }, {} as Record<string, string[]>);

    // Initialize Emmet for each type
    if (emmetGroups.html?.length) {
      emmetMonaco.emmetHTML(monaco, emmetGroups.html);
    }
    if (emmetGroups.css?.length) {
      emmetMonaco.emmetCSS(monaco, emmetGroups.css);
    }
    if (emmetGroups.jsx?.length) {
      emmetMonaco.emmetJSX(monaco, emmetGroups.jsx);
    }
  };

  const handleEditorDidMount = (editor: any, monaco: Monaco) => {
    editorRef.current = editor;

    // Dispose of any existing providers
    providersRef.current.forEach((provider) => provider.dispose());
    providersRef.current = [];

    // Define custom themes
    monaco.editor.defineTheme('one-dark-pro', oneDarkProTheme);
    monaco.editor.defineTheme('one-light-pro', oneLightProTheme);

    // Initialize Emmet for all supported languages
    initializeEmmet(monaco);

    // Only register our custom completion providers if token suggestions are enabled
    if (enableTokenSuggestion && asyncTokenSuggestions) {
      ['html', 'liquid', 'javascript'].forEach((language) => {
        const provider = monaco.languages.registerCompletionItemProvider(
          language,
          {
            triggerCharacters: ['{'],
            provideCompletionItems: async (
              model,
              position,
              _context,
              _token
            ) => {
              const textBeforeCursor = model.getValueInRange({
                startLineNumber: position.lineNumber,
                startColumn: 1,
                endLineNumber: position.lineNumber,
                endColumn: position.column,
              });

              const match = textBeforeCursor.match(/{{(\w*)$/);
              if (!match) {
                return { suggestions: [] };
              }

              const query = match[1];
              let tokenResults: string[] = [];
              try {
                tokenResults = await asyncTokenSuggestions(query);
              } catch (err) {
                console.error('Failed to fetch async token suggestions:', err);
              }

              const suggestions = tokenResults.map((token) => ({
                label: token,
                kind: monaco.languages.CompletionItemKind.Text,
                insertText: `${token}`,
                detail: `Insert ${token} token`,
                range: {
                  startLineNumber: position.lineNumber,
                  endLineNumber: position.lineNumber,
                  startColumn: position.column - query.length,
                  endColumn: position.column,
                },
              }));

              return { suggestions };
            },
          }
        );

        // Store the provider for cleanup
        providersRef.current.push(provider);
      });
    }

    editor.onDidChangeModelContent(() => {
      const position = editor.getPosition();
      const model = editor.getModel();
      if (!position || !model) return;

      const textBeforeCursor = model.getValueInRange({
        startLineNumber: position.lineNumber,
        startColumn: 1,
        endLineNumber: position.lineNumber,
        endColumn: position.column,
      });

      if (textBeforeCursor.endsWith('{{')) {
        editor.trigger('keyboard', 'editor.action.triggerSuggest', {});
      }
    });
  };

  useEffect(() => {
    if (!editorRef.current) return;
    const editorDomNode = editorRef.current.getDomNode?.();
    if (!editorDomNode) return;

    const suggestWidget = editorDomNode.ownerDocument.querySelector(
      '.monaco-editor .suggest-widget .tree'
    );
    if (!suggestWidget) return;

    const onScroll = (_e: Event) => {
      if (
        suggestWidget.scrollTop + suggestWidget.clientHeight >=
        suggestWidget.scrollHeight
      ) {
        console.log('Scrolled to bottom, fetch more suggestions');
      }
    };

    suggestWidget.addEventListener('scroll', onScroll);
    return () => suggestWidget.removeEventListener('scroll', onScroll);
  }, [suggestionPage]);

  // Cleanup providers on unmount
  useEffect(() => {
    return () => {
      providersRef.current.forEach((provider) => provider.dispose());
      providersRef.current = [];
    };
  }, []);

  const formatCode = () => {
    if (!editorRef.current) return;

    const currentCode = editorRef.current.getValue();
    let formattedCode = currentCode;

    try {
      formattedCode = prettier.format(currentCode, {
        parser: getPrettierParser(language),
        plugins: [prettierParserHtml, prettierParserCss, prettierParserBabel],
      });
    } catch (error) {
      console.error('Error formatting code:', error);
    }

    editorRef.current.setValue(formattedCode);
  };

  const getPrettierParser = (lang: string) => {
    switch (lang) {
      case 'html':
      case 'liquid':
        return 'html';
      case 'css':
        return 'css';
      case 'javascript':
      case 'json':
        return 'babel';
      default:
        return 'babel';
    }
  };

  const onChange = useCallback(
    (value: string | undefined) => {
      const updatedCode = value ?? '';
      setCode(updatedCode);
      passedOnChange?.(updatedCode);
    },
    [passedOnChange]
  );

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Map custom theme names to Monaco theme names
  const getMonacoTheme = (customTheme: CustomTheme): string => {
    switch (customTheme) {
      case 'dark':
        return 'one-dark-pro';
      case 'light':
        return 'one-light-pro';
      default:
        return 'one-dark-pro';
    }
  };

  const copyCode = () => {
    if (!editorRef.current) return;
    const currentCode = editorRef.current.getValue();
    navigator.clipboard
      .writeText(currentCode)
      .then(() => {
        setStatusMessage('Code copied to clipboard!');
        setTimeout(() => setStatusMessage(''), 2000);
      })
      .catch((err) => {
        setStatusMessage('Failed to copy code.');
        setTimeout(() => setStatusMessage(''), 2000);
        console.error(err);
      });
  };

  const isLightTheme = theme === 'light';
  const isDarkTheme = theme === 'dark';

  return (
    <div
      className={clsx(
        'w-full h-[440px] border rounded-lg overflow-hidden flex flex-col',
        {
          'bg-[#fafafa] border-[#e5e5e6]': isLightTheme,
          'bg-[#282c34] border-[#3e4451]': isDarkTheme,
        }
      )}
    >
      {/* Header Bar */}
      <div
        className={clsx(
          'border-b px-2.5 py-2 flex justify-between items-center h-[40px]',
          {
            'bg-[#fafafa] border-[#e5e5e6]': isLightTheme,
            'bg-[#282c34] border-[#3e4451]': isDarkTheme,
          }
        )}
      >
        {/* Label */}
        <div className='text-xs capitalize flex items-center gap-1'>
          <HiCodeBracketSquare size={14} className='text-[#6038E8]' />
          <span
            className={clsx({
              'text-[#383a42]': isLightTheme,
              'text-[#abb2bf]': isDarkTheme,
            })}
          >
            {language}
          </span>
        </div>

        {/* Center Status Message */}
        <div className='flex-1 flex justify-center items-center'>
          {statusMessage && (
            <div
              className={clsx(
                'text-xs px-3 py-1 rounded-full font-medium transition-all duration-300 ease-in-out animate-scale-up',
                {
                  'bg-[#6038E8]/10 text-[#6038E8] border border-[#6038E8]/20':
                    isLightTheme,
                  'bg-[#6038E8]/20 text-[#8B5CF6] border border-[#6038E8]/30':
                    isDarkTheme,
                }
              )}
            >
              {statusMessage}
            </div>
          )}
        </div>

        {/* Toolbar */}
        <div className='flex items-center gap-4 relative'>
          {/* AI Icon */}
          {/* <div className='flex items-center gap-1 cursor-pointer'>
                        <AIIcon />
                        <span className='text-sm font-normal text-[#6038E8]'>Ai</span>
                    </div> */}

          {/* Theme Toggle */}
          <Button
            type='button'
            variant='link'
            className={clsx({
              'text-[#383a42]': isLightTheme,
              'text-[#abb2bf]': isDarkTheme,
            })}
            onClick={() => {
              toggleTheme();
            }}
          >
            {isDarkTheme ? <HiMiniSun size={16} /> : <HiMiniMoon size={16} />}
          </Button>

          {/* More Options Menu */}
          <Popover>
            <PopoverTrigger
              className={clsx({
                'text-[#383a42]': isLightTheme,
                'text-[#abb2bf]': isDarkTheme,
              })}
            >
              <HiEllipsisVertical size={24} />
            </PopoverTrigger>
            <PopoverContent
              className='w-28 flex flex-col items-start gap-2 p-2'
              alignOffset={-90}
            >
              <Button
                type='button'
                variant='link'
                className='hover:no-underline text-[#1A1A1A] gap-2'
                onClick={() => formatCode()}
              >
                <HiPaintBrush />
                Format
              </Button>
              <Button
                type='button'
                variant='link'
                className='hover:no-underline text-[#1A1A1A] gap-2'
                onClick={() => copyCode()}
              >
                <HiClipboardDocumentCheck />
                Copy
              </Button>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Content Area */}
      <Editor
        options={options}
        height={height}
        width={width}
        language={language}
        theme={getMonacoTheme(theme)}
        defaultValue={code}
        onChange={onChange}
        onMount={handleEditorDidMount}
      />
    </div>
  );
};

export { CodeEditor };
