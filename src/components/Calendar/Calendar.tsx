import * as React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { DayPicker } from 'react-day-picker';

import { cn } from '@src/lib/utils';
import { buttonVariants } from '@src/index';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

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
        nav_button: cn(buttonVariants({ variant: 'ghost' }), '~h-7 ~w-7 ~p-0'),
        nav_button_previous: '~absolute ~left-1',
        nav_button_next: '~absolute ~right-1',
        table: '~w-full ~border-collapse ~space-y-1',
        head_row: '~flex',
        head_cell: cn(
          'caption-1 ~w-8 ~text-center ~font-normal ~text-muted-foreground'
        ),
        row: '~flex ~w-full ~mt-2',
        cell: cn(
          '~relative ~p-0 ~text-center focus-within:~relative focus-within:~z-20',
          '[&:has([aria-selected])]:~rounded-full [&:has([aria-selected])]:~bg-accent',
          'first:[&:has([aria-selected])]:~rounded-l-full last:[&:has([aria-selected])]:~rounded-r-full',
          '[&:has([aria-selected]):has(.range-middle)]:~rounded-none',
          '[&:has([aria-selected]):has(.range-start)]:~rounded-r-none',
          '[&:has([aria-selected]):has(.range-end)]:~rounded-l-none',
          '[&:has([aria-selected]):has(.range-start):has(.range-end)]:~rounded-full'
        ),
        day: cn(
          buttonVariants({ variant: 'ghost' }),
          '~h-8 ~w-8 ~p-0 ~font-normal aria-selected:~opacity-100'
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
          'range-middle aria-selected:~bg-transparent aria-selected:~text-accent-foreground',
          '[&.today]:~bg-accent'
        ),
        day_range_start: 'range-start',
        day_range_end: 'range-end',
        day_hidden: '~invisible',
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeftIcon className='~h-4 ~w-4' />,
        IconRight: ({ ...props }) => <ChevronRightIcon className='~h-4 ~w-4' />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
