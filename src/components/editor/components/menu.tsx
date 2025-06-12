import React, { useState, ReactNode } from "react";
import { Editor } from "@tiptap/react";
import clsx from "clsx";
import isURL from 'validator/lib/isURL';

// Icons
import { MdFormatListBulleted, MdFormatColorText, MdFormatUnderlined, MdFormatItalic, MdFormatBold, MdStrikethroughS, MdFormatAlignLeft, MdFormatAlignRight, MdFormatAlignCenter, MdOutlineMoreVert, MdFormatIndentDecrease, MdFormatIndentIncrease } from "react-icons/md";
import { IoExpandOutline, IoImageOutline, IoVideocamOutline } from "react-icons/io5";
import { LuRedo2, LuUndo2 } from "react-icons/lu";
import { TbLineHeight } from "react-icons/tb";
import { FaTextSlash, FaLink, FaCode } from "react-icons/fa6";
import { AiOutlineTable } from "react-icons/ai";
import { FiSun, FiMoon } from 'react-icons/fi';
import { ReactComponent as AIIcon } from './ai-icon.svg';

// Components
import { ColorPickerInput } from "@components/color-picker-input/color-picker-input";
import { Button } from "@components/button";
import { Input } from "@components/input/input";

import AIContent from "./ai-content";
import { MenuLink } from "./menu-link";
import { SelectionTypeMenuItemContent } from "./selection-menu-item";
import { DialogMenuItem } from "./dialog-menu-item";
import { PopoverMenuItemContent } from "./popover-menu-item";


interface MenuProps {
  editor: Editor
  showEditorInDialog?: boolean
  setShowEditorInDialog?: (show: boolean) => void
  showRawHtml?: boolean
  toggleRawHtml?: () => void
  darkMode?: boolean;
  toggleDarkMode?: () => void;
  className?: string;
}

type L2MenuType = 'video' | 'embed' | 'link' | 'image';

type MenuItem = {
  type: 'item' | 'divider';
  content?: ReactNode;
  action?: () => void;
  isActive?: () => boolean;
  shouldShow?: boolean;
  className?: string;
};

const TextStyleItems = [
  { value: 'normal', label: 'Normal' },
  { value: 'h1', label: 'Heading 1', className: '~text-2xl' },
  { value: 'h2', label: 'Heading 2', className: '~text-xl' },
  { value: 'h3', label: 'Heading 3', className: '~text-lg' },
  { value: 'h4', label: 'Heading 4', className: '~text-base' },
  { value: 'h5', label: 'Heading 5', className: '~text-sm' },
  { value: 'h6', label: 'Heading 6', className: '~text-xs' }
]

const AIButton = () => (
  <div className="~flex ~gap-1 ~items-center">
    <AIIcon />
    <span className="~text-[#6038E8] ~text-lg ~font-normal">Ai</span>
  </div>
);

