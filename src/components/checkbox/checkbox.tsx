import React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import { RxMinus } from 'react-icons/rx';

import { cn } from '@src/lib/utils';

/** A control that allows the user to toggle between checked & not checked. */
const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      'h-5 w-5 shrink-0 rounded border-2 border-border-pri',
      'data-[state=checked]:border-border-cta data-[state=checked]:bg-surface-cta data-[state=checked]:text-text-cta2',
      'focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-1',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'data-[state=indeterminate]:border-border-cta data-[state=indeterminate]:bg-surface-cta data-[state=indeterminate]:text-text-cta2',
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn(
        'flex h-full w-full items-center justify-center text-current'
      )}
    >
      {props['data-state'] === 'indeterminate' ? (
        <RxMinus className='h-5 w-5' />
      ) : (
        <CheckIcon className='h-5 w-5' />
      )}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
