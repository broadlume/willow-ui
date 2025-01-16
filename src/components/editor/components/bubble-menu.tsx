import { Editor, BubbleMenu as TipTapBubbleMenu } from '@tiptap/react'

// Icons
import { FaParagraph, FaBold, FaItalic } from "react-icons/fa";
import { BsTypeH1, BsTypeH2 } from "react-icons/bs";

import { MenuLink } from './menu-link';

interface BubbleMenuProps {
    editor: Editor
}

export const BubbleMenu = ({ editor }: BubbleMenuProps) => {
    return (
        <TipTapBubbleMenu
            editor={editor}
            className='~flex ~gap-4 ~rounded-md ~border ~border-gray-300 ~bg-white ~p-2 ~shadow-lg'
            tippyOptions={{
                placement: 'top', // Place above the selected text
                duration: 150, // Animation duration
            }}
        >
            <MenuLink title={<FaParagraph size={16} />} eventHandler={() => editor.chain().focus().setParagraph().run()} />
            <MenuLink title={<BsTypeH1 size={16} />} eventHandler={() => editor.chain().focus().setHeading({ level: 1 }).run} />
            <MenuLink title={<BsTypeH2 size={16} />} eventHandler={() => editor.chain().focus().setHeading({ level: 2 }).run} />
            <MenuLink title={<FaBold size={16} />} eventHandler={() => editor.chain().focus().toggleBold().run()} />
            <MenuLink title={<FaItalic size={16} />} eventHandler={() => editor.chain().focus().toggleItalic().run()} />
        </TipTapBubbleMenu>
    )
}
