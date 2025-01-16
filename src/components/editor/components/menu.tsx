import { Editor } from "@tiptap/react"

// Icons
import { FaBold, FaItalic, FaHighlighter, FaRegFileCode } from "react-icons/fa6";
import { MdFormatListBulleted, MdOutlineUndo, MdOutlineRedo, MdInsertLink, MdLinkOff, MdFlag, MdOutlineBatteryUnknown } from "react-icons/md";
import { BsTypeH1, BsTypeH2, BsTable } from "react-icons/bs";
import { AiOutlinePicture } from "react-icons/ai";
import { RiOmega } from "react-icons/ri";

import { MenuLink } from "./menu-link"

interface MenuProps {
  editor: Editor
}

export const Menu = ({
  editor
}: MenuProps) => {

  return (
    <div className='~py-1.5 ~px-4 ~flex ~gap-4 ~rounded-tl-lg ~rounded-tr-lg ~border-2 ~border-b-0 ~border-solid ~border-gray-300 ~bg-[#F5F7FA]'>
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
  )
}
