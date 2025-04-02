import { Dialog, DialogContent, DialogTrigger } from '@components/dialog/dialog';
import clsx from 'clsx';
import { useState } from 'react';

interface DialogMenuItemContentProps {
    title: string | React.ReactNode;
    content: (props: { closeDialog: () => void }) => React.ReactNode;
    dialogClassName?: string;
}

export const DialogMenuItem = ({ title, content, dialogClassName }: DialogMenuItemContentProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const closeDialog = () => {
        setIsOpen(false);
    };

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger onClick={() => setIsOpen(true)}>{title}</DialogTrigger>
            <DialogContent className={clsx('', dialogClassName)}>
                {content({ closeDialog })}
            </DialogContent>
        </Dialog>
    );
};