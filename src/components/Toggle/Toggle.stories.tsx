import { Meta, StoryObj } from '@storybook/react';

import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  argTypes: {
    variant: {
      description: 'The variant of the button.',
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
      options: ['sm', 'default', 'lg'],
    },
  },
  render: (args) => <Toggle {...args}>Click me!</Toggle>,
};

export const Styles: Story = {
  render: (_) => (
    <div className='flex gap-2'>
      <Toggle>Default</Toggle>
      <Toggle variant='outline'>Outline</Toggle>
    </div>
  ),
};

export const Shapes: Story = {
  render: (_) => (
    <div className='flex gap-2'>
      <Toggle variant='outline'>Default</Toggle>
      <Toggle variant='outline' shape='pill'>
        Pill
      </Toggle>
    </div>
  ),
};

export const Sizes: Story = {
  render: (_) => (
    <div className='flex gap-2'>
      <Toggle size='lg' variant='outline'>
        Large
      </Toggle>
      <Toggle variant='outline'>Default</Toggle>
      <Toggle size='sm' variant='outline'>
        Small
      </Toggle>
    </div>
  ),
};

export const Disabled: Story = {
  render: (_) => (
    <div className='flex gap-2'>
      <Toggle disabled>Default</Toggle>
      <Toggle disabled variant='outline'>
        Outline
      </Toggle>
    </div>
  ),
};