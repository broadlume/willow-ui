import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { flexRender, Header } from '@tanstack/react-table';

import clsx from 'clsx';
import React from 'react';
import { HiMiniChevronDown, HiMiniChevronUp } from 'react-icons/hi2';
import { DataTableProps } from './type';

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className='relative w-full overflow-x-auto'>
    <table
      ref={ref}
      className={clsx('w-full caption-bottom text-sm', className)}
      style={{ tableLayout: 'auto', minWidth: '100%', ...props.style }}
      {...props}
    />
  </div>
));
Table.displayName = 'Table';

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={clsx('font-semibold [&_tr]:border-b', className)}
    {...props}
  />
));
TableHeader.displayName = 'TableHeader';

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={clsx(
      '[&_tr:last-child]:border-0',
      '[&_tr:first-child>div>td]:pt-4', // add extra padding-top to td inside div in first tr
      '[&_tr:last-child>div>td]:pb-4', // add extra padding-bottom to td inside div in last tr
      className
    )}
    {...props}
  />
));
TableBody.displayName = 'TableBody';

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={clsx(
      'bg-muted/50 border-t font-medium [&>tr]:last:border-b-0',
      className
    )}
    {...props}
  />
));
TableFooter.displayName = 'TableFooter';

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={clsx(
      'hover:bg-muted/50 data-[state=selected]:bg-muted relative h-9 transition-colors ',
      className
    )}
    {...props}
  />
));
TableRow.displayName = 'TableRow';

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={clsx(
      'text-muted-foreground text-left align-middle text-sm font-semibold last:px-3 last:pr-5 [&:has([role=checkbox])]:px-4',
      '[&:has(td>button[role=checkbox])>td]:mt-[2px] first:px-4', // apply margin-top to td inside th if td has button[role=checkbox]
      className
    )}
    {...props}
  />
));
TableHead.displayName = 'TableHead';

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={clsx(
      'py-2 align-middle [&:has([role=checkbox])]:px-[16px] ',
      '[&:has([role=checkbox])>button[role=checkbox]]:align-text-bottom',
      className
    )}
    {...props}
  />
));
TableCell.displayName = 'TableCell';

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={clsx('text-muted-foreground mt-4', className)}
    {...props}
  />
));
TableCaption.displayName = 'TableCaption';

const DraggableColumnHeader = <TData, TValue>({
  header,
  itemProps,
  isDraggable,
}: {
  header: Header<TData, TValue>;
  itemProps: DataTableProps<TData, TValue>['itemProps'];
  isDraggable: boolean;
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: header.column.id,
    disabled: !isDraggable,
  });

  const style: React.CSSProperties = {
    opacity: isDragging ? 0.8 : 1,
    position: 'relative',
    transform: CSS.Translate.toString(transform),
    whiteSpace: 'nowrap',
    width: `${header.column.columnDef.size}px`,
    minWidth: `${header.column.columnDef.minSize}px`,
    maxWidth: `${header.column.columnDef.maxSize}px`,
    transition,
    zIndex: isDragging ? 10 : 1,
  };

  return (
    <TableHead
      data-testid={'data-table-header-head-' + header.column.id}
      ref={setNodeRef}
      style={style}
      // colSpan={header.colSpan}
      {...itemProps?.tableHead}
      className={clsx(
        'py-3 text-text-pri',
        'last:[>td]:justify-center',
        itemProps?.tableHead?.className
      )}
    >
      <TableCell
        data-testid={'data-table-header-cell-' + header.column.id}
        {...(isDraggable ? attributes : {})}
        {...(isDraggable ? listeners : {})}
        onClick={header.column.getToggleSortingHandler()}
        className={clsx(
          'flex items-center gap-2 !p-0 font-semibold text-text-pri w-full',
          '',
          {
            'cursor-pointer select-none': header.column.getCanSort(),
            'cursor-grab': isDraggable && !isDragging,
            'cursor-move': !isDragging,
          }
        )}
        style={itemProps?.tableHead?.style}
      >
        {header.isPlaceholder
          ? null
          : flexRender(header.column.columnDef.header, header.getContext())}
        {header.column.getCanSort() ? (
          <div className='flex h-4 flex-col items-center'>
            <HiMiniChevronUp
              data-testid={'data-table-header-asc-' + header.column.id}
              data-sortactive={header.column.getIsSorted() === 'asc'}
              className={clsx(
                '-mb-1  h-4 w-4 text-text-pri',
                header.column.getIsSorted() === 'asc'
                  ? 'opacity-100'
                  : 'opacity-40'
              )}
            />
            <HiMiniChevronDown
              data-testid={'data-table-header-desc-' + header.column.id}
              data-sortactive={header.column.getIsSorted() === 'desc'}
              className={clsx(
                ' -mb-[2px] h-4 w-4 text-text-pri',
                header.column.getIsSorted() === 'desc'
                  ? 'opacity-100'
                  : 'opacity-40'
              )}
            />
          </div>
        ) : null}
      </TableCell>
    </TableHead>
  );
};

