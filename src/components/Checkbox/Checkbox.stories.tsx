import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const WithText: Story = {
  render: (_) => (
    <div className='items-top flex space-x-2'>
      <Checkbox id='terms1' />
      <div className='grid gap-1 leading-none'>
        <label
          htmlFor='terms1'
          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
        >
          Accept terms and conditions
        </label>
        <p className='text-sm text-muted-foreground'>
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
      <label
        htmlFor='terms2'
        className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
      >
        Accept terms and conditions
      </label>
    </div>
  ),
};