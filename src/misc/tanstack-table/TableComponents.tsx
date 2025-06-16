import { useDraggable, useDroppable } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
  ColumnDef,
  flexRender,
  Header,
  Row,
  useReactTable,
} from '@tanstack/react-table';

import * as React from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi2';
import { DataTableProps } from './type';
import { cn } from '@src/lib/utils';

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className='~relative ~w-full ~overflow-auto'>
    <table
      ref={ref}
      className={cn('~w-full ~caption-bottom ~text-sm', className)}
      {...props}
    />
  </div>
));
Table.displayName = 'Table';

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn('[&_tr]:~border-b', className)} {...props} />
));
TableHeader.displayName = 'TableHeader';

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn('[&_tr:last-child]:~border-0', className)}
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
    className={cn(
      '~border-t ~bg-muted/50 ~font-medium [&>tr]:last:~border-b-0',
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
    className={cn(
      '~transition-colors hover:~bg-muted/50 data-[state=selected]:~bg-muted',
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
    className={cn(
      '~w-fit ~px-2 ~py-2 ~text-left ~align-middle ~text-xs ~font-semibold ~text-muted-foreground [&:has([role=checkbox])]:~pl-3 [&:has([role=checkbox])]:~pr-0 [&>[role=checkbox]]:~translate-y-[2px]',
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
    className={cn(
      '~p-2 ~align-middle ~text-xs [&:has([role=checkbox])]:~pr-0 [&>[role=checkbox]]:~translate-y-[2px]',
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
    className={cn('~mt-4 ~text-sm ~text-muted-foreground', className)}
    {...props}
  />
));
TableCaption.displayName = 'TableCaption';

const DraggableTableRow = <TData extends object>({
  row,
  children,
  ...props
}: {
  row: Row<TData>;
  children: React.ReactNode;
} & Parameters<typeof TableRow>[0]) => {
  const { original: rowData } = row;

  // Make 'file' rows draggable
  const {
    isDragging,
    setNodeRef: setDraggableNodeRef,
    listeners,
    attributes,
  } = useDraggable({
    id: `row-${row.id}`,
    data: { row: rowData },
    disabled: 'type' in rowData && rowData.type !== 'file',
  });

  // Make 'folder' rows droppable
  const { isOver, setNodeRef: setDroppableNodeRef } = useDroppable({
    id: `row-${row.id}`,
    data: { row: rowData },
    disabled: 'type' in rowData && rowData.type !== 'folder',
  });

  // Combine refs
  const setNodeRef = (node: HTMLElement | null) => {
    if ('type' in rowData && rowData.type === 'file') setDraggableNodeRef(node);
    if ('type' in rowData && rowData.type === 'folder')
      setDroppableNodeRef(node);
  };

  return (
    <TableRow
      ref={setNodeRef}
      {...props}
      {...('type' in rowData && rowData.type === 'file'
        ? {
            ...attributes,
            ...listeners,
            style: {
              opacity: isDragging ? 0.5 : 1,
              background: isOver ? '#e0f2fe' : undefined,
              ...listeners?.style,
              cursor: 'grab',
            },
          }
        : {
            style: {
              opacity: isDragging ? 0.5 : 1,
              background: isOver ? '#e0f2fe' : undefined,
            },
          })}
    >
      {children}
    </TableRow>
  );
};

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
    // disabled: ['select', 'action', 'showHideCol'].includes(header.column.id),
  });

  const style: React.CSSProperties = {
    opacity: isDragging ? 0.8 : 1,
    position: 'relative',
    transform: CSS.Translate.toString(transform),
    whiteSpace: 'nowrap',
    width: header.column.getSize(),
    transition,
    zIndex: isDragging ? 10 : 1,
  };

  return (
    <TableHead
      ref={setNodeRef}
      style={style}
      colSpan={header.colSpan}
      {...itemProps?.tableHead}
      className={cn(
        '~px-3 ~py-3 ~uppercase ~text-[#1A1A1A]',
        itemProps?.tableHead?.className
      )}
    >
      <TableCell
        {...(isDraggable ? attributes : {})}
        {...(isDraggable ? listeners : {})}
        onClick={header.column.getToggleSortingHandler()}
        className={cn('~flex ~items-center ~gap-1 !~p-0', {
          'cursor-pointer select-none': header.column.getCanSort(),
          'cursor-grab': isDraggable && !isDragging,
          'cursor-move': !isDragging,
        })}
      >
        {header.isPlaceholder
          ? null
          : flexRender(header.column.columnDef.header, header.getContext())}
        {header.column.getCanSort() && header.column.getIsSorted() ? (
          header.column.getIsSorted() === 'asc' ? (
            <HiChevronUp className='~ml-2 ~h-4 ~w-4' />
          ) : (
            <HiChevronDown className='~ml-2 ~h-4 ~w-4' />
          )
        ) : null}
      </TableCell>
    </TableHead>
  );
};

export {
  DraggableColumnHeader,
  DraggableTableRow,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
};
