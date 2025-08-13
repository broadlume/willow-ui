import React, { useEffect, useMemo, useState } from 'react';
import {
  Editor as TiptapEditor,
  useEditor,
  UseEditorOptions,
} from '@tiptap/react';
import { TextSelection } from '@tiptap/pm/state';
import clsx from 'clsx';

// Extensions
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TextAlign from '@tiptap/extension-text-align';
import Highlight from '@tiptap/extension-highlight';
import CodeBlock from '@tiptap/extension-code-block';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import Gapcursor from '@tiptap/extension-gapcursor';

// Custom Extensions
import { Video } from './extensions/video';
import { LineHeight } from './extensions/line-height';
import { Indentation } from './extensions/indentation';

// Custom Nodes
import { AutocompleteNode } from './nodes/autocomplete-node';

// contexts
import {
  NodeViewContext,
  NodeViewContextType,
} from './context/node-view-context';

// Components
import { Dialog, DialogContent } from '@components/dialog/dialog';
import { Menu } from './components/menu';
import { EditorContent } from './components/editor-content';
import { BubbleMenu } from './components/bubble-menu';
import { SlashCommand } from './extensions/slash-command';

export type EditorProps = {
  content?: string;
  onChange?: (html: string) => void;
  onBlur?: (html: string) => void;
  dropdownItems?: { label: string; value: string }[];
  dropdownPlaceholder?: string;
  autocompleteFetchOptions?: (
    query: string
  ) => Promise<{ label: string; value: string }[]>;
};

export const Editor: React.FC<EditorProps> = (props) => {
  const [content, setContent] = useState<string>(props.content ?? '');
  const [showEditorInDialog, setShowEditorInDialog] = useState(false);
  const [showRawHtml, setShowRawHtml] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleUpdate = (editor: TiptapEditor) => {
    const html = editor.getHTML();
    setContent(html);
    props.onChange?.(html);
  };

  // List of Tiptap Editor Extensions
  const extensions = [
    StarterKit.configure({
      gapcursor: false,
    }),
    Gapcursor,
    Link.configure({ openOnClick: true }),
    Image,
    Table.configure({ resizable: true }),
    TableRow,
    TableCell,
    TableHeader,
    TextAlign.configure({
      types: ['heading', 'paragraph'],
      alignments: ['left', 'center', 'right'],
    }),
    Underline,
    Highlight,
    CodeBlock,
    Placeholder.configure({
      placeholder: 'Write something …',
    }),
    Video,
    TextStyle,
    Color,
    LineHeight,
    Indentation,
    AutocompleteNode,
    SlashCommand,
  ];

  // Initialize the Tiptap editor with the provided content and extensions
  const EditorConfig: UseEditorOptions = {
    extensions,
    content,
    onUpdate: ({ editor }) => handleUpdate(editor),
    onBlur: ({ editor }) => {
      const html = editor.getHTML();
      props.onBlur?.(html);
    },
    editorProps: {
      attributes: {
        class: clsx(
          'focus:~outline-none ~not-prose',
          darkMode ? '!~text-white' : '~text-black'
        ),
      },
      // handleKeyDown: (_, event) => {
      //   switch (event.key) {
      //     case '/':
      //       setCommandMenu(true);
      //       break;
      //     case 'Escape':
      //     case 'Backspace':
      //       setCommandMenu(false);
      //       break;
      //     default:
      //       break;
      //   }
      // }
    },
  };

  const editor = useEditor(EditorConfig);
  const dialogEditor = useEditor({
    ...EditorConfig,
    onUpdate: ({ editor }) => handleUpdate(editor),
  });

  const nodeViewContextValue = useMemo<NodeViewContextType>(
    () => ({
      fetchOptions: props.autocompleteFetchOptions!,
      darkMode,
    }),
    [props.autocompleteFetchOptions, darkMode]
  );

  const activeEditor = showEditorInDialog ? dialogEditor : editor;

  useEffect(() => {
    if (content && editor) {
      const currentContent = editor.getHTML();
      if (content !== currentContent) {
        // Save cursor position
        const { from, to } = editor.state.selection;

        // Update content
        editor.commands.setContent(content);

        // Restore cursor position
        const newFrom = Math.min(from, editor.state.doc.content.size);
        const newTo = Math.min(to, editor.state.doc.content.size);
        const textSelection = new TextSelection(
          editor.state.doc.resolve(newFrom),
          editor.state.doc.resolve(newTo)
        );
        editor.view.dispatch(editor.state.tr.setSelection(textSelection));
      }
    }

    if (content && dialogEditor) {
      const currentContent = dialogEditor.getHTML();
      if (content !== currentContent) {
        // Save cursor position
        const { from, to } = dialogEditor.state.selection;

        // Update content
        dialogEditor.commands.setContent(content);

        // Restore cursor position
        const newFrom = Math.min(from, dialogEditor.state.doc.content.size);
        const newTo = Math.min(to, dialogEditor.state.doc.content.size);
        const textSelection = new TextSelection(
          dialogEditor.state.doc.resolve(newFrom),
          dialogEditor.state.doc.resolve(newTo)
        );
        dialogEditor.view.dispatch(
          dialogEditor.state.tr.setSelection(textSelection)
        );
      }
    }
  }, [content, editor, dialogEditor]);

  if (!activeEditor) return null;

  return (
    <NodeViewContext.Provider value={nodeViewContextValue}>
      <BubbleMenu editor={activeEditor} />
      {/* <CommandMenu editor={activeEditor} showCommandMenu={commandMenu} /> */}
      <div
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        {showEditorInDialog && (
          <Dialog
            open={showEditorInDialog}
            onOpenChange={setShowEditorInDialog}
          >
            <DialogContent
              className='~max-w-[90vw] ~gap-0 ~p-10'
              onPointerDownOutside={(e) => e.preventDefault()}
            >
              {/* Menu */}
              <Menu
                editor={dialogEditor!}
                showRawHtml={showRawHtml}
                toggleRawHtml={() => setShowRawHtml((v) => !v)}
                darkMode={darkMode}
                toggleDarkMode={() => setDarkMode((v) => !v)}
                className={clsx({
                  '~bg-surface-pri ~text-text-pri': !darkMode,
                  '~border-gray-700 ~bg-gray-900 ~text-white': darkMode,
                })}
              />

              {/* Editor */}
              <EditorContent
                editor={dialogEditor!}
                content={content}
                setContent={setContent}
                darkMode={darkMode}
                markdownMode={showRawHtml}
              />
            </DialogContent>
          </Dialog>
        )}

        {!showEditorInDialog && (
          <>
            {/* Menu */}
            <Menu
              editor={editor!}
              setShowEditorInDialog={setShowEditorInDialog}
              showEditorInDialog={showEditorInDialog}
              showRawHtml={showRawHtml}
              toggleRawHtml={() => setShowRawHtml((v) => !v)}
              darkMode={darkMode}
              toggleDarkMode={() => setDarkMode((v) => !v)}
              className={clsx({
                '~bg-surface-pri ~text-text-pri': !darkMode,
                '~border-gray-700 ~bg-gray-900 ~text-white': darkMode,
              })}
            />

            {/* Editor */}
            <EditorContent
              editor={editor!}
              content={content}
              setContent={setContent}
              darkMode={darkMode}
              markdownMode={showRawHtml}
            />
          </>
        )}

        {/* Debugging Content */}
        {/* <div className='~mt-4'>
        <h3>Editor Content (HTML):</h3>
        <div>{content}</div>
      </div> */}
      </div>
    </NodeViewContext.Provider>
  );
};
