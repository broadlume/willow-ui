import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A basic text input field.',
      },
    },
  },
};

export const Password = {
  parameters: {
    docs: {
      description: {
        story: 'A password input field.',
      },
    },
  },
  args: {
    type: 'password',
  },
};
