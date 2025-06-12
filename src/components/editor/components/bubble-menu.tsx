import { Editor, BubbleMenu as TipTapBubbleMenu } from '@tiptap/react'
import clsx from 'clsx';

// Icons
import { FaBold, FaItalic, FaLink } from "react-icons/fa";

import { MenuLink } from './menu-link';
import { MdFormatUnderlined, MdStrikethroughS } from 'react-icons/md';

interface BubbleMenuProps {
    editor: Editor
    darkMode?: boolean
}

export const BubbleMenu = ({ editor, darkMode }: BubbleMenuProps) => {
    return (
        <TipTapBubbleMenu
            editor={editor}
            className={clsx(
                '~rounded-md ~border ~border-gray-300 ~bg-white ~p-2 ~shadow-lg'
            )}
            tippyOptions={{
                placement: 'bottom',
                duration: 150,
                // to prevent the editor from losing focus, which solves the dialog closing issue.
                // onHide: () => {
                //     return false
                // },
            }}
        >
            <div
                onMouseDown={e => e.preventDefault()}
                className="~flex ~gap-4"
            >
                <MenuLink title={<FaBold className={
                    clsx('~text-black', {
                        '~text-white': darkMode
                    })
                } size={14} />} eventHandler={() => editor.chain().focus().toggleBold().run()} />
                <MenuLink title={<FaItalic className={
                    clsx('~text-black', {
                        '~text-white': darkMode
                    })
                } size={14} />} eventHandler={() => editor.chain().focus().toggleItalic().run()} />
                <MenuLink title={<MdFormatUnderlined className={
                    clsx('~text-black', {
                        '~text-white': darkMode
                    })
                } size={16} />} eventHandler={() => editor.chain().focus().toggleUnderline().run()} />
                <MenuLink title={<MdStrikethroughS className={
                    clsx('~text-black', {
                        '~text-white': darkMode
                    })
                } size={16} />} eventHandler={() => editor.chain().focus().toggleStrike().run()} />
                <MenuLink title={<FaLink className={
                    clsx('~text-black', {
                        '~text-white': darkMode
                    })
                } size={14} />} eventHandler={() => editor.chain().focus().toggleStrike().run()} />
            </div>

        </TipTapBubbleMenu>
    )
}
