import { Meta, StoryObj } from '@storybook/react';
import { VariantsTypographyDemo } from './VariantsTypographyDemo';

const meta = {
  title: 'Typography/Variants',
  component: VariantsTypographyDemo,
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
} as Meta<typeof VariantsTypographyDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  parameters: {
    docs: {
      description: {
        story: 'All typography defaults for different classnames.',
      },
    },
  },
  args: {
    input:
      'Quis suspendisse laoreet adipiscing vitae. Id viverra sollicitudin enim neque, lobortis ac mauris non vestibulum.',
  },
};
