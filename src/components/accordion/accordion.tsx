import React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

import { cn } from '@src/lib/utils';
import { ChevronDown } from '@src/index';

/** A vertically stacked set of interactive headings that each reveal a section of content. */
const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    className={cn('tw-reset', className)}
    {...props}
  />
));

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('~border-b', className)}
    {...props}
  />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
    /** Whether the accordion trigger is the whole header, or only the caret. */
    caretOnly?: boolean;
    /** Whether the caret appears at the left of the header, or the right. */
    caretAlign?: 'left' | 'right';
    /** Additional classes to apply to the caret. */
    caretClasses?: string;
  }
>(
  (
    {
      className,
      children,
      caretOnly,
      caretAlign = 'right',
      caretClasses,
      ...props
    },
    ref
  ) => (
    <AccordionPrimitive.Header className='~flex'>
      {caretOnly ? (
        <div
          className={cn(
            'body-medium ~flex ~flex-1 ~items-center ~justify-between ~py-4 ~font-normal ~leading-none',
            caretAlign === 'left' ? '~justify-normal ~gap-3' : '',
            className
          )}
        >
          {/* render children before or after trigger to preserve tab order */}
          {caretAlign === 'right' && children}
          <AccordionPrimitive.Trigger
            ref={ref}
            className={cn(
              '[&[data-state=open]>svg]:~rotate-180',
              caretAlign === 'left' &&
                '~-rotate-90 [&[data-state=open]>svg]:~rotate-90',
              className
            )}
          >
            <ChevronDown
              className={cn(
                '~h-4 ~w-4 ~shrink-0 ~text-primary ~transition-transform ~duration-200',
                caretClasses
              )}
            />
          </AccordionPrimitive.Trigger>
          {caretAlign === 'left' && children}
        </div>
      ) : (
        <AccordionPrimitive.Trigger
          ref={ref}
          className={cn(
            'body-medium ~flex ~flex-1 ~items-center ~justify-between ~py-4 ~font-normal ~leading-none ~transition-all hover:~underline [&[data-state=open]>svg]:~rotate-180',
            caretAlign === 'left'
              ? '~flex-row-reverse ~justify-normal ~gap-3 [&[data-state=open]>svg]:~rotate-90'
              : '',
            className
          )}
          {...props}
        >
          {children}
          <ChevronDown
            className={cn(
              '~h-4 ~w-4 ~shrink-0 ~text-primary ~transition-transform ~duration-200',
              caretClasses
            )}
          />
        </AccordionPrimitive.Trigger>
      )}
    </AccordionPrimitive.Header>
  )
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      '~overflow-hidden data-[state=closed]:~animate-accordion-up data-[state=open]:~animate-accordion-down',
      className
    )}
    {...props}
  >
    <div className='~pb-4 ~pt-0'>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
