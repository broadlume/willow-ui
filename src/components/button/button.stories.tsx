import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';
import { HomeIcon } from '@radix-ui/react-icons';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
};

export default meta;
type Story = StoryObj<typeof Button>;

/** A basic button. */
export const Demo: Story = {
  args: {
    children: 'Button Label',
  },
  argTypes: {
    children: {
      description: 'The button label.',
      control: {
        type: 'text',
      },
    },
    variant: {
      description: 'The button variant.',
      control: 'select',
      options: [
        'default',
        'secondary',
        'outline',
        'destructive',
        'ghost',
        'link',
      ],
    },

    disabled: {
      description: 'Whether the button is disabled.',
      control: {
        type: 'boolean',
      },
    },
    asChild: {
      description: 'Whether the button is rendered as a child of a slot.',
      control: {
        type: 'boolean',
      },
    },
  },
  render: (args) => <Button {...args} />,
};

/** All button variants. */
export const Variants: Story = {
  args: {
    children: 'Button Label',
  },
  render: (args) => (
    <div className='~flex ~flex-col ~space-y-2'>
      <div className='~flex ~gap-1'>
        <Button {...args}>Primary</Button>
        <Button {...args} className='' variant='secondary'>
          Secondary
        </Button>
        <Button {...args} className='' variant='outline'>
          Outline
        </Button>
        <Button {...args} variant='destructive'>
          Destructive
        </Button>
        <Button {...args} className='' variant='ghost'>
          Ghost
        </Button>
        <Button {...args} className='' variant='link'>
          Link
        </Button>
      </div>
    </div>
  ),
};