export const Menu = ({ editor, showEditorInDialog, setShowEditorInDialog, toggleRawHtml, className, darkMode, toggleDarkMode }: MenuProps) => {
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

  const getCurrentIndentLevel = () => editor?.getAttributes('paragraph').indent || 0;

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
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                }
              }}
              type="url"
              placeholder="https://"
              value={l2Link}
              className="~border-[1px] ~border-solid ~border-gray-300 ~rounded-md ~p-2"
              onChange={e => setL2Link(e.target.value)}
            />
            <Button
              type="button"
              variant="default"
              className="~rounded-3xl ~px-8"
              disabled={!l2Link || !isURL(l2Link, { require_protocol: true })}
              onClick={() => {
                if (l2Link && isURL(l2Link, { require_protocol: true })) {
                  editor.chain().focus().extendMarkRange('link').setLink({ href: l2Link }).run();
                  setL2Link('');
                  setExpandedMenuL2(false);
                }
              }}
            >
              Submit
            </Button>
            <Button
              type="button"
              variant="secondary"
              className="~rounded-3xl ~shadow-sm ~border-[1px] ~border-[#000] ~px-8"
              onClick={() => {
                editor.chain().focus().extendMarkRange('link').unsetLink().run();
                setL2Link('');
                setExpandedMenuL2(false);
              }}
            >
              Cancel
            </Button>
          </>
        )
      case 'embed':
        return (
          <>
            <Input
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                }
              }}
              type="url"
              placeholder="https://"
              value={l2EmbedLink}
              className="~border-[1px] ~border-solid ~border-gray-300 ~rounded-md ~p-2"
              onChange={e => setL2EmbedLink(e.target.value)}
            />
            <Button
              type="button"
              variant="default"
              className="~rounded-3xl ~px-8"
              disabled={!l2EmbedLink || !isURL(l2EmbedLink, { require_protocol: true })}
              onClick={() => {
                if (l2EmbedLink && isURL(l2EmbedLink, { require_protocol: true })) {
                  editor.chain().focus().setIframe({
                    src: l2EmbedLink
                  }).run();
                  setL2EmbedLink('');
                  setExpandedMenuL2(false);
                }
              }}
            >
              Submit
            </Button>
            <Button
              type="button"
              variant="secondary"
              className="~rounded-3xl ~shadow-sm ~border-[1px] ~border-[#000] ~px-8"
              onClick={() => {
                setL2EmbedLink('');
                setExpandedMenuL2(false);
              }}
            >
              Cancel
            </Button>
          </>
        )
      case 'image':
        return (
          <>
            <Input
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                }
              }}
              type="url"
              placeholder="https://"
              value={l2Image}
              className="~border-[1px] ~border-solid ~border-gray-300 ~rounded-md ~p-2"
              onChange={e => setL2Image(e.target.value)}
            />
            <Button
              type="button"
              variant="default"
              className="~rounded-3xl ~px-8"
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
              type="button"
              variant="secondary"
              className="~rounded-3xl ~shadow-sm ~border-[1px] ~border-[#000] ~px-8"
              onClick={() => {
                setL2Image('');
                setExpandedMenuL2(false);
              }}
            >
              Cancel
            </Button>
          </>
        )

      default:
        break;
    }
  };

  const mainMenuItems: MenuItem[] = [
    {
      type: 'item',
      content: <DialogMenuItem title={<AIButton />} dialogClassName="~p-2 !~max-w-5xl !~h-5/6" content={({ closeDialog }) => <AIContent editor={editor} closeDialog={closeDialog} />} />,
    },
    { type: 'divider' },
    {
      type: 'item',
      content: <SelectionTypeMenuItemContent items={TextStyleItems} onSelection={TextStyleOnSelection} key={1} />,
    },
    { type: 'divider' },
    { type: 'item', content: <MdFormatBold size={18} />, action: () => editor.chain().focus().toggleBold().run(), isActive: () => editor.isActive('bold') },
    { type: 'item', content: <MdFormatItalic size={18} />, action: () => editor.chain().focus().toggleItalic().run(), isActive: () => editor.isActive('italic') },
    { type: 'item', content: <MdFormatUnderlined size={18} />, action: () => editor.chain().focus().toggleUnderline().run(), isActive: () => editor.isActive('underline') },
    { type: 'item', content: <MdStrikethroughS size={18} />, action: () => editor.chain().focus().toggleStrike().run(), isActive: () => editor.isActive('strike') },
    {
      type: 'item',
      content: <PopoverMenuItemContent title={<MdFormatColorText size={18} />} content={<ColorPickerInput color={fontColor} name="color-picker-demo" setColor={(color) => { setFontColor(color); editor.chain().focus().setColor(color).run(); }} key='editor-font-color-picker' />} />,
    },
    { type: 'divider' },
    { type: 'item', content: <MdFormatAlignLeft size={18} />, action: () => editor.chain().focus().setTextAlign('left').run(), isActive: () => editor.isActive({ textAlign: 'left' }) },
    { type: 'item', content: <MdFormatAlignCenter size={18} />, action: () => editor.chain().focus().setTextAlign('center').run(), isActive: () => editor.isActive({ textAlign: 'center' }) },
    { type: 'item', content: <MdFormatAlignRight size={18} />, action: () => editor.chain().focus().setTextAlign('right').run(), isActive: () => editor.isActive({ textAlign: 'right' }) },
    { type: 'divider' },
    { type: 'item', content: <MdFormatListBulleted size={18} />, action: () => editor.chain().focus().toggleBulletList().run(), isActive: () => editor.isActive('bulletList') },
    { type: 'divider' },
    { type: 'item', content: <LuUndo2 size={18} />, action: () => editor.chain().undo().run() },
    { type: 'item', content: <LuRedo2 size={18} />, action: () => editor.chain().redo().run() },
    { type: 'divider' },
    { type: 'item', content: <IoExpandOutline size={18} />, action: () => setShowEditorInDialog && setShowEditorInDialog(!showEditorInDialog), shouldShow: !!setShowEditorInDialog },
  ];

  const advancedMenuItems: MenuItem[] = [
    {
      type: 'item',
      content: <PopoverMenuItemContent title={<TbLineHeight size={18} />} content={<SelectionTypeMenuItemContent items={[{ value: '1.0', label: '1.0' }, { value: '1.5', label: '1.5' }, { value: '2.0', label: '2.0' }, { value: '2.5', label: '2.5' }, { value: '3.0', label: '3.0' }]} onSelection={(value) => editor.chain().focus().setLineHeight(value).run()} />} />,
    },
    { type: 'item', content: <MdFormatIndentDecrease size={18} />, action: () => editor?.chain().focus().setIndentation(Math.max(getCurrentIndentLevel() - 1, 0)).run() },
    { type: 'item', content: <MdFormatIndentIncrease size={18} />, action: () => editor?.chain().focus().setIndentation(getCurrentIndentLevel() + 1).run() },
    { type: 'item', content: <FaTextSlash size={18} />, action: () => editor.chain().focus().clearNodes().unsetAllMarks().run() },
    { type: 'divider' },
    { type: 'item', content: <FaLink size={18} />, action: () => setL2MenuType('link') },
    { type: 'item', content: <FaCode size={18} />, action: () => toggleRawHtml && toggleRawHtml() },
    { type: 'item', content: <IoImageOutline size={18} />, action: () => setL2MenuType('image') },
    { type: 'item', content: <IoVideocamOutline size={18} />, action: () => setL2MenuType('embed') },
    { type: 'divider' },
    { type: 'item', content: <AiOutlineTable size={18} />, action: () => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run() },
  ];

  // Helper function to render a menu item, adding dark mode styles
  const renderMenuItem = (item: MenuItem, index: number) => {
    // Handle conditional rendering
    if (item.shouldShow === false) return null;

    if (item.type === 'divider') {
      return <MenuItemDivider key={`divider-${index}`} />;
    }

    // Add dark mode styling to icons if they are simple TSX elements
    let styledContent = item.content;
    if (React.isValidElement(item.content) && typeof item.content.type !== 'string') {
      styledContent = React.cloneElement(item.content as React.ReactElement<any>, {
        className: clsx(
          (item.content as React.ReactElement<any>).props.className,
          '~text-black',
          { '~text-white': darkMode },
        )
      });
    }

    return (
      <MenuLink
        key={index}
        title={styledContent}
        eventHandler={item.action!}
        // isActive={item.isActive?.()}
      />
    );
  };

  return (
    <div>
      <div className={clsx('~flex ~flex-wrap ~p-[0.625em_1em_0.625em_1em] ~rounded-tl-lg ~rounded-tr-lg ~border-[1px] ~border-b-0 ~border-solid ~border-gray-300 ~text-lg ~w-full', className)}>
        <div className="~w-full ~flex ~justify-between ~items-center">
          <div className={clsx('~flex ~gap-4 ~flex-wrap')}>
            {mainMenuItems.map(renderMenuItem)}
          </div>
          <div className="~flex ~gap-2 ~items-center">
            <MenuLink title={darkMode ? <FiSun /> : <FiMoon />} eventHandler={() => toggleDarkMode && toggleDarkMode()} />
            <MenuLink className="" title={<MdOutlineMoreVert size={18} />} eventHandler={() => { setExpandedMenu(!expandedMenu); setExpandedMenuL2(false); }} />
          </div>
        </div>
      </div>

      {/* Expanded Menu */}
      <div className={clsx('~p-3 ~gap-5 ~justify-end ~flex-wrap ~w-full ~bg-[#F3F3F3] ~border-l-[1px] ~border-r-[1px] ~border-solid ~border-gray-300 ~hidden', { '!~flex': expandedMenu, '~bg-gray-100': !darkMode, '~text-gray-800': !darkMode, '~bg-gray-900 ~text-gray-200': darkMode, })}>
        {advancedMenuItems.map(renderMenuItem)}
      </div>

      {/* Expanded Menu L2 */}
      {expandedMenuL2 && (
        <div className={clsx('~p-3 ~gap-2 ~justify-end ~w-full ~bg-[#F3F3F3] ~border-t-white ~border-t-2 ~border-l-[1px] ~border-r-[1px] ~border-solid ~border-gray-300 ~flex', { '~bg-gray-100': !darkMode, '~text-gray-800': !darkMode, '~bg-gray-900 ~text-gray-200': darkMode, })}>
          {getL3Menu()}
        </div>
      )}
    </div>
  )
}

const MenuItemDivider = () => <div className='~border-[0.5px] ~border-solid ~border-gray-300 ~h-6' />;
