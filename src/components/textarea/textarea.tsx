import React from 'react';

import { cn } from '@src/lib/utils';

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  dirty?: boolean
  invalid?: boolean;
};

/** A resizable, multi-line text field. */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'tw-reset ~peer ~flex ~min-h-[60px] ~w-full ~rounded-md ~border ~border-border ~bg-transparent ~px-3 ~py-2 ~shadow-xs',
          'placeholder:~text-input',
          'focus-visible:~outline-none focus-visible:~ring-1 focus-visible:~ring-ring',
          'disabled:~cursor-not-allowed disabled:~opacity-50',
          {
            "~bg-blue-50": props.dirty && !props.invalid,
            "~bg-red-50": props.invalid
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
