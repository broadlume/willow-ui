import { DayPickerRangeProps } from 'react-day-picker';
export interface DatePickerRangeProps extends Omit<DayPickerRangeProps, 'mode' | 'disabled'> {
    disabled?: boolean;
}
export declare const DatePickerRange: ({ selected: dateRange, onSelect: setDateRange, disabled, ...props }: DatePickerRangeProps) => JSX.Element;
//# sourceMappingURL=DatePickerRange.d.ts.map