export const HeaderGroup = React.memo(
  ({
    headerGroup,
    itemProps,
    columnOrder,
    horizontalListSortingStrategy,
    headerOverlayToast,
    table,
    rowSelection,
    isSelectAllPages,
    excludedRowIds,
    handleSelectionReset,
    handleSelectAll,
    draggableColumnIds,
  }: {
    headerGroup: any;
    itemProps: any;
    columnOrder: string[];
    horizontalListSortingStrategy: any;
    headerOverlayToast: any;
    table: any;
    rowSelection: any;
    isSelectAllPages: boolean;
    excludedRowIds: any;
    handleSelectionReset: any;
    handleSelectAll: any;
    draggableColumnIds: string[];
  }) => {
    return (
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
          <HeaderGroupRow
            headerGroup={headerGroup}
            headerOverlayToast={headerOverlayToast}
            itemProps={itemProps}
            table={table}
            rowSelection={rowSelection}
            isSelectAllPages={isSelectAllPages}
            excludedRowIds={excludedRowIds}
            handleSelectionReset={handleSelectionReset}
            handleSelectAll={handleSelectAll}
            draggableColumnIds={draggableColumnIds}
          />
        </SortableContext>
      </TableRow>
    );
  }
);

export const HeaderGroupRow = React.memo(
  ({
    headerGroup,
    headerOverlayToast,
    itemProps,
    table,
    rowSelection,
    isSelectAllPages,
    excludedRowIds,
    handleSelectionReset,
    handleSelectAll,
    draggableColumnIds,
  }: {
    headerGroup: any;
    headerOverlayToast: any;
    itemProps: any;
    table: any;
    rowSelection: any;
    isSelectAllPages: boolean;
    excludedRowIds: any;
    handleSelectionReset: any;
    handleSelectAll: any;
    draggableColumnIds: string[];
  }) => {
    // Memoize toast detection to prevent recalculation on every render
    const { toastIndex, toastContent } = React.useMemo(() => {
      let toastIndex = -1;
      let toastContent: React.ReactNode = null;

      // Check each header to find the first one that returns a toast component
      for (let i = 0; i < headerGroup.headers.length; i++) {
        const content = headerOverlayToast?.({
          header: headerGroup.headers[i],
          index: i,
          itemProps: itemProps,
          table: table,
          rowSelection: {
            rowSelection,
            isSelectAllPages,
            excludedRowIds,
            handleSelectionReset,
            handleSelectAll,
          },
        });
        if (content?.condition && toastIndex === -1) {
          toastIndex = i;
          toastContent = content.component;
          break;
        }
      }

      return { toastIndex, toastContent };
    }, [
      headerGroup.headers,
      headerOverlayToast,
      itemProps,
      rowSelection,
      isSelectAllPages,
      excludedRowIds,
      handleSelectionReset,
      handleSelectAll,
    ]);

    // Memoize the rendered headers to prevent re-renders
    const renderedHeaders = React.useMemo(() => {
      return headerGroup.headers.map((header, index) => {
        // Only enter toast mode if we have both a valid index AND actual content
        if (toastIndex !== -1 && toastContent) {
          // Toast mode: One of the columns has a toast
          if (index === toastIndex) {
            // This is the toast column: Render toast spanning all remaining columns
            return (
              <TableCell
                key={header.id}
                {...itemProps?.tableHead}
                colSpan={headerGroup.headers.length - index}
                className={clsx('!p-0', itemProps?.tableHead?.className)}
                style={{
                  width:
                    headerGroup.headers
                      .slice(index)
                      .reduce((sum, h) => sum + h.getSize(), 0) + 'px',
                }}
              >
                {toastContent}
              </TableCell>
            );
          } else if (index > toastIndex) {
            // Columns after toast: Hidden since toast spans across them
            return (
              <TableCell
                key={header.id}
                style={{
                  display: 'none',
                  width: `${header.getSize()}px`,
                  padding: 0,
                  border: 'none',
                }}
              />
            );
          } else {
            // Columns before toast: Render normal headers
            return (
              <DraggableColumnHeader
                key={header.id}
                header={header}
                isDraggable={draggableColumnIds.includes(header.column.id)}
                itemProps={{
                  ...itemProps,
                  tableHead: {
                    style: {
                      ...(itemProps?.tableHead?.style || {}),
                      width: `${header.column.columnDef.size}px`,
                      minWidth: `${header.column.columnDef.minSize}px`,
                      maxWidth: `${header.column.columnDef.maxSize}px`,
                    },
                    colSpan: header.colSpan,
                  },
                }}
              />
            );
          }
        } else {
          // Normal mode: No toast, render all headers normally
          return (
            <DraggableColumnHeader
              key={header.id}
              header={header}
              isDraggable={draggableColumnIds.includes(header.column.id)}
              itemProps={{
                ...itemProps,
                tableHead: {
                  style: {
                    ...(itemProps?.tableHead?.style || {}),
                    width: `${header.column.columnDef.size}px`,
                    minWidth: `${header.column.columnDef.minSize}px`,
                    maxWidth: `${header.column.columnDef.maxSize}px`,
                  },
                  colSpan: header.colSpan,
                },
              }}
            />
          );
        }
      });
    }, [
      headerGroup.headers,
      toastIndex,
      toastContent,
      itemProps,
      draggableColumnIds,
    ]);

    return renderedHeaders;
  }
);

export {
  DraggableColumnHeader,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
};
