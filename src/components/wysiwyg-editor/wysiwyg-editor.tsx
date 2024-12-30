import React, { ReactNode, useState } from 'react';
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
import { FaBold, FaItalic, FaHighlighter, FaRegFileCode } from "react-icons/fa6";
import { MdFormatListBulleted, MdOutlineUndo, MdOutlineRedo, MdInsertLink, MdLinkOff, MdFlag, MdOutlineBatteryUnknown } from "react-icons/md";
import { BsTypeH1, BsTypeH2, BsTable } from "react-icons/bs";
import { AiOutlinePicture } from "react-icons/ai";
import { RiOmega } from "react-icons/ri";



const MenuLink = ({ title, eventHandler }: { title: string | ReactNode, eventHandler: () => void }) => {
  return (
    <a className='~no-underline ~text-black ~font-bold' href='javascript:void(0);' onClick={eventHandler}>{title}</a>
  )
}

const WYSIWYGEditor: React.FC = () => {
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
    <div className='~mx-auto ~mt-10 ~w-full ~max-w-3xl ~rounded-lg ~border-solid ~border-gray-300 ~bg-white'>
      {/* Toolbar */}
      <div className='~py-1.5 ~px-4 ~flex ~gap-4 ~rounded-lg ~border-gray-300 ~bg-[#F5F7FA]'>
        <MenuLink title={<MdOutlineUndo size={16} />} eventHandler={() => editor.chain().undo().run()} />
        <MenuLink title={<MdOutlineRedo size={16} />} eventHandler={() => editor.chain().redo().run()} />
        <span>|</span>
        <MenuLink title={<MdInsertLink size={16} />} eventHandler={() => editor.chain().focus().setLink({
          href: 'https://tiptap.dev',
          class: 'link',
          target: '_blank',
        }).run()} />
        <MenuLink title={<MdLinkOff size={16} />} eventHandler={() => editor.chain().focus().unsetLink().run()} />
        <MenuLink title={<MdFlag size={16} />} eventHandler={() => editor.chain().focus().toggleBold().run()} />
        <span>|</span>
        <MenuLink title={<AiOutlinePicture size={16} />} eventHandler={() => editor.chain().focus().toggleBold().run()} />
        <MenuLink title={<BsTable size={16} />} eventHandler={() => editor.chain().focus().toggleBold().run()} />
        <MenuLink title={<MdOutlineBatteryUnknown size={16} />} eventHandler={() => editor.chain().focus().toggleBold().run()} />
        <MenuLink title={<RiOmega size={16} />} eventHandler={() => editor.chain().focus().toggleBold().run()} />
        <span>|</span>
        <MenuLink title={<MdOutlineBatteryUnknown size={16} />} eventHandler={() => editor.chain().focus().toggleBold().run()} />
        <span>|</span>
        <MenuLink title={<div className='~flex ~gap-1 ~items-center'>
          <FaRegFileCode size={16} />
          <span className='~text-xs ~font-thin'>Source</span>
        </div>} eventHandler={() => editor.chain().focus().toggleBold().run()} />
        <span>|</span>
        <MenuLink title={<FaBold size={16} />} eventHandler={() => editor.chain().focus().toggleBold().run()} />
        <MenuLink title={<FaItalic size={16} />} eventHandler={() => editor.chain().focus().toggleItalic().run()} />
        <MenuLink title={<FaHighlighter size={16} />} eventHandler={() => editor.chain().focus().toggleHighlight().run()} />
        <MenuLink title={<BsTypeH1 size={16} />} eventHandler={() => editor.chain().focus().setHeading({ level: 1 }).run()} />
        <MenuLink title={<BsTypeH2 size={16} />} eventHandler={() => editor.chain().focus().setHeading({ level: 2 }).run()} />
        <MenuLink title={<MdFormatListBulleted size={16} />} eventHandler={() => editor.chain().focus().toggleBulletList().run()} />
      </div>

      <FloatingMenu
        editor={editor}
        className='~flex ~gap-2 ~rounded-md ~border ~border-gray-300 ~bg-[#F5F7FA] ~p-2 ~shadow-lg'
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
        className='~prose ~prose-sm ~sm:prose ~lg:prose-lg ~xl:prose-xl ~focus:outline-none ~px-16 ~py-16 ~h-24'
      />

      {/* Command Menu */}
      {commandMenu && (
        <div className='p-2 ~absolute ~rounded ~border ~border-gray-300 ~bg-gray-400 ~shadow-lg'>
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

      {/* Debugging Content
      <div className='~mt-4'>
        <h3>Editor Content (HTML):</h3>
        <div>{content}</div>
      </div> */}
    </div>
  );
};

export { WYSIWYGEditor };
