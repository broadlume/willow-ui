import React from 'react';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';
import * as SelectPrimitive from '@radix-ui/react-select';

import { cn } from '@src/lib/utils';
import { selectVariants } from './select-variants';

/** Displays a list of options for the user to pick from—triggered by a button. */
const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

type SelectTriggerProps = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Trigger
> & {
  icon?: React.ReactNode;
};

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(({ className, children, icon, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(selectVariants({ className }))}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      {icon ?? <CaretSortIcon className='~h-4 ~w-4 ~opacity-50' />}
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));

SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'item-aligned', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        'tw-reset ~relative ~z-50 ~min-w-[8em] ~overflow-hidden ~rounded-md ~border ~bg-popover ~font-normal ~leading-6 ~text-popover-foreground ~shadow-md',
        'data-[state=open]:~animate-in data-[state=open]:~fade-in-0 data-[state=open]:~zoom-in-95',
        'data-[state=closed]:~animate-out data-[state=closed]:~fade-out-0 data-[state=closed]:~zoom-out-95',
        'data-[side=bottom]:~slide-in-from-top-2 data-[side=left]:~slide-in-from-right-2 data-[side=right]:~slide-in-from-left-2 data-[side=top]:~slide-in-from-bottom-2',
        position === 'popper' &&
        'data-[side=bottom]:~translate-y-1 data-[side=left]:~-translate-x-1 data-[side=right]:~translate-x-1 data-[side=top]:~-translate-y-1',
        className
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={cn(
          '~p-0', // dropdown padding
          position === 'popper' &&
          '~h-[var(--radix-select-trigger-height)] ~w-full ~min-w-[var(--radix-select-trigger-width)]'
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn('~px-2 ~py-1.5 ~font-bold', className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      '~relative ~flex ~w-full ~cursor-pointer ~select-none ~items-center ~rounded-xs ~py-1.5 ~pl-2 ~pr-8 ~outline-hidden',
      'focus:~bg-accent focus:~text-accent-foreground',
      'data-[disabled]:~pointer-events-none data-[disabled]:~opacity-50',
      className
    )}
    {...props}
  >
    <span className='~absolute ~right-2 ~flex ~h-3.5 ~w-3.5 ~items-center ~justify-center'>
      <SelectPrimitive.ItemIndicator>
        <CheckIcon className='~h-4 ~w-4' />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('~-mx-1 ~my-1 ~h-px ~bg-muted', className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
};
