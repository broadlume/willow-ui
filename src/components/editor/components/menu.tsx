import { useState } from 'react';
import isURL from 'validator/lib/isURL';
import { Editor } from '@tiptap/react';
import clsx from 'clsx';

// Icons
import {
  MdFormatListBulleted,
  MdFormatColorText,
  MdFormatUnderlined,
  MdFormatItalic,
  MdFormatBold,
  MdStrikethroughS,
  MdFormatAlignLeft,
  MdFormatAlignRight,
  MdFormatAlignCenter,
  MdOutlineMoreVert,
  MdFormatIndentDecrease,
  MdFormatIndentIncrease,
} from 'react-icons/md';
import {
  IoExpandOutline,
  IoImageOutline,
  IoVideocamOutline,
} from 'react-icons/io5';
import { LuRedo2, LuUndo2 } from 'react-icons/lu';
import { TbLineHeight } from 'react-icons/tb';
import { FaTextSlash, FaLink, FaCode } from 'react-icons/fa6';
import { AiOutlineTable } from 'react-icons/ai';
import { FiSun, FiMoon } from 'react-icons/fi';
import AIIcon from './ai-icon.svg';

// Components
import { ColorPickerInput } from '@components/color-picker-input/color-picker-input';
import { Button } from '@components/button';
import { Input } from '@components/input/input';

import AIContent from './ai-content';
import { MenuLink } from './menu-link';
import { SelectionTypeMenuItemContent } from './selection-menu-item';
import { DialogMenuItem } from './dialog-menu-item';
import { PopoverMenuItemContent } from './popover-menu-item';

interface MenuProps {
  editor: Editor;
  showEditorInDialog?: boolean;
  setShowEditorInDialog?: (show: boolean) => void;
  showRawHtml?: boolean;
  toggleRawHtml?: () => void;
  darkMode?: boolean;
  toggleDarkMode?: () => void;
  className?: string;
}

type L2MenuType = 'video' | 'embed' | 'link' | 'image';

const TextStyleItems = [
  { value: 'normal', label: 'Normal' },
  { value: 'h1', label: 'Heading 1', className: '~text-2xl' },
  { value: 'h2', label: 'Heading 2', className: '~text-xl' },
  { value: 'h3', label: 'Heading 3', className: '~text-lg' },
  { value: 'h4', label: 'Heading 4', className: '~text-base' },
  { value: 'h5', label: 'Heading 5', className: '~text-sm' },
  { value: 'h6', label: 'Heading 6', className: '~text-xs' },
];

const AIButton = () => {
  return (
    <div className='~flex ~items-center ~gap-1'>
      <AIIcon />
      <span className='~text-lg ~font-normal ~text-[#6038E8]'>Ai</span>
    </div>
  );
};

/**
 * Renders the main editor menu with formatting, alignment, list, undo/redo, and advanced options.
 *
 * @param editor - The Tiptap editor instance used to control document editing.
 * @param showEditorInDialog - Boolean indicating if the editor is currently displayed in a dialog.
 * @param setShowEditorInDialog - Function to toggle the editor's dialog display state.
 * @param toggleRawHtml - Optional function to toggle raw HTML editing mode.
 *
 * The menu provides:
 * - Text style selection (headings, paragraph)
 * - Formatting options (bold, italic, underline, strikethrough, color)
 * - Alignment controls (left, center, right)
 * - List toggling (bulleted)
 * - Undo/redo actions
 * - Indentation controls
 * - Clear formatting
 * - Insertion of links, images, videos, tables
 * - Access to AI content generation
 * - Expand/collapse advanced menu sections
 *
 * Advanced options are shown in expandable menus, with contextual submenus for inserting links, images, embeds, and tables.
 */
