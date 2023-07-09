import { Meta, StoryObj } from '@storybook/react';

import { useState } from 'react';
import { DatePicker, DatePickerProps } from './DatePicker';
import { DateRange } from 'react-day-picker';

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  title: 'Components/Date Picker',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

const DatePickerSingleOrRangeDemo = (props: DatePickerProps) => {
  const [date, setDate] = useState<Date | DateRange | undefined>();

  // this is very ugly typing but it doesn't break & isn't a realistic use case anyway
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <DatePicker selected={date as any} onSelect={setDate} {...props} />;
};
export const Demo: Story = {
  render: DatePickerSingleOrRangeDemo,
};

const DisabledDatesDemo = (_) => {
  const [date, setDate] = useState<Date | undefined>();

  return (
    <DatePicker
      selected={date}
      onSelect={setDate}
      disabledDates={
        // disable all days after today
        (day) => day > new Date()
      }
    />
  );
};
export const DisabledDates: Story = {
  render: DisabledDatesDemo,
};

const DateRangePickerDemo = (_) => {
  const [date, setDate] = useState<DateRange | undefined>();

  return <DatePicker mode='range' selected={date} onSelect={setDate} />;
};
export const DateRangePicker: Story = {
  render: DateRangePickerDemo,
};
