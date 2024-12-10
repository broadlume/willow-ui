import React from 'react';

import { cn } from '@src/lib/utils';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  dirty?: boolean
  invalid?: boolean;
};

/** Displays a form input field or a component that looks like an input field. */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'tw-reset ~flex ~h-9 ~w-full ~rounded-md ~border ~border-border ~bg-background ~px-3 ~py-1 ~shadow-sm ~transition-colors',
          'placeholder:~text-input',
          'focus-visible:~outline-none focus-visible:~ring-1 focus-visible:~ring-ring',
          'disabled:~cursor-not-allowed disabled:~bg-muted',
          
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
Input.displayName = 'Input';

export { Input };
