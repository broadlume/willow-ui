import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  title: 'Components/Textarea',
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: "Tell me about your day... or don't, I'm not your therapist",
  },

  render: (args) => <Textarea {...args} />,
};