export const Menu = ({
  editor,
  showEditorInDialog,
  setShowEditorInDialog,
  toggleRawHtml,
  className,
  darkMode,
  toggleDarkMode,
}: MenuProps) => {
  const [expandedMenu, setExpandedMenu] = useState(false);
  const [expandedMenuL2, setExpandedMenuL2] = useState(false);
  const [expandedMenuL2Type, setExpandedMenuL2Type] = useState<L2MenuType>();
  const [fontColor, setFontColor] = useState('#000000');
  const [l2Link, setL2Link] = useState<string>();
  const [l2EmbedLink, setL2EmbedLink] = useState<string>();
  const [l2Image, setL2Image] = useState<string>();

  const TextStyleOnSelection = (value: string) => {
    switch (value) {
      case 'normal':
        editor.chain().focus().setParagraph().run();
        break;
      case 'h1':
        editor.chain().focus().setHeading({ level: 1 }).run();
        break;
      case 'h2':
        editor.chain().focus().setHeading({ level: 2 }).run();
        break;
      case 'h3':
        editor.chain().focus().setHeading({ level: 3 }).run();
        break;
      case 'h4':
        editor.chain().focus().setHeading({ level: 4 }).run();
        break;
      case 'h5':
        editor.chain().focus().setHeading({ level: 5 }).run();
        break;
      case 'h6':
        editor.chain().focus().setHeading({ level: 6 }).run();
        break;
      default:
        break;
    }
  };

  const getCurrentIndentLevel = () =>
    editor?.getAttributes('paragraph').indent || 0;

  const setL2MenuType = (type: L2MenuType) => {
    if (expandedMenuL2Type === type && expandedMenuL2) {
      setExpandedMenuL2(false);
    } else {
      setExpandedMenuL2(true);
    }
    setExpandedMenuL2Type(type);
  };

  const getL3Menu = () => {
    switch (expandedMenuL2Type) {
      case 'link':
        return (
          <>
            <Input
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                }
              }}
              type='url'
              placeholder='https://'
              value={l2Link}
              className='~rounded-md ~border-[1px] ~border-solid ~border-gray-300 ~p-2'
              onChange={(e) => setL2Link(e.target.value)}
            />
            <Button
              type='button'
              variant='default'
              className='~rounded-3xl ~px-8'
              disabled={!l2Link || !isURL(l2Link, { require_protocol: true })}
              onClick={() => {
                if (l2Link && isURL(l2Link, { require_protocol: true })) {
                  editor
                    .chain()
                    .focus()
                    .extendMarkRange('link')
                    .setLink({ href: l2Link })
                    .run();
                  setL2Link('');
                  setExpandedMenuL2(false);
                }
              }}
            >
              Submit
            </Button>
            <Button
              type='button'
              variant='secondary'
              className='~rounded-3xl ~border-[1px] ~border-[#000] ~px-8 ~shadow-sm'
              onClick={() => {
                editor
                  .chain()
                  .focus()
                  .extendMarkRange('link')
                  .unsetLink()
                  .run();
                setL2Link('');
                setExpandedMenuL2(false);
              }}
            >
              Cancel
            </Button>
          </>
        );
      case 'embed':
        return (
          <>
            <Input
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                }
              }}
              type='url'
              placeholder='https://'
              value={l2EmbedLink}
              className='~rounded-md ~border-[1px] ~border-solid ~border-gray-300 ~p-2'
              onChange={(e) => setL2EmbedLink(e.target.value)}
            />
            <Button
              type='button'
              variant='default'
              className='~rounded-3xl ~px-8'
              disabled={
                !l2EmbedLink || !isURL(l2EmbedLink, { require_protocol: true })
              }
              onClick={() => {
                if (
                  l2EmbedLink &&
                  isURL(l2EmbedLink, { require_protocol: true })
                ) {
                  editor.chain().focus().setVideo(l2EmbedLink).run();
                  setL2EmbedLink('');
                  setExpandedMenuL2(false);
                }
              }}
            >
              Submit
            </Button>
            <Button
              type='button'
              variant='secondary'
              className='~rounded-3xl ~border-[1px] ~border-[#000] ~px-8 ~shadow-sm'
              onClick={() => {
                setL2EmbedLink('');
                setExpandedMenuL2(false);
              }}
            >
              Cancel
            </Button>
          </>
        );
      case 'image':
        return (
          <>
            <Input
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                }
              }}
              type='url'
              placeholder='https://'
              value={l2Image}
              className='~rounded-md ~border-[1px] ~border-solid ~border-gray-300 ~p-2'
              onChange={(e) => setL2Image(e.target.value)}
            />
            <Button
              type='button'
              variant='default'
              className='~rounded-3xl ~px-8'
              disabled={!l2Image || !isURL(l2Image, { require_protocol: true })}
              onClick={() => {
                if (l2Image && isURL(l2Image, { require_protocol: true })) {
                  editor.commands.setImage({ src: l2Image });
                  setL2Image('');
                  setExpandedMenuL2(false);
                }
              }}
            >
              Submit
            </Button>
            <Button
              type='button'
              variant='secondary'
              className='~rounded-3xl ~border-[1px] ~border-[#000] ~px-8 ~shadow-sm'
              onClick={() => {
                setL2Image('');
                setExpandedMenuL2(false);
              }}
            >
              Cancel
            </Button>
          </>
        );

      default:
        break;
    }
  };

  return (
    <div>
      <div
        className={clsx(
          '~flex ~w-full ~flex-wrap ~rounded-tl-lg ~rounded-tr-lg ~border-[1px] ~border-b-0 ~border-solid ~border-gray-300 ~p-[0.625em_1em_0.625em_1em] ~text-lg',
          className
        )}
      >
        <div className='~flex ~w-full ~items-center ~justify-between'>
          <div className={clsx('~flex ~flex-wrap ~gap-4')}>
            <MenuLink
              title={
                <DialogMenuItem
                  title={<AIButton />}
                  dialogClassName='~p-2 !~max-w-5xl !~h-5/6'
                  content={({ closeDialog }) => (
                    <AIContent editor={editor} closeDialog={closeDialog} />
                  )}
                />
              }
              eventHandler={() => {}}
            />
            <MenuItemDivider />
            <MenuLink
              title={
                <SelectionTypeMenuItemContent
                  items={TextStyleItems}
                  onSelection={TextStyleOnSelection}
                  key={1}
                />
              }
              eventHandler={() => {}}
            />
            <MenuItemDivider />
            <MenuLink
              title={
                <MdFormatBold
                  className={clsx('~text-black', {
                    '~text-white': darkMode,
                  })}
                  size={18}
                />
              }
              eventHandler={() => editor.chain().focus().toggleBold().run()}
            />
            <MenuLink
              title={
                <MdFormatItalic
                  className={clsx('~text-black', {
                    '~text-white': darkMode,
                  })}
                  size={18}
                />
              }
              eventHandler={() => editor.chain().focus().toggleItalic().run()}
            />
            <MenuLink
              title={
                <MdFormatUnderlined
                  className={clsx('~text-black', {
                    '~text-white': darkMode,
                  })}
                  size={18}
                />
              }
              eventHandler={() =>
                editor.chain().focus().toggleUnderline().run()
              }
            />
            <MenuLink
              title={
                <MdStrikethroughS
                  className={clsx('~text-black', {
                    '~text-white': darkMode,
                  })}
                  size={18}
                />
              }
              eventHandler={() => editor.chain().focus().toggleStrike().run()}
            />
            <MenuLink
              title={
                <PopoverMenuItemContent
                  title={
                    <MdFormatColorText
                      className={clsx('~text-black', {
                        '~text-white': darkMode,
                      })}
                      size={18}
                    />
                  }
                  content={
                    <ColorPickerInput
                      color={fontColor}
                      name='color-picker-demo'
                      setColor={(color) => {
                        setFontColor(color);
                        editor.chain().focus().setColor(color).run();
                      }}
                      key='editor-font-color-picker'
                    />
                  }
                />
              }
              eventHandler={() => {}}
            />
            <MenuItemDivider />
            <MenuLink
              title={
                <MdFormatAlignLeft
                  className={clsx('~text-black', {
                    '~text-white': darkMode,
                  })}
                  size={18}
                />
              }
              eventHandler={() =>
                editor.chain().focus().setTextAlign('left').run()
              }
            />
            <MenuLink
              title={
                <MdFormatAlignCenter
                  className={clsx('~text-black', {
                    '~text-white': darkMode,
                  })}
                  size={18}
                />
              }
              eventHandler={() =>
                editor.chain().focus().setTextAlign('center').run()
              }
            />
            <MenuLink
              title={
                <MdFormatAlignRight
                  className={clsx('~text-black', {
                    '~text-white': darkMode,
                  })}
                  size={18}
                />
              }
              eventHandler={() =>
                editor.chain().focus().setTextAlign('right').run()
              }
            />
            <MenuItemDivider />
            <MenuLink
              title={
                <MdFormatListBulleted
                  className={clsx('~text-black', {
                    '~text-white': darkMode,
                  })}
                  size={18}
                />
              }
              eventHandler={() =>
                editor.chain().focus().toggleBulletList().run()
              }
            />
            <MenuItemDivider />
            <MenuLink
              title={
                <LuUndo2
                  className={clsx('~text-black', {
                    '~text-white': darkMode,
                  })}
                  size={18}
                />
              }
              eventHandler={() => editor.chain().undo().run()}
            />
            <MenuLink
              title={
                <LuRedo2
                  className={clsx('~text-black', {
                    '~text-white': darkMode,
                  })}
                  size={18}
                />
              }
              eventHandler={() => editor.chain().redo().run()}
            />
            <MenuItemDivider />
            {setShowEditorInDialog && (
              <MenuLink
                title={
                  <IoExpandOutline
                    className={clsx('~text-black', {
                      '~text-white': darkMode,
                    })}
                    size={18}
                  />
                }
                eventHandler={() => setShowEditorInDialog(!showEditorInDialog)}
              />
            )}
          </div>
          <div className='~flex ~items-center ~gap-2'>
            <MenuLink
              title={
                darkMode ? (
                  <FiSun
                    className={clsx('~text-black', {
                      '~text-white': darkMode,
                    })}
                  />
                ) : (
                  <FiMoon
                    className={clsx('~text-black', {
                      '~text-white': darkMode,
                    })}
                  />
                )
              }
              eventHandler={() => toggleDarkMode && toggleDarkMode()}
            />
            <MenuLink
              className=''
              title={
                <MdOutlineMoreVert
                  className={clsx('~text-black', {
                    '~text-white': darkMode,
                  })}
                  size={18}
                />
              }
              eventHandler={() => {
                setExpandedMenu(!expandedMenu);
                setExpandedMenuL2(false);
              }}
            />
          </div>
        </div>
      </div>
      {/* Expanded Menu */}
      <div
        className={clsx(
          '~hidden ~w-full ~justify-end ~gap-5 ~border-l-[1px] ~border-r-[1px] ~border-solid ~border-gray-300 ~bg-[#F3F3F3] ~p-3',
          {
            '!~flex': expandedMenu,
            '~bg-gray-100': !darkMode,
            '~text-gray-800': !darkMode,
            '~bg-gray-900 ~text-gray-200': darkMode,
          }
        )}
      >
        <MenuLink
          title={
            <PopoverMenuItemContent
              title={
                <TbLineHeight
                  className={clsx('~text-black', {
                    '~text-white': darkMode,
                  })}
                  size={18}
                />
              }
              content={
                <SelectionTypeMenuItemContent
                  items={[
                    { value: '1.0', label: '1.0' },
                    { value: '1.5', label: '1.5' },
                    { value: '2.0', label: '2.0' },
                    { value: '2.5', label: '2.5' },
                    { value: '3.0', label: '3.0' },
                  ]}
                  onSelection={(value) =>
                    editor.chain().focus().setLineHeight(value).run()
                  }
                />
              }
            />
          }
          eventHandler={() => {}}
        />
        <MenuLink
          title={
            <MdFormatIndentDecrease
              className={clsx('~text-black', {
                '~text-white': darkMode,
              })}
              size={18}
            />
          }
          eventHandler={() =>
            editor
              ?.chain()
              .focus()
              .setIndentation(Math.max(getCurrentIndentLevel() - 1, 0))
              .run()
          }
        />
        <MenuLink
          title={
            <MdFormatIndentIncrease
              className={clsx('~text-black', {
                '~text-white': darkMode,
              })}
              size={18}
            />
          }
          eventHandler={() =>
            editor
              ?.chain()
              .focus()
              .setIndentation(getCurrentIndentLevel() + 1)
              .run()
          }
        />
        <MenuLink
          title={
            <FaTextSlash
              className={clsx('~text-black', {
                '~text-white': darkMode,
              })}
              size={18}
            />
          }
          eventHandler={() =>
            editor.chain().focus().clearNodes().unsetAllMarks().run()
          }
        />
        <MenuItemDivider />
        <MenuLink
          title={
            <FaLink
              className={clsx('~text-black', {
                '~text-white': darkMode,
              })}
              size={18}
            />
          }
          eventHandler={() => setL2MenuType('link')}
        />
        <MenuLink
          title={
            <FaCode
              className={clsx('~text-black', {
                '~text-white': darkMode,
              })}
              size={18}
            />
          }
          eventHandler={() => toggleRawHtml && toggleRawHtml()}
        />
        <MenuLink
          title={
            <IoImageOutline
              className={clsx('~text-black', {
                '~text-white': darkMode,
              })}
              size={18}
            />
          }
          eventHandler={() => setL2MenuType('image')}
        />
        <MenuLink
          title={
            <IoVideocamOutline
              className={clsx('~text-black', {
                '~text-white': darkMode,
              })}
              size={18}
            />
          }
          eventHandler={() => setL2MenuType('embed')}
        />
        <MenuItemDivider />
        <MenuLink
          title={
            <AiOutlineTable
              className={clsx('~text-black', {
                '~text-white': darkMode,
              })}
              size={18}
            />
          }
          eventHandler={() =>
            editor
              .chain()
              .focus()
              .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
              .run()
          }
        />
      </div>
      {/* Expanded Menu */}
      {/* Expanded Menu L2*/}
      <div
        className={clsx(
          '~hidden ~w-full ~justify-end ~gap-2 ~border-l-[1px] ~border-r-[1px] ~border-t-2  ~border-solid ~border-gray-300 ~border-t-white ~bg-[#F3F3F3] ~p-3',
          {
            '!~flex': expandedMenuL2,
            '~bg-gray-100': !darkMode,
            '~text-gray-800': !darkMode,
            '~bg-gray-900 ~text-gray-200': darkMode,
          }
        )}
      >
        {getL3Menu()}
      </div>
      {/* Expanded Menu L2*/}
    </div>
  );
};

const MenuItemDivider = () => (
  <div className='~h-6 ~border-[0.5px] ~border-solid ~border-gray-300' />
);
