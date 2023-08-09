import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'Components/Input',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A basic input.',
      },
    },
  },
  args: {
    type: 'text',
    placeholder: 'Placeholder text',
    disabled: false,
  },
};
