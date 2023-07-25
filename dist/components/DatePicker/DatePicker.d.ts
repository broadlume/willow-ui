import { DatePickerSingleProps } from './DatePickerSingle';
import { DatePickerRangeProps } from './DatePickerRange';
interface DatePickerPropsBase {
    mode?: 'single' | 'range';
}
export type DatePickerProps = DatePickerPropsBase & (DatePickerSingleProps | DatePickerRangeProps);
export declare const DatePicker: ({ mode, ...props }: DatePickerProps) => JSX.Element;
export {};
//# sourceMappingURL=DatePicker.d.ts.map