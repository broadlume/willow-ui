import type { Meta, StoryObj } from '@storybook/react';
import { SummaryTile, SummaryTileNumProps } from './summary-tile';
import { FaMousePointer, FaPhoneAlt, FaShoppingCart } from 'react-icons/fa';
import { BsChatFill } from 'react-icons/bs';

const meta: Meta<typeof SummaryTile> = {
  component: SummaryTile,
  title: 'Reports/Summary Tile',
};

export default meta;
type Story = StoryObj<typeof meta>;

const data: SummaryTileNumProps[] = [
  {
    label: 'Users',
    current: 18246,
    previous: 19328,
  },
  {
    label: 'Sessions',
    current: 10311,
    previous: 10018,
  },
  {
    label: 'Lawsuits',
    current: 19605,
    previous: 21967,
    negativeIsGood: true,
  },
  {
    label: 'Page Views',
    current: 11674,
  },
];

const customData: SummaryTileNumProps[] = [
  {
    current: '1:30',
    label: 'Average Session Duration',
    delta: '-3 Second',
    negative: true,
  },
  {
    current: '0:10',
    label: 'Average Page Load',
    delta: '-8 Second',
    negative: true,
    negativeIsGood: true,
  },
];

const stackedData: SummaryTileNumProps[] = [
  {
    current: 81911,
    previous: 86006,

    label: 'Total Leads',
  },
  {
    current: 57997,
    label: (
      <>
        <FaPhoneAlt />
        Calls
      </>
    ),
  },
  {
    current: 21257,
    previous: 19866,
    label: (
      <>
        <FaMousePointer />
        Forms
      </>
    ),
  },
  {
    current: 2446,
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
    current: 57997,
    previous: 58577,
    label: (
      <>
        <FaShoppingCart />
        Sample Orders
      </>
    ),
  },
];

export const Demo: Story = {
  render: (_) => (
    <div className='~flex ~flex-wrap ~gap-4'>
      {data.map((tile, index) => (
        <SummaryTile key={index} {...tile} />
      ))}
    </div>
  ),
};
export const CustomUnits: Story = {
  render: (_) => (
    <div className='~flex ~flex-wrap ~gap-4'>
      {customData.map((tile, index) => (
        <SummaryTile key={index} {...tile} />
      ))}
    </div>
  ),
};

export const Loading: Story = {
  render: (_) => (
    <div className='~flex ~flex-wrap ~gap-4'>
      {data.map((tile, index) => (
        <SummaryTile key={index} {...tile} loading />
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

export const StackedLoading: Story = {
  render: (_) => (
    <div className='~grid ~grid-cols-2 ~gap-4'>
      {stackedData.map((tile, index) =>
        index === 0 ? (
          <SummaryTile
            stacked
            {...tile}
            className='~col-span-2 ~h-[100px]'
            loading
          />
        ) : (
          <SummaryTile stacked {...tile} loading />
        )
      )}
    </div>
  ),
};
