import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './badge';

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: 'Components/Badge',
  argTypes: {
    children: {
      control: 'text',
      description: 'The badge text.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

/** A basic badge. */
export const Demo: Story = {
  args: {
    children: 'Badge',
  },
  render: (args) => <Badge {...args} />,
};

/** All badge variants. */
export const Variants: Story = {
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

/** All badge sizes (+variants) */
export const Sizes: Story = {
  render: (_) => (
    <div className='~flex ~flex-col ~gap-2'>
      <div className='~flex ~flex-wrap ~gap-2'>
        <Badge>Default</Badge>
        <Badge variant='secondary'>Secondary</Badge>
        <Badge variant='success'>Success</Badge>
        <Badge variant='destructive'>Destructive</Badge>
        <Badge variant='outline'>Outline</Badge>
      </div>
      <div className='~flex ~flex-wrap ~gap-2'>
        <Badge size='small'>Default (sm)</Badge>
        <Badge variant='secondary' size='small'>
          Secondary (sm)
        </Badge>
        <Badge variant='success' size='small'>
          Success (sm)
        </Badge>
        <Badge variant='destructive' size='small'>
          Destructive (sm)
        </Badge>
        <Badge variant='outline' size='small'>
          Outline (sm)
        </Badge>
      </div>
      <div className='~flex ~flex-wrap ~gap-2'>
        <Badge size='small'>Default (xs)</Badge>
        <Badge variant='secondary' size='xs'>
          Secondary (xs)
        </Badge>
        <Badge variant='success' size='xs'>
          Success (xs)
        </Badge>
        <Badge variant='destructive' size='xs'>
          Destructive (xs)
        </Badge>
        <Badge variant='outline' size='xs'>
          Outline (xs)
        </Badge>
      </div>
    </div>
  ),
};
