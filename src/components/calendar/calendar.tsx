import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { DayPicker } from 'react-day-picker';

import { cn } from '@src/lib/utils';
import { buttonVariants } from '@src/index';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

/** A calendar component that allows users to enter & edit dates. */
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('tw-reset ~p-3', className)}
      classNames={{
        months:
          '~flex ~flex-col sm:~flex-row ~space-y-4 sm:~space-x-4 sm:~space-y-0',
        month: cn('~space-y-4'),
        caption: '~flex ~justify-center ~pt-1 ~relative ~items-center',
        caption_label: '~text-sm ~font-medium',
        nav: '~space-x-1 ~flex ~items-center',
        nav_button: cn(buttonVariants({ variant: 'ghost' }), '~h-9 ~w-9 ~p-0'),
        nav_button_previous: '~absolute ~left-1',
        nav_button_next: '~absolute ~right-1',
        table: '~w-full ~border-collapse ~space-y-1',
        head_row: '~flex',
        head_cell: cn(
          'caption-1 ~w-10 ~text-center ~font-normal ~text-muted-foreground'
        ),
        row: '~flex ~w-full ~mt-2',
        cell: cn(
          '~relative ~p-0 ~text-center focus-within:~relative focus-within:~z-20 [&:has([aria-selected])]:~bg-accent',
          props.mode === 'range'
            ? '[&:has(>.day-range-end)]:~rounded-r-full [&:has(>.day-range-start)]:~rounded-l-full first:[&:has([aria-selected])]:~rounded-l-full last:[&:has([aria-selected])]:~rounded-r-full'
            : '[&:has([aria-selected])]:~rounded-full'
        ),
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          '~h-10 ~w-10 ~p-0 ~font-normal aria-selected:~opacity-100'
        ),
        day_selected: cn(
          '~bg-primary ~text-primary-foreground',
          'hover:~bg-primary hover:~text-primary-foreground',
          'focus:~bg-primary focus:~text-primary-foreground'
        ),
        day_today: cn('today ~bg-accent ~text-accent-foreground'),
        day_outside: '~text-muted-foreground ~opacity-50',
        day_disabled: '~text-muted-foreground ~opacity-50',
        day_range_middle: cn(
          'aria-selected:~bg-transparent aria-selected:~text-accent-foreground',
          '[&.today]:~bg-accent'
        ),
        day_range_start: 'day-range-start',
        day_range_end: 'day-range-end',
        day_hidden: '~invisible',
        ...classNames,
      }}
      components={{
        IconLeft: () => <ChevronLeftIcon className='~h-5 ~w-5' />,
        IconRight: () => <ChevronRightIcon className='~h-5 ~w-5' />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
