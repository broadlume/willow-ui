import React from 'react';
import { Table } from '@tanstack/react-table';

interface HeaderOverlayToastProps<TData = unknown> {
  table: Table<TData>;
  onBulkAction?: (selectedRows: TData[]) => void;
  actionLabel?: string;
  className?: string;
}

export function HeaderOverlayToast<TData>({
  table,
  onBulkAction,
  actionLabel = 'Action',
  className = '',
}: HeaderOverlayToastProps<TData>) {
  const selectedRows = table.getSelectedRowModel().rows;
  const selectedCount = selectedRows.length;

  if (selectedCount === 0) {
    return null;
  }

  const selectedData = selectedRows.map((row) => row.original);

  return (
    <div className={`${className}`}>
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-2 text-blue-800'>
          <span className='font-medium text-sm'>
            {selectedCount} item{selectedCount !== 1 ? 's' : ''} selected
          </span>
        </div>

        <div className='flex items-center space-x-2'>
          {onBulkAction && (
            <button
              onClick={() => onBulkAction(selectedData)}
              className='bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 transition-colors'
            >
              {actionLabel}
            </button>
          )}
          <button
            onClick={() => table.resetRowSelection()}
            className='text-blue-600 hover:text-blue-800 font-medium text-sm px-2 py-1 rounded hover:bg-blue-100 transition-colors'
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export { HeaderOverlayToast as default };
