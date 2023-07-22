import type { Meta, StoryObj } from '@storybook/react';

import { Slider } from './Slider';

const meta: Meta<typeof Slider> = {
  component: Slider,
  title: 'Components/Slider',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  argTypes: {
    disabled: {
      description: 'Whether the slider is disabled.',
      control: 'boolean',
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
  render: (args) => (
    <Slider
      className='~w-[300px]'
      defaultValue={[20]}
      max={100}
      step={1}
      {...args}
    />
  ),
};

export const Disabled: Story = {
  render: (_) => (
    <Slider
      className='~w-[300px]'
      defaultValue={[50]}
      max={100}
      step={1}
      disabled
    />
  ),
};

export const RangeSlider: Story = {
  render: (_) => (
    <Slider className='~w-[300px]' defaultValue={[20, 60]} max={100} step={1} />
  ),
};
