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
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  PaginationState,
  Row,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { useEffect, useMemo, useState } from 'react';
import {
  HiChevronDown,
  HiMiniChevronLeft,
  HiMiniChevronRight,
} from 'react-icons/hi2';
import {
  Button,
  Checkbox,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../index';
import {
  DraggableColumnHeader,
  DraggableTableRow,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from './TableComponents';
import { DataTableProps } from './type';

import clsx from 'clsx';

export function useDataTable<TData, TValue>({
  columns,
  data,
  itemProps,
  initialColumnOrder,
  initialSorting,
  initialPagination,
  enableSelectAllPages,
  enableRowSelection,
  onRowDrop = () => undefined,
  onColumnOrderChange = () => undefined,
  tableParams,
}: DataTableProps<TData, TValue>) {
  /**
   * Column Ordering
   */
  const [columnOrder, setColumnOrder] = useState<string[]>(() => []);
  // Memoize columns to prevent re-renders, and derive initial column order
  const { draggableColumnIds } = useMemo(() => {
    const fixedStartIds = ['select'];
    const fixedEndIds = ['action', 'showHideCol'];
    const draggableColumnIds =
      initialColumnOrder?.filter(
        (id) => !fixedStartIds.includes(id) && !fixedEndIds.includes(id)
      ) || [];
    setColumnOrder([...fixedStartIds, ...draggableColumnIds, ...fixedEndIds]);
    return { fixedStartIds, fixedEndIds, draggableColumnIds };
  }, [initialColumnOrder]);

  /**
   * Sort
   */
  const [sorting, setSorting] = useState<SortingState>([]);
  useEffect(() => {
    if (!sorting.length && initialSorting?.length) {
      setSorting(initialSorting);
    }
  }, [initialSorting]);

  /**
   * Pagination
   */
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: initialPagination?.pageIndex ?? 0,
    pageSize: initialPagination?.pageSize ?? 10,
  });

  /**
   * Row Selection
   */
  const [rowSelection, setRowSelection] = useState<Record<string, boolean>>({});
  const [isSelectAllPages, setIsSelectAllPages] = useState(false);
  const [excludedRowIds, setExcludedRowIds] = useState<Record<string, boolean>>(
    {}
  );

  const handleSelectionReset = () => {
    setIsSelectAllPages(false);
    setExcludedRowIds({});
    setRowSelection({});
  };

  const handleSelectAll = () => {
    setIsSelectAllPages(true);
    setExcludedRowIds({});
    setRowSelection({});
  };

  /**
   * Columns(Selectable feature added)
   */
  const memoizedColumns = useMemo(() => {
    if (!enableRowSelection) {
      return columns;
    }
    const selectionColumn: ColumnDef<TData, TValue> = {
      id: 'select',
      enableSorting: false,
      enableHiding: false,
      header: ({ table }) => {
        const pageRows = table.getPaginationRowModel().rows;
        const numPageRows = pageRows.length;
        const numSelectedPageRows = Object.keys(rowSelection).length;
        const isAllOnPageSelected =
          numPageRows > 0 && numSelectedPageRows === numPageRows;

        const handleHeaderCheckboxClick = () => {
          if (isSelectAllPages) {
            handleSelectionReset();
          } else if (isAllOnPageSelected) {
            if (enableSelectAllPages) {
              handleSelectionReset();
              return;
            }
            handleSelectAll();
          } else {
            setIsSelectAllPages(false);
            setExcludedRowIds({});
            const newSelection = pageRows.reduce((acc, row) => {
              acc[row.id] = true;
              return acc;
            }, {} as Record<string, boolean>);
            setRowSelection(newSelection);
          }
        };

        const isIndeterminate =
          (isSelectAllPages && Object.keys(excludedRowIds).length > 0) ||
          (!isSelectAllPages && numSelectedPageRows > 0);

        const isChecked = isSelectAllPages
          ? Object.keys(excludedRowIds).length === 0
          : isAllOnPageSelected;

        return (
          <Checkbox
            checked={isIndeterminate ? 'indeterminate' : isChecked}
            color='#1A6CFF'
            className='~rounded-sm ~border-[#1A6CFF] data-[state=checked]:~bg-[#1A6CFF]'
            onCheckedChange={handleHeaderCheckboxClick}
            aria-label='Select all'
          />
        );
      },
      cell: ({ row }) => {
        const handleRowCheckboxChange = () => {
          if (isSelectAllPages) {
            setExcludedRowIds((prev) => {
              const newExcluded = { ...prev };
              if (newExcluded[row.id]) {
                delete newExcluded[row.id];
              } else {
                newExcluded[row.id] = true;
              }
              return newExcluded;
            });
          } else {
            row.toggleSelected();
          }
        };

        const isChecked = isSelectAllPages
          ? !excludedRowIds[row.id]
          : row.getIsSelected();

        return (
          <Checkbox
            checked={isChecked}
            onCheckedChange={handleRowCheckboxChange}
            className='~rounded-sm ~border-[#1A6CFF] data-[state=checked]:~bg-[#1A6CFF]'
            aria-label='Select row'
          />
        );
      },
      size: 40,
    };

    return [selectionColumn, ...columns];
  }, [
    columns,
    rowSelection,
    isSelectAllPages,
    excludedRowIds,
    enableRowSelection,
    enableSelectAllPages,
  ]);

  /**
   * Main Init of data table hook
   */
  const table = useReactTable({
    data,
    columns: memoizedColumns,
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    ...tableParams,
    getCoreRowModel: getCoreRowModel(),
    onColumnOrderChange: onColumnOrderChange,
    enableSortingRemoval: false,
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    manualSorting: true,
    manualPagination: true,
    onRowSelectionChange: setRowSelection,
    enableRowSelection: true,
    state: {
      columnOrder,
      sorting,
      pagination,
      rowSelection,
      ...tableParams?.state,
    },
  });

  /**
   * DND handlers
   */
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
    if (activeId && overId && activeId !== overId) {
      const activeColId = activeId;
      const overColId = overId;

      // Only allow dropping onto other draggable columns
      if (
        draggableColumnIds.includes(activeColId) &&
        draggableColumnIds.includes(overColId)
      ) {
        setColumnOrder((currentOrder) => {
          const oldIndex = currentOrder.indexOf(activeColId);
          const newIndex = currentOrder.indexOf(overColId);
          const updatedArray = arrayMove(currentOrder, oldIndex, newIndex);
          onColumnOrderChange(updatedArray);
          return updatedArray;
        });
      }
      return;
    }

    // Handle row DND
    if (activeId.startsWith('row-') && overId.startsWith('row-')) {
      const draggedItem = active.data.current?.row as TData | undefined;
      const dropTarget = over.data.current?.row as TData | undefined;

      // @ts-expect-error type addition pending
      if (draggedItem?.type === 'file' && dropTarget?.type === 'folder') {
        onRowDrop?.(draggedItem, dropTarget);
      }
    }
  }

  /**
   * Render Data table Component
   */
  const CustomDataTable = () => (
    <div
      {...itemProps?.root}
      className={clsx('~bg-white ~text-sm', itemProps?.root?.className)}
    >
      <div
        {...itemProps?.tableWrapper}
        className={clsx(
          '~rounded-md ~border',
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
              className={clsx(itemProps?.tableHeader?.className)}
            >
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow
                  key={headerGroup.id}
                  {...itemProps?.tableHeaderRow}
                  className={clsx(
                    '~text-[#231f21] hover:!~bg-transparent',
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
                          isDraggable={draggableColumnIds.includes(
                            header.column.id
                          )}
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
              className={clsx(itemProps?.tableBody?.className)}
            >
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <DraggableTableRow
                    row={row as Row<object>}
                    key={row.id}
                    {...itemProps?.tableBodyRow}
                    className={clsx(itemProps?.tableBodyRow?.className)}
                    data-state={row.getIsSelected() && 'selected'}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        {...itemProps?.tableCell}
                        className={clsx(
                          '~px-3 ~py-4 first:~pl-[20px] last:~pr-[20px]',
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
                  className={clsx(itemProps?.tableBodyRow?.className)}
                >
                  <TableCell
                    colSpan={columns.length}
                    {...itemProps?.tableCell}
                    className={clsx(
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
        </DndContext>
      </div>
      <div
        className={clsx(
          '~my-5 ~flex ~items-center ~justify-between ~px-2',
          itemProps?.tableFooterWrapper
        )}
      >
        {/* Item per page */}
        <div
          className={clsx(
            '~flex ~flex-1 ~flex-row ~items-center ~justify-start ~gap-3',
            itemProps?.itemPerPage?.className
          )}
        >
          <p className='~text-xs ~font-normal'>Item Per page</p>
          <Select
            value={table.getState().pagination.pageSize.toString()}
            defaultValue='10'
            onValueChange={(value) => table.setPageSize(Number(value))}
          >
            <SelectTrigger
              icon={<HiChevronDown className='~h-4 ~w-4' />}
              {...itemProps?.itemPerPage?.selectTrigger}
              className={clsx(
                '~h-[30px] ~w-fit ~text-xs ~font-normal [&>span]:~mr-4',
                itemProps?.itemPerPage?.selectTrigger?.className
              )}
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[5, 10, 20, 50].map((opt) => (
                <SelectItem
                  {...itemProps?.itemPerPage?.selectItem}
                  className={clsx(
                    '~text-xs ~font-normal',
                    itemProps?.itemPerPage?.selectItem?.className
                  )}
                  key={opt}
                  value={opt.toString()}
                >
                  {opt}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div
          className={clsx(
            '~flex ~items-center ~gap-[12px]',
            itemProps?.pagination?.className
          )}
        >
          {/* Left chevron */}
          <Button
            {...itemProps?.pagination?.leftChevron}
            onClick={table.previousPage}
            disabled={!table.getCanPreviousPage()}
            className={clsx(
              '~h-[30px] ~w-[30px] ~rounded-md ~bg-[#1A6CFF] ~p-2 ~font-normal ~text-white ~shadow-none hover:~bg-[#1A6CFF] hover:~opacity-90 disabled:~border-none disabled:~bg-transparent disabled:~text-[#1A1A1A]',
              itemProps?.pagination?.leftChevron?.className
            )}
          >
            <HiMiniChevronLeft className='~h-6 ~w-6' />
          </Button>

          {/* Pages */}
          {Array.from({ length: table.getPageCount() }, (_, i) => i + 1).map(
            (item) => (
              <Button
                {...itemProps?.pagination?.page}
                type='button'
                className={clsx(
                  '~h-[30px] ~w-[30px] ~rounded-md ~p-2 ~text-sm ~font-normal ~text-[#1A1A1A] ~shadow-none disabled:~bg-transparent',
                  table.getState().pagination.pageIndex + 1 === item
                    ? '~border ~border-[#CCCCCC]'
                    : '',
                  itemProps?.pagination?.page?.className
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
            {...itemProps?.pagination?.rightChevron}
            onClick={table.nextPage}
            className={clsx(
              '~h-[30px] ~w-[30px] ~rounded-md ~bg-[#1A6CFF] ~p-2 ~font-normal ~text-white ~shadow-none hover:~bg-[#1A6CFF] hover:~opacity-90 disabled:~border-none disabled:~bg-transparent disabled:~text-[#1A1A1A]',
              itemProps?.pagination?.rightChevron?.className
            )}
            disabled={!table.getCanNextPage()}
          >
            <HiMiniChevronRight className='~h-6 ~w-6' />
          </Button>
        </div>
      </div>
    </div>
  );

  return {
    table,
    CustomDataTable,
    rowSelection: {
      rowSelection,
      isSelectAllPages,
      excludedRowIds,
      handleSelectionReset,
      handleSelectAll,
    },
  };
}
