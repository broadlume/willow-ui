import { Meta, StoryObj } from '@storybook/react';

import { Separator } from './Separator';

const meta: Meta<typeof Separator> = {
  component: Separator,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  render: (_) => (
    <div className='w-max'>
      <div className='space-y-1'>
        <p className='body-medium-base font-medium'>Radix Primitives</p>
        <p className='text-muted-foreground'>
          An open-source UI component library.
        </p>
      </div>
      <Separator className='my-4' />
      <div className='flex h-5 items-center space-x-4'>
        <p>Blog</p>
        <Separator orientation='vertical' />
        <p>Docs</p>
        <Separator orientation='vertical' />
        <p>Source</p>
      </div>
    </div>
  ),
};

export const Horizontal: Story = {
  render: (_) => (
    <div className='flex w-max flex-col items-center space-y-4'>
      <p>Item 1</p>
      <Separator />
      <p>Item 2</p>
      <Separator />
      <p>Item 3</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: (_) => (
    <div className='flex h-5 flex-row items-center space-x-4'>
      <p>Item 1</p>
      <Separator orientation='vertical' />
      <p>Item 2</p>
      <Separator orientation='vertical' />
      <p>Item 3</p>
    </div>
  ),
};
