import { useDraggable, useDroppable } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import {
  Header,
  flexRender,
  Row,
  ColumnDef,
  useReactTable,
} from '@tanstack/react-table';
import classNames from 'classnames';
import * as React from 'react';
import { HiChevronUp, HiChevronDown } from 'react-icons/hi2';

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className='cms-relative cms-w-full cms-overflow-auto'>
    <table
      ref={ref}
      className={classNames(
        'cms-w-full cms-caption-bottom cms-text-sm',
        className
      )}
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
    className={classNames('[&_tr]:cms-border-b', className)}
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
    className={classNames('[&_tr:last-child]:cms-border-0', className)}
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
    className={classNames(
      'cms-border-t cms-bg-muted/50 cms-font-medium [&>tr]:last:cms-border-b-0',
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
    className={classNames(
      'cms-transition-colors hover:cms-bg-muted/50 data-[state=selected]:cms-bg-muted',
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
    className={classNames(
      'cms-px-2 cms-py-2 cms-text-left cms-align-middle cms-text-xs cms-font-semibold cms-text-muted-foreground [&:has([role=checkbox])]:cms-pl-3 [&:has([role=checkbox])]:cms-pr-0 [&>[role=checkbox]]:cms-translate-y-[2px] cms-w-fit',
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
    className={classNames(
      'cms-p-2 cms-text-xs cms-align-middle [&:has([role=checkbox])]:cms-pr-0 [&>[role=checkbox]]:cms-translate-y-[2px]',
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
    className={classNames(
      'cms-mt-4 cms-text-sm cms-text-muted-foreground',
      className
    )}
    {...props}
  />
));
TableCaption.displayName = 'TableCaption';

type DataProps = Partial<{
  'data-testid': string;
  id: string;
  className: string;
}>;

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  tableParams?: Partial<Parameters<typeof useReactTable<TData>>[0]>;
  onRowDrop?: (draggedRow: TData, dropTarget: TData) => void;
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

// --- Draggable Header Component ---
// --- Draggable Header Component ---
// This component wraps your TableHead to make it draggable and sortable
const DraggableColumnHeader = <TData, TValue>({
  header,
  itemProps,
}: {
  header: Header<TData, TValue>;
  itemProps: DataTableProps<TData, TValue>['itemProps'];
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: `col-${header.column.id}`,
  });

  console.log('header.column.getIsSorted()', header.column.getIsSorted());

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
      className={classNames(
        'cms-px-3 cms-py-3 cms-uppercase cms-text-[#1A1A1A]',
        itemProps?.tableHead?.className
      )}
    >
      <TableCell
        {...attributes}
        {...listeners}
        onClick={header.column.getToggleSortingHandler()}
        className={classNames('cms-flex cms-items-center cms-gap-1 !cms-p-0', {
          'cursor-pointer select-none': header.column.getCanSort(),
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

// --- Draggable Table Row Component ---
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

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  DraggableColumnHeader,
  DraggableTableRow,
};

export type { DataTableProps, DataProps };
