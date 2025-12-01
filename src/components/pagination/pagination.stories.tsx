import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Pagination } from './pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: () => {
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);

    return (
      <div className='w-[800px]'>
        <Pagination
          pageIndex={pageIndex}
          pageSize={pageSize}
          totalItems={100}
          onPageChange={setPageIndex}
          onPageSizeChange={setPageSize}
        />
      </div>
    );
  },
};

export const WithPageNumbers: Story = {
  render: () => {
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);

    return (
      <div className='w-[800px]'>
        <Pagination
          pageIndex={pageIndex}
          pageSize={pageSize}
          totalItems={100}
          onPageChange={setPageIndex}
          onPageSizeChange={setPageSize}
          showPageNumbers={true}
        />
      </div>
    );
  },
};

export const LargeDataset: Story = {
  render: () => {
    const [pageIndex, setPageIndex] = useState(5);
    const [pageSize, setPageSize] = useState(20);

    return (
      <div className='w-[800px]'>
        <Pagination
          pageIndex={pageIndex}
          pageSize={pageSize}
          totalItems={1000}
          pageSizeOptions={[10, 20, 50, 100]}
          onPageChange={setPageIndex}
          onPageSizeChange={setPageSize}
          showPageNumbers={true}
        />
      </div>
    );
  },
};

export const CustomPageSizes: Story = {
  render: () => {
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(25);

    return (
      <div className='w-[800px]'>
        <Pagination
          pageIndex={pageIndex}
          pageSize={pageSize}
          totalItems={250}
          pageSizeOptions={[25, 50, 100, 200]}
          onPageChange={setPageIndex}
          onPageSizeChange={setPageSize}
        />
      </div>
    );
  },
};

export const FirstPage: Story = {
  render: () => {
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);

    return (
      <div className='w-[800px]'>
        <Pagination
          pageIndex={pageIndex}
          pageSize={pageSize}
          totalItems={50}
          onPageChange={setPageIndex}
          onPageSizeChange={setPageSize}
          showPageNumbers={true}
        />
      </div>
    );
  },
};

export const LastPage: Story = {
  render: () => {
    const [pageIndex, setPageIndex] = useState(4);
    const [pageSize, setPageSize] = useState(10);

    return (
      <div className='w-[800px]'>
        <Pagination
          pageIndex={pageIndex}
          pageSize={pageSize}
          totalItems={50}
          onPageChange={setPageIndex}
          onPageSizeChange={setPageSize}
          showPageNumbers={true}
        />
      </div>
    );
  },
};

export const EmptyDataset: Story = {
  render: () => {
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(10);

    return (
      <div className='w-[800px]'>
        <Pagination
          pageIndex={pageIndex}
          pageSize={pageSize}
          totalItems={0}
          onPageChange={setPageIndex}
          onPageSizeChange={setPageSize}
        />
      </div>
    );
  },
};
