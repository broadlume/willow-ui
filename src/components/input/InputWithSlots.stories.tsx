import type { Meta, StoryObj } from '@storybook/react';
import { MagnifyingGlassIcon, Cross2Icon } from '@radix-ui/react-icons';
import { InputWithSlots } from './InputWithSlots';

const meta: Meta<typeof InputWithSlots> = {
  component: InputWithSlots,
  title: 'Components/InputWithSlots',
  tags: ['autodocs'], // Optional: adds automatic documentation
};

export default meta;
type Story = StoryObj<typeof InputWithSlots>;

// Default story
export const Default: Story = {
  args: {
    placeholder: 'Search the docs...',
  },
};

// With prefix icon
export const WithPrefix: Story = {
  args: {
    placeholder: 'Search...',
    prefixSlot: (
      <div className='~flex ~shrink-0 ~select-none ~items-center ~px-2 ~text-base ~text-gray-500 sm:~text-sm/6'>
        <MagnifyingGlassIcon height='16' width='16' />
      </div>
    ),
  },
};

// With postfix button
export const WithPostfix: Story = {
  args: {
    placeholder: 'Enter value...',
    postfixSlot: (
      <div className='~flex ~shrink-0 ~items-center ~px-2 ~text-base ~text-gray-500 sm:~text-sm/6'>
        <Cross2Icon height='14' width='14' />
      </div>
    ),
  },
};

// With both prefix and postfix
export const WithBoth: Story = {
  args: {
    placeholder: 'Search settings...',
    prefixSlot: (
      <div className='~flex ~shrink-0 ~select-none ~items-center ~px-2 ~text-base ~text-gray-500 sm:~text-sm/6'>
        <MagnifyingGlassIcon height='16' width='16' />
      </div>
    ),
    postfixSlot: (
      <div className='~flex ~shrink-0 ~items-center ~px-2 ~text-base ~text-gray-500 sm:~text-sm/6'>
        <Cross2Icon height='14' width='14' />
      </div>
    ),
  },
};

export const WithCustomClasses: Story = {
  args: {
    label: '',
    placeholder: 'Custom styled...',
    classes: {
      inputClass: 'rounded-lg',

      labelClass: '',
      textFieldWrapClass: '',
    },
    prefixSlot: (
      <div className='~flex ~shrink-0 ~select-none ~items-center ~px-2 ~text-base ~text-gray-500 sm:~text-sm/6'>
        <MagnifyingGlassIcon height='16' width='16' />
      </div>
    ),
    postfixSlot: (
      <div className='~flex ~shrink-0 ~items-center ~px-2 ~text-base ~text-gray-500 sm:~text-sm/6'>
        <Cross2Icon height='14' width='14' />
      </div>
    ),
  },
};

export const WithClickHandler: Story = {
  args: {
    placeholder: 'Click wrapper...',
    onChange: () => {
      console.log('onChange');
    },

    wrapperProps: {
      onClick: () => {
        console.log('Wrapper clicked!');
      },
      className: 'custom_warp_class',
    },
  },
};
