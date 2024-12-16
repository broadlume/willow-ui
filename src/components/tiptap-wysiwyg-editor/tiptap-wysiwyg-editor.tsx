import React, { useState } from 'react';
import { EditorContent, useEditor, FloatingMenu } from '@tiptap/react';
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
import { Button } from '@components/button';

const TiptapEditor: React.FC = () => {
  const [content, setContent] = useState('<p>Type / to insert blocks...</p>');
  const [commandMenu, setCommandMenu] = useState(false);

  const editor = useEditor({
    extensions: [
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
    ],
    content: content,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
    editorProps: {
      handleKeyDown: (view, event) => {
        if (event.key === '/') {
          setCommandMenu(true);
        }
        if (event.key === 'Escape') {
          setCommandMenu(false);
        }
      },
    },
  });

  if (!editor) return null;

  return (
    <div className='~mx-auto ~mt-10 ~w-full ~max-w-3xl ~rounded-lg ~border ~border-gray-300 ~bg-white ~p-6 ~shadow-sm'>
      {/* Toolbar */}
      <div className='~mb-4 ~flex ~gap-2'>
        <Button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().toggleBold()}
        >
          Bold
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().toggleItalic()}
        >
          Italic
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          disabled={!editor.can().toggleHighlight()}
        >
          Highlight
        </Button>
        <Button
          onClick={() => editor.chain().focus().setHeading({ level: 1 }).run()}
        >
          H1
        </Button>
        <Button
          onClick={() => editor.chain().focus().setHeading({ level: 2 }).run()}
        >
          H2
        </Button>
        <Button onClick={() => editor.chain().focus().toggleBulletList().run()}>
          Bullet List
        </Button>
      </div>

      <FloatingMenu
        editor={editor}
        className='~flex ~gap-2 ~rounded-md ~border ~border-gray-300 ~bg-white ~p-2 ~shadow-lg'
        tippyOptions={{
          placement: 'top', // Place above the selected text
          duration: 150, // Animation duration
        }}
      >
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className='~hover:bg-gray-100 ~rounded ~px-3 ~py-1 ~text-sm ~font-medium'
        >
          Paragraph
        </button>
        <button
          onClick={() => editor.chain().focus().setHeading({ level: 1 }).run()}
          className='~hover:bg-gray-100 ~rounded ~px-3 ~py-1 ~text-sm ~font-medium'
        >
          H1
        </button>
        <button
          onClick={() => editor.chain().focus().setHeading({ level: 2 }).run()}
          className='~hover:bg-gray-100 ~rounded ~px-3 ~py-1 ~text-sm ~font-medium'
        >
          H2
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className='~hover:bg-gray-100 ~rounded ~px-3 ~py-1 ~text-sm ~font-medium'
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className='~hover:bg-gray-100 ~rounded ~px-3 ~py-1 ~text-sm ~font-medium'
        >
          Italic
        </button>
      </FloatingMenu>

      {/* Editor */}
      <EditorContent
        editor={editor}
        className='~prose ~prose-sm ~sm:prose ~lg:prose-lg ~xl:prose-xl ~focus:outline-none'
      />

      {/* Command Menu */}
      {commandMenu && (
        <div className='p-2 ~absolute ~rounded ~border ~border-gray-300 ~bg-white ~shadow-lg'>
          <Button onClick={() => editor.chain().focus().setParagraph().run()}>
            Paragraph
          </Button>
          <Button
            onClick={() =>
              editor.chain().focus().setHeading({ level: 1 }).run()
            }
          >
            H1
          </Button>
          <Button
            onClick={() =>
              editor.chain().focus().setHeading({ level: 2 }).run()
            }
          >
            H2
          </Button>
          <Button
            onClick={() =>
              editor.chain().focus().setHeading({ level: 3 }).run()
            }
          >
            H3
          </Button>
          <Button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
          >
            Bullet List
          </Button>
        </div>
      )}

      {/* Debugging Content */}
      <div className='~mt-4'>
        <h3>Editor Content (HTML):</h3>
        <div>{content}</div>
      </div>
    </div>
  );
};

export { TiptapEditor };
