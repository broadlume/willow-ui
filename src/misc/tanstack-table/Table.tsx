import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
} from '@dnd-kit/sortable';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@radix-ui/react-select';
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  Row,
  useReactTable,
} from '@tanstack/react-table';
import classNames from 'classnames';
import React, { useMemo, useState } from 'react';
import { Button } from 'react-day-picker';
import { HiMiniChevronLeft, HiMiniChevronRight } from 'react-icons/hi2';
import {
  DataTableProps,
  DraggableColumnHeader,
  DraggableTableRow,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from './TableComponents';

export function useDataTable<TData extends object, TValue>({
  columns,
  data,
  itemProps,
  onRowDrop = () => undefined,
  tableParams,
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({});
  // Memoize columns to prevent re-renders, and derive initial column order
  const columnDefs = useMemo(() => columns, []);
  const [columnOrder, setColumnOrder] = useState<string[]>(() =>
    columnDefs.map(
      (c) => c.id || ('accessorKey' in c && (c.accessorKey as string)) || ''
    )
  );
  const table = useReactTable({
    data,
    columns,
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setRowSelection,
    ...tableParams,
    getCoreRowModel: getCoreRowModel(),
    onColumnOrderChange: setColumnOrder,
    enableSortingRemoval: false,
    state: {
      rowSelection,
      columnOrder,
      ...tableParams?.state,
    },
  });

  console.log('table sorting', table.getSortedRowModel());

  // --- DND Handlers and Sensors ---
  const sensors = useSensors(
    useSensor(MouseSensor, {
      // Require the mouse to move by 10 pixels before activating
      activationConstraint: {
        distance: 10,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    }),
    useSensor(KeyboardSensor, {})
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) return;

    const activeId = String(active.id);
    const overId = String(over.id);

    // Handle column DND
    if (activeId !== overId) {
      setColumnOrder((currentOrder) => {
        const oldIndex = currentOrder.indexOf(activeId);
        const newIndex = currentOrder.indexOf(overId);
        return arrayMove(currentOrder, oldIndex, newIndex);
      });
      return;
    }

    // Handle row DND
    if (activeId.startsWith('row-') && overId.startsWith('row-')) {
      const draggedItem = active.data.current?.row as TData | undefined;
      const dropTarget = over.data.current?.row as TData | undefined;

      if (draggedItem?.type === 'file' && dropTarget?.type === 'folder') {
        onRowDrop?.(draggedItem, dropTarget);
      }
    }
  }

  const CustomDataTable = () => (
    <div
      {...itemProps?.root}
      className={classNames(
        'cms-text-sm cms-bg-white',
        itemProps?.root?.className
      )}
    >
      <div
        {...itemProps?.tableWrapper}
        className={classNames(
          'cms-rounded-md cms-border',
          itemProps?.tableWrapper?.className
        )}
      >
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          sensors={sensors}
        >
          <Table {...itemProps?.table} className={itemProps?.table?.className}>
            <TableHeader
              {...itemProps?.tableHeader}
              className={classNames(itemProps?.tableHeader?.className)}
            >
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow
                  key={headerGroup.id}
                  {...itemProps?.tableHeaderRow}
                  className={classNames(
                    'cms-text-[#231f21] hover:!cms-bg-transparent',
                    itemProps?.tableHeaderRow?.className
                  )}
                >
                  <SortableContext
                    items={columnOrder}
                    strategy={horizontalListSortingStrategy}
                  >
                    {headerGroup.headers.map((header) => {
                      return (
                        <DraggableColumnHeader
                          key={header.id}
                          header={header}
                          itemProps={itemProps}
                        />
                      );
                    })}
                  </SortableContext>
                </TableRow>
              ))}
            </TableHeader>
            <TableBody
              {...itemProps?.tableBody}
              className={classNames(itemProps?.tableBody?.className)}
            >
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <DraggableTableRow
                    row={row as Row<object>}
                    key={row.id}
                    {...itemProps?.tableBodyRow}
                    className={classNames(itemProps?.tableBodyRow?.className)}
                    data-state={row.getIsSelected() && 'selected'}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        {...itemProps?.tableCell}
                        className={classNames(
                          'cms-px-3 cms-py-3',
                          itemProps?.tableCell?.className
                        )}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </DraggableTableRow>
                ))
              ) : (
                <TableRow
                  {...itemProps?.tableBodyRow}
                  className={classNames(itemProps?.tableBodyRow?.className)}
                >
                  <TableCell
                    colSpan={columns.length}
                    {...itemProps?.tableCell}
                    className={classNames(
                      'cms-h-24 cms-text-center',
                      itemProps?.tableCell?.className
                    )}
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </DndContext>
      </div>
      <div className='cms-flex cms-items-center cms-justify-between cms-my-5 cms-px-2'>
        {/* Item per page */}
        <div className='cms-flex cms-flex-row cms-gap-2 cms-items-center cms-justify-start cms-flex-1'>
          <p className='cms-text-xs cms-font-normal'>Item Per page</p>
          <Select
            //   value={pagination.pageSize.toString()}
            value={table.getState().pagination.pageSize.toString()}
            defaultValue='10'
            onValueChange={(value) =>
              // setPagination((prevVal) => ({
              //   ...prevVal,
              //   pageSize: parseInt(value),
              // }))
              table.setPageSize(Number(value))
            }
          >
            <SelectTrigger className='cms-w-fit cms-text-xs cms-font-normal [&>span]:cms-mr-2'>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[5, 10, 20, 50].map((opt) => (
                <SelectItem
                  className='cms-text-xs cms-font-normal'
                  key={opt}
                  value={opt.toString()}
                >
                  {opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className='cms-flex cms-items-center cms-gap-3'>
          {/* Left chevron */}
          <Button
            onClick={table.previousPage}
            disabled={!table.getCanPreviousPage()}
            className='cms-shadow-none cms-text-white cms-rounded-md !cms-p-2 cms-font-normal cms-bg-[#1A6CFF] disabled:cms-border-none disabled:cms-bg-transparent disabled:cms-text-[#1A1A1A]'
          >
            <HiMiniChevronLeft className='cms-w-4 cms-h-4' />
          </Button>

          {/* Pages */}
          {Array.from({ length: table.getPageCount() }, (_, i) => i + 1).map(
            (item) => (
              <Button
                type='button'
                className={classNames(
                  'cms-shadow-none cms-rounded-md !cms-p-2 cms-font-normal disabled:cms-bg-transparent cms-text-[#1A1A1A]  !cms-px-3',
                  table.getState().pagination.pageIndex + 1 === item
                    ? 'cms-border cms-border-[#CCCCCC]'
                    : ''
                )}
                variant={
                  table.getState().pagination.pageIndex + 1 === item
                    ? 'outline'
                    : 'ghost'
                }
                onClick={() => table.setPageIndex(item - 1)}
              >
                {item}
              </Button>
            )
          )}
          {/* Right chevron */}
          <Button
            onClick={table.nextPage}
            className='cms-shadow-none cms-text-white cms-rounded-md !cms-p-2 cms-font-normal cms-bg-[#1A6CFF] disabled:cms-border-none disabled:cms-bg-transparent disabled:cms-text-[#1A1A1A]'
            disabled={!table.getCanNextPage()}
          >
            <HiMiniChevronRight className='cms-w-4 cms-h-4' />
          </Button>
        </div>
      </div>
    </div>
  );

  return { table, CustomDataTable };
}
