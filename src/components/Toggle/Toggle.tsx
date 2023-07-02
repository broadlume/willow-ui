import React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@src/lib/utils';

const toggleVariants = cva(
  [
    'body-medium group inline-flex items-center justify-center rounded-md text-sm transition-colors',
    'data-[state=on]:bg-active data-[state=on]:text-foreground',
    'disabled:pointer-events-none disabled:opacity-50',
    'hover:bg-accent hover:text-accentForeground',
    'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
  ],
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline: 'border border-active bg-transparent shadow-sm',
      },
      size: {
        default: 'h-9 px-3',
        sm: 'h-6 px-1',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ToggleProps
  extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>,
    VariantProps<typeof toggleVariants> {
  disabled?: boolean;
  activeContent?: React.ReactNode;
  inactiveContent?: React.ReactNode;
}

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  ToggleProps
>(
  (
    {
      className,
      variant,
      size,
      activeContent,
      inactiveContent,
      children,
      ...props
    },
    ref
  ) => {
    if (activeContent && inactiveContent) {
      children = (
        <>
          <div className='group-data-[state=off]:inline group-data-[state=on]:hidden'>
            {activeContent}
          </div>
          <div className='group-data-[state=on]:inline group-data-[state=off]:hidden'>
            {inactiveContent}
          </div>
        </>
      );
    }

    if (children)
      return (
        <TogglePrimitive.Root
          ref={ref}
          className={cn(toggleVariants({ variant, size, className }))}
          children={children}
          {...props}
        />
      );
  }
);

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle };
