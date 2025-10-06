import React, { useEffect, useState } from 'react';
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
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (selectedCount > 0) {
      // Show toast: First render, then animate in
      setShouldRender(true);
      // Small delay to ensure DOM is rendered before animation
      const timer = setTimeout(() => setIsVisible(true), 10);
      return () => clearTimeout(timer);
    } else {
      // Hide toast: First animate out, then remove from DOM
      setIsVisible(false);
      // Wait for animation to complete before removing from DOM
      const timer = setTimeout(() => setShouldRender(false), 200);
      return () => clearTimeout(timer);
    }
  }, [selectedCount]);

  if (!shouldRender) {
    return null;
  }

  const selectedData = selectedRows.map((row) => row.original);

  return (
    <div
      className={`
        transform transition-all duration-200 ease-in-out
        ${
          isVisible
            ? 'translate-y-0 opacity-100'
            : '-translate-y-full opacity-0'
        }
        ${className}
      `}
      style={{
        // Ensure smooth animation by setting initial state
        willChange: 'transform, opacity',
      }}
    >
      <div className='flex items-center justify-between p-3 bg-blue-50 border-b border-blue-200'>
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
