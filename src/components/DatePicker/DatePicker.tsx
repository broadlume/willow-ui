import { useLayoutEffect, useState } from 'react';
import { DateRange } from 'react-day-picker';
import { DatePickerSingle, DatePickerSingleProps } from './DatePickerSingle';
import { DatePickerRange, DatePickerRangeProps } from './DatePickerRange';

interface DatePickerPropsBase {
  mode?: 'single' | 'range';
}

export type DatePickerProps = DatePickerPropsBase &
  (DatePickerSingleProps | DatePickerRangeProps);

const isDateRange = (date: Date | DateRange | undefined): date is DateRange => {
  return date !== undefined && !('getDate' in date);
};

export const DatePicker = ({ mode = 'single', ...props }: DatePickerProps) => {
  const [selected, setSelected] = useState<Date | DateRange | undefined>(
    props.selected
  );

  useLayoutEffect(() => {
    if (
      mode === 'single' &&
      isDateRange(selected) &&
      selected.from instanceof Date
    ) {
      setSelected(selected.from);
    } else if (mode === 'range' && selected instanceof Date) {
      setSelected({ from: selected, to: selected });
    } else setSelected(undefined);
  }, [mode]); // eslint-disable-line react-hooks/exhaustive-deps

  const newProps = { ...props, selected, onSelect: setSelected };

  if (mode === 'single') {
    return <DatePickerSingle {...(newProps as DatePickerSingleProps)} />;
  } else if (mode === 'range') {
    return <DatePickerRange {...(newProps as DatePickerRangeProps)} />;
  }

  // Handle the case where mode is neither 'single' nor 'range'
  throw new Error(`Invalid mode: ${mode}`);
};
