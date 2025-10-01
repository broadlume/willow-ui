import React, { createContext, useContext } from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { AccordionHeader } from '@radix-ui/react-accordion';

import { cn } from '@src/lib/utils';
import { ChevronDown } from '@src/index';

type AccordionVariant = 'borderless' | 'bordered' | 'separated';

const AccordionVariantContext = createContext<AccordionVariant>('borderless');

type StatusVariant = 'success' | 'warning' | 'error' | 'info' | 'default';

const statusStyles: Record<StatusVariant, string> = {
  success: 'bg-green-100',
  warning: 'bg-yellow-100',
  error: 'bg-red-100',
  info: 'bg-blue-100',
  default: '',
};

const variantStyles = {
  borderless: {
    root: '',
    header: 'py-4',
    content: 'pt-0 pb-4',
    item: 'border-b',
  },
  bordered: {
    root: 'border border-b rounded-2xl shadow-sm overflow-hidden',
    header: 'p-4',
    content: 'pt-0 pb-4 px-4',
    item: 'border-b last:border-b-0 first:rounded-t-lg last:rounded-b-lg overflow-hidden',
  },
  separated: {
    root: 'space-y-4 rounded-2xl',
    header: 'p-4',
    content: 'border-t p-4',
    item: 'border border-t rounded-2xl overflow-hidden shadow-sm',
  },
} as const;

/** A vertically stacked set of interactive headings that each reveal a section of content. */
const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & {
    variant?: AccordionVariant;
  }
>(({ className, variant = 'borderless', children, ...props }, ref) => {
  const variantClasses = variantStyles[variant].root;

  return (
    <AccordionVariantContext.Provider value={variant}>
      <AccordionPrimitive.Root
        ref={ref}
        className={cn('tw-reset', variantClasses, className)}
        {...props}
      >
        {children}
      </AccordionPrimitive.Root>
    </AccordionVariantContext.Provider>
  );
});
Accordion.displayName = 'Accordion';

/** Accordion Item */
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => {
  const variant = useContext(AccordionVariantContext);
  const variantClasses = variantStyles[variant].item;

  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn(variantClasses, className)}
      {...props}
    />
  );
});
AccordionItem.displayName = 'AccordionItem';

/** Accordion Trigger (header) */
const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
    caretOnly?: boolean;
    caretAlign?: 'left' | 'right';
    caretClasses?: string;
    noCaret?: boolean;
    status?: StatusVariant;
  }
>(
  (
    {
      className,
      children,
      caretOnly,
      caretAlign = 'right',
      caretClasses,
      noCaret = false,
      status = 'default',
      ...props
    },
    ref
  ) => {
    const variant = useContext(AccordionVariantContext);
    const variantClasses = variantStyles[variant].header;

    return (
      <AccordionPrimitive.Header className='flex w-full'>
        {caretOnly ? (
          <div
            className={cn(
              'body-medium flex flex-1 items-center font-normal leading-none gap-3',
              variantClasses,
              statusStyles[status],
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
                    'h-4 w-4  shrink-0 text-primary transition-transform duration-200',
                    caretClasses,
                    caretAlign === 'right'
                      ? 'order-last ml-auto'
                      : 'order-first'
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
              'body-medium flex flex-1 items-center font-normal leading-none transition-all hover:underline [&[data-state=open]>svg]:rotate-180 gap-3',
              variantClasses,
              statusStyles[status],
              className
            )}
            {...props}
          >
            {caretAlign === 'left' && !noCaret && (
              <ChevronDown
                className={cn(
                  'h-4 w-4  shrink-0 text-primary transition-transform duration-200',
                  caretClasses
                )}
              />
            )}

            <span className='flex-1 text-left'>{children}</span>

            {caretAlign === 'right' && !noCaret && (
              <ChevronDown
                className={cn(
                  'h-4 w-4  shrink-0 text-primary transition-transform duration-200',
                  caretClasses
                )}
              />
            )}
          </AccordionPrimitive.Trigger>
        )}
      </AccordionPrimitive.Header>
    );
  }
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

/** Accordion Content */
const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const variant = useContext(AccordionVariantContext);
  const variantClasses = variantStyles[variant].content;

  return (
    <AccordionPrimitive.Content
      ref={ref}
      className={cn(
        'overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
      )}
      {...props}
    >
      <div className={cn('last:rounded-b-lg', variantClasses, className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
});
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
};
