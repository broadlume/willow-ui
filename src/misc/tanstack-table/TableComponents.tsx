import { useDraggable, useDroppable } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { flexRender, Header, Row } from '@tanstack/react-table';

import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import { HiMiniChevronDown, HiMiniChevronUp } from 'react-icons/hi2';
import { DataTableProps } from './type';
import { combine } from '@atlaskit/pragmatic-drag-and-drop/combine';

import {
  draggable,
  dropTargetForElements,
  ElementDragPayload,
  ElementDropTargetEventBasePayload,
} from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import {
  attachInstruction,
  extractInstruction,
  Instruction,
} from '@atlaskit/pragmatic-drag-and-drop-hitbox/list-item';
import { DropIndicator } from '@atlaskit/pragmatic-drag-and-drop-react-drop-indicator/list-item';
import {
  DragLocationHistory,
  DropTargetRecord,
} from '@atlaskit/pragmatic-drag-and-drop/dist/types/internal-types';
const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className='~relative ~w-full ~overflow-auto'>
    <table
      ref={ref}
      className={clsx('~w-full ~caption-bottom ~text-sm', className)}
      {...props}
    />
  </div>
));
Table.displayName = 'Table';

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={clsx('[&_tr]:~border-b', className)} {...props} />
));
TableHeader.displayName = 'TableHeader';

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={clsx('[&_tr:last-child]:~border-0', className)}
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
    className={clsx(
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
    className={clsx(
      '~w-fit ~px-2 ~py-[14px] ~text-left ~align-middle ~text-xs ~font-semibold ~text-muted-foreground last:~pr-[20px] [&:has([role=checkbox])]:~px-[16px]',
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
      '~p-2 ~align-middle ~text-xs [&:has([role=checkbox])]:~px-[16px]',
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
    className={clsx('~mt-4 ~text-sm ~text-muted-foreground', className)}
    {...props}
  />
));
TableCaption.displayName = 'TableCaption';

// const DraggableTableRow = <TData extends object>({
//   row,
//   children,
//   onRowDrop,
//   ...props
// }: React.PropsWithChildren<
//   {
//     row: Row<TData>;
//     onRowDrop?: (args: {
//       location: DragLocationHistory;
//       source: ElementDragPayload;
//       self: DropTargetRecord;
//     }) => void;
//   } & Parameters<typeof TableRow>[0]
// >) => {
//   const { original: rowData } = row;
//   const [instruction, setInstruction] = useState<Instruction | null>(null);
//   const rowRef = useRef<HTMLTableRowElement | null>(null);

//   useEffect(() => {
//     const el = rowRef.current;
//     if (!el) {
//       throw new Error('ref not set correctly');
//     }

//     function onChange({ self }: ElementDropTargetEventBasePayload) {
//       const instruction = extractInstruction(self.data);

//       setInstruction(instruction);
//       return;
//     }

//     return combine(
//       draggable({
//         element: el,
//         getInitialData: () => ({
//           type: rowData.type,
//           id: rowData.id,
//         }),
//         onDrop: (args) => {
//           console.log('draggable dropped', args);
//         },
//       }),
//       dropTargetForElements({
//         element: el,
//         canDrop: ({ source }) => true,
//         // rowData.type === 'folder' && source.data.id !== rowData.id,
//         getIsSticky: () => true,
//         getData: ({ input, element, source }) => {
//           const data = {
//             type: rowData.type,
//             id: rowData.id,
//           };
//           return attachInstruction(data, {
//             input,
//             element,
//             operations: {
//               combine:
//                 rowData.type === 'folder' && source.data.id !== rowData.id
//                   ? 'available'
//                   : 'blocked',
//               'reorder-before': 'not-available',
//               // Don't allow 'reorder-after' on expanded items
//               'reorder-after': 'not-available',
//             },
//           });
//         },
//         onDragEnter: onChange,
//         onDrag: onChange,
//         onDrop: (args) => {
//           console.log('dropped targetforelements', args);
//           onRowDrop?.(args);
//           setInstruction(null);
//         },
//         onDragLeave: () => setInstruction(null),
//       })
//     );
//   }, [rowData]);

//   return (
//     <TableRow
//       ref={rowRef}
//       data-testid={'data-table-row-' + row.id}
//       {...props}
//       className={clsx('~relative', props.className)}
//     >
//       {children}
//       {instruction ? <DropIndicator instruction={instruction} /> : null}
//     </TableRow>
//   );
// };

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
      data-testid={'data-table-header-head-' + header.column.id}
      ref={setNodeRef}
      style={style}
      // colSpan={header.colSpan}
      {...itemProps?.tableHead}
      className={clsx(
        '~px-3 ~py-3 ~uppercase ~text-[#1A1A1A]',
        itemProps?.tableHead?.className
      )}
    >
      <TableCell
        data-testid={'data-table-header-cell-' + header.column.id}
        {...(isDraggable ? attributes : {})}
        {...(isDraggable ? listeners : {})}
        onClick={header.column.getToggleSortingHandler()}
        className={clsx(
          '~flex ~items-center ~gap-1 !~p-0 ~text-[13px] ~font-semibold ~text-[#1A1A1A]',
          {
            'cursor-pointer select-none': header.column.getCanSort(),
            'cursor-grab': isDraggable && !isDragging,
            'cursor-move': !isDragging,
          }
        )}
      >
        {header.isPlaceholder
          ? null
          : flexRender(header.column.columnDef.header, header.getContext())}
        {header.column.getCanSort() && header.column.getIsSorted() ? (
          <div className='~flex ~flex-col ~items-center'>
            <HiMiniChevronUp
              data-testid={'data-table-header-asc-' + header.column.id}
              data-sortactive={header.column.getIsSorted() === 'asc'}
              className={clsx(
                '~-mb-[5px] ~ml-2 ~h-4 ~w-4 ~text-[#1A1A1A]',
                header.column.getIsSorted() === 'asc'
                  ? '~opacity-100'
                  : '~opacity-40'
              )}
            />
            <HiMiniChevronDown
              data-testid={'data-table-header-desc-' + header.column.id}
              data-sortactive={header.column.getIsSorted() === 'desc'}
              className={clsx(
                '~ml-2 ~h-4 ~w-4 ~text-[#1A1A1A]',
                header.column.getIsSorted() === 'desc'
                  ? '~opacity-100'
                  : '~opacity-40'
              )}
            />
          </div>
        ) : null}
      </TableCell>
    </TableHead>
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
