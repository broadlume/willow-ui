import React, { useEffect, useRef, useState } from 'react';
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
import BulletList from '@tiptap/extension-bullet-list';
import CodeBlock from '@tiptap/extension-code-block';
import Placeholder from '@tiptap/extension-placeholder';
// import { NodeViewContent, NodeViewWrapper } from '@tiptap/react';

// Components
import { Menu } from './components/menu';
import { BubbleMenu } from './components/bubble-menu';
import { CommandMenu } from './components/command-menu';
import Underline from '@tiptap/extension-underline';


// List of Tiptap Editor Extensions
const TiptapEditorExtensions = [
  StarterKit,
  Link.configure({ openOnClick: true }),
  Image,
  Table.configure({ resizable: true }),
  TableRow,
  TableCell,
  TableHeader,
  TextAlign.configure({ types: ['heading', 'paragraph'] }),
  Underline,
  Highlight,
  CodeBlock,
  BulletList,
  Placeholder.configure({
    placeholder: 'Write something …',
  }),
];

export type EditorProps = {
  content?: string,
  onChange?: (html: string) => void,
  onBlur?: (html: string) => void,
};

const Editor: React.FC<EditorProps> = (props) => {
  const [content, setContent] = useState<string>(props.content ?? '');
  const [commandMenu, setCommandMenu] = useState(false);

  const editor = useEditor({
    extensions: TiptapEditorExtensions,
    content: content,
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
      handleKeyDown: (_, event) => {
        switch (event.key) {
          case '/':
            setCommandMenu(true);
            break;
          case 'Escape':
          case 'Backspace':
            setCommandMenu(false);
            break;
          default:
            break;
        }
      }
    },
  });

  if (!editor) return null;

  return (
    <div className='~w-full ~max-w-full'>
      {/* Menu */}
      <Menu editor={editor} />

      {/* Floating Menu */}
      <BubbleMenu editor={editor} />

      {/* Command Menu */}
      <CommandMenu editor={editor} showCommandMenu={commandMenu} />

      {/* Editor */}
      <EditorContent
        editor={editor}
        className='~prose ~prose-sm sm:~prose-base lg:~prose-lg xl:~prose-2xl [&>div]:~min-h-[20rem] [&>div]:~max-h-[40rem] [&>div]:~overflow-scroll [&>div]:~outline-transparent ~rounded-bl-lg ~rounded-br-lg ~border-[1px] ~border-solid ~border-gray-300 ~p-2'
      />
      {/* Debugging Content */}
      {/* <div className='~mt-4'>
        <h3>Editor Content (HTML):</h3>
        <div>{content}</div>
      </div> */}
    </div>
  );
};

export { Editor };
