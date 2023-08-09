import type { Meta, StoryObj } from '@storybook/react';

import { Label } from './label';
import { Checkbox } from '@components/checkbox/checkbox';

const meta: Meta<typeof Label> = {
  component: Label,
  title: 'Components/Label',
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
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
    children: {
      control: 'text',
      description: 'The label text.',
    },
  },
  args: {
    children: 'Accept terms & conditions',
  },
  render: ({ children }) => (
    <div className='~flex ~items-center ~space-x-2'>
      <Checkbox id='terms' />
      <Label htmlFor='terms'>{children}</Label>
    </div>
  ),
};

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A label associated with a disabled control.',
      },
    },
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
    children: {
      control: 'text',
      description: 'The label text.',
    },
  },
  args: {
    children: 'Accept terms & conditions',
  },
  render: ({ children }) => (
    <div className='~flex ~items-center ~space-x-2'>
      <Checkbox id='terms' disabled />
      <Label htmlFor='terms'>{children}</Label>
    </div>
  ),
};
