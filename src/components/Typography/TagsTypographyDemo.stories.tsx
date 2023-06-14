import type { Meta, StoryObj } from '@storybook/react';
import { TagsTypographyDemo } from './TagsTypographyDemo';

const meta = {
  title: 'Typography/Tags',
  component: TagsTypographyDemo,
  tags: ['autodocs'],
  argTypes: {
    input: {
      control: { type: 'text' },
      description: 'Text to display',
    },
    color: {
      control: { type: 'text' },
    },
  },
} as Meta<typeof TagsTypographyDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {
    input: 'Lorem ipsum & all that jazz',
  },
  parameters: {
    docs: {
      description: {
        story: 'All typography defaults for HTML tags.',
      },
    },
  },
};
