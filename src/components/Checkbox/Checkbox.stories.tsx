import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';
import { Label } from '@src/index';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const WithText: Story = {
  render: (_) => (
    <div className='items-top flex space-x-2'>
      <Checkbox id='terms1' />
      <div className='grid gap-2 leading-none'>
        <Label htmlFor='terms1'>Accept terms and conditions</Label>
        <p className='text-muted-foreground'>
          You agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: (_) => (
    <div className='flex items-center space-x-2'>
      <Checkbox id='terms2' disabled />
      <Label htmlFor='terms2'>Accept terms and conditions</Label>
    </div>
  ),
};
