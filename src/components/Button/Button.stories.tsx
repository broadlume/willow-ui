import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import config from '../../../tailwind.config';
const { theme: { extend: { colors } = {} } = {} } = config;

const meta = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'text' },
      description: 'Text to display',
    },
  },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    children: 'Button Label',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  parameters: {
    backgrounds: {
      default: 'ash',
      values: [{ name: 'ash', value: colors?.ash.DEFAULT }],
    },
  },
  args: {
    children: 'Button Label',
    variant: 'secondary',
  },
};

export const SecondaryDark: Story = {
  args: {
    children: 'Button Label',
    variant: 'secondary-dark',
  },
};
