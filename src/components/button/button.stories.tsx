import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from '@components/Loader/Loader';
import { Button } from './button';

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
    <div className='flex flex-col space-y-2'>
      <div className='flex gap-1'>
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

/** All button with icons. */
export const Icons: Story = {
  args: {
    children: 'Button Label',
  },
  render: (args) => (
    <div className='flex flex-col space-y-2'>
      <div className='flex gap-1'>
        <Button {...args} size='lg'>
          Primary (lg)
        </Button>
        <Button {...args} className='' variant='secondary'>
          <Loader /> Secondary
        </Button>
        <Button {...args} className='' variant='outline'>
          <Loader /> Outline
        </Button>
        <Button {...args} variant='destructive'>
          <Loader /> Destructive
        </Button>
        <Button {...args} className='' variant='ghost'>
          <Loader /> Ghost
        </Button>
        <Button {...args} className='' variant='link'>
          <Loader /> Link
        </Button>
      </div>
    </div>
  ),
};
