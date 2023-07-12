import type { Meta, StoryObj } from '@storybook/react';

import { Calendar } from './Calendar';
import { useState } from 'react';

const meta: Meta<typeof Calendar> = {
  component: Calendar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Calendar>;

const CalendarDemo = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode='single'
      selected={date}
      onSelect={setDate}
      className='inline-flex rounded-md border shadow'
    />
  );
};

export const Demo: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A basic calendar.',
      },
    },
  },
  render: CalendarDemo,
};
