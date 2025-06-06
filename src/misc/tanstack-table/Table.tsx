'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@components/ui/table';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import React, { useState } from 'react';
import { columns, payments } from './data';
import { cn } from '@src/lib/utils';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  topChildren?: React.ReactNode;
  bottomChildren?: React.ReactNode;
  itemProps?: {
    root?: React.HTMLAttributes<HTMLDivElement>;
    tableWrapper?: React.HTMLAttributes<HTMLDivElement>;
    table?: React.HTMLAttributes<HTMLTableElement>;
    tableHeader?: React.HTMLAttributes<HTMLTableSectionElement>;
    tableHeaderRow?: React.HTMLAttributes<HTMLTableRowElement>;
    tableHead?: React.HTMLAttributes<HTMLTableCellElement>;
    tableBody?: React.HTMLAttributes<HTMLTableSectionElement>;
    tableBodyRow?: React.HTMLAttributes<HTMLTableRowElement>;
    tableRow?: React.HTMLAttributes<HTMLTableRowElement>;
    tableCell?: React.HTMLAttributes<HTMLTableCellElement>;
  };
}

export function useDataTable<TData, TValue>({
  columns,
  data,
  topChildren,
  bottomChildren,
  itemProps,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [rowSelection, setRowSelection] = React.useState({});
  const table = useReactTable({
    data,
    columns,
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    state: {
      sorting,
      rowSelection,
    },
  });

  const renderTable = (
    <div
      {...itemProps?.root}
      className={cn('~rounded-md ~border', itemProps?.root?.className)}
    >
      {topChildren}
      <div
        {...itemProps?.tableWrapper}
        className={cn(
          '~rounded-md ~border',
          itemProps?.tableWrapper?.className
        )}
      >
        <Table {...itemProps?.table} className={itemProps?.table?.className}>
          <TableHeader
            {...itemProps?.tableHeader}
            className={cn(itemProps?.tableHeader?.className)}
          >
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                {...itemProps?.tableHeaderRow}
                className={cn(
                  '~bg-[#e8e8e8] ~text-[#231f21]',
                  itemProps?.tableHeaderRow?.className
                )}
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      {...itemProps?.tableHead}
                      className={cn(
                        '~px-3 ~py-1 ~uppercase',
                        itemProps?.tableHead?.className
                      )}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody
            {...itemProps?.tableBody}
            className={cn(itemProps?.tableBody?.className)}
          >
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  {...itemProps?.tableBodyRow}
                  className={cn(itemProps?.tableBodyRow?.className)}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      {...itemProps?.tableCell}
                      className={cn(
                        '~px-3 ~py-3',
                        itemProps?.tableCell?.className
                      )}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow
                {...itemProps?.tableBodyRow}
                className={cn(itemProps?.tableBodyRow?.className)}
              >
                <TableCell
                  colSpan={columns.length}
                  {...itemProps?.tableCell}
                  className={cn(
                    '~h-24 ~text-center',
                    itemProps?.tableCell?.className
                  )}
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {bottomChildren}
    </div>
  );

  return { table, renderTable };
}

export const TanStackTable = () => {
  const { renderTable, table } = useDataTable({
    columns,
    data: payments,
  });
  console.log('selectedrows', table.getSelectedRowModel());
  return renderTable;
};
