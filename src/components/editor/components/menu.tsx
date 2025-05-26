import { useState } from "react";
import { Editor } from "@tiptap/react";
import clsx from "clsx";

// Icons
import { MdFormatListBulleted, MdFormatColorText, MdFormatUnderlined, MdFormatItalic, MdFormatBold, MdStrikethroughS, MdFormatAlignLeft, MdFormatAlignRight, MdFormatAlignCenter, MdOutlineMoreVert, MdFormatIndentDecrease, MdFormatIndentIncrease } from "react-icons/md";
import { IoExpandOutline, IoImageOutline, IoVideocamOutline } from "react-icons/io5";
import { LuRedo2, LuUndo2 } from "react-icons/lu";
import { TbLineHeight } from "react-icons/tb";
import { FaTextSlash, FaLink, FaCode } from "react-icons/fa6";
import { AiOutlineTable } from "react-icons/ai";
import { ReactComponent as AIIcon } from './ai-icon.svg'

// Components
import { ColorPickerInput } from "@components/color-picker-input/color-picker-input";
import AIContent from "../components/AIContent";
import { MenuLink } from "./menu-link"
import { SelectionTypeMenuItemContent } from "./selection-menu-item";
import { DialogMenuItem } from "./dialog-menu-item";
import { PopoverMenuItemContent } from "./popover-menu-item";
import { Button } from "@components/button";
import { Input } from "@components/input/input";

interface MenuProps {
  editor: Editor
  showEditorInDialog?: boolean
  setShowEditorInDialog?: (show: boolean) => void
  showRawHtml?: boolean
  toggleRawHtml?: () => void
}

type L2MenuType = 'table' | 'video' | 'embed' | 'link' | 'image';

const TextStyleItems = [
  { value: 'normal', label: 'Normal' },
  { value: 'h1', label: 'Heading 1', className: '~text-2xl' },
  { value: 'h2', label: 'Heading 2', className: '~text-xl' },
  { value: 'h3', label: 'Heading 3', className: '~text-lg' },
  { value: 'h4', label: 'Heading 4', className: '~text-base' },
  { value: 'h5', label: 'Heading 5', className: '~text-sm' },
  { value: 'h6', label: 'Heading 6', className: '~text-xs' }
]

const AIButton = () => {
  return (
    <div className="~flex ~gap-1 ~items-center">
      <AIIcon />
      <span className="~text-[#A52F76] ~text-lg">Ai</span>
    </div>
  )
}

