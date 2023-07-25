import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: 'Components/Badge',
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'The badge text.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Demo: Story = {
  args: {
    children: 'Badge',
  },
  render: (args) => <Badge {...args} />,
};

export const Variants: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A badge can have different variants.',
      },
    },
  },
  render: (args) => (
    <div className='~flex ~flex-wrap ~gap-2'>
      <Badge {...args} variant='default'>
        Default
      </Badge>
      <Badge {...args} variant='secondary'>
        Secondary
      </Badge>
      <Badge {...args} variant='success'>
        Success
      </Badge>
      <Badge {...args} variant='destructive'>
        Destructive
      </Badge>
      <Badge {...args} variant='outline'>
        Outline
      </Badge>
    </div>
  ),
};
