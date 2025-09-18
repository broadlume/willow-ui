import { Meta, StoryObj } from '@storybook/react';
import { CopyButton } from './copy-button';

const meta: Meta<typeof CopyButton> = {
  title: 'Misc/Copy Button',
  component: CopyButton,
  args: {
    value: 'Copy this text',
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof CopyButton>;

export const Default: Story = {};
