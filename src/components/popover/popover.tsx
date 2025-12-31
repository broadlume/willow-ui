import React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { cn } from '@src/lib/utils';

/** Displays rich content in a portal, triggered by a button. */
const Popover = PopoverPrimitive.Root;

const PopoverTrigger = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <PopoverPrimitive.Trigger
    ref={ref}
    className={cn('tw-reset', className)}
    {...props}
  />
));

export interface PopoverContentProps extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {
  container?: Element | null;
}

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  PopoverContentProps
>(
  (
    {
      className,
      align = 'start',
      sideOffset = 4,
      collisionPadding = 10,
      container,
      ...props
    },
    ref
  ) => {
    // Try to find a dialog overlay to render into, fallback to default
    const dialogOverlay = typeof window !== 'undefined' ? document.querySelector('.dialog-overlay, [role="dialog"]') : null;
    return (
      <PopoverPrimitive.Portal container={container || dialogOverlay || undefined}>
        <PopoverPrimitive.Content
          ref={ref}
          align={align}
          sideOffset={sideOffset}
          collisionPadding={collisionPadding}
          className={cn(
            'tw-reset z-50 overflow-auto rounded-md border bg-surface-pri p-4  shadow-md outline-none',
            'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
            'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
            'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
            className
          )}
          {...props}
        />
      </PopoverPrimitive.Portal>
    );
  }
);
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent };
