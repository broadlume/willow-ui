import React, { useMemo, useState } from 'react';
import prettier from 'prettier/standalone';
import parserHtml from 'prettier/parser-html';
import { EditorContent, useEditor } from '@tiptap/react';

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

// Custom Extensions
import { Video } from './extensions/video';
import { LineHeight } from './extensions/line-height';
import { Indentation } from './extensions/indentation';

// Custom Nodes
import { DropdownNode } from './nodes/dropdown-node';

// Components
import { Menu } from './components/menu';
import { Textarea } from '@components/textarea/textarea';

export type EditorProps = {
  content?: string,
  onChange?: (html: string) => void,
  onBlur?: (html: string) => void,
  dropdownItems?: { label: string, value: string }[],
  dropdownPlaceholder?: string,
};

export const Editor: React.FC<EditorProps> = (props) => {
  const [content, setContent] = useState<string>(props.content ?? '');
  const [showEditorInDialog, setShowEditorInDialog] = useState(false);
  const [showRawHtml, setShowRawHtml] = useState(false);

  // List of Tiptap Editor Extensions
  const extensions = [
    StarterKit,
    Link.configure({ openOnClick: true }),
    Image,
    Table.configure({ resizable: true }),
    TableRow,
    TableCell,
    TableHeader,
    TextAlign.configure({ types: ['heading', 'paragraph'], alignments: ['left', 'center', 'right'] }),
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
    DropdownNode.configure({
      dropDownItems: props?.dropdownItems?.map(item => ({ value: item.value, label: item.label })),
      dropdownPlaceholder: props.dropdownPlaceholder || 'Select an option',
    })
  ];


  // Initialize the Tiptap editor with the provided content and extensions
  const editor = useEditor({
    extensions,
    content,
    onUpdate: ({ editor, }) => {
      const html = editor.getHTML();
      setContent(html);
      props.onChange?.(html);
    },
    onBlur: ({ editor, }) => {
      const html = editor.getHTML();
      props.onBlur?.(html);
    },
    editorProps: {
      attributes: {
        class: 'focus:~outline-none',
      },
      handleKeyDown(view, event) {
        const { $from } = view.state.selection;
        const textBefore = $from.parent.textBetween(0, $from.parentOffset, undefined, '\ufffc');
        // Detect "{{" typed
        if (event.key === '{' && textBefore.endsWith('{')) {
          // Remove "{{" (2 chars)
          view.dispatch(
            view.state.tr.delete(
              $from.pos - 2,
              $from.pos
            )
          );
          // Insert dropdown node
          editor
            ?.chain()
            .focus()
            .insertContent({
              type: 'dropdownComponent',
              attrs: {
                dropDownItems: props.dropdownItems,
                dropdownPlaceholder: props.dropdownPlaceholder,
              },
            })
            .run();
          return true;
        }

        // Delete previous line on Escape
        if (event.key === 'Escape') {
          // Find the start of the current block
          const lineStart = $from.before($from.depth);
          // Only proceed if not in the first block
          if (lineStart > 0) {
            let prevLineStart = 0;
            try {
              prevLineStart = view.state.doc.resolve(lineStart).before();
            } catch {
              prevLineStart = 0;
            }
            // Only delete if prevLineStart is valid and before lineStart
            if (prevLineStart >= 0 && prevLineStart < lineStart) {
              view.dispatch(
                view.state.tr.delete(prevLineStart, lineStart)
              );
              return true;
            }
          }
        }
        return false;
      },
    }
  });

  if (!editor) return null;

  return (
    <div className="~relative">
      {/* Menu */}
      <Menu editor={editor} setShowEditorInDialog={setShowEditorInDialog} showEditorInDialog={showEditorInDialog} showRawHtml={showRawHtml}
        toggleRawHtml={() => setShowRawHtml((v) => !v)} />

      {/* Editor */}
      {!showRawHtml ? (
        <EditorContent
          editor={editor}
          className='~prose ~prose-sm sm:~prose-base lg:~prose-lg xl:~prose-2xl [&>div]:~min-h-[20rem] [&>div]:~max-h-[40rem] [&>div]:~overflow-scroll [&>div]:~outline-transparent [&>div]:~border-none ~rounded-bl-lg ~rounded-br-lg ~border-[1px] ~border-solid ~border-gray-300 ~p-2'
        />
      ) : (
        <Textarea value={
          prettier.format(content, {
            parser: 'html',
            plugins: [parserHtml],
          })
        } onChange={(e) => setContent(e.target.value)} className="~w-full ~min-h-[20rem] ~border-gray-300 ~outline-none ~rounded-none ~rounded-bl-lg ~rounded-br-lg">
          {content}
        </Textarea>
      )}

      {/* Debugging Content */}
      {/* <div className='~mt-4'>
        <h3>Editor Content (HTML):</h3>
        <div>{content}</div>
      </div> */}
    </div>
  );
};
