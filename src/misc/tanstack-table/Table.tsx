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
import { MouseEvent, useCallback, useEffect, useMemo, useState } from 'react';
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
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from './TableComponents';
import { DataTableProps } from './type';
import { DropIndicator } from '@atlaskit/pragmatic-drag-and-drop-react-drop-indicator/list-item';
import clsx from 'clsx';
import {
  primaryButton,
  wasMultiSelectKeyUsed,
  wasToggleInSelectionGroupKeyUsed,
} from './utils';
import { Loader } from '@components/Loader/Loader';
import { RiDraggable } from 'react-icons/ri';

export function useDataTable<TData, TValue>({
  columns,
  data,
  itemProps,
  initialColumnOrder,
  initialSorting,
  initialPagination,
  showPagination = true,
  enableSelectAllPages,
  fixedStartColIds = ['select'],
  fixedEndColIds = ['action', 'showHideCol'],
  enableRowSelection,
  onRowDrop = () => undefined,
  onColumnOrderChange = () => undefined,
  tableParams,
  customTableRow: CustomTableRow,
  handleRowClick: passedHandlerRowClick,
  includeLoading = false,
  enableSingleSelection = false,
}: DataTableProps<TData, TValue>) {
  /**
   * Column Ordering
   */
  const [columnOrder, setColumnOrder] = useState<string[]>(() => []);
  // Memoize columns to prevent re-renders, and derive initial column order
  const { draggableColumnIds } = useMemo(() => {
    const draggableColumnIds =
      initialColumnOrder?.filter(
        (id) => !fixedStartColIds.includes(id) && !fixedEndColIds.includes(id)
      ) || [];
    setColumnOrder([
      ...fixedStartColIds,
      ...draggableColumnIds,
      ...fixedEndColIds,
    ]);
    return { fixedStartColIds, fixedEndColIds, draggableColumnIds };
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

  const handleUnselectPage = useCallback(
    (pageRows: Row<TData>[]) => {
      if (isSelectAllPages) {
        setExcludedRowIds((prev) => {
          const newExcluded = { ...prev };
          pageRows.forEach((item) => {
            newExcluded[item.id] = true;
          });
          return newExcluded;
        });
        setRowSelection((prev) => {
          const newSelection = structuredClone(prev);
          pageRows.forEach((item) => delete newSelection[item.id]);
          return newSelection;
        });
      } else {
        setRowSelection((prev) => {
          const newSelection = structuredClone(prev);
          pageRows.forEach((item) => delete newSelection[item.id]);
          return newSelection;
        });
      }
    },
    [isSelectAllPages]
  );

  const handleSelectPage = useCallback(
    (pageRows: Row<TData>[], isAllOnPageSelected: boolean) => {
      if (isAllOnPageSelected) {
        // Unselect all rows on the page
        handleUnselectPage(pageRows);
        return;
      }
      setExcludedRowIds({});
      const newSelection = pageRows.reduce((acc, row) => {
        acc[row.id] = true;
        return acc;
      }, {} as Record<string, boolean>);
      setRowSelection((prev) => ({ ...prev, ...newSelection }));
    },
    [handleUnselectPage]
  );
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
        // const numPageRows = pageRows.length;
        const numSelectedPageRows = Object.keys(rowSelection).length;

        const totalCount = table.getRowCount();
        // numPageRows > 0 && numSelectedPageRows === numPageRows;
        /**
         * DO NOT DELETE
         * Cycling between:
         * 1. Select all on page
         * 2. Select all on all pages
         * 3. Unselect all on all pages
         */
        // const handleHeaderCheckboxClick = () => {
        //   if (isSelectAllPages) {
        //     // Commenting it out to disable checkbox unselecting all records.
        //     // handleSelectionReset();
        //     const pageRows = table.getPaginationRowModel().rows;
        //     setIsSelectAllPages(true);
        //     setExcludedRowIds((prev) => {
        //       const newExcluded = { ...prev };
        //       pageRows.forEach((item) => {
        //         newExcluded[item.id] = true;
        //       });
        //       return newExcluded;
        //     });
        //     setRowSelection({});
        //     // setRowSelection((prev) => {
        //     //   const newSelection = structuredClone(prev);
        //     //   pageRows.forEach((item) => delete newSelection[item.id]);
        //     //   return newSelection;
        //     // });
        //   } else if (isAllOnPageSelected) {
        //     // This logic cycles between page select -> all page select -> all page unselect
        //     // if (enableSelectAllPages) {
        //     //   handleSelectionReset();
        //     //   return;
        //     // }
        //     // handleSelectAll();

        //     // Alternate logic which switches between select all at page level and unselect all at page level.
        //     handleUnselectPage();
        //   } else {
        //     setIsSelectAllPages(false);
        //     setExcludedRowIds({});
        //     const newSelection = pageRows.reduce((acc, row) => {
        //       acc[row.id] = true;
        //       return acc;
        //     }, {} as Record<string, boolean>);
        //     setRowSelection((prev) => ({ ...prev, ...newSelection }));
        //   }
        // };

        const isIndeterminate =
          (isSelectAllPages && Object.keys(excludedRowIds).length > 0) ||
          (!isSelectAllPages &&
            numSelectedPageRows > 0 &&
            numSelectedPageRows !== totalCount);

        const isChecked = isSelectAllPages
          ? Object.keys(excludedRowIds).length === 0
          : numSelectedPageRows === totalCount;

        return (
          <Checkbox
            data-testid={'table-header-select-checkbox'}
            checked={isIndeterminate ? 'indeterminate' : isChecked}
            color='#1A6CFF'
            className='~rounded-sm ~border-[#1A6CFF] data-[state=checked]:~bg-[#1A6CFF]'
            onCheckedChange={() => handleHeaderCheckboxClick()}
            // disable selecting all rows if single selection is enabled
            disabled={enableSingleSelection}
            aria-label='Select all'
          />
        );
      },
      cell: ({ row }) => {
        const isChecked = isSelectAllPages
          ? !excludedRowIds[row.id]
          : row.getIsSelected();

        return (
          <Checkbox
            checked={isChecked}
            data-testid={'table-select-checkbox-' + row.id}
            onCheckedChange={() => handleRowCheckboxChange(row)}
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
  ]);

  const handleRowCheckboxChange = (row: Row<TData>) => {
    if (enableSingleSelection) {
      table.toggleAllRowsSelected(false);
      handleSelectPage([row], false);
      return;
    }

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

  /**
   * Main Init of data table hook
   */
  const table = useReactTable({
    data,
    columns: memoizedColumns,
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    onColumnOrderChange: onColumnOrderChange,
    enableSortingRemoval: false,
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    manualSorting: true,
    manualPagination: true,
    onRowSelectionChange: setRowSelection,
    enableRowSelection: true,
    ...tableParams,
    state: {
      columnOrder,
      sorting,
      pagination,
      rowSelection,
      ...tableParams?.state,
    },
  });

  const handleHeaderCheckboxClick = (row?: Row<TData>) => {
    // If row is provided, it means we are selecting a single row
    // If row is not provided, it means we are selecting all rows on the page
    if (enableSingleSelection && row) {
      handleSelectPage([row], false);
      return;
    }
    // If single selection is enabled, we don't allow selecting all pages
    if (enableSingleSelection && !row) {
      return;
    }
    const pageRows = table.getPaginationRowModel().rows;
    const isAllOnPageSelected =
      (isSelectAllPages &&
        pageRows.filter((item) => !excludedRowIds[item.id]).length) ||
      table.getIsAllPageRowsSelected();
    if (isAllOnPageSelected) {
      handleUnselectPage(pageRows);
    } else {
      handleSelectPage(pageRows, false);
    }
  };

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
  }

  const toggleSelection = (row: Row<TData>) => {
    handleRowCheckboxChange(row);
  };

  const performAction = ({
    event,
    row,
  }: {
    event: MouseEvent<HTMLTableRowElement, MouseEvent>;
    row: Row<TData>;
  }) => {
    if (wasToggleInSelectionGroupKeyUsed(event)) {
      // marking the event as used
      event.preventDefault();
      toggleSelection(row);
      // toggleSelectionInGroup(row);
      // return;
    }

    if (wasMultiSelectKeyUsed(event)) {
      // marking the event as used
      event.preventDefault();
      toggleSelection(row);
      // multiSelectTo(row);
      // return;
    }
  };

  const handleRowClick = ({
    event,
    row,
  }: {
    event: MouseEvent<HTMLTableRowElement, MouseEvent>;
    row: Row<TData>;
  }) => {
    if (passedHandlerRowClick) {
      passedHandlerRowClick({ event, row });
      return;
    }

    if (event.defaultPrevented) {
      return;
    }

    if (event.button !== primaryButton) {
      return;
    }

    if (event.detail > 1) {
      return; // ignore double clicks or more
    }

    performAction({ event, row });
  };

  /**
   * Render Data table Component
   */
  const CustomDataTable = () => (
    <div
      {...itemProps?.root}
      className={clsx(
        '~flex ~flex-col ~gap-[16px] ~bg-white ~text-sm',
        itemProps?.root?.className
      )}
    >
      {includeLoading && !data?.length ? (
        <div className='~flex ~h-40 ~items-center ~justify-center'>
          <Loader />
        </div>
      ) : (
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
            <Table
              data-testid='data-table'
              {...itemProps?.table}
              className={itemProps?.table?.className}
            >
              {table.getRowModel().rows?.length ? (
                <TableHeader
                  data-testid='data-table-header'
                  {...itemProps?.tableHeader}
                  className={clsx(itemProps?.tableHeader?.className)}
                >
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow
                      data-testid={'data-header-row-' + headerGroup.id}
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
              ) : null}
              <TableBody
                data-testid='data-table-body'
                {...itemProps?.tableBody}
                className={clsx('~relative', itemProps?.tableBody?.className)}
              >
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) =>
                    CustomTableRow ? (
                      <CustomTableRow
                        key={row.id}
                        onClick={(event) => handleRowClick({ event, row })}
                        data-state={row.getIsSelected() && 'selected'}
                        data-testid={'data-table-row-' + row.id}
                        row={row}
                        {...itemProps?.tableBodyRow}
                        className={clsx(itemProps?.tableBodyRow?.className)}
                      >
                        <TableRowCells row={row} itemProps={itemProps}/>
                      </CustomTableRow>
                    ) : (
                      <TableRow
                        key={row.id}
                        onClick={(event) => handleRowClick({ event, row })}
                        {...itemProps?.tableBodyRow}
                        className={clsx(itemProps?.tableBodyRow?.className)}
                        data-state={row.getIsSelected() && 'selected'}
                        data-testid={'data-table-row-' + row.id}
                      >
                        <TableRowCells row={row} itemProps={itemProps}/>
                      </TableRow>
                    )
                  )
                ) : (
                  <TableRow
                    data-testid={'data-table-row-' + 'no-rows'}
                    {...itemProps?.tableBodyRow}
                    className={clsx(itemProps?.tableBodyRow?.className)}
                  >
                    <TableCell
                      data-testid='data-table-row-cell-no-rows'
                      // colSpan={columns.length}
                      {...itemProps?.tableCell}
                      className={clsx(
                        '~h-24 ~text-center',
                        itemProps?.tableCell?.className
                      )}
                    >
                      There are no records to display
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </DndContext>
        </div>
      )}
      {showPagination && table.getRowModel().rows?.length ? (
        <Pagination itemProps={itemProps} />
      ) : null}
    </div>
  );

  type TableRowCellProps<TData> = { row: Row<TData>; dropIndicatorInstruction?: Parameters<typeof DropIndicator>[0]['instruction']; renderDraggableIcon?: boolean; itemProps?: DataTableProps<TData, unknown>['itemProps'] }

  const TableRowCells = <TData,>({ row, renderDraggableIcon, itemProps, dropIndicatorInstruction }: TableRowCellProps<TData>) => {
    return (
      <>
      <div style={{display: 'contents'}}>
        {row.getVisibleCells().map((cell, index) => {
          const isFirstCell = index === 0;
          return (
            <TableCell
              data-testid={`data-table-row-${cell.column.id}-cell-${cell.row.id}`}
              key={cell.id}
              {...itemProps?.tableCell}
              className={clsx(
                '~px-3 ~py-4',
                // Always add padding-left to the first cell to reserve space
                // and position the cell relatively for the absolute span.
                isFirstCell ? 'first:~pl-[30px] ~relative' : '', // Adjust 30px based on icon size
                'last:~pr-[20px]',
                itemProps?.tableCell?.className
              )}
            >
              {/* Inject the draggable icon ONLY in the first cell when renderDraggableIcon is true */}
              {isFirstCell && renderDraggableIcon && (
                <span className={clsx("~absolute ~left-[-2px] ~top-[32%] -~translate-y-[50%] ~py-[2px] ~px-[4px] ~rounded-full ~text-xs", itemProps?.draggable)}>
                  <RiDraggable />
                </span>
              )}
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </TableCell>
          );
        })}
      </div>
      {dropIndicatorInstruction && <DropIndicator instruction={dropIndicatorInstruction} />}
      </>
    );
  };

  const Pagination = ({ itemProps }) => {
    const { pageCount, state } = useMemo(
      () => ({ pageCount: table.getPageCount(), state: table.getState() }),
      [table]
    );
    const paginationButtons = useMemo(() => {
      const totalPages = pageCount;
      const currentPage = state.pagination.pageIndex + 1;
      let startPage = 1;
      let endPage = totalPages;

      if (totalPages > 5) {
        if (currentPage <= 3) {
          startPage = 1;
          endPage = 5;
        } else if (currentPage + 2 >= totalPages) {
          startPage = totalPages - 4;
          endPage = totalPages;
        } else {
          startPage = currentPage - 2;
          endPage = currentPage + 2;
        }
      }

      return Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
      ).map((item) => (
        <Button
          {...itemProps?.pagination?.page}
          type='button'
          data-testid={'go-to-page-' + item}
          className={clsx(
            '~h-[30px] ~w-[30px] ~rounded-md ~p-2 ~text-sm ~font-normal ~text-[#1A1A1A] ~shadow-none disabled:~bg-transparent',
            currentPage === item ? '~border ~border-[#CCCCCC]' : '',
            itemProps?.pagination?.page?.className
          )}
          variant={currentPage === item ? 'outline' : 'ghost'}
          onClick={() => table.setPageIndex(item - 1)}
          key={item}
        >
          {item}
        </Button>
      ));
    }, [state, pageCount, itemProps?.pagination?.page]);
    return (
      <div
        className={clsx(
          '~mb-[16px] ~flex ~items-center ~justify-between ~px-2',
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
              data-testid='perpage-button'
              {...itemProps?.itemPerPage?.selectTrigger}
              className={clsx(
                '~h-[30px] ~w-fit ~text-xs ~font-normal [&>span]:~mr-4',
                itemProps?.itemPerPage?.selectTrigger?.className
              )}
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent data-testid='perpage-list'>
              {[5, 10, 20, 50].map((opt) => (
                <SelectItem
                  {...itemProps?.itemPerPage?.selectItem}
                  data-testid={`perpage-item-${opt}`}
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
            data-testid='go-to-previous-page'
            disabled={!table.getCanPreviousPage()}
            className={clsx(
              '~h-[30px] ~w-[30px] ~rounded-md ~bg-[#1A6CFF] ~p-2 ~font-normal ~text-white ~shadow-none hover:~bg-[#1A6CFF] hover:~opacity-90 disabled:~border-none disabled:~bg-transparent disabled:~text-[#1A1A1A]',
              itemProps?.pagination?.leftChevron?.className
            )}
          >
            <HiMiniChevronLeft className='~h-6 ~w-6' />
          </Button>

          {/* Pages */}
          {paginationButtons}
          {/* Right chevron */}
          <Button
            {...itemProps?.pagination?.rightChevron}
            onClick={table.nextPage}
            data-testid='go-to-next-page'
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
    );
  };

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
