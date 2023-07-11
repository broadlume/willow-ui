import { Meta, StoryObj } from '@storybook/react';

import { Slider } from './Slider';
import { Multiple } from '../Accordion/Accordion.stories';

const meta: Meta<typeof Slider> = {
  component: Slider,
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
  },
  render: (args) => (
    <Slider
      defaultValue={[20]}
      max={100}
      step={1}
      className='w-[50%]'
      {...args}
    />
  ),
};

export const Disabled: Story = {
  render: (_) => (
    <Slider
      className='w-[50%]'
      defaultValue={[50]}
      max={100}
      step={1}
      disabled
    />
  ),
};

export const RangeSlider: Story = {
  render: (_) => (
    <div className='flex gap-4'>
      <Slider className='w-[50%]' defaultValue={[20, 60]} max={100} step={1} />
    </div>
  ),
};
