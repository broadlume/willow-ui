import React from 'react';
import { Cross2Icon } from '@radix-ui/react-icons';
import { RiErrorWarningFill } from 'react-icons/ri';
import { GoCheckCircleFill, GoXCircleFill } from 'react-icons/go';

import * as ToastPrimitives from '@radix-ui/react-toast';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@src/lib/utils';

const ToastProvider = ToastPrimitives.Provider;

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      'tw-reset fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
      className
    )}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;

const toastVariants = cva(
  [
    'group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all',
    'data-[state=open]:animate-in data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
    'data-[state=closed]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full',
    'data-[swipe=move]:translate-x-(--radix-toast-swipe-move-x) data-[swipe=move]:transition-none',
    'data-[swipe=cancel]:translate-x-0',
    'data-[swipe=end]:translate-x-(--radix-toast-swipe-end-x) data-[swipe=end]:animate-out',
  ],
  {
    variants: {
      variant: {
        default: 'border bg-surface-pri',
        warning:
          'rounded-lg border border-(--color-yellow-400) [background:linear-gradient(270deg,rgba(255,221,51,0)_45.19%,rgba(255,221,51,0.12)_100%),#fff]',
        success:
          'rounded-lg border border-(--color-green-500) [background:linear-gradient(270deg,rgba(0,237,123,0)_45.19%,rgba(0,237,81,0.12)_100%),#fff]',
        destructive:
          'rounded-lg border border-(--color-red-500) [background:linear-gradient(270deg,rgba(255,85,85,0)_45.19%,rgba(255,85,85,0.12)_100%),#fff]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const iconVariants = (variant: string) => {
  switch (variant) {
    case 'warning':
      return (
        <RiErrorWarningFill
          className={`h-9 w-9 p-1 text-[var(--color-yellow-400)] border-2 rounded-full border-(--color-yellow-400)`}
        />
      );
    case 'success':
      return (
        <GoCheckCircleFill
          className={
            'h-9 w-9 p-1 text-[var(--color-green-500)] border-2 rounded-full border-(--color-green-500)'
          }
        />
      );
    case 'destructive':
      return (
        <GoXCircleFill
          className={
            'h-9 w-9 p-1 text-[var(--color-red-500)] border-2 rounded-full border-(--color-red-500)'
          }
        />
      );
    default:
      return (
        <GoCheckCircleFill
          className={
            'h-9 w-9 p-1 text-text-opt border-2 rounded-full border-text-opt'
          }
        />
      );
  }
};

/** A succinct message that is displayed temporarily. */
const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, children, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    >
      <div className='mr-2 h-9 w-9 bg-white rounded-full'>
        {iconVariants(variant ?? 'default')}
      </div>

      <div className='flex min-w-0 flex-1 flex-col'>{children}</div>
    </ToastPrimitives.Root>
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      'body-small inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 transition-colors',
      'hover:bg-secondary',
      'focus:ring-ring focus:outline-none focus:ring-1',
      'disabled:pointer-events-none disabled:opacity-50',
      'group-[.destructive]:border-muted/40',
      'group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground',
      'group-[.destructive]:focus:ring-destructive',
      className
    )}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitives.Action.displayName;

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      'text-foreground/50 absolute right-1 top-1 rounded-md p-1 opacity-0 transition-opacity',
      'hover:text-foreground group-hover:opacity-100',
      'focus:opacity-100 focus:outline-none focus:ring-1',
      'group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50',
      'group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
      className
    )}
    toast-close=''
    {...props}
  >
    <Cross2Icon className='h-4 w-4' />
  </ToastPrimitives.Close>
));
ToastClose.displayName = ToastPrimitives.Close.displayName;

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn('body-large font-semibold [&+div]:text-sm', className)}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn('text-xs font-normal text-text-opt opacity-90', className)}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>;

type ToastActionElement = React.ReactElement<typeof ToastAction>;

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};
