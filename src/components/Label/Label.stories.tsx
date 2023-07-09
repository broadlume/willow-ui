import { Meta, StoryObj } from '@storybook/react';

import { Label } from './Label';
import { Checkbox } from '@components/Checkbox/Checkbox';

const meta: Meta<typeof Label> = {
  component: Label,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Demo: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A basic label.',
      },
    },
  },
  args: {
    children: 'Accept terms and conditions',
  },
  render: ({ children }) => (
    <div className='flex items-center space-x-2'>
      <Checkbox id='terms' />
      <Label htmlFor='terms'>{children}</Label>
    </div>
  ),
};