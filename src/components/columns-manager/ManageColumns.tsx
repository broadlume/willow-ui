import { combine } from '@atlaskit/pragmatic-drag-and-drop/combine';
import { monitorForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import {
  extractClosestEdge,
} from '@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge';
import React, { useCallback, useMemo, useState } from 'react';

import Board from './Board';
import { createRegistry } from './registry';
import {
  BoardContextValue,
  ColumnItem,
  ColumnType,
  ManageColumnsProps,
} from './types';
import { getFilteredColumns } from './utils';

const ManageColumns: React.FC<ManageColumnsProps> = ({
  columns,
  visibleColumnIds,
  toggleColumnVisibility,
  searchTerm,
  pinnedColumnIds,
  handleColumnOrderChange,
}) => {
  const [cardRegistry] = useState(createRegistry<string>());
  const [columnRegistry] = useState(createRegistry<keyof typeof ColumnType>());

  const [instanceId] = useState(() => Symbol('column-manager-dnd'));

  const columnData = useMemo(() => {
    const filteredColumns = getFilteredColumns({
      visibleColumnIds,
      columns,
      searchTerm,
      pinnedColumnIds,
    });

    const orderedColumnIds = [
      ColumnType['visible-columns'],
      ColumnType['hidden-columns'],
    ];

    return {
      filteredColumns,
      orderedColumnIds,
    };
  }, [columns, visibleColumnIds, searchTerm, pinnedColumnIds]);

  const getColumns = useCallback(() => {
    const { filteredColumns, orderedColumnIds } = columnData;
    return orderedColumnIds.map((columnId) => filteredColumns.get(columnId)!);
  }, [columnData]);

  const handleCardVisibility = useCallback(
    ({
      card,
    }: {
      card: ColumnItem & { columnId: keyof typeof ColumnType };
    }) => {
      toggleColumnVisibility(card.id);
    },
    [toggleColumnVisibility]
  );

  const contextValue: BoardContextValue = useMemo(
    () => ({
      instanceId,
      getColumns,
      registerCard: ({ cardId, entry }) => cardRegistry.register(cardId, entry),
      registerColumn: ({ columnId, entry }) =>
        columnRegistry.register(columnId, entry),
      handleCardVisibility,
    }),
    [instanceId, getColumns, cardRegistry, columnRegistry, handleCardVisibility]
  );

  React.useEffect(() => {
    return combine(
      monitorForElements({
        canMonitor: (args) => args.source.data.instanceId === instanceId,
        onDrop: (args) => {
          const { location, source } = args;
          if (source.data.type !== 'card') return;
          if (!location.current.dropTargets.length) return;

          const card = source.data as {
            type: string;
            itemId: string;
            columnId: keyof typeof ColumnType;
            isPinned?: boolean;
          };

          // Find both card and column targets
          const cardTarget = location.current.dropTargets.find(
            (t) => t.data.type === 'card' && (t.data as { itemId: string }).itemId !== card.itemId
          );

          const columnTarget = location.current.dropTargets.find(
            (t) => t.data.type === 'column'
          );

          // Determine target column ID
          let targetColumnId: keyof typeof ColumnType | undefined;

          if (cardTarget) {
            // If dropping on a card, use that card's column
            targetColumnId = (cardTarget.data as { columnId: keyof typeof ColumnType }).columnId;
          } else if (columnTarget) {
            // If dropping on empty column space, use column target
            targetColumnId = (columnTarget.data as { columnId: keyof typeof ColumnType }).columnId;
          }

          if (!targetColumnId) return;

          // Prevent pinned items from moving to different sections
          if (card.isPinned && targetColumnId !== card.columnId) return;

          // Case 1: Reordering within visible-columns section
          if (
            card.columnId === ColumnType['visible-columns'] &&
            targetColumnId === ColumnType['visible-columns'] &&
            cardTarget && handleColumnOrderChange
          ) {
            const targetItemId = (cardTarget.data as { itemId: string }).itemId;
            if (!targetItemId) return;

            const currentOrder = [...visibleColumnIds];
            const fromIndex = currentOrder.indexOf(card.itemId);
            const toIndex = currentOrder.indexOf(targetItemId);

            if (fromIndex === -1 || toIndex === -1) return;

            const reorderedList = [...currentOrder];
            const [movedItem] = reorderedList.splice(fromIndex, 1);

            // Determine insertion point based on drag direction
            const edge = extractClosestEdge(cardTarget.data);
            const finalIndex = edge === 'bottom' ? toIndex + 1 : toIndex;

            reorderedList.splice(finalIndex > fromIndex ? finalIndex - 1 : finalIndex, 0, movedItem);

            handleColumnOrderChange && handleColumnOrderChange(reorderedList);
            return;
          }

          // Case 2: Moving within same section (but no reorder needed)
          if (card.columnId === targetColumnId) {
            return; // Stay in place
          }

          // Case 3: Cross-section move (hidden → visible with position)
          if (
            card.columnId === ColumnType['hidden-columns'] &&
            targetColumnId === ColumnType['visible-columns']
          ) {
            const currentOrder = [...visibleColumnIds];

            // If dropping on a specific card, insert at that position
            if (cardTarget && handleColumnOrderChange) {
              const targetItemId = (cardTarget.data as { itemId: string }).itemId;
              const targetIndex = currentOrder.indexOf(targetItemId);

              if (targetIndex !== -1) {
                const edge = extractClosestEdge(cardTarget.data);
                const insertIndex = edge === 'bottom' ? targetIndex + 1 : targetIndex;

                currentOrder.splice(insertIndex, 0, card.itemId);
                handleColumnOrderChange && handleColumnOrderChange(currentOrder);
                return;
              }
            }

            // If no card target or target not found, add to the end
            toggleColumnVisibility(card.itemId);
            return;
          }

          // Case 4: Cross-section move (visible → hidden)
          if (
            card.columnId === ColumnType['visible-columns'] &&
            targetColumnId === ColumnType['hidden-columns']
          ) {
            toggleColumnVisibility(card.itemId);
            return;
          }

          // Case 5: Any other cross-section move
          toggleColumnVisibility(card.itemId);
        },
      })
    );
  }, [instanceId, toggleColumnVisibility, visibleColumnIds, handleColumnOrderChange]);

  const columns2 = getColumns();
  return <Board contextValue={contextValue} columns={columns2} />;
};

export default ManageColumns;
