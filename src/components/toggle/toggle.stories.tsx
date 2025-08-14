import type { Meta, StoryObj } from '@storybook/react';

import { Toggle } from './toggle';

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  title: 'Components/Toggle',
  argTypes: {
    disabled: {
      description: 'Whether the toggle button is disabled.',
      control: 'boolean',
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  argTypes: {
    style: {
      description: 'The style of the button.',
      control: 'select',
      options: ['default', 'outline'],
    },
    shape: {
      description: 'The shape of the button.',
      control: 'select',
      options: ['default', 'pill'],
    },
    size: {
      description: 'The size of the button.',
      control: 'select',
      options: ['xs', 'sm', 'default', 'lg'],
    },
  },
  render: (args) => <Toggle {...args}>Click me!</Toggle>,
};

/** All toggle styles. */
export const Styles: Story = {
  render: (_) => (
    <div className='flex gap-2'>
      <Toggle>Default</Toggle>
      <Toggle style='outline'>Outline</Toggle>
    </div>
  ),
};

/** All toggle shapes. */
export const Shapes: Story = {
  render: (_) => (
    <div className='flex gap-2'>
      <Toggle style='outline'>Default</Toggle>
      <Toggle style='outline' shape='pill'>
        Pill
      </Toggle>
    </div>
  ),
};

/** All toggle sizes. */
export const Sizes: Story = {
  render: (_) => (
    <div className='flex gap-2'>
      <Toggle size='lg' style='outline'>
        Large (lg)
      </Toggle>
      <Toggle style='outline'>Default</Toggle>
      <Toggle size='sm' style='outline'>
        Small (sm)
      </Toggle>
      <Toggle size='xs' style='outline'>
        X-Small (xs)
      </Toggle>
    </div>
  ),
};

/** Disabled toggles. */
export const Disabled: Story = {
  render: (_) => (
    <div className='flex gap-2'>
      <Toggle disabled>Default</Toggle>
      <Toggle disabled style='outline'>
        Outline
      </Toggle>
    </div>
  ),
};
