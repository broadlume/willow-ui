import React from 'react';
import { cn } from '@src/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  disabled?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'body-medium flex h-12 w-full rounded-md border border-border bg-background px-3 py-1 text-foreground shadow-sm transition-colors',
          'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
          'placeholder:text-mutedForeground',
          'disabled:cursor-not-allowed disabled:bg-muted disabled:bg-opacity-50 disabled:text-mutedForeground',
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
