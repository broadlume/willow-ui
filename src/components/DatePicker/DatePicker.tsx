import { useEffect, useLayoutEffect, useState } from 'react';
import { DateRange } from 'react-day-picker';
import { DatePickerSingle, DatePickerSingleProps } from './DatePickerSingle';
import { DatePickerRange, DatePickerRangeProps } from './DatePickerRange';

export type DatePickerMode = 'single' | 'range';
interface DatePickerPropsBase {
  mode?: DatePickerMode;
  className?: string;
  selected?: Date | DateRange | undefined;
  setSelected?: (date: Date | DateRange | undefined) => void;
}

export type DatePickerProps = DatePickerPropsBase &
  Omit<DatePickerSingleProps | DatePickerRangeProps, 'selected'>;

const isDateRange = (date: Date | DateRange | undefined): date is DateRange => {
  return date !== undefined && !('getDate' in date);
};

export const DatePicker = ({ mode = 'single', ...props }: DatePickerProps) => {
  const { selected, setSelected } = props;

  const [_selected, _setSelected] = useState<Date | DateRange | undefined>(
    selected
  );

  function handleSelection(selection: Date | DateRange | undefined) {
    if (setSelected) setSelected(selection);
    else _setSelected(selection);
  }

  useLayoutEffect(() => {
    if (
      mode === 'single' &&
      isDateRange(_selected) &&
      _selected.from instanceof Date
    ) {
      handleSelection(_selected.from);
    } else if (mode === 'range' && _selected instanceof Date) {
      handleSelection({ from: _selected });
    } else handleSelection(undefined);
  }, [mode]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    _setSelected(selected);
  }, [selected]);

  const newProps = { ...props, selected: _selected, onSelect: handleSelection };

  if (mode === 'single') {
    return <DatePickerSingle {...(newProps as DatePickerSingleProps)} />;
  } else if (mode === 'range') {
    return <DatePickerRange {...(newProps as DatePickerRangeProps)} />;
  }

  // Handle the case where mode is neither 'single' nor 'range'
  throw new Error(`Invalid mode: ${mode}`);
};
