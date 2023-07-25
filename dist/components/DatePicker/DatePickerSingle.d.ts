import { DayPickerSingleProps } from 'react-day-picker';
export interface DatePickerSingleProps extends Omit<DayPickerSingleProps, 'mode' | 'disabled'> {
    disabled?: boolean;
    disabledDates?: DayPickerSingleProps['disabled'];
}
export declare const DatePickerSingle: ({ selected: date, onSelect: setDate, disabled, disabledDates, ...props }: DatePickerSingleProps) => JSX.Element;
//# sourceMappingURL=DatePickerSingle.d.ts.map