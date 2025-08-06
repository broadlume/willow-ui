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
