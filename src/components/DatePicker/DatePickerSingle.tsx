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
import { DayPickerSingleProps } from 'react-day-picker';

export interface DatePickerSingleProps
  extends Omit<DayPickerSingleProps, 'mode' | 'disabled'> {
  disabled?: boolean;
  disabledDates?: DayPickerSingleProps['disabled'];
}

export const DatePickerSingle = ({
  selected: date,
  onSelect: setDate,
  disabled,
  disabledDates,
  ...props
}: DatePickerSingleProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild disabled={disabled}>
        <Button
          variant={'outline'}
          className={cn(
            'w-[240px] justify-start text-left font-normal',
            !date && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className='mr-2 h-4 w-4' />
          {date && date instanceof Date ? (
            format(date, 'PPP')
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0' align='start'>
        <Calendar
          mode='single'
          selected={date}
          onSelect={setDate}
          initialFocus
          disabled={disabledDates}
          {...props}
        />
      </PopoverContent>
    </Popover>
  );
};