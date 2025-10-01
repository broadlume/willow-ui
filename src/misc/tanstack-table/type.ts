import {
  DragLocationHistory,
  ElementDragPayload,
  DropTargetRecord,
} from '@atlaskit/pragmatic-drag-and-drop/dist/types/internal-types';
import {
  ColumnDef,
  PaginationState,
  Row,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import React from 'react';
import { TableRow } from './TableComponents';

// Extend TanStack Table column meta interface
declare module '@tanstack/react-table' {
  interface ColumnMeta<TData, TValue> {
    isGrow?: boolean;
    widthPercentage?: number;
  }
}

export type DataProps = Partial<{
  'data-testid': string;
  id: string;
  className: string;
  style?: React.CSSProperties;
}>;

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  tableParams?: Partial<Parameters<typeof useReactTable<TData>>[0]>;
  initialColumnOrder?: string[];
  initialSorting?: SortingState;
  initialPagination?: PaginationState;
  fixedStartColIds?: string[];
  fixedEndColIds?: string[];
  showPagination?: boolean;
  handleRowClick?: ({
    event,
    row,
  }: {
    event: unknown;
    row: Row<TData>;
  }) => void;
  includeLoading?: boolean;
  onColumnOrderChange?: Parameters<
    typeof useReactTable<TData>
  >[0]['onColumnOrderChange'];
  enableSelectAllPages?: boolean;
  enableRowSelection?: boolean;
  enableSingleSelection?: boolean;
  pageSizeOptions?: number[];
  noRecordFoundMessage?: React.ReactNode | string;
  customTableRow?: (
    props: React.PropsWithChildren<
      { row: Row<TData> } & Parameters<typeof TableRow>[0]
    >
  ) => JSX.Element;
  headerOverlayToast?: {
    onBulkAction?: (selectedRows: TData[]) => void;
    actionLabel?: string;
    className?: string;
  };
  onRowDrop?: (args: {
    location: DragLocationHistory;
    source: ElementDragPayload;
    self: DropTargetRecord;
  }) => void;
  itemProps?: {
    root?: DataProps;
    tableWrapper?: DataProps & {
      enableStickyHeader?: boolean;
    };
    table?: DataProps;
    tableHeader?: DataProps;
    tableHeaderRow?: DataProps;
    tableHead?: DataProps;
    tableBody?: DataProps;
    tableBodyRow?: DataProps | ((row: Row<TData>) => DataProps);
    tableRow?: DataProps;
    tableCell?: DataProps;
    draggable?: DataProps;
    tableFooterWrapper?: DataProps;
    itemPerPage?: DataProps & {
      selectTrigger?: DataProps;
      selectItem?: DataProps;
    };
    pagination?: DataProps & {
      rightChevron?: DataProps;
      leftChevron?: DataProps;
      page?: DataProps;
    };
  };
}
