import type { Meta, StoryObj } from '@storybook/react';
import { useDataTable } from './Table';
import { columns, payments } from './data';
const TanStackTable = () => {
  const { CustomDataTable, table } = useDataTable({
    columns: columns,
    data: payments,
    tableParams: {
      manualPagination: false,
    }
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
