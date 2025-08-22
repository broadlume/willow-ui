import type { Meta, StoryObj } from '@storybook/react';
import { useDataTable } from './Table';
import { columns, Payment, payments } from './data';
import { useState } from 'react';
import clsx from 'clsx';

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
      manualPagination: false,
    },
    enableRowSelection: true,
    includeLoading: true, // it's true by default, so you can omit it
  });
  return <CustomDataTable />;
};

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
};

export const WithSingleRowSelection: Story = {
  render: (args) => <TanstackTableWithSingleRowSelection />,
};

// Story for DataTable with custom no data found message
const TanstackTableWithWithNoDataFoundMessage = () => {
  const { CustomDataTable, table } = useDataTable({
    columns: columns,
    data: [],
    tableParams: {
      manualPagination: false,
    },
    enableRowSelection: true,
    noRecordFoundMessage: 'Custom empty message: No data found!',
    includeLoading: false,
  });
  return <CustomDataTable />;
};

export const WithNoDataFoundMessage: Story = {
  render: (args) => <TanstackTableWithWithNoDataFoundMessage />,
};

// Story for DataTable with dynamic no data found message
const TanstackTableWithDynamicNoDataFoundMessage = () => {
  const { CustomDataTable, table } = useDataTable({
    columns: columns,
    data: [],
    tableParams: {
      manualPagination: false,
    },
    enableRowSelection: true,
    noRecordFoundMessage: (
      <div className="~text-center ~py-8">
        <h3 className="~text-lg ~font-semibold ~text-gray-700">No Data Available</h3>
        <p className="~text-sm ~text-gray-500 ~mt-2">Try adjusting your filters or check back later.</p>
      </div>
    ),
    includeLoading: false,
  });
  return <CustomDataTable />;
};

export const WithDynamicNoDataFoundMessage: Story = {
  render: (args) => <TanstackTableWithDynamicNoDataFoundMessage />,
};

// Story for DataTable with dynamic background row style
const TanstackTableWithDynamicRowStyle = () => {
  const { CustomDataTable, table } = useDataTable({
    columns: columns,
    data: payments,
    tableParams: {
      manualPagination: false,
    },
    enableRowSelection: true,
    itemProps: {
       tableBodyRow: (row) => ({
        className: clsx({
          '~bg-green-50 hover:~bg-green-100': row.original.status === 'success',
          '~bg-red-50 hover:~bg-red-100': row.original.status === 'failed',
          '~bg-blue-50 hover:~bg-blue-100': row.original.status === 'processing',
          '~bg-yellow-50 hover:~bg-yellow-100': row.original.status === 'pending',
          '~bg-gray-50 hover:~bg-gray-100': !['success', 'failed', 'processing', 'pending'].includes(row.original.status)
        })
      })
    }
  });
  return <CustomDataTable />;
};

export const WithDynamicRowStyle: Story = {
  render: (args) => <TanstackTableWithDynamicRowStyle />,
};

// Story for DataTable with global dynamic row style
const TanstackTableWithGlobalDynamicRowStyle = () => {
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

export const WithGlobalDynamicRowStyle: Story = {
  render: (args) => <TanstackTableWithGlobalDynamicRowStyle />,
};

// Story for DataTable with sticky header
const TanstackTableWithStickyHeader = () => {
  const { CustomDataTable, table } = useDataTable({
    columns: columns,
    data: payments,
    tableParams: {
      manualPagination: false,
    },
    enableRowSelection: true,
    initialPagination: { pageIndex: 0, pageSize: 20 },
    itemProps: {
      tableWrapper: {
        enableStickyHeader: true
      }
    },
  });
  return <CustomDataTable />;
};

export const WithStickyHeader: Story = {
  render: (args) => <TanstackTableWithStickyHeader />,
};

// Story for DataTable with dynamic page size options
const TanstackTableWithDynamicPageSizeOptions = () => {
  const { CustomDataTable, table } = useDataTable({
    columns: columns,
    data: payments,
    tableParams: {
      manualPagination: false,
    },
    enableRowSelection: true,
    initialPagination: { pageIndex: 0, pageSize: 50 },
    pageSizeOptions: [10, 25, 50, 100, 250, 500, 1000],
  });
  return <CustomDataTable />;
};

export const WithDynamicPageSizeOptions: Story = {
  render: (args) => <TanstackTableWithDynamicPageSizeOptions />,
};


