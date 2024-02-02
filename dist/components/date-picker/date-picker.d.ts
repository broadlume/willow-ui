import { DateRange, DayPickerBase, DayPickerRangeProps, DayPickerSingleProps } from 'react-day-picker';
export type DatePickerMode = 'single' | 'range';
export type DateSelection = Date | DateRange | undefined;
interface DatePickerPropsBase {
    disabled?: boolean;
    disabledDates?: DayPickerBase['disabled'];
    selected?: DateSelection;
    mode?: DatePickerMode;
}
export type DatePickerSingleProps = Omit<DayPickerSingleProps, 'disabled' | 'mode' | 'selected'>;
export type DatePickerRangeProps = Omit<DayPickerRangeProps, 'disabled' | 'mode' | 'selected'>;
export type DatePickerProps = DatePickerPropsBase & (DatePickerSingleProps | DatePickerRangeProps);
/**
 * A component allowing single or range date selections, presented as a button with a calendar popover.
 * Supports customizable formatting, disabled states, & date restrictions.
 */
export declare const DatePicker: ({ mode, disabled, disabledDates, className, selected, onSelect, ...props }: DatePickerProps) => JSX.Element;
export {};
//# sourceMappingURL=date-picker.d.ts.map