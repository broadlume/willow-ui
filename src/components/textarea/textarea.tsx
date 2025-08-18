import React from 'react';

import { cn } from '@src/lib/utils';

export type TextareaProps =
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    dirty?: boolean;
    invalid?: boolean;
  };

/** A resizable, multi-line text field. */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'tw-reset peer flex min-h-[60px] w-full rounded-md border border-border-sec bg-surface-pri px-3 py-1 text-sm',
          'placeholder:text-text-opt',
          'hover:border-border-opt',
          'focus-visible:border-border-opt focus-visible:outline-none focus-visible:ring-0',
          'disabled:cursor-not-allowed disabled:bg-surface-sec',
          {
            'bg-(--color-blue-50)': props.dirty && !props.invalid,
            'border-border-destructive text-text-destructive': props.invalid,
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
