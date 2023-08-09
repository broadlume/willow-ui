import React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@src/lib/utils';

const toggleVariants = cva(
  [
    'tw-reset ~inline-flex ~items-center ~justify-center ~rounded-md ~bg-transparent ~transition-none',
    'hover:~bg-accent hover:~text-muted-foreground',
    'focus-visible:~outline-none focus-visible:~ring-1 focus-visible:~ring-ring',
    'disabled:~pointer-events-none disabled:~opacity-50',
    'data-[state=on]:~bg-secondary data-[state=on]:~text-accent-foreground',
  ],
  {
    variants: {
      variant: {
        default: '',
        outline: '~border ~border-input ~shadow-sm',
      },
      shape: {
        default: '',
        pill: '~rounded-full',
      },
      size: {
        default: '~h-9 ~px-3',
        sm: '~h-8 ~px-2',
        lg: '~h-10 ~px-3',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

/** A two-state button that can be either on or off. */
const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, shape, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, shape, className }))}
    {...props}
  />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle };
