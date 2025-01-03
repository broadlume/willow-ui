import React, { useEffect, useState } from 'react';
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
  Highlight,
  CodeBlock,
  BulletList,
  Placeholder.configure({
    placeholder: 'Start typing...',
  }),
]

const Editor: React.FC = () => {
  const [content, setContent] = useState<string>();
  const [commandMenu, setCommandMenu] = useState(false);

  const editor = useEditor({
    extensions: TiptapEditorExtensions,
    content: content,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
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
    <div className='~w-full ~max-w-full ~h-[50vh] ~rounded-lg ~border-solid ~border-gray-300 ~bg-white'>
      {/* Menu */}
      <Menu editor={editor} />

      {/* Floating Menu */}
      <BubbleMenu editor={editor} />

      {/* Command Menu */}
      <CommandMenu editor={editor} showCommandMenu={commandMenu} />

      {/* Editor */}
      <EditorContent
        editor={editor}
        className='~prose ~prose-sm sm:~prose-base lg:~prose-lg xl:~prose-2xl ~m-5 focus-visible:~outline-none'
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
