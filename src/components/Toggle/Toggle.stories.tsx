import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';
import { EyeNoneIcon, EyeOpenIcon } from '@radix-ui/react-icons';

const meta = {
  title: 'Atoms/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'text' },
      description: 'Text to display',
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A two-state button that can be either on or off.',
      },
    },
  },
  args: {
    children: 'Toggle Me!',
  },
};

export const IconToggle: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Toggling an icon to show toggle state.',
      },
    },
  },
  args: {
    children: 'Toggle Me!',
    activeContent: <EyeOpenIcon />,
    inactiveContent: <EyeNoneIcon />,
  },
};
