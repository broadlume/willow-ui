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
import { LineHeight } from './extensions/line-height';
import { Indentation } from './extensions/indentation';
import { Textarea } from '@components/textarea/textarea';

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
  LineHeight,
  Indentation,
  DropdownNode.configure({
    dropDownItems: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'grapes', label: 'Grapes' },
    ],
    dropdownPlaceholder: 'Pick a fruit',
  }),
];

export type EditorProps = {
  content?: string,
  onChange?: (html: string) => void,
  onBlur?: (html: string) => void,
};

export const Editor: React.FC<EditorProps> = (props) => {
  const [content, setContent] = useState<string>(props.content ?? '');
  const [showEditorInDialog, setShowEditorInDialog] = useState(false);
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
    },
  });

  if (!editor) return null;

  return (
    <div className="relative">
      {/* Menu */}

      {/* Floating Menu */}
      {/* <BubbleMenu editor={editor} /> */}

      {/* Command Menu */}
      {/* <CommandMenu editor={editor} showCommandMenu={commandMenu} /> */}

      {/* Editor */}
      <Menu editor={editor} setShowEditorInDialog={setShowEditorInDialog} showEditorInDialog={showEditorInDialog} showRawHtml={showRawHtml}
        toggleRawHtml={() => setShowRawHtml((v) => !v)} />

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
