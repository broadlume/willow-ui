import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useRef,
  useLayoutEffect,
} from 'react';
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  DragStartEvent,
  DragOverlay,
  useDndContext,
} from '@dnd-kit/core';

import { DropIndicator } from '@atlaskit/pragmatic-drag-and-drop-react-drop-indicator/list-item';
import { Loader } from '@components/Loader/Loader';
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
import clsx from 'clsx';

import {
  HiChevronDown,
  HiMiniChevronLeft,
  HiMiniChevronRight,
} from 'react-icons/hi2';
import { RiDraggable } from 'react-icons/ri';
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
  ColumnHeaderOverlay,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from './TableComponents';
import { DataTableProps } from './type';
import {
  primaryButton,
  wasMultiSelectKeyUsed,
  wasToggleInSelectionGroupKeyUsed,
} from './utils';

function getInitialColumnOrder<TData, TValue>(
  columns: ColumnDef<TData, TValue>[],
  initialColumnOrder: string[] | undefined,
  fixedStartColIds: string[],
  fixedEndColIds: string[]
): string[] {
  if (initialColumnOrder && initialColumnOrder.length > 0) {
    return initialColumnOrder;
  }

  const colIds = columns
    .map((col) => {
      if ('id' in col && col.id) return col.id as string;
      if ('accessorKey' in col && col.accessorKey)
        return col.accessorKey as string;
      return '';
    })
    .filter(Boolean);

  const draggable = colIds.filter(
    (id) => !fixedStartColIds.includes(id) && !fixedEndColIds.includes(id)
  );

  return [...fixedStartColIds, ...draggable, ...fixedEndColIds];
}

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
  noRecordFoundMessage = 'There are no records to display',
  pageSizeOptions = [5, 10, 20, 50],
}: DataTableProps<TData, TValue>) {
  /**
   * Column Ordering
   */
  const [columnOrder, setColumnOrder] = useState<string[]>(() =>
    getInitialColumnOrder(
      columns,
      initialColumnOrder,
      fixedStartColIds,
      fixedEndColIds
    )
  );

  // Sync internal columnOrder state when initialColumnOrder prop changes externally
  useEffect(() => {
    if (initialColumnOrder && initialColumnOrder.length > 0) {
      setColumnOrder(initialColumnOrder);
    }
  }, [initialColumnOrder]);

  // get draggable column IDs from columnOrder
  const draggableColumnIds = useMemo(() => {
    return columnOrder.filter(
      (id) => !fixedStartColIds.includes(id) && !fixedEndColIds.includes(id)
    );
  }, [columnOrder, fixedStartColIds, fixedEndColIds]);

  /**
   * Drag State - Using ref to avoid re-renders that disrupt drag
   */
  const activeDragIdRef = useRef<string | null>(null);

  /**
   * Scroll Position Preservation
   */
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef({ scrollTop: 0, scrollLeft: 0 });
  const shouldRestoreScrollRef = useRef<boolean>(false);

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

  // Save scroll position before row selection changes
  const saveScrollPosition = useCallback(() => {
    if (scrollContainerRef.current) {
      scrollPositionRef.current = {
        scrollTop: scrollContainerRef.current.scrollTop,
        scrollLeft: scrollContainerRef.current.scrollLeft,
      };
    }
  }, []);

  // Restore scroll position after row selection changes
  useLayoutEffect(() => {
    if (scrollContainerRef.current) {
      const { scrollTop, scrollLeft } = scrollPositionRef.current;
      scrollContainerRef.current.scrollTop = scrollTop;
      scrollContainerRef.current.scrollLeft = scrollLeft;
    }
  }, [rowSelection, isSelectAllPages, excludedRowIds]);

  // Also maintain scroll position on render when we have a saved position
  useLayoutEffect(() => {
    if (scrollContainerRef.current && (scrollPositionRef.current.scrollLeft > 0 || scrollPositionRef.current.scrollTop > 0)) {
      const element = scrollContainerRef.current;
      const { scrollLeft, scrollTop } = scrollPositionRef.current;

      // Only restore if position has been reset
      if (element.scrollLeft !== scrollLeft || element.scrollTop !== scrollTop) {
        element.scrollLeft = scrollLeft;
        element.scrollTop = 0;
      }
    }
  });

  const saveScrollPositionBeforeSort = () => {
    const scrollElement = scrollContainerRef.current;
    if (scrollElement) {
      scrollPositionRef.current = {
        scrollTop: scrollElement.scrollTop,
        scrollLeft: scrollElement.scrollLeft,
      };
      shouldRestoreScrollRef.current = true;
    }
  };

  const handleSelectionReset = () => {
    setIsSelectAllPages(false);
    setExcludedRowIds({});
    setRowSelection({});
  };

  const handleUnselectPage = useCallback(
    (pageRows: Row<TData>[]) => {
      saveScrollPosition();
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
    [isSelectAllPages, saveScrollPosition]
  );

  const handleSelectPage = useCallback(
    (pageRows: Row<TData>[], isAllOnPageSelected: boolean) => {
      if (isAllOnPageSelected) {
        // Unselect all rows on the page
        handleUnselectPage(pageRows);
        return;
      }
      saveScrollPosition();
      setExcludedRowIds({});
      const newSelection = pageRows.reduce((acc, row) => {
        acc[row.id] = true;
        return acc;
      }, {} as Record<string, boolean>);
      setRowSelection((prev) => ({ ...prev, ...newSelection }));
    },
    [handleUnselectPage, saveScrollPosition]
  );
  const handleSelectAll = () => {
    saveScrollPosition();
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
            data-state={
              isIndeterminate
                ? 'indeterminate'
                : isChecked
                ? 'checked'
                : 'unchecked'
            }
            onCheckedChange={() => handleHeaderCheckboxClick()}
            // disable selecting all rows if single selection is enabled
            disabled={enableSingleSelection}
            aria-label='Select all'
            className={'h-4 w-4'}
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
            aria-label='Select row'
            className={'h-4 w-4'}
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
    saveScrollPosition();
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

  function handleDragStart(event: DragStartEvent) {
    activeDragIdRef.current = String(event.active.id);
  }

  function handleDragCancel() {
    activeDragIdRef.current = null;
  }

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
    }
  }

  const DragOverlayContent = () => {
    const { active } = useDndContext();

    if (!active) return null;

    const activeId = String(active.id);
    const headers = table.getHeaderGroups().flatMap((group) => group.headers);
    const header = headers.find((h) => h.id === activeId);

    if (!header) return null;

    return <ColumnHeaderOverlay header={header} itemProps={itemProps} />;
  };

  const toggleSelection = (row: Row<TData>) => {
    handleRowCheckboxChange(row);
  };

  const performAction = ({
    event,
    row,
  }: {
    event: unknown;
    row: Row<TData>;
  }) => {
    if (wasToggleInSelectionGroupKeyUsed(event as React.MouseEvent)) {
      // marking the event as used
      (event as React.MouseEvent).preventDefault();
      toggleSelection(row);
      // toggleSelectionInGroup(row);
      // return;
    }

    if (wasMultiSelectKeyUsed(event as React.MouseEvent)) {
      // marking the event as used
      (event as React.MouseEvent).preventDefault();
      toggleSelection(row);
      // multiSelectTo(row);
      // return;
    }
  };

  const handleRowClick = ({
    event,
    row,
  }: {
    event: unknown;
    row: Row<TData>;
  }) => {
    if (passedHandlerRowClick) {
      passedHandlerRowClick({ event, row });
      return;
    }

    if ((event as React.MouseEvent).defaultPrevented) {
      return;
    }

    if ((event as React.MouseEvent).button !== primaryButton) {
      return;
    }

    if ((event as React.MouseEvent).detail > 1) {
      return; // ignore double clicks or more
    }

    performAction({ event, row });
  };

  /**
   * Supports both function and static object configurations:
   * Function: itemProps.tableBodyRow(row) - allows conditional styling/props per row
   * Object: itemProps.tableBodyRow - applies same props to all rows
   * Example usage: tableBodyRow: (row) => ({ className: row.original.isActive ? 'bg-green' : 'bg-red' })
   */
  const bodyRowProps = useCallback(
    (row) => {
      if (typeof itemProps?.tableBodyRow === 'function') {
        return itemProps.tableBodyRow(row);
      }
      return itemProps?.tableBodyRow || {};
    },
    [itemProps?.tableBodyRow]
  );

  /**
   * Render Data table Component
   */
  const CustomDataTable = () => (
    <div
      {...itemProps?.root}
      className={clsx(
        'flex flex-col gap-[16px] rounded-md bg-white text-sm',
        itemProps?.root?.className
      )}
    >
      {includeLoading && !data?.length ? (
        <div className=' flex h-40 items-center justify-center rounded-md'>
          <Loader />
        </div>
      ) : (
        <div
          ref={scrollContainerRef}
          {...(({ enableStickyHeader, ...rest }) => rest)(
            itemProps?.tableWrapper || {}
          )}
          className={clsx(
            'rounded-md border',
            {
              'max-h-[65vh] min-h-[0px] overflow-y-auto':
                itemProps?.tableWrapper?.enableStickyHeader,
            },
            'overflow-x-auto',
            itemProps?.tableWrapper?.className
          )}
        >
          <DndContext
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onDragCancel={handleDragCancel}
            sensors={sensors}
          >
            <Table
              data-testid='data-table'
              {...itemProps?.table}
              className={`${itemProps?.table?.className} text-text-pri`}
            >
              {table.getRowModel().rows?.length ? (
                <TableHeader
                  data-testid='data-table-header'
                  {...itemProps?.tableHeader}
                  className={clsx(
                    {
                      'sticky top-0 z-20 bg-white shadow-sm':
                        itemProps?.tableWrapper?.enableStickyHeader,
                    },
                    itemProps?.tableHeader?.className
                  )}
                >
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow
                      data-testid={'data-header-row-' + headerGroup.id}
                      key={headerGroup.id}
                      {...itemProps?.tableHeaderRow}
                      className={clsx(
                        'hover:!bg-transparent',
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
                              saveScrollPositionBeforeSort={saveScrollPositionBeforeSort}
                              itemProps={{
                                ...itemProps,
                                tableHead: {
                                  style: {
                                    ...(itemProps?.tableHead?.style || {}),
                                    width: `${header.getSize()}px`,
                                  },
                                  // @ts-expect-error test
                                  colSpan: header.colSpan,
                                },
                              }}
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
                className={clsx('relative', itemProps?.tableBody?.className)}
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
                        {...bodyRowProps(row)}
                        className={clsx(bodyRowProps(row)?.className)}
                      >
                        <TableRowCells row={row} itemProps={itemProps} />
                      </CustomTableRow>
                    ) : (
                      <TableRow
                        key={row.id}
                        onClick={(event) => handleRowClick({ event, row })}
                        {...bodyRowProps(row)}
                        className={clsx(bodyRowProps(row)?.className)}
                        data-state={row.getIsSelected() && 'selected'}
                        data-testid={'data-table-row-' + row.id}
                      >
                        <TableRowCells row={row} itemProps={itemProps} />
                      </TableRow>
                    )
                  )
                ) : (
                  <TableRow
                    data-testid={'data-table-row-' + 'no-rows'}
                    {...itemProps?.tableBodyRow}
                  >
                    <TableCell
                      data-testid='data-table-row-cell-no-rows'
                      // colSpan={columns.length}
                      {...itemProps?.tableCell}
                      className={clsx(
                        'h-24 text-center',
                        itemProps?.tableCell?.className
                      )}
                    >
                      {noRecordFoundMessage}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>

            <DragOverlay>
              <DragOverlayContent />
            </DragOverlay>
          </DndContext>
        </div>
      )}
      {showPagination && table.getRowModel().rows?.length ? (
        <Pagination itemProps={itemProps} />
      ) : null}
    </div>
  );

  type TableRowCellProps<TData> = {
    row: Row<TData>;
    dropIndicatorInstruction?: Parameters<
      typeof DropIndicator
    >[0]['instruction'];
    renderDraggableIcon?: boolean;
    itemProps?: DataTableProps<TData, unknown>['itemProps'];
  };

  const TableRowCells = <TData,>({
    row,
    renderDraggableIcon,
    itemProps,
    dropIndicatorInstruction,
  }: TableRowCellProps<TData>) => {
    return (
      <>
        <div style={{ display: 'contents' }}>
          {row.getVisibleCells().map((cell, index) => {
            const isFirstCell = index === 0;
            return (
              <TableCell
                data-testid={`data-table-row-${cell.column.id}-cell-${cell.row.id}`}
                key={cell.id}
                {...itemProps?.tableCell}
                className={clsx(
                  // Always add padding-left to the first cell to reserve space
                  // and position the cell relatively for the absolute span.
                  isFirstCell
                    ? enableRowSelection
                      ? 'relative first:pl-[30px]'
                      : 'first:pl-[16px]'
                    : '', // Adjust 30px based on icon size
                  'last:px-3',
                  itemProps?.tableCell?.className
                )}
                style={{
                  ...(itemProps?.tableCell?.style || {}),
                  width: `${cell.column.getSize()}px`,
                  minWidth: `${cell.column.getSize()}px`,
                  maxWidth: `${cell.column.getSize()}px`,
                }}
              >
                {/* Inject the draggable icon ONLY in the first cell when renderDraggableIcon is true */}
                {isFirstCell && renderDraggableIcon && (
                  <span
                    className={clsx(
                      '-translate-y-[50%] absolute left-[-2px] top-[32%] rounded-full px-[4px] py-[2px] text-xs',
                      itemProps?.draggable?.className
                    )}
                  >
                    <RiDraggable />
                  </span>
                )}
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            );
          })}
        </div>
        {dropIndicatorInstruction && (
          <DropIndicator instruction={dropIndicatorInstruction} />
        )}
      </>
    );
  };

  const Pagination = ({ itemProps }) => {
    const { pageCount, state } = useMemo(
      () => ({ pageCount: table.getPageCount(), state: table.getState() }),
      []
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
            'h-[30px] w-[30px] rounded-md p-2 text-sm font-normal text-text-pri shadow-none disabled:bg-transparent',
            currentPage === item ? 'border border-border-primary' : '',
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
          'mb-[16px] flex items-center justify-between px-2',
          itemProps?.tableFooterWrapper
        )}
      >
        {/* Item per page */}
        <div
          className={clsx(
            'flex flex-1 flex-row items-center justify-start gap-3',
            itemProps?.itemPerPage?.className
          )}
        >
          <p className='text-xs font-normal'>Items per Page</p>
          <Select
            value={table.getState().pagination.pageSize.toString()}
            defaultValue='10'
            onValueChange={(value) => table.setPageSize(Number(value))}
          >
            <SelectTrigger
              icon={<HiChevronDown className='h-4 w-4' />}
              data-testid='perpage-button'
              {...itemProps?.itemPerPage?.selectTrigger}
              className={clsx(
                'h-[30px] w-fit text-xs font-normal [&>span]:mr-2',
                itemProps?.itemPerPage?.selectTrigger?.className
              )}
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent data-testid='perpage-list'>
              {pageSizeOptions.map((opt) => (
                <SelectItem
                  {...itemProps?.itemPerPage?.selectItem}
                  data-testid={`perpage-item-${opt}`}
                  className={clsx(
                    'text-xs font-normal',
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
            'flex items-center gap-[12px]',
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
              'h-[30px] w-[30px] rounded-md bg-surface-cta p-2 font-normal text-white shadow-none hover:bg-surface-cta hover:opacity-90 disabled:border-none disabled:bg-transparent disabled:text-text-pri',
              itemProps?.pagination?.leftChevron?.className
            )}
          >
            <HiMiniChevronLeft className='h-6 w-6' />
          </Button>

          {/* Pages */}
          {paginationButtons}
          {/* Right chevron */}
          <Button
            {...itemProps?.pagination?.rightChevron}
            onClick={table.nextPage}
            data-testid='go-to-next-page'
            className={clsx(
              'h-[30px] w-[30px] rounded-md bg-surface-cta p-2 font-normal text-white shadow-none hover:bg-surface-cta hover:opacity-90 disabled:border-none disabled:bg-transparent disabled:text-text-pri',
              itemProps?.pagination?.rightChevron?.className
            )}
            disabled={!table.getCanNextPage()}
          >
            <HiMiniChevronRight className='h-6 w-6' />
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