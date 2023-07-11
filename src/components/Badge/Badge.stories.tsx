import { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  component: Badge,
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
