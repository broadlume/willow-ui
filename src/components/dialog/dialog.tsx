import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cn } from '@src/lib/utils';
import { HiMiniXCircle } from 'react-icons/hi2';

/** A window overlaid on either the primary window or another dialog window, rendering the content underneath inert. */
const Dialog = DialogPrimitive.Root;

const DialogTrigger = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Trigger
    ref={ref}
    className={cn('tw-reset', className)}
    {...props}
  />
));

const DialogPortal = DialogPrimitive.Portal;
DialogPortal.displayName = DialogPrimitive.Portal.displayName;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-(rgba(28,27,25,0.5)) backdrop-blur-none',
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    onClose?: () => void;
    overlayProps?: Parameters<typeof DialogOverlay>[0];
    overlayClassName?: string;
    showCloseIcon?: boolean;
    closeButtonClassName?: string;
  }
>(
  (
    {
      className,
      overlayClassName,
      overlayProps,
      children,
      showCloseIcon = true,
      closeButtonClassName,
      onClose = () => null,
      ...props
    },
    ref
  ) => (
    <DialogPortal>
      <DialogOverlay className={overlayClassName} {...overlayProps} />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          'tw-reset fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-surface-pri p-6 shadow-lg duration-200 sm:rounded-lg md:w-full',
          'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-top-1/2',
          'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:slide-out-to-top-1/2',
          className
        )}
        {...props}
      >
        {children}
        {showCloseIcon && (
          <DialogPrimitive.Close
            className={cn(
              'absolute right-3 top-3 rounded-xs opacity-70 transition-opacity hover:opacity-100 disabled:pointer-events-none',
              'ring-offset-background focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2',
              'data-[state=open]:bg-accent data-[state=open]:text-muted-foreground cursor-pointer',
              closeButtonClassName
            )}
            onClick={onClose}
          >
            <HiMiniXCircle className='h-5 w-5 text-icon-pri' />
            <span className='sr-only'>Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
);
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col space-y-1.5 text-center sm:text-left text-text-pri text-2xl font-semibold',
      className
    )}
    {...props}
  />
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col-reverse gap-3', className)} {...props} />
);
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = DialogPrimitive.Title;
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-muted-foreground', className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
