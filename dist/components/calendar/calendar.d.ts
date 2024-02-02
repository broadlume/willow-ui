import React from 'react';
import { DayPicker } from 'react-day-picker';
export type CalendarProps = React.ComponentProps<typeof DayPicker>;
/** A calendar component that allows users to enter & edit dates. */
declare function Calendar({ className, classNames, showOutsideDays, ...props }: CalendarProps): JSX.Element;
declare namespace Calendar {
    var displayName: string;
}
export { Calendar };
//# sourceMappingURL=calendar.d.ts.map