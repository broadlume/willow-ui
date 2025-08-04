import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './checkbox';
import { Label } from '@src/index';
import React from 'react';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Components/Checkbox',
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

/** A checkbox with some text around it. */
export const WithText: Story = {
  render: (_) => (
    <div className='items-top flex space-x-2'>
      <Checkbox id='terms1' />
      <div className='tw-reset grid gap-2 leading-none'>
        <Label htmlFor='terms1'>Accept terms & conditions</Label>
        <p className='text-muted-foreground'>
          You agree to our Terms of Service & Privacy Policy.
        </p>
      </div>
    </div>
  ),
};


/** A checkbox with different states. */
export const WithDataStates: Story = {
  render: (_) => {
    const [state, setState] = React.useState<'checked' | 'unchecked' | 'indeterminate'>('unchecked');

    const handleToggle = () => {
      setState((prev) =>
        prev === 'unchecked' ? 'checked' :
        prev === 'checked' ? 'indeterminate' :
        'unchecked'
      );
    };

    return (
      <div className='~items-top ~flex ~space-x-2'>
        <Checkbox
          id='terms1'
          checked={state === 'checked' || state === 'indeterminate'}
          data-state={state}
          onClick={handleToggle}
        />
        <div className='tw-reset ~grid ~gap-2 ~leading-none'>
          <Label htmlFor='terms1'>Accept terms & conditions</Label>
          <p className='~text-muted-foreground'>
            You agree to our Terms of Service & Privacy Policy.
          </p>
        </div>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: (_) => (
    <div className='flex items-center space-x-2'>
      <Checkbox id='terms2' disabled />
      <Label htmlFor='terms2'>Accept terms & conditions</Label>
    </div>
  ),
};
