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
        root: cn('~w-min', classNames?.root),
        months: cn(
          '~flex ~w-full ~flex-col ~space-y-4 sm:~flex-row sm:~space-x-4 sm:~space-y-0',
          classNames?.months
        ),
        month: cn('~space-y-4', classNames?.month),
        caption: cn(
          '~relative ~flex ~items-center ~justify-center ~pt-1',
          classNames?.caption
        ),
        caption_label: cn('~text-sm ~font-medium', classNames?.caption_label),
        nav: cn('~flex ~items-center ~space-x-1', classNames?.nav),
        nav_button: cn(
          buttonVariants({ variant: 'ghost' }),
          '~h-9 ~w-9 ~p-0',
          classNames?.nav_button
        ),
        nav_button_previous: cn(
          '~absolute ~left-1',
          classNames?.nav_button_previous
        ),
        nav_button_next: cn('~absolute ~right-1', classNames?.nav_button_next),
        table: cn(
          '~w-full ~table-fixed ~border-collapse ~space-y-1',
          classNames?.table
        ),
        head_row: cn('', classNames?.head_row),
        head_cell: cn(
          'caption-1 ~w-10 ~text-center ~font-normal ~text-muted-foreground',
          classNames?.head_cell
        ),
        row: cn('~mt-2 ~w-full', classNames?.row),
        cell: cn(
          '~relative ~p-0 ~text-center focus-within:~relative focus-within:~z-20 ',
          props.mode === 'range'
            ? '[&:has(>.day-range-end)]:~rounded-r-full [&:has(>.day-range-start)]:~rounded-l-full [&:has([aria-selected])]:~bg-accent first:[&:has([aria-selected])]:~rounded-l-full last:[&:has([aria-selected])]:~rounded-r-full'
            : '[&:has([aria-selected])]:~rounded-full',
          classNames?.cell
        ),
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          '~h-10 ~w-10 ~p-0 ~font-normal aria-selected:~opacity-100',
          classNames?.day
        ),
        day_selected: cn(
          '~bg-primary ~text-primary-foreground',
          'hover:~bg-primary hover:~text-primary-foreground',
          'focus:~bg-primary focus:~text-primary-foreground',
          classNames?.day_selected
        ),
        day_today: cn(
          'today ~bg-accent ~text-accent-foreground',
          classNames?.day_today
        ),
        day_outside: cn(
          '~text-muted-foreground ~opacity-50',
          classNames?.day_outside
        ),
        day_disabled: cn(
          '~text-muted-foreground ~opacity-50',
          classNames?.day_disabled
        ),
        day_range_middle: cn(
          'aria-selected:~bg-transparent aria-selected:~text-accent-foreground',
          '[&.today]:~bg-accent',
          classNames?.day_range_middle
        ),
        day_range_start: cn('day-range-start', classNames?.day_range_start),
        day_range_end: cn('day-range-end', classNames?.day_range_end),
        day_hidden: cn('~invisible', classNames?.day_hidden),
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