export const Menu = ({ editor, showEditorInDialog, setShowEditorInDialog, toggleRawHtml }: MenuProps) => {
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
  }

  const getCurrentIndentLevel = () => editor?.getAttributes('paragraph').indent || 0;

  const setL2MenuType = (type: L2MenuType) => {
    if (expandedMenuL2Type === type && expandedMenuL2) {
      setExpandedMenuL2(false);
    } else {
      setExpandedMenuL2(true);
    }
    setExpandedMenuL2Type(type);
  }

  const getL3Menu = () => {
    switch (expandedMenuL2Type) {
      case 'table':
        return (
          <>
            <Input type="text" placeholder="Create Table" className="~border-[1px] ~border-solid ~border-gray-300 ~rounded-md ~p-2" />
            <Button variant="default" className="~rounded-3xl ~px-8" onClick={() => {

              editor
                ?.chain()
                .focus()
                .insertContent({
                  type: 'dropdown',
                  attrs: { items: ['Item1', 'Item2', 'Item3'] },
                })
                .run();
            }}>
              Submit
            </Button>
            <Button variant="secondary" className="~rounded-3xl ~shadow-sm ~border-[1px] ~border-[#000] ~px-8" onClick={() => {
              setExpandedMenuL2(false);
            }}>
              Cancel
            </Button>
          </>
        )
      case 'link':
        return (
          <>
            <Input type="url" placeholder="https://" value={l2Link} className="~border-[1px] ~border-solid ~border-gray-300 ~rounded-md ~p-2" onChange={e => setL2Link(e.target.value)} />
            <Button variant="default" className="~rounded-3xl ~px-8" onClick={() => {
              editor.chain().focus().extendMarkRange('link').setLink({ href: l2Link! })
                .run();
              setExpandedMenuL2(false);
            }}>
              Submit
            </Button>
            <Button variant="secondary" className="~rounded-3xl ~shadow-sm ~border-[1px] ~border-[#000] ~px-8" onClick={() => {
              editor.chain().focus().extendMarkRange('link').unsetLink()
                .run();
              setL2Link('');
              setExpandedMenuL2(false);
            }}>
              Cancel
            </Button>
          </>
        )
      case 'embed':
        return (
          <>
            <Input type="url" placeholder="https://" value={l2EmbedLink} className="~border-[1px] ~border-solid ~border-gray-300 ~rounded-md ~p-2" onChange={e => setL2EmbedLink(e.target.value)} />
            <Button variant="default" className="~rounded-3xl ~px-8" onClick={() => {
              editor.chain().focus().setVideo(l2EmbedLink!).run();
              setExpandedMenuL2(false);
            }}>
              Submit
            </Button>
            <Button variant="secondary" className="~rounded-3xl ~shadow-sm ~border-[1px] ~border-[#000] ~px-8" onClick={() => {
              setL2EmbedLink('');
              setExpandedMenuL2(false);
            }}>
              Cancel
            </Button>
          </>
        )
      case 'image':
        return (
          <>
            <Input type="url" placeholder="https://" value={l2Image} className="~border-[1px] ~border-solid ~border-gray-300 ~rounded-md ~p-2" onChange={e => setL2Image(e.target.value)} />
            <Button variant="default" className="~rounded-3xl ~px-8" onClick={() => {
              editor.commands.setImage({ src: l2Image! })
              setExpandedMenuL2(false);
            }}>
              Submit
            </Button>
            <Button variant="secondary" className="~rounded-3xl ~shadow-sm ~border-[1px] ~border-[#000] ~px-8" onClick={() => {
              setL2EmbedLink('');
              setExpandedMenuL2(false);
            }}>
              Cancel
            </Button>
          </>
        )

      default:
        break;
    }
  }

  return (
    <div >
      <div className={
        clsx('~flex ~flex-wrap ~p-[0.625em_1em_0.625em_1em] ~rounded-tl-lg ~rounded-tr-lg ~border-[1px] ~border-b-0 ~border-solid ~border-gray-300 ~text-lg ~max-w-full')
      }>
        <div className="~flex ~w-full ~justify-between ~items-center">
          <div className={clsx('~flex ~gap-4')}>
            <MenuLink title={
              <DialogMenuItem title={<AIButton />} dialogClassName="~p-2 !~max-w-5xl !~h-5/6" content={({ closeDialog }) => <AIContent editor={editor} closeDialog={closeDialog} />} />
            } eventHandler={() => { }} />
            <MenuItemDivider />
            <MenuLink
              title={
                <SelectionTypeMenuItemContent
                  items={TextStyleItems}
                  onSelection={TextStyleOnSelection}
                  key={1}
                />
              }
              eventHandler={() => { }}
            />
            <MenuItemDivider />
            <MenuLink title={<MdFormatBold size={28} />} eventHandler={() => editor.chain().focus().toggleBold().run()} />
            <MenuLink title={<MdFormatItalic size={28} />} eventHandler={() => editor.chain().focus().toggleItalic().run()} />
            <MenuLink title={<MdFormatUnderlined size={28} />} eventHandler={() => editor.chain().focus().toggleUnderline().run()} />
            <MenuLink title={<MdStrikethroughS size={28} />} eventHandler={() => editor.chain().focus().toggleStrike().run()} />
            <MenuLink title={
              <PopoverMenuItemContent title={<MdFormatColorText size={28} />} content={
                <ColorPickerInput color={fontColor} name="color-picker-demo" setColor={(color) => {
                  setFontColor(color);
                  editor.chain().focus().setColor(color).run();
                }} key='editor-font-color-picker' />
              } />
            } eventHandler={() => { }} />
            <MenuItemDivider />
            <MenuLink title={<MdFormatAlignLeft size={24} />} eventHandler={() => editor.chain().focus().setTextAlign('left').run()} />
            <MenuLink title={<MdFormatAlignCenter size={24} />} eventHandler={() => editor.chain().focus().setTextAlign('center').run()} />
            <MenuLink title={<MdFormatAlignRight size={24} />} eventHandler={() => editor.chain().focus().setTextAlign('right').run()} />
            <MenuItemDivider />
            <MenuLink title={<MdFormatListBulleted size={24} />} eventHandler={() => editor.chain().focus().toggleBulletList().run()} />
            <MenuItemDivider />
            <MenuLink title={<LuUndo2 size={24} />} eventHandler={() => editor.chain().undo().run()} />
            <MenuLink title={<LuRedo2 size={24} />} eventHandler={() => editor.chain().redo().run()} />
            <MenuItemDivider />
            {
              setShowEditorInDialog && <MenuLink title={<IoExpandOutline size={24} />} eventHandler={() => setShowEditorInDialog(!showEditorInDialog)} />
            }
          </div>

          <MenuLink title={<MdOutlineMoreVert size={28} />} eventHandler={() => {
            setExpandedMenu(!expandedMenu);
            setExpandedMenuL2(false);
          }} />
        </div>

      </div>
      {/* Expanded Menu */}
      <div className={
        clsx('~p-3 ~gap-5 ~justify-end ~w-full ~bg-[#F3F3F3] ~border-l-[1px] ~border-r-[1px] ~border-solid ~border-gray-300 ~hidden', {
          '!~flex': expandedMenu,
        })
      }>
        <MenuLink title={
          <PopoverMenuItemContent title={<TbLineHeight size={24} />} content={
            <SelectionTypeMenuItemContent
              items={[
                { value: '1.0', label: '1.0' },
                { value: '1.5', label: '1.5' },
                { value: '2.0', label: '2.0' },
                { value: '2.5', label: '2.5' },
                { value: '3.0', label: '3.0' },
              ]}
              onSelection={(value) => editor.chain().focus().setLineHeight(value).run()} />
          } />
        } eventHandler={() => { }} />
        <MenuLink title={<MdFormatIndentDecrease size={24} />} eventHandler={() => editor?.chain().focus().setIndentation(Math.max(getCurrentIndentLevel() - 1, 0)).run()} />
        <MenuLink title={<MdFormatIndentIncrease size={24} />} eventHandler={() => editor?.chain().focus().setIndentation(getCurrentIndentLevel() + 1).run()} />
        <MenuLink title={<FaTextSlash size={24} />} eventHandler={() => editor.chain().focus().clearNodes().unsetAllMarks().run()} />
        <MenuItemDivider />
        <MenuLink title={<FaLink size={24} />} eventHandler={() => setL2MenuType('link')} />
        <MenuLink title={<FaCode size={24} />} eventHandler={() => toggleRawHtml && toggleRawHtml()} />
        <MenuLink title={<IoImageOutline size={24} />} eventHandler={() => setL2MenuType('image')} />
        <MenuLink title={<IoVideocamOutline size={24} />} eventHandler={() => setL2MenuType('embed')} />
        <MenuItemDivider />
        <MenuLink title={<AiOutlineTable size={24} />} eventHandler={() => setL2MenuType('table')} />
      </div>
      {/* Expanded Menu */}
      {/* Expanded Menu L2*/}
      <div className={
        clsx('~p-3 ~gap-2 ~justify-end ~w-full ~bg-[#F3F3F3] ~border-t-white ~border-t-2  ~border-l-[1px] ~border-r-[1px] ~border-solid ~border-gray-300 ~hidden', {
          '!~flex': expandedMenuL2,
        })
      }>
        {
          getL3Menu()
        }
      </div>
      {/* Expanded Menu L2*/}
    </div>
  )
}

const MenuItemDivider = () => <div className='~border-[0.5px] ~border-solid ~border-gray-300 ~h-6' />;