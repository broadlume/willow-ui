import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@components/dialog/dialog';
import clsx from 'clsx';
import { useState } from 'react';

interface DialogMenuItemContentProps {
  title: string | React.ReactNode;
  content: (props: { closeDialog: () => void }) => React.ReactNode;
  dialogClassName?: string;
}

export const DialogMenuItem = ({
  title,
  content,
  dialogClassName,
}: DialogMenuItemContentProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger tabIndex={-1} onClick={() => setIsOpen(true)}>
        {title}
      </DialogTrigger>
      <DialogContent
        overlayProps={{
          onClick: closeDialog,
        }}
        showCloseIcon={true}
        overlayClassName='bg-stone-900/50 backdrop-blur-none'
        className={clsx(
          'top-[60px] -translate-x-1/2 translate-y-0 gap-0 !p-0 !rounded-[20px] bg-slate-100/95 shadow-[0px_0px_34px_0px_rgba(0,0,0,0.10)] backdrop-blur-[10px] inline-block !w-1/2 !max-w-1/2',
          dialogClassName
        )}
        onClose={closeDialog}
      >
        <div className='p-6 w-full h-full'>{content({ closeDialog })}</div>
      </DialogContent>
    </Dialog>
  );
};
