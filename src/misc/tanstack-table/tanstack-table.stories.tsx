import type { Meta, StoryObj } from '@storybook/react';
import { useDataTable } from './Table';
import { columns, Payment, payments } from './data';
import { useState } from 'react';

const TanStackTable = () => {
  const { CustomDataTable, table } = useDataTable({
    columns: columns,
    data: payments,
    tableParams: {
      manualPagination: false,
    },
    includeLoading: false, // Disable loading state for this example [This is true by default]
    enableRowSelection: true,
  });
  return <CustomDataTable />;
};

const meta: Meta<typeof TanStackTable> = {
  component: TanStackTable,
  title: 'Tanstack Data Table',
};

export default meta;
type Story = StoryObj<typeof TanStackTable>;

export const Demo: Story = {
  render: (args) => <TanStackTable />,
};

// Story for DataTable with loading state
const TanstackTableWithLoading = () => {
  const [asyncPayments, setPayments] = useState<Payment[]>([]);

  setTimeout(() => {
    // simulate fetching data from an API
    setPayments(payments);
  }, 5000);

  const { CustomDataTable, table } = useDataTable({
    columns: columns,
    data: asyncPayments,
    tableParams: {
      manualPagination: false
    },
    enableRowSelection: true,
    // includeLoading: true, // it's true by default, so you can omit it
  });
  return <CustomDataTable />;
}

export const WithLoadingState: Story = {
  render: (args) => <TanstackTableWithLoading />,
};

// Story for DataTable without pagination
const TanstackTableWithoutPagination = () => {
  const { CustomDataTable, table } = useDataTable({
    columns: columns,
    data: payments,
    tableParams: {
      manualPagination: false,
    },
    enableRowSelection: true,
    showPagination: false, // Disable pagination
  });
  return <CustomDataTable />;
};
export const WithoutPagination: Story = {
  render: (args) => <TanstackTableWithoutPagination />,
};

// Story for DataTable with single row selection
const TanstackTableWithSingleRowSelection = () => {
  const { CustomDataTable, table } = useDataTable({
    columns: columns,
    data: payments,
    tableParams: {
      manualPagination: false,
    },
    enableRowSelection: true,
    enableSingleSelection: true, // Enable single row selection
  });
  return <CustomDataTable />;
}

export const WithSingleRowSelection: Story = {
  render: (args) => <TanstackTableWithSingleRowSelection />,
};

// Story for DataTable with custom empty message
const TanstackTableWithEmptyMessage = () => {
  const { CustomDataTable, table } = useDataTable({
    columns: columns,
    data: [], // Empty data to trigger empty state
    tableParams: {
      manualPagination: false,
    },
    enableRowSelection: true,
    emptyMessage: 'Custom empty message: No data found!',
    includeLoading: false,
  });
  return <CustomDataTable />;
};

export const EmptyMessage: Story = {
  render: (args) => <TanstackTableWithEmptyMessage />,
};

// Story for DataTable with JSX empty message
const TanstackTableWithJSXEmptyMessage = () => {
  const { CustomDataTable, table } = useDataTable({
    columns: columns,
    data: [], // Empty data to trigger empty state
    tableParams: {
      manualPagination: false,
    },
    enableRowSelection: true,
    emptyMessage: (
      <div className="~text-center ~py-8">
        <h3 className="~text-lg ~font-semibold ~text-gray-700">No Data Available</h3>
        <p className="~text-sm ~text-gray-500 ~mt-2">Try adjusting your filters or check back later.</p>
      </div>
    ),
    includeLoading: false,
  });
  return <CustomDataTable />;
};

export const JSXEmptyMessage: Story = {
  render: (args) => <TanstackTableWithJSXEmptyMessage />,
};

// Story for DataTable with dynamic background row colors
const TanstackTableWithDynamicRowColors = () => {
  const { CustomDataTable, table } = useDataTable({
    columns: columns,
    data: payments,
    tableParams: {
      manualPagination: false,
    },
    enableRowSelection: true,
    itemProps: {
      tableBodyRow: (row) => ({
        className: row.original.status === 'success' 
          ? '~bg-green-50 hover:~bg-green-100' 
          : row.original.status === 'failed'
          ? '~bg-red-50 hover:~bg-red-100'
          : row.original.status === 'processing'
          ? '~bg-blue-50 hover:~bg-blue-100'
          : row.original.status === 'pending'
          ? '~bg-yellow-50 hover:~bg-yellow-100'
          : '~bg-gray-50 hover:~bg-gray-100'
      })
    }
  });
  return <CustomDataTable />;
};

export const DynamicRowColors: Story = {
  render: (args) => <TanstackTableWithDynamicRowColors />,
};

// Story for DataTable with static background row colors
const TanstackTableWithStaticRowColors = () => {
  const { CustomDataTable, table } = useDataTable({
    columns: columns,
    data: payments,
    tableParams: {
      manualPagination: false,
    },
    enableRowSelection: true,
    itemProps: {
      tableBodyRow: {
        className: '~bg-blue-50 hover:~bg-blue-100'
      }
    }
  });
  return <CustomDataTable />;
};

export const StaticRowColors: Story = {
  render: (args) => <TanstackTableWithStaticRowColors />,
};

// Story for DataTable with sticky header and custom page size options
const TanstackTableWithStickyHeaderAndCustomPageSizes = () => {
  const { CustomDataTable, table } = useDataTable({
    columns: columns,
    data: payments,
    tableParams: {
      manualPagination: false,
    },
    enableRowSelection: true,
    initialPagination: { pageIndex: 0, pageSize: 50 }, // Initial page size
    pageSizeOptions: [10, 25, 50, 100, 250, 500, 1000], // Custom page size options
    itemProps: {
      tableWrapper: {
        enableStickyHeader: true // Enable sticky header with scrollable body
      }
    },
  });
  return <CustomDataTable />;
};

export const StickyHeaderWithCustomPageSizes: Story = {
  render: (args) => <TanstackTableWithStickyHeaderAndCustomPageSizes />,
};

