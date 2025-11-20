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
import { CustomImage } from './extensions/custom-image';

// Custom Nodes
// import { AutocompleteNode } from './nodes/autocomplete-node';

// contexts
import {
  NodeViewContext,
  NodeViewContextType,
} from './context/node-view-context';

// Components
import { Dialog, DialogContent } from '@components/dialog/dialog';
import { Menu } from './components/menu';
import { EditorContent } from './components/editor-content';
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
  hostname: string;
  onImageBrowseClick?: (editor: TiptapEditor, setImageData: (data: { url: string; metadata?: Record<string, string> }) => void) => void; // Callback for custom asset manager integration with URL and metadata setter
  onImageDrop?: (editor: TiptapEditor, file: File, setUrl: (url: string) => void) => void; // Callback for custom file drop handling
  onImageNameClick?: (editor: TiptapEditor, imageData: { name: string | null; url: string | null; size: number | null; file: File | null }) => void; // Callback for when image name is clicked
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

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
    props.onChange?.(newContent);
  };

  // Handle mode toggle
  const handleToggleRawHtml = () => {
    setShowRawHtml((v) => !v);
  };

  // List of Tiptap Editor Extensions
  const extensions = [
    StarterKit.configure({
      gapcursor: false,
    }),
    Gapcursor,
    Link.configure({ openOnClick: true }),
    CustomImage,
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
    // AutocompleteNode,
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
          'focus:outline-hidden not-prose overflow-auto',
          darkMode ? '!text-white' : 'text-black'
        ),
      },
    },
  };

  const editor = useEditor(EditorConfig);
  const dialogEditor = useEditor({
    ...EditorConfig,
    onUpdate: ({ editor }) => handleUpdate(editor),
  });

  const nodeViewContextValue = useMemo<NodeViewContextType>(
    () => ({
      fetchOptions:
        props.autocompleteFetchOptions || (() => Promise.resolve([])),
      darkMode,
    }),
    [props.autocompleteFetchOptions, darkMode]
  );

  const activeEditor = showEditorInDialog ? dialogEditor : editor;

  useEffect(() => {
    // Update main editor if content changed externally (e.g., from HTML mode)
    if (content && editor && !editor.isDestroyed) {
      const currentContent = editor.getHTML();
      if (content !== currentContent) {
        // Save cursor position
        const { from, to } = editor.state.selection;

        // Update content without triggering onChange
        editor.commands.setContent(content, false);

        // Restore cursor position if still valid
        try {
          const newFrom = Math.min(from, editor.state.doc.content.size);
          const newTo = Math.min(to, editor.state.doc.content.size);
          const textSelection = new TextSelection(
            editor.state.doc.resolve(newFrom),
            editor.state.doc.resolve(newTo)
          );
          editor.view.dispatch(editor.state.tr.setSelection(textSelection));
        } catch (error) {
          // If cursor restoration fails, just place cursor at the end
          editor.commands.focus('end');
        }
      }
    }

    // Update dialog editor if content changed externally (e.g., from HTML mode)
    if (content && dialogEditor && !dialogEditor.isDestroyed) {
      const currentContent = dialogEditor.getHTML();
      if (content !== currentContent) {
        // Save cursor position
        const { from, to } = dialogEditor.state.selection;

        // Update content without triggering onChange
        dialogEditor.commands.setContent(content, false);

        // Restore cursor position if still valid
        try {
          const newFrom = Math.min(from, dialogEditor.state.doc.content.size);
          const newTo = Math.min(to, dialogEditor.state.doc.content.size);
          const textSelection = new TextSelection(
            dialogEditor.state.doc.resolve(newFrom),
            dialogEditor.state.doc.resolve(newTo)
          );
          dialogEditor.view.dispatch(
            dialogEditor.state.tr.setSelection(textSelection)
          );
        } catch (error) {
          // If cursor restoration fails, just place cursor at the end
          dialogEditor.commands.focus('end');
        }
      }
    }
  }, [content, editor, dialogEditor]);

  if (!activeEditor) return null;

  return (
    <NodeViewContext.Provider value={nodeViewContextValue}>
      <div
        className={clsx({ dark: darkMode })}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        {showEditorInDialog && dialogEditor && (
          <Dialog
            open={showEditorInDialog}
            onOpenChange={setShowEditorInDialog}
          >
            <DialogContent
              className='max-w-[90vw] gap-0 p-10'
              onPointerDownOutside={(e) => {
                // Allow BubbleMenu interactions by checking if the target is part of a tippy popper or popover
                const target = e.target as Element;
                if (
                  target &&
                  (target.closest('[data-tippy-root]') ||
                    target.closest('[data-radix-popper-content-wrapper]') ||
                    target.closest('[data-radix-popover-content]') ||
                    target.closest('.tippy-popper') ||
                    target.closest('[role="tooltip"]') ||
                    target.closest('[role="dialog"]') ||
                    target.closest('[data-state="open"]'))
                ) {
                  return; // Allow the event to proceed for BubbleMenu/Popover interactions
                }
                e.preventDefault();
              }}
            >
              {/* Menu */}
              <Menu
                editor={dialogEditor}
                showRawHtml={showRawHtml}
                toggleRawHtml={handleToggleRawHtml}
                darkMode={darkMode}
                toggleDarkMode={() => setDarkMode((v) => !v)}
                hostname={props.hostname}
                onImageBrowseClick={props.onImageBrowseClick}
                onImageDrop={props.onImageDrop}
                onImageNameClick={props.onImageNameClick}
                className={clsx({
                  'bg-gray-100': !darkMode,
                  'text-gray-800': !darkMode,
                  'bg-gray-900 text-gray-200 border-gray-600': darkMode,
                })}
              />

              {/* Editor */}
              <EditorContent
                editor={dialogEditor}
                content={content}
                setContent={handleContentChange}
                darkMode={darkMode}
                markdownMode={showRawHtml}
              />
            </DialogContent>
          </Dialog>
        )}

        {!showEditorInDialog && editor && (
          <>
            {/* Menu */}
            <Menu
              editor={editor}
              setShowEditorInDialog={setShowEditorInDialog}
              showEditorInDialog={showEditorInDialog}
              showRawHtml={showRawHtml}
              toggleRawHtml={handleToggleRawHtml}
              darkMode={darkMode}
              toggleDarkMode={() => setDarkMode((v) => !v)}
              hostname={props.hostname}
              onImageBrowseClick={props.onImageBrowseClick}
              onImageDrop={props.onImageDrop}
              onImageNameClick={props.onImageNameClick}
              className={clsx({
                'bg-surface-pri text-text-pri': !darkMode,
                'border-gray-700 bg-gray-900 text-white': darkMode,
              })}
            />

            {/* Editor */}
            <EditorContent
              editor={editor}
              content={content}
              setContent={handleContentChange}
              darkMode={darkMode}
              markdownMode={showRawHtml}
            />
          </>
        )}
      </div>
    </NodeViewContext.Provider>
  );
};
