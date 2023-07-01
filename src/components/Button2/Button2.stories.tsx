import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button2';
import config from '../../../tailwind.config';
const colors = config.theme.extend.colors;

const meta = {
  title: 'Atoms/Button2',
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
  },
};

export const Secondary: Story = {
  parameters: {
    backgrounds: {
      default: 'ash',
      values: [{ name: 'ash', value: colors.ash.DEFAULT }],
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
