import { Editor } from "@tiptap/react";

// Icons
import { MdFormatListBulleted, MdFormatColorText, MdFormatUnderlined, MdFormatItalic, MdFormatBold, MdStrikethroughS, MdFormatAlignLeft, MdFormatAlignRight, MdFormatAlignCenter, MdOutlineMoreVert } from "react-icons/md";
import { IoExpandOutline } from "react-icons/io5";
import { LuRedo2, LuUndo2 } from "react-icons/lu";
import { ReactComponent as AIIcon } from './ai-icon.svg'

import { MenuLink } from "./menu-link"
import { SelectionTypeMenuItemContent } from "./selection-menu-item";
import { PopoverMenuItemContent } from "./popover-menu-item";

interface MenuProps {
  editor: Editor
}
export const Menu = ({
  editor
}: MenuProps) => {

  const TextStyleitems = [
    { value: 'normal', label: 'Normal' },
    { value: 'h1', label: 'Heading 1', className: '~text-2xl' },
    { value: 'h2', label: 'Heading 2', className: '~text-xl' },
    { value: 'h3', label: 'Heading 3', className: '~text-lg' },
    { value: 'h4', label: 'Heading 4', className: '~text-base' },
    { value: 'h5', label: 'Heading 5', className: '~text-sm' },
    { value: 'h6', label: 'Heading 6', className: '~text-xs' }
  ]

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

  return (
    <div className='~flex ~gap-4 ~py-2.5 ~px-4 ~rounded-tl-lg ~rounded-tr-lg ~border-[1px] ~border-b-0 ~border-solid ~border-gray-300 ~text-lg'>
      <MenuLink title={
       <PopoverMenuItemContent title={
        <div className="~flex ~gap-1 ~items-center">
          <AIIcon />
          <span className="~text-[#A52F76]">Ai</span>
        </div>
        } />
      } eventHandler={() => editor.chain().undo().run()} />
      <MenuItemDivider />
      <MenuLink 
        title={
          <SelectionTypeMenuItemContent 
            items={TextStyleitems}
            onSelection={TextStyleOnSelection}
            key={1}
          />
        }
        eventHandler={() => {}}
      />
      <MenuItemDivider />
      <MenuLink title={<MdFormatBold size={28} />} eventHandler={() => editor.chain().focus().toggleBold().run()} />
      <MenuLink title={<MdFormatItalic size={28} />} eventHandler={() => editor.chain().focus().toggleItalic().run()} />
      <MenuLink title={<MdFormatUnderlined size={28} />} eventHandler={() => editor.chain().focus().toggleUnderline().run()} />
      <MenuLink title={<MdStrikethroughS size={28} />} eventHandler={() => editor.chain().focus().toggleStrike().run()} />
      <MenuLink title={<MdFormatColorText size={28} />} eventHandler={() => editor.chain().focus().setHeading({ level: 2 }).run()} />
      <MenuItemDivider />
      <MenuLink title={<MdFormatAlignLeft size={24} />} eventHandler={() => editor.chain().focus().toggleBulletList().run()} />
      <MenuLink title={<MdFormatAlignCenter size={24} />} eventHandler={() => editor.chain().focus().toggleBulletList().run()} />
      <MenuLink title={<MdFormatAlignRight size={24} />} eventHandler={() => editor.chain().focus().toggleBulletList().run()} />
      <MenuItemDivider />
      <MenuLink title={<MdFormatListBulleted size={24} />} eventHandler={() => editor.chain().focus().toggleBulletList().run()} />
      <MenuItemDivider />
      <MenuLink title={<LuUndo2 size={24} />} eventHandler={() => editor.chain().undo().run()} />
      <MenuLink title={<LuRedo2 size={24} />} eventHandler={() => editor.chain().redo().run()} />
      <MenuItemDivider />
      <MenuLink title={<IoExpandOutline size={24} />} eventHandler={() => editor.chain().focus().toggleBulletList().run()} />
      <MenuLink className="~ml-4" title={<MdOutlineMoreVert size={28} />} eventHandler={() => editor.chain().focus().toggleBulletList().run()} />
    </div>
  )
}

const MenuItemDivider = () => <div className='~border-[0.5px] ~border-solid ~border-gray-300' />;
