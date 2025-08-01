import { Button } from '@components/button';
import { Editor } from '@tiptap/react'

interface CommandMenuProps {
    editor: Editor,
    showCommandMenu: boolean
}
export const CommandMenu = ({
    editor,
    showCommandMenu
}: CommandMenuProps) => {

    return (
        <>
            {showCommandMenu && (
                <div className='p-2 absolute rounded-sm border border-gray-300 bg-gray-400 shadow-lg'>
                    <Button onClick={editor.chain().focus().setParagraph().run}>
                        Paragraph
                    </Button>
                    <Button
                        onClick={editor.chain().focus().setHeading({ level: 1 }).run}
                    >
                        H1
                    </Button>
                    <Button
                        onClick={editor.chain().focus().setHeading({ level: 2 }).run}
                    >
                        H2
                    </Button>
                    <Button
                        onClick={editor.chain().focus().setHeading({ level: 3 }).run}
                    >
                        H3
                    </Button>
                    <Button
                        onClick={editor.chain().focus().toggleBulletList().run}
                    >
                        Bullet List
                    </Button>
                </div>
            )}
        </>
    )
}