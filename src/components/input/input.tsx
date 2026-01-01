import React from 'react';

import { cn } from '@src/lib/utils';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  /**
   * Whether to color the input changed or not
   */
  dirty?: boolean;
  /**
   * Whether to color the input invalid or not
   */
  invalid?: boolean;
  error?: string;
};

/** Displays a form input field or a component that looks like an input field. */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'tw-reset flex h-9 w-full rounded-md border border-border-sec bg-surface-pri px-3 py-1 text-sm',
          'placeholder:text-text-opt',
          'hover:border-border-opt',
          'focus-visible:border-border-opt focus-visible:outline-none focus-visible:ring-0',
          'disabled:cursor-not-allowed disabled:bg-surface-sec',
          {
            'bg-(--color-blue-50)': props.dirty && !props.invalid,
            'border-border-destructive': props.invalid,
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
