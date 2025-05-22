import React, { useState } from 'react';
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
import Underline from '@tiptap/extension-underline';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import { DropdownComponent } from './components/dropdown-component';

// Custom Extensions
import { Video } from './extensions/video';

// import { NodeViewContent, NodeViewWrapper } from '@tiptap/react';

// Components
import { Menu } from './components/menu';
// import { Dialog, DialogContent, DialogTrigger } from '@components/dialog/dialog';
import { DropdownNode } from './nodes/dropdown-node';
// import { BubbleMenu } from './components/bubble-menu';
// import { CommandMenu } from './components/command-menu';

import prettier from 'prettier/standalone';
import parserHtml from 'prettier/parser-html';


// List of Tiptap Editor Extensions
const TiptapEditorExtensions = [
  StarterKit,
  Link.configure({ openOnClick: true }),
  Image,
  Table.configure({ resizable: true }),
  TableRow,
  TableCell,
  TableHeader,
  TextAlign.configure({ types: ['heading', 'paragraph'], alignments: ['left', 'center', 'right'], }),
  Underline,
  Highlight,
  CodeBlock,
  BulletList,
  ListItem,
  Placeholder.configure({
    placeholder: 'Write something …',
    // Use different placeholders depending on the node type:
    // placeholder: ({ node }) => {
    //   if (node.type.name === 'heading') {
    //     return 'What’s the title?'
    //   }

    //   return 'Can you add some further context?'
    // },
  }),
  Video,
  TextStyle,
  Color,
  DropdownNode,
];

export type EditorProps = {
  content?: string,
  onChange?: (html: string) => void,
  onBlur?: (html: string) => void,
};

export const Editor: React.FC<EditorProps> = (props) => {
  const [content, setContent] = useState<string>(props.content ?? '');
  // const [commandMenu, setCommandMenu] = useState(false);
  const [showEditorInDialog, setShowEditorInDialog] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [items] = useState(['Item1', 'Item2', 'Item3']); // List of items for the dropdown
  const [filteredItems, setFilteredItems] = useState<string[]>([]);
  const [showRawHtml, setShowRawHtml] = useState(false);

  const editor = useEditor({
    extensions: TiptapEditorExtensions,
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
      handleKeyDown: (_, event) => {
        if (event.key === '@') {
          editor
            ?.chain()
            .focus()
            .insertContent({
              type: 'dropdown',
              attrs: { items },
            })
            .run();
        }

        if (event.key === 'Escape') {
          editor?.commands.deleteNode('dropdown'); // Remove dropdown on Escape
        }
      },
    },
  });

  const insertItem = (item: string) => {
    if (!editor) return;

    editor.chain().focus().insertContent(`${item}@@`).run();
    setShowDropdown(false); // Hide dropdown after inserting
  };

  if (!editor) return null;

  const EditorWithMenu = () => {
    return (
      <div>
        <Menu editor={editor} />
        <EditorContent
          editor={editor}
          className='~prose ~prose-sm sm:~prose-base lg:~prose-lg xl:~prose-2xl [&>div]:~min-h-[20rem] [&>div]:~max-h-[40rem] [&>div]:~overflow-scroll [&>div]:~outline-transparent [&>div]:~border-none ~rounded-bl-lg ~rounded-br-lg ~border-[1px] ~border-solid ~border-gray-300 ~p-2'
        />
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Menu */}

      {/* Floating Menu */}
      {/* <BubbleMenu editor={editor} /> */}

      {/* Command Menu */}
      {/* <CommandMenu editor={editor} showCommandMenu={commandMenu} /> */}


      {/* Editor in Dialog */}
      {/* <Dialog open={showEditorInDialog}>
        <DialogContent className='~w-full'>
          <Menu editor={editor} setShowEditorInDialog={setShowEditorInDialog} showEditorInDialog={showEditorInDialog} />
          <EditorContent
            editor={editor}
            className='~prose ~prose-sm sm:~prose-base lg:~prose-lg xl:~prose-2xl [&>div]:~min-h-[20rem] [&>div]:~max-h-[40rem] [&>div]:~overflow-scroll [&>div]:~outline-transparent [&>div]:~border-none ~rounded-bl-lg ~rounded-br-lg ~border-[1px] ~border-solid ~border-gray-300 ~p-2'
          />
        </DialogContent>
      </Dialog> */}

      {/* Editor */}
      <Menu editor={editor} setShowEditorInDialog={setShowEditorInDialog} showEditorInDialog={showEditorInDialog} showRawHtml={showRawHtml}
        toggleRawHtml={() => setShowRawHtml((v) => !v)} />
      {/* <EditorContent
        editor={editor}
        className='~prose ~prose-sm sm:~prose-base lg:~prose-lg xl:~prose-2xl [&>div]:~min-h-[20rem] [&>div]:~max-h-[40rem] [&>div]:~overflow-scroll [&>div]:~outline-transparent [&>div]:~border-none ~rounded-bl-lg ~rounded-br-lg ~border-[1px] ~border-solid ~border-gray-300 ~p-2'
      /> */}

      {!showRawHtml ? (
        <EditorContent
          editor={editor}
          className='~prose ~prose-sm sm:~prose-base lg:~prose-lg xl:~prose-2xl [&>div]:~min-h-[20rem] [&>div]:~max-h-[40rem] [&>div]:~overflow-scroll [&>div]:~outline-transparent [&>div]:~border-none ~rounded-bl-lg ~rounded-br-lg ~border-[1px] ~border-solid ~border-gray-300 ~p-2'
        />
      ) : (
        <div className="~p-4 ~bg-gray-100 ~border ~rounded-bl-lg ~rounded-br-lg ~border-gray-300 ~font-mono ~text-sm ~overflow-auto ~min-h-[20rem]">
          <pre>
            {prettier.format(content, {
              parser: 'html',
              plugins: [parserHtml],
            })}
          </pre>
        </div>
      )}
      {showDropdown && (
        <ul
          className="absolute bg-white border border-gray-300 rounded-md shadow-md z-10"
          style={{ top: dropdownPosition.top, left: dropdownPosition.left }}
        >
          {filteredItems.map((item) => (
            <li
              key={item}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => insertItem(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
      {/* Debugging Content */}
      {/* <div className='~mt-4'>
        <h3>Editor Content (HTML):</h3>
        <div>{content}</div>
      </div> */}
    </div>
  );
};
