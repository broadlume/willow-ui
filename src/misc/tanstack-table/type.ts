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
import React, { MouseEvent } from 'react';
import { TableRow } from './TableComponents';

export type DataProps = Partial<{
  'data-testid': string;
  id: string;
  className: string;
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
    event: MouseEvent<HTMLTableRowElement, MouseEvent>;
    row: Row<TData>;
  }) => void;
  includeLoading?: boolean;
  onColumnOrderChange?: Parameters<
    typeof useReactTable<TData>
  >[0]['onColumnOrderChange'];
  enableSelectAllPages?: boolean;
  enableRowSelection?: boolean;
  enableSingleSelection?: boolean;
  customTableRow?: (
    props: React.PropsWithChildren<
      { row: Row<TData> } & Parameters<typeof TableRow>[0]
    >
  ) => JSX.Element;
  onRowDrop?: (args: {
    location: DragLocationHistory;
    source: ElementDragPayload;
    self: DropTargetRecord;
  }) => void;
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
