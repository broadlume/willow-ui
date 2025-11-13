import { CalendarIcon } from '@radix-ui/react-icons';
import {
  Button,
  Calendar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@src/index';
import { cn } from '@src/lib/utils';
import { format } from 'date-fns';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import {
  ActiveModifiers,
  DateRange,
  DayPickerBase,
  DayPickerRangeProps,
  DayPickerSingleProps,
} from 'react-day-picker';

export type DatePickerMode = 'single' | 'range';
export type DateSelection = Date | DateRange | undefined;
interface DatePickerPropsBase {
  disabled?: boolean;
  disabledDates?: DayPickerBase['disabled'];
  selected?: DateSelection;
  mode?: DatePickerMode;
  trigger?: React.ReactElement;
  open?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  popoverContentProps?: React.ComponentProps<typeof PopoverContent>;
}

export type DatePickerSingleProps = Omit<
  DayPickerSingleProps,
  'disabled' | 'mode' | 'selected'
>;

export type DatePickerRangeProps = Omit<
  DayPickerRangeProps,
  'disabled' | 'mode' | 'selected'
>;

export type DatePickerProps = DatePickerPropsBase &
  (DatePickerSingleProps | DatePickerRangeProps);

// type guard
const isRange = (date: DateSelection): date is DateRange => {
  return !!date && typeof date === 'object' && ('from' in date || 'to' in date);
};

/**
 * A component allowing single or range date selections, presented as a button with a calendar popover.
 * Supports customizable formatting, disabled states, & date restrictions.
 */
export const DatePicker = ({
  mode = 'single',
  disabled,
  disabledDates,
  className,
  selected,
  onSelect,
  trigger,
  open: controlledOpen,
  onOpenChange,
  popoverContentProps,
  ...props
}: DatePickerProps) => {
  const [_selected, _setSelected] = useState<DateSelection>(selected);
  const [buttonText, setButtonText] = useState<string>('');
  const [internalOpen, setInternalOpen] = useState(false);

  // Use controlled open state if provided, otherwise use internal state
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;

  function _onSelect(
    selection: (Date & DateRange) | undefined,
    selectedDay: Date,
    activeModifiers: ActiveModifiers,
    e: React.MouseEvent
  ) {
    if (onSelect) onSelect(selection, selectedDay, activeModifiers, e);
    else _setSelected(selection);
  }
  function handleProgrammaticSelection(selection: DateSelection) {
    if (onSelect)
      onSelect(
        selection as (Date & DateRange) | undefined,
        selection as Date,
        {},
        {} as React.MouseEvent
      );
    else _setSelected(selection);
  }

  useLayoutEffect(() => {
    if (
      mode === 'single' &&
      isRange(_selected) &&
      _selected.from instanceof Date
    ) {
      handleProgrammaticSelection(_selected.from);
    } else if (mode === 'range' && _selected instanceof Date) {
      handleProgrammaticSelection({ from: _selected });
    } else handleProgrammaticSelection(undefined);
  }, [mode]); // eslint-disable-line react-hooks/exhaustive-deps

  useLayoutEffect(() => {
    const getButtonText = () => {
      if (mode === 'single' && _selected instanceof Date) {
        return format(_selected, 'PPP');
      } else if (mode === 'range' && isRange(_selected)) {
        if (_selected.from && _selected.to) {
          return `${format(_selected.from, 'LLL dd, y')} - ${format(
            _selected.to,
            'LLL dd, y'
          )}`;
        } else if (_selected.from) {
          return `${format(_selected.from, 'LLL dd, y')} - ?`;
        }
      }
      return mode === 'single' ? 'Pick a date' : 'Pick a date range';
    };
    setButtonText(getButtonText());
  }, [_selected, mode]);

  useEffect(() => {
    _setSelected(selected);
  }, [selected]);

  const newProps = {
    mode,
    disabled: disabledDates,
    defaultMonth: mode === 'range' ? (_selected as DateRange)?.from : _selected,
    initialFocus: true,
    numberOfMonths: mode === 'range' ? 2 : 1,
    selected: _selected,
    onSelect: _onSelect,
    ...(props ?? {}),
  };

  return (
    <Popover
      open={open}
      onOpenChange={(isOpen) => {
        if (controlledOpen === undefined) {
          setInternalOpen(isOpen);
        }
        onOpenChange?.(isOpen);
      }}
    >
      <PopoverTrigger asChild disabled={disabled}>
        {trigger || (
          <Button
            variant='outline'
            id='date'
            className={cn(
              'w-[250px] items-center justify-start text-left font-normal',
              !selected && 'text-muted-foreground',
              className
            )}
          >
            <CalendarIcon className='mr-3 h-5 w-5' />
            {buttonText}
          </Button>
        )}
      </PopoverTrigger>
      <PopoverContent
        className='w-auto p-0'
        align='start'
        {...popoverContentProps}
      >
        {mode === 'single' ? (
          <Calendar {...(newProps as DatePickerSingleProps)} />
        ) : (
          <Calendar {...(newProps as DatePickerRangeProps)} />
        )}
      </PopoverContent>
    </Popover>
  );
};
