import { Dialog, DialogContent, DialogTrigger } from '@components/dialog/dialog'
import clsx from 'clsx'

interface DialogMenuItemContentProps {
    title: string | React.ReactNode
    content: string | React.ReactNode
    dialogClassName?: string
}

export const DialogMenuItem = ({ title, content, dialogClassName }: DialogMenuItemContentProps) => {
    return (
        <Dialog>
            <DialogTrigger>{title}</DialogTrigger>
            <DialogContent className={clsx('', dialogClassName)}>
                {content}
            </DialogContent>
        </Dialog>
    )
}