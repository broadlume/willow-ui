import type { Meta, StoryObj } from '@storybook/react';
import {Loader} from './Loader';


const meta: Meta<typeof Loader> = {
  component: Loader,
  title: 'Components/Loader',
};

export default meta;
type Story = StoryObj<typeof Loader>;

/** A basic Loader. */
export const Basic: Story = {
  argTypes: {
    className: ['~text-primary-500'],
  },
  render: () => (
    <div className='~flex ~items-center ~space-x-2'>
      <Loader className='~w-6 ~h-6' />
    </div>
  ),
};

