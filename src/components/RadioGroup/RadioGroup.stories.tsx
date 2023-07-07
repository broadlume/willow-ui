import type { Meta, StoryObj } from '@storybook/react';

import { RadioGroup, RadioGroupItem } from './RadioGroup';
import { Label } from '@components/Label/Label';

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  title: 'Components/Radio Group',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A basic radio group.',
      },
    },
  },
  render: (_) => (
    <RadioGroup defaultValue='comfortable'>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='default' id='r1' />
        <Label htmlFor='r1'>Default</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='comfortable' id='r2' />
        <Label htmlFor='r2'>Comfortable</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='compact' id='r3' />
        <Label htmlFor='r3'>Compact</Label>
      </div>
    </RadioGroup>
  ),
};
