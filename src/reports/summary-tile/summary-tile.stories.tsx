import type { Meta, StoryObj } from '@storybook/react';
import { SummaryTile } from './summary-tile';
import { FaMousePointer, FaPhoneAlt, FaShoppingCart } from 'react-icons/fa';
import { BsChatFill } from 'react-icons/bs';

const meta: Meta<typeof SummaryTile> = {
  component: SummaryTile,
  title: 'Reports/Summary Tile',
};

export default meta;
type Story = StoryObj<typeof meta>;

const data = [
  { number: 1355003, label: 'Sessions', delta: '6%', loading: true },
  { number: 1115314, label: 'Users', delta: '7%' },
  { number: 3945916, label: 'Page Views', delta: '6%' },
  {
    number: '1:30',
    label: 'Average Session Duration',
    delta: '-3 Second',
    negative: true,
  },
];

const stackedData = [
  {
    number: 81911,
    label: 'Total Leads',
    delta: '-5%',
    negative: true,
    loading: true,
  },
  {
    number: 57997,
    label: (
      <>
        <FaPhoneAlt />
        Calls
      </>
    ),
    delta: '-4%',
    negative: true,
  },
  {
    number: 21257,
    label: (
      <>
        <FaMousePointer />
        Forms
      </>
    ),
    delta: '-7%',
    negative: true,
    loading: true,
  },
  {
    number: 2446,
    label: (
      <>
        <BsChatFill />
        Chats
      </>
    ),
    delta: '-8%',
    negative: true,
  },
  {
    number: 57997,
    label: (
      <>
        <FaShoppingCart />
        Sample Orders
      </>
    ),
    delta: '-1%',
    negative: true,
  },
];

export const Demo: Story = {
  render: (_) => (
    <div className='~flex ~flex-wrap ~gap-4'>
      {data.map((tile) => (
        <SummaryTile {...tile} />
      ))}
    </div>
  ),
};

export const Loading: Story = {
  render: (_) => (
    <div className='~flex ~flex-wrap ~gap-4'>
      {data.map((tile) => (
        <SummaryTile {...tile} loading />
      ))}
    </div>
  ),
};

export const Stacked: Story = {
  render: (_) => (
    <div className='~grid ~grid-cols-2 ~gap-4'>
      {stackedData.map((tile, index) =>
        index === 0 ? (
          <SummaryTile stacked {...tile} className='~col-span-2 ~h-[100px]' />
        ) : (
          <SummaryTile stacked {...tile} />
        )
      )}
    </div>
  ),
};
