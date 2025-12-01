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
    isOver,
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
        'py-3 text-text-pri transition-all duration-200',
        'last:[>td]:justify-center',
        {
          // Uncomment this line if you want uncomment to show bg when dragging
          // 'bg-surface-cta-bg': isDragging,
          'bg-blue-50/20 border-l-2 border-l-surface-cta':
            isOver && !isDragging,
          'hover:bg-gray-50': isDraggable && !isDragging && !isOver,
        },
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
          {
            'cursor-pointer select-none':
              header.column.getCanSort() && !isDragging,
            'cursor-grab': isDraggable && !isDragging,
            'cursor-grabbing': isDragging,
          }
        )}
        // for checked commented this code in future we remove this
        // style={itemProps?.tableHead?.style}
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
                '-mb-1 h-4 w-4 text-text-pri',
                header.column.getIsSorted() === 'asc' && 'opacity-100',
                header.column.getIsSorted() !== 'asc' && 'opacity-40'
              )}
            />
            <HiMiniChevronDown
              data-testid={'data-table-header-desc-' + header.column.id}
              data-sortactive={header.column.getIsSorted() === 'desc'}
              className={clsx('-mb-[2px] h-4 w-4 text-text-pri', {
                'opacity-100': header.column.getIsSorted() === 'desc',
                'opacity-40': header.column.getIsSorted() !== 'desc',
              })}
            />
          </div>
        ) : null}
      </TableCell>
    </TableHead>
  );
};

export const ColumnHeaderOverlay = <TData, TValue>({
  header,
  itemProps,
}: {
  header: Header<TData, TValue>;
  itemProps: DataTableProps<TData, TValue>['itemProps'];
}) => {
  return (
    <div
      className={clsx(
        'flex items-center gap-2 border border-gray-300 bg-white px-4 py-3 font-semibold text-text-pri shadow-xl opacity-90 cursor-grabbing rounded-md whitespace-nowrap',
        itemProps?.tableHead?.className,
        `${header.getSize()}px`
      )}
    >
      {header.isPlaceholder
        ? null
        : flexRender(header.column.columnDef.header, header.getContext())}

      {header.column.getCanSort() ? (
        <div className='flex h-4 flex-col items-center ml-auto'>
          <HiMiniChevronUp
            className={clsx(
              '-mb-1 h-4 w-4 text-text-pri',
              header.column.getIsSorted() === 'asc' && 'opacity-100',
              header.column.getIsSorted() !== 'asc' && 'opacity-40'
            )}
          />
          <HiMiniChevronDown
            className={clsx('-mb-[2px] h-4 w-4 text-text-pri', {
              'opacity-100': header.column.getIsSorted() === 'desc',
              'opacity-40': header.column.getIsSorted() !== 'desc',
            })}
          />
        </div>
      ) : null}
    </div>
  );
};

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
