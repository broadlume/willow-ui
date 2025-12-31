import { useCallback } from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Column {
  id: string;
  header?: string | (() => JSX.Element);
  accessorKey?: string;
  [key: string]: unknown;
}

interface UseColumnVisibilityOptions {
  pageKey: string;
  columns: Column[];
  defaultVisibleColumns?: string[];
}

interface ColumnVisibilityState {
  visibleColumnIdsMap: Record<string, string[]>;
  setVisibleColumnIds: (pageKey: string, visibleColumnIds: string[] | ((prev: string[]) => string[])) => void;
}

const useColumnVisibilityStore = create<ColumnVisibilityState>()(
  persist(
    (set) => ({
      visibleColumnIdsMap: {},
      setVisibleColumnIds: (pageKey, newVisibleColumns) => {
        set((state) => {
          const currentColumns = state.visibleColumnIdsMap[pageKey] || [];
          const actualNewColumns = typeof newVisibleColumns === 'function' ? newVisibleColumns(currentColumns) : newVisibleColumns;

          return {
            visibleColumnIdsMap: {
              ...state.visibleColumnIdsMap,
              [pageKey]: actualNewColumns,
            },
          };
        });
      },
    }),
    {
      name: 'column-visibility-storage',
    },
  ),
);

export function useColumnVisibility({ pageKey, columns, defaultVisibleColumns }: UseColumnVisibilityOptions) {
  const { visibleColumnIdsMap, setVisibleColumnIds } = useColumnVisibilityStore();

  const getOrInitializeColumnIds = useCallback(() => {
    const existingVisibleColumnIds = visibleColumnIdsMap[pageKey];

    if (existingVisibleColumnIds && existingVisibleColumnIds.length > 0) {
      const validColumnIds = existingVisibleColumnIds.filter((colId) => columns.some((col) => col.id === colId));

      if (validColumnIds.length > 0) {
        return validColumnIds;
      }
    }

    const defaultColumnIds = defaultVisibleColumns || columns.map((col) => col.id);

    if (!existingVisibleColumnIds) {
      setVisibleColumnIds(pageKey, defaultColumnIds);
    }

    return defaultColumnIds;
  }, [columns, pageKey, visibleColumnIdsMap, setVisibleColumnIds, defaultVisibleColumns]);

  const visibleColumnIds = visibleColumnIdsMap[pageKey] || getOrInitializeColumnIds();

  const columnVisibility = columns.reduce(
    (acc, column) => {
      acc[column.id] = visibleColumnIds.includes(column.id);
      return acc;
    },
    {} as Record<string, boolean>,
  );

  const toggleColumnVisibility = useCallback(
    (columnId: string) => {
      setVisibleColumnIds(pageKey, (prev) => {
        const isCurrentlyVisible = prev.includes(columnId);

        // If trying to hide the last visible column, don't allow it
        if (isCurrentlyVisible && prev.length <= 1) {
          return prev;
        }

        return isCurrentlyVisible ? prev.filter((id) => id !== columnId) : [...prev, columnId];
      });
    },
    [pageKey, setVisibleColumnIds],
  );

  // column order change handler
  const handleColumnOrderChange = useCallback(
    (newOrder: string[] | ((prev: string[]) => string[])) => {
      const finalOrder = typeof newOrder === 'function'
        ? newOrder(visibleColumnIds)
        : newOrder;

      setVisibleColumnIds(pageKey, finalOrder);
    },
    [pageKey, visibleColumnIds, setVisibleColumnIds]
  );

  return {
    visibleColumnIds,
    columnVisibility,
    toggleColumnVisibility,
    handleColumnOrderChange
  };
}
