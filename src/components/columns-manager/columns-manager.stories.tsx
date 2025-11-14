import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Button } from '@components/button';
import { ColumnManager } from './columns-manager';
import type { Column } from '@src/lib/hooks/useColumnVisibility';

const meta: Meta<typeof ColumnManager> = {
  component: ColumnManager,
  title: 'Components/ColumnManager',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Controls whether the column manager modal is open',
    },
    onClose: {
      action: 'closed',
      description: 'Callback function called when the modal is closed',
    },
    columns: {
      description: 'Array of column objects that can be managed',
    },
    visibleColumnIds: {
      description: 'Array of column IDs that are currently visible',
    },
    toggleColumnVisibility: {
      action: 'toggled',
      description: 'Function to toggle column visibility',
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ColumnManager>;

// Sample column data for stories
const sampleColumns: Column[] = [
  { id: 'name', header: 'Name', accessorKey: 'name' },
  { id: 'email', header: 'Email', accessorKey: 'email' },
  { id: 'phone', header: 'Phone', accessorKey: 'phone' },
  { id: 'company', header: 'Company', accessorKey: 'company' },
  { id: 'position', header: 'Position', accessorKey: 'position' },
  { id: 'department', header: 'Department', accessorKey: 'department' },
  { id: 'salary', header: 'Salary', accessorKey: 'salary' },
  { id: 'startDate', header: 'Start Date', accessorKey: 'startDate' },
  { id: 'location', header: 'Location', accessorKey: 'location' },
  { id: 'status', header: 'Status', accessorKey: 'status' },
];

const initialVisibleColumns = ['name', 'email', 'company', 'position', 'status'];

// Component wrapper to handle state
const DefaultColumnManagerWrapper: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleColumnIds, setVisibleColumnIds] = useState(initialVisibleColumns);

  const handleToggleColumnVisibility = (columnId: string) => {
    setVisibleColumnIds((prev) =>
      prev.includes(columnId)
        ? prev.filter((id) => id !== columnId)
        : [...prev, columnId]
    );
  };

  return (
    <div className="p-4">
      <Button onClick={() => setIsOpen(true)}>Open Column Manager</Button>
      
      <ColumnManager
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        columns={sampleColumns}
        visibleColumnIds={visibleColumnIds}
        toggleColumnVisibility={handleToggleColumnVisibility}
      />
      
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Currently Visible Columns:</h3>
        <ul className="list-disc list-inside">
          {visibleColumnIds.map((id) => {
            const column = sampleColumns.find((col) => col.id === id);
            return (
              <li key={id} className="text-sm">
                {typeof column?.header === 'string' ? column.header : column?.header ? '[Custom Header]' : id}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

/** Default column manager with sample data */
export const Default: Story = {
  render: () => <DefaultColumnManagerWrapper />,
};

// Always open wrapper component
const AlwaysOpenWrapper: React.FC = () => {
  const [visibleColumnIds, setVisibleColumnIds] = useState(initialVisibleColumns);

  const handleToggleColumnVisibility = (columnId: string) => {
    setVisibleColumnIds((prev) =>
      prev.includes(columnId)
        ? prev.filter((id) => id !== columnId)
        : [...prev, columnId]
    );
  };

  return (
    <ColumnManager
      isOpen={true}
      columns={sampleColumns}
      visibleColumnIds={visibleColumnIds}
      toggleColumnVisibility={handleToggleColumnVisibility}
      onClose={() => console.log('Close clicked')}
    />
  );
};

/** Column manager that opens automatically (for demonstration) */
export const AlwaysOpen: Story = {
  render: () => <AlwaysOpenWrapper />,
};

// Minimal columns wrapper component
const MinimalColumnsWrapper: React.FC = () => {
  const minimalColumns: Column[] = [
    { id: 'id', header: 'ID', accessorKey: 'id' },
    { id: 'name', header: 'Name', accessorKey: 'name' },
    { id: 'status', header: 'Status', accessorKey: 'status' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [visibleColumnIds, setVisibleColumnIds] = useState(['id', 'name']);

  const handleToggleColumnVisibility = (columnId: string) => {
    setVisibleColumnIds((prev) =>
      prev.includes(columnId)
        ? prev.filter((id) => id !== columnId)
        : [...prev, columnId]
    );
  };

  return (
    <div className="p-4">
      <Button onClick={() => setIsOpen(true)}>Open Column Manager</Button>
      
      <ColumnManager
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        columns={minimalColumns}
        visibleColumnIds={visibleColumnIds}
        toggleColumnVisibility={handleToggleColumnVisibility}
      />
    </div>
  );
};

/** Column manager with fewer columns */
export const MinimalColumns: Story = {
  render: () => <MinimalColumnsWrapper />,
};

// Many columns wrapper component
const ManyColumnsWrapper: React.FC = () => {
  const manyColumns: Column[] = [
    { id: 'col1', header: 'Column 1', accessorKey: 'col1' },
    { id: 'col2', header: 'Column 2', accessorKey: 'col2' },
    { id: 'col3', header: 'Column 3', accessorKey: 'col3' },
    { id: 'col4', header: 'Column 4', accessorKey: 'col4' },
    { id: 'col5', header: 'Column 5', accessorKey: 'col5' },
    { id: 'col6', header: 'Column 6', accessorKey: 'col6' },
    { id: 'col7', header: 'Column 7', accessorKey: 'col7' },
    { id: 'col8', header: 'Column 8', accessorKey: 'col8' },
    { id: 'col9', header: 'Column 9', accessorKey: 'col9' },
    { id: 'col10', header: 'Column 10', accessorKey: 'col10' },
    { id: 'col11', header: 'Column 11', accessorKey: 'col11' },
    { id: 'col12', header: 'Column 12', accessorKey: 'col12' },
    { id: 'col13', header: 'Column 13', accessorKey: 'col13' },
    { id: 'col14', header: 'Column 14', accessorKey: 'col14' },
    { id: 'col15', header: 'Column 15', accessorKey: 'col15' },
    { id: 'col16', header: 'Column 16', accessorKey: 'col16' },
    { id: 'col17', header: 'Column 17', accessorKey: 'col17' },
    { id: 'col18', header: 'Column 18', accessorKey: 'col18' },
    { id: 'col19', header: 'Column 19', accessorKey: 'col19' },
    { id: 'col20', header: 'Column 20', accessorKey: 'col20' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [visibleColumnIds, setVisibleColumnIds] = useState([
    'col1', 'col2', 'col3', 'col4', 'col5'
  ]);

  const handleToggleColumnVisibility = (columnId: string) => {
    setVisibleColumnIds((prev) =>
      prev.includes(columnId)
        ? prev.filter((id) => id !== columnId)
        : [...prev, columnId]
    );
  };

  return (
    <div className="p-4">
      <Button onClick={() => setIsOpen(true)}>Open Column Manager (Many Columns)</Button>
      
      <ColumnManager
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        columns={manyColumns}
        visibleColumnIds={visibleColumnIds}
        toggleColumnVisibility={handleToggleColumnVisibility}
      />
      
      <div className="mt-4">
        <p className="text-sm text-gray-600">
          This story demonstrates the column manager with many columns to test scrolling and search functionality.
        </p>
      </div>
    </div>
  );
};

/** Column manager with many columns to test scrolling */
export const ManyColumns: Story = {
  render: () => <ManyColumnsWrapper />,
};

// All hidden wrapper component
const AllHiddenWrapper: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleColumnIds, setVisibleColumnIds] = useState<string[]>([]);

  const handleToggleColumnVisibility = (columnId: string) => {
    setVisibleColumnIds((prev) =>
      prev.includes(columnId)
        ? prev.filter((id) => id !== columnId)
        : [...prev, columnId]
    );
  };

  return (
    <div className="p-4">
      <Button onClick={() => setIsOpen(true)}>Open Column Manager (All Hidden)</Button>
      
      <ColumnManager
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        columns={sampleColumns}
        visibleColumnIds={visibleColumnIds}
        toggleColumnVisibility={handleToggleColumnVisibility}
      />
      
      <div className="mt-4">
        <p className="text-sm text-gray-600">
          This story shows the column manager when all columns are initially hidden.
        </p>
        {visibleColumnIds.length === 0 && (
          <p className="text-sm text-red-600 mt-2">
            No columns are currently visible!
          </p>
        )}
      </div>
    </div>
  );
};

/** Column manager with all columns hidden initially */
export const AllHidden: Story = {
  render: () => <AllHiddenWrapper />,
};

// All visible wrapper component
const AllVisibleWrapper: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleColumnIds, setVisibleColumnIds] = useState(
    sampleColumns.map((col) => col.id)
  );

  const handleToggleColumnVisibility = (columnId: string) => {
    setVisibleColumnIds((prev) =>
      prev.includes(columnId)
        ? prev.filter((id) => id !== columnId)
        : [...prev, columnId]
    );
  };

  return (
    <div className="p-4">
      <Button onClick={() => setIsOpen(true)}>Open Column Manager (All Visible)</Button>
      
      <ColumnManager
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        columns={sampleColumns}
        visibleColumnIds={visibleColumnIds}
        toggleColumnVisibility={handleToggleColumnVisibility}
      />
      
      <div className="mt-4">
        <p className="text-sm text-gray-600">
          This story shows the column manager when all columns are initially visible.
        </p>
      </div>
    </div>
  );
};

/** Column manager with all columns visible initially */
export const AllVisible: Story = {
  render: () => <AllVisibleWrapper />,
};