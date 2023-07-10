import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { HomeIcon } from '@radix-ui/react-icons';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Demo: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A basic button.',
      },
    },
  },
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
    size: {
      description: 'The button size.',
      control: {
        type: 'select',
        options: ['default', 'sm', 'lg', 'icon'],
      },
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
};

export const Variants: Story = {
  parameters: {
    docs: {
      description: {
        story: 'All button variants.',
      },
    },
  },
  args: {
    children: 'Button Label',
  },
  render: (args) => (
    <div className='flex flex-col space-y-2'>
      <div className='flex gap-1'>
        <Button {...args}>Primary</Button>
        <Button {...args} variant='secondary'>
          Secondary
        </Button>
        <Button {...args} variant='outline'>
          Outline
        </Button>
        <Button {...args} variant='destructive'>
          Destructive
        </Button>
        <Button {...args} variant='ghost'>
          Ghost
        </Button>
        <Button {...args} variant='link'>
          Link
        </Button>
      </div>
    </div>
  ),
};
export const Sizes: Story = {
  parameters: {
    docs: {
      description: {
        story: 'All button sizes.',
      },
    },
  },
  args: {
    children: 'Button Label',
  },
  render: (args) => (
    <div className='flex flex-col space-y-2'>
      <div className='flex gap-1'>
        <Button {...args} size='lg'>
          Primary (lg)
        </Button>
        <Button {...args}>Primary (default)</Button>
        <Button {...args} size='sm'>
          Primary (sm)
        </Button>
        <Button {...args} size='icon'>
          <HomeIcon />
        </Button>
      </div>
    </div>
  ),
};
