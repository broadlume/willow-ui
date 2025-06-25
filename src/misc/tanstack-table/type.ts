import {
  ColumnDef,
  PaginationState,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';

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
  onColumnOrderChange?: Parameters<
    typeof useReactTable<TData>
  >[0]['onColumnOrderChange'];
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
