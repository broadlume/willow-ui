import {
  Button,
  Checkbox,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@broadlume/willow-ui';
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  Header,
  PaginationState,
  Row,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import classNames from 'classnames';
import React, { CSSProperties, useEffect, useMemo, useState } from 'react';
import {
  HiChevronDown,
  HiChevronUp,
  HiMiniChevronLeft,
  HiMiniChevronRight,
} from 'react-icons/hi2';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './test';

type DataProps = Partial<{
  'data-testid': string;
  id: string;
  className: string;
}>;

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  tableParams?: Partial<Parameters<typeof useReactTable<TData>>[0]>;
  initialColumnOrder?: string[];
  initialSorting?: SortingState;
  initialPagination?: PaginationState;
  onColumnOrderChange?: (newOrder?: string[]) => void;
  onRowDrop?: (draggedRow: TData, dropTarget: TData) => void;
  enableSelectAllPages?: boolean;
  enableRowSelection?: boolean;
  itemProps?: {
    root?: DataProps;
    tableWrapper?: DataProps;
    table?: DataProps;
    tableHeader?: DataProps;
    tableHeaderRow?: DataProps;
    tableHead?: DataProps;
    tableBody?: DataProps;
    tableBodyRow?: DataProps;
    tableRow?: DataProps;
    tableCell?: DataProps;
  };
}

export function useDataTable<TData extends object, TValue>({
  columns,
  data,
  itemProps,
  initialColumnOrder,
  initialSorting,
  initialPagination,
  enableSelectAllPages,
  enableRowSelection,
  onRowDrop = () => {},
  onColumnOrderChange = () => {},
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
   * Columns
   */
  const memoizedColumns = useMemo(() => {
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
            setIsSelectAllPages(false);
            setExcludedRowIds({});
            setRowSelection({});
          } else if (isAllOnPageSelected) {
            if (enableSelectAllPages) {
              setIsSelectAllPages(false);
              setExcludedRowIds({});
              setRowSelection({});
              return;
            }
            setIsSelectAllPages(true);
            setExcludedRowIds({});
            setRowSelection({});
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
            className='cms-rounded-sm data-[state=checked]:cms-bg-[#1A6CFF] cms-border-[#1A6CFF]'
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
            className='cms-rounded-sm data-[state=checked]:cms-bg-[#1A6CFF] cms-border-[#1A6CFF]'
            aria-label='Select row'
          />
        );
      },
      size: 40,
    };

    return enableRowSelection ? [selectionColumn, ...columns] : columns;
  }, [
    columns,
    rowSelection,
    isSelectAllPages,
    excludedRowIds,
    enableRowSelection,
  ]);

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
          return arrayMove(currentOrder, oldIndex, newIndex);
        });
      }
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
