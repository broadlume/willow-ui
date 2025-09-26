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
      className={cn('tw-reset p-2', className)}
      classNames={{
        root: cn('w-min', classNames?.root),
        months: cn(
          'flex w-full flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0',
          classNames?.months
        ),
        month: cn('space-y-4', classNames?.month),
        caption: cn(
          'relative flex items-center justify-center pt-1 mb-2',
          classNames?.caption
        ),
        caption_label: cn('text-sm font-medium', classNames?.caption_label),
        nav: cn('flex items-center space-x-1', classNames?.nav),
        nav_button: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-7 w-7 p-0 disabled:bg-transparent',
          classNames?.nav_button
        ),
        nav_button_previous: cn(
          'absolute left-1',
          classNames?.nav_button_previous
        ),
        nav_button_next: cn('absolute right-1', classNames?.nav_button_next),
        table: cn('table-fixed border-collapse space-y-1', classNames?.table),
        head_row: cn('', classNames?.head_row),
        head_cell: cn(
          'caption-1 w-8 text-center text-sm font-normal text-muted-foreground mb-2',
          classNames?.head_cell
        ),
        row: cn('mt-2 w-full', classNames?.row),
        cell: cn(
          'relative p-0 text-center focus-within:relative focus-within:z-20 ',
          props.mode === 'range'
            ? '[&:has(>.day-range-end)]:rounded-r-full [&:has(>.day-range-start)]:rounded-l-full [&:has([aria-selected])]:bg-surface-cta first:[&:has([aria-selected])]:rounded-l-full last:[&:has([aria-selected])]:rounded-r-full'
            : '[&:has([aria-selected])]:rounded-full',
          classNames?.cell
        ),
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          'h-8 w-8 p-0 font-normal aria-selected:opacity-100 disabled:!bg-transparent',
          classNames?.day
        ),
        day_selected: cn(
          'aria-selected:bg-surface-cta aria-selected:text-text-cta2',
          'aria-selected:hover:bg-surface-cta aria-selected:hover:text-text-cta2',
          'hover:bg-surface-cta hover:text-text-pri-foreground',
          'focus:bg-surface-cta focus:text-text-pri-foreground',
          classNames?.day_selected
        ),
        day_today: cn(
          'today bg-surface-sec text-text-sec-foreground',
          classNames?.day_today
        ),
        day_outside: cn(
          'text-muted-foreground opacity-50',
          classNames?.day_outside
        ),
        day_disabled: cn(
          'text-muted-foreground opacity-50 !bg-transparent',
          classNames?.day_disabled
        ),
        day_range_middle: cn(
          'aria-selected:bg-surface-cta aria-selected:text-accent-foreground',
          '[&.today]:bg-surface-cta',
          classNames?.day_range_middle
        ),
        day_range_start: cn('day-range-start', classNames?.day_range_start),
        day_range_end: cn('day-range-end', classNames?.day_range_end),
        day_hidden: cn('invisible', classNames?.day_hidden),
      }}
      components={{
        IconLeft: () => <ChevronLeftIcon className='h-5 w-5' />,
        IconRight: () => <ChevronRightIcon className='h-5 w-5' />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
