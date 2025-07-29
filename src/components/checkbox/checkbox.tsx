import React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';

import { cn } from '@src/lib/utils';

/** A control that allows the user to toggle between checked & not checked. */
const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      '~h-3 ~w-3 ~shrink-0 ~rounded-[4px] ~border ~border-border-pri data-[state=checked]:~border-border-cta data-[state=checked]:~bg-surface-cta data-[state=checked]:~text-text-cta2',
      // 'focus-visible:~outline-none focus-visible:~ring-1 focus-visible:~ring-ring',
      // 'disabled:~cursor-not-allowed disabled:~opacity-50',
      // 'data-[state=checked]:~bg-primary data-[state=checked]:~text-primary-foreground',
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn(
        '~flex ~h-full ~w-full ~items-center ~justify-center ~text-current'
      )}
    >
      <CheckIcon className='~h-4 ~w-4' />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
