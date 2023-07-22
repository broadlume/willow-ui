import { CalendarIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';

import { cn } from '@src/lib/utils';
import {
  Button,
  Calendar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@src/index';
import { DayPickerRangeProps } from 'react-day-picker';

export interface DatePickerRangeProps
  extends Omit<DayPickerRangeProps, 'mode' | 'disabled'> {
  disabled?: boolean;
}

export const DatePickerRange = ({
  selected: dateRange,
  onSelect: setDateRange,
  disabled,
  ...props
}: DatePickerRangeProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild disabled={disabled}>
        <Button
          variant={'outline'}
          className={cn(
            '~w-[240px] ~justify-start ~text-left ~font-normal',
            !dateRange && '~text-muted-foreground'
          )}
        >
          <CalendarIcon className='~mr-2 ~h-4 ~w-4' />
          {dateRange?.from ? (
            dateRange.to ? (
              <>
                {format(dateRange.from, 'LLL dd, y')} -{' '}
                {format(dateRange.to, 'LLL dd, y')}
              </>
            ) : (
              `${format(dateRange.from, 'LLL dd, y')} - ?`
            )
          ) : (
            <span>Pick a date range</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='~w-auto ~p-0' align='start'>
        <Calendar
          initialFocus
          mode='range'
          defaultMonth={dateRange?.from}
          selected={dateRange}
          onSelect={setDateRange}
          numberOfMonths={2}
          {...props}
        />
      </PopoverContent>
    </Popover>
  );
};
