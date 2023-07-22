import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { cn } from '@src/lib/utils';

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TooltipPrimitive.Trigger
    ref={ref}
    className={cn(
      'tw-reset disabled:~cursor-not-allowed disabled:~opacity-50',
      className
    )}
    {...props}
  />
));

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      'tw-reset body-x-small ~z-50 ~overflow-hidden ~rounded-md ~bg-accent ~px-3 ~py-1.5 ~text-accent-foreground ~animate-in ~fade-in-0 ~zoom-in-95',
      'data-[state=closed]:~animate-out data-[state=closed]:~fade-out-0 data-[state=closed]:~zoom-out-95',
      'data-[side=bottom]:~slide-in-from-top-2 data-[side=left]:~slide-in-from-right-2 data-[side=right]:~slide-in-from-left-2 data-[side=top]:~slide-in-from-bottom-2',
      className
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
