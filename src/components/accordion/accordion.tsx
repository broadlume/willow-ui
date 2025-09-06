import React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

import { cn } from '@src/lib/utils';
import { ChevronDown } from '@src/index';
import { AccordionHeader } from '@radix-ui/react-accordion';

type AccordionVariant = 'borderless' | 'bordered' | 'separated';

/** A vertically stacked set of interactive headings that each reveal a section of content. */
const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & {
    variant?: AccordionVariant;
  }
>(({ className, variant = 'borderless', ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    className={cn(
      'tw-reset bg-white',
      variant === 'bordered' && 'border border-b rounded-lg shadow-sm overflow-hidden',
      variant === 'separated' && [
        'space-y-4',
        'rounded-lg',
      ],
      className
    )}
    {...props}
  />
));
Accordion.displayName = 'Accordion';

/** Accordion Item */
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & {
    variant?: AccordionVariant;
  }
>(({ className, variant = 'borderless', ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      variant === 'borderless' && 'border-b',
      variant === 'separated' &&
        'border rounded-lg overflow-hidden',
      variant === 'bordered' &&
        'border-b last:border-b-0 first:rounded-t-lg last:rounded-b-lg overflow-hidden',
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = 'AccordionItem';

/** Accordion Trigger (header) */
const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
    caretOnly?: boolean;
    caretAlign?: 'left' | 'right';
    caretClasses?: string;
    noCaret?: boolean;
    headerClassName?: string; // ✅ allow overriding header wrapper
  }
>(
  (
    {
      className,
      headerClassName,
      children,
      caretOnly,
      caretAlign = 'right',
      caretClasses,
      noCaret = false,
      ...props
    },
    ref
  ) => (
    <AccordionPrimitive.Header
      className={cn('flex w-full', headerClassName)} // ✅ headerClassName override
    >
      {caretOnly ? (
        <div
          className={cn(
            'body-medium flex flex-1 items-center p-4 font-normal leading-none gap-3',
            className
          )}
        >
          {!noCaret && (
            <AccordionPrimitive.Trigger
              ref={ref}
              className={cn(
                '[&[data-state=open]>svg]:rotate-180',
                caretAlign === 'left' &&
                  '-rotate-90 [&[data-state=open]>svg]:rotate-90'
              )}
              {...props}
            >
              <ChevronDown
                className={cn(
                  'h-4 w-4 shrink-0 text-primary transition-transform duration-200',
                  caretClasses,
                  caretAlign === 'right' ? 'order-last ml-auto' : 'order-first'
                )}
              />
            </AccordionPrimitive.Trigger>
          )}
          {children}
        </div>
      ) : (
        <AccordionPrimitive.Trigger
          ref={ref}
          className={cn(
            'body-medium flex flex-1 items-center p-4 font-normal leading-none transition-all hover:underline [&[data-state=open]>svg]:rotate-180 gap-3',
            'bg-gray-50 hover:bg-gray-100',
            'data-[state=open]:bg-gray-100',
            className
          )}
          {...props}
        >
          {caretAlign === 'left' && !noCaret && (
            <ChevronDown
              className={cn(
                'h-4 w-4 shrink-0 text-primary transition-transform duration-200',
                caretClasses
              )}
            />
          )}

          <span className="flex-1 text-left">{children}</span>

          {caretAlign === 'right' && !noCaret && (
            <ChevronDown
              className={cn(
                'h-4 w-4 shrink-0 text-primary transition-transform duration-200',
                caretClasses
              )}
            />
          )}
        </AccordionPrimitive.Trigger>
      )}
    </AccordionPrimitive.Header>
  )
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

/** Accordion Content */
const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      'overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
      'bg-white'
    )}
    {...props}
  >
    <div className={cn('p-4 border-t bg-white last:rounded-b-lg', className)}>
      {children}
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
};
