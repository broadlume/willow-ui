import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import config from '../../../tailwind.config';
import { useState } from 'react';
const colors = config.theme.extend.colors;

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

export const Counter: Story = {
  args: {
    children: '+',
    variant: 'primary',
  },
  render: (args) => {
    const [count, setCount] = useState(0);
    return (
      <div className='flex items-center'>
        <Button {...args} onClick={() => setCount((count) => count + 1)}>
          {args.children}
        </Button>
        <span className='ml-2'>{count}</span>
      </div>
    );
  },
};
