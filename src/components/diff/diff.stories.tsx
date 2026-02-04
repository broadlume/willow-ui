import type { Meta, StoryObj } from '@storybook/react';

import { Diff, DiffItem } from './diff';

const meta: Meta<typeof Diff> = {
  title: 'Components/Diff',
  component: Diff,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Diff>;

export const ImageComparison: Story = {
  render: () => (
    <Diff className='w-[600px]'>
      <DiffItem floatingLabel='Before'>
        <img
          src='https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp'
          alt='Before'
          className='block h-auto w-full object-cover'
        />
      </DiffItem>
      <DiffItem floatingLabel='After'>
        <img
          src='https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp'
          alt='After'
          className='block h-auto w-full object-cover'
        />
      </DiffItem>
    </Diff>
  ),
};

export const ColorComparison: Story = {
  render: () => (
    <Diff className='w-[400px]'>
      <DiffItem>
        <div className='h-[400px] w-full bg-gradient-to-br from-blue-500 to-purple-600' />
      </DiffItem>
      <DiffItem>
        <div className='h-[400px] w-full bg-gradient-to-br from-red-500 to-orange-600' />
      </DiffItem>
    </Diff>
  ),
};

export const BeforeAfterKitchen: Story = {
  render: () => (
    <div className='space-y-4'>
      <div className='text-center'>
        <h2 className='text-2xl font-bold'>Kitchen Renovation</h2>
        <p className='text-muted-foreground'>Drag the slider to compare</p>
      </div>
      <Diff className='w-[800px] rounded-lg'>
        <DiffItem>
          <div className='flex h-[450px] w-full items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300'>
            <div className='rounded-lg bg-white/90 p-4 shadow-lg'>
              <p className='text-sm font-semibold text-gray-800'>Before</p>
            </div>
          </div>
        </DiffItem>
        <DiffItem>
          <div className='flex h-[450px] w-full items-center justify-center bg-gradient-to-br from-amber-100 to-orange-200'>
            <div className='rounded-lg bg-white/90 p-4 shadow-lg'>
              <p className='text-sm font-semibold text-gray-800'>After</p>
            </div>
          </div>
        </DiffItem>
      </Diff>
    </div>
  ),
};

export const ProductImageComparison: Story = {
  render: () => (
    <Diff className='w-[400px] rounded-lg border-2'>
      <DiffItem>
        <div className='flex h-[400px] w-full flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 p-8'>
          <div className='mb-4 size-32 rounded-full bg-slate-400' />
          <h3 className='text-lg font-semibold text-slate-700'>Original</h3>
        </div>
      </DiffItem>
      <DiffItem>
        <div className='flex h-[400px] w-full flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 p-8'>
          <div className='mb-4 size-32 rounded-full bg-blue-400' />
          <h3 className='text-lg font-semibold text-blue-700'>Enhanced</h3>
        </div>
      </DiffItem>
    </Diff>
  ),
};
