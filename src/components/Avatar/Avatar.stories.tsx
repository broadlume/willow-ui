import { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarFallback, AvatarImage } from './Avatar';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'range',
        min: 10,
        max: 200,
        step: 1,
      },
      defaultValue: 40,
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Demo: Story = {
  args: {
    size: 40,
  },
  render: (args) => (
    <Avatar {...args}>
      <AvatarImage src='https://github.com/dreadhalor.png' />
      <AvatarFallback>SH</AvatarFallback>
    </Avatar>
  ),
};
