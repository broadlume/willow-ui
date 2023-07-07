import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';
import { Label } from '@components/Label/Label';

const meta = {
  component: Switch,
  tags: ['autodocs'],
} as Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A basic switch.',
      },
    },
  },
  render: (_) => (
    <div className='flex items-center space-x-2'>
      <Switch id='airplane-mode' />
      <Label htmlFor='airplane-mode'>Airplane Mode</Label>
    </div>
  ),
};
