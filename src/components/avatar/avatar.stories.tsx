import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  title: 'Components/Avatar',
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
      <AvatarImage src='https://github.com/dreadhalor.png' alt='Dreadhalor' />
      <AvatarFallback>SH</AvatarFallback>
    </Avatar>
  ),
};
export const Fallback: Story = {
  args: {
    size: 40,
  },
  render: (args) => (
    <Avatar {...args}>
      <AvatarFallback>SH</AvatarFallback>
    </Avatar>
  ),
};
