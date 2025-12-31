import { Column } from '@src/lib/hooks/useColumnVisibility';
import { ColumnItem, ColumnType } from './types';

interface FilterColumnsParams {
  visibleColumnIds: string[];
  columns: Column[];
  searchTerm: string;
  fixedColumnIds?: string[];
}

export function getFilteredColumns({
  visibleColumnIds,
  columns,
  searchTerm,
  fixedColumnIds,
}: FilterColumnsParams): Map<
  keyof typeof ColumnType,
  { id: keyof typeof ColumnType; title: string; items: ColumnItem[] }
> {
  const filteredColumns = searchTerm
    ? columns.filter((column) => {
        const title =
          typeof column.header === 'function'
            ? column.id
            : column.header || column.accessorKey || column.id;
        return String(title).toLowerCase().includes(searchTerm.toLowerCase());
      })
    : columns;

  const createColumnItem = (column: Column, isVisible: boolean): ColumnItem => {
    const content =
      typeof column.header === 'function'
        ? column.id.charAt(0).toUpperCase() + column.id.slice(1)
        : column.header || column.accessorKey || column.id;

    const isFixed = fixedColumnIds?.includes(column.id);

    return {
      id: column.id,
      content: String(content),
      isDraggable: column.id !== 'actions',
      isFixed,
      columnData: column,
    };
  };

  const visibleColumns = visibleColumnIds
    .map((id) =>
      filteredColumns.find(
        (column) => column.id === id && column.id !== 'actions'
      )
    )
    .filter(Boolean)
    .map((column) => createColumnItem(column!, true));

  const hiddenColumns = filteredColumns
    .filter(
      (column) =>
        !visibleColumnIds.includes(column.id) && column.id !== 'actions'
    )
    .map((column) => createColumnItem(column, false))
    .sort((a, b) =>
      a.content.localeCompare(b.content, undefined, { sensitivity: 'base' })
    ); // Sort alphabetically

  const result = new Map();

  result.set(ColumnType['visible-columns'], {
    id: ColumnType['visible-columns'],
    title: 'Show in table',
    items: visibleColumns,
  });

  result.set(ColumnType['hidden-columns'], {
    id: ColumnType['hidden-columns'],
    title: 'Hidden in table',
    items: hiddenColumns,
  });

  return result;
}
