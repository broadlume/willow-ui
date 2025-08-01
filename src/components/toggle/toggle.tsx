import React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@src/lib/utils';

const toggleVariants = cva(
  [
    'tw-reset ~inline-flex ~h-9 ~items-center ~justify-center ~rounded-md ~bg-transparent ~px-3 ~transition-none',
    'hover:~bg-accent hover:~text-muted-foreground',
    'focus-visible:~outline-none focus-visible:~ring-1 focus-visible:~ring-ring',
    'disabled:~pointer-events-none disabled:~opacity-50',
    'data-[state=on]:~bg-secondary data-[state=on]:~text-accent-foreground',
  ],
  {
    variants: {
      style: {
        default: '',
        outline: '~border ~border-input ~shadow-xs',
      },
      shape: {
        default: '',
        pill: '~rounded-full',
      },
      size: {
        default: '',
        xs: '~text-xs',
        sm: '~text-sm',
        lg: '~text-lg',
      },
    },
    defaultVariants: {
      style: 'default',
      size: 'default',
    },
  }
);

/** A two-state button that can be either on or off. */
const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, style, size, shape, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ style, size, shape, className }))}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle };
