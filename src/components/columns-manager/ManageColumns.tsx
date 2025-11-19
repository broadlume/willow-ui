import { combine } from '@atlaskit/pragmatic-drag-and-drop/combine';
import { monitorForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
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
}) => {
  const [cardRegistry] = useState(createRegistry<string>());
  const [columnRegistry] = useState(createRegistry<keyof typeof ColumnType>());

  const [instanceId] = useState(() => Symbol('column-manager-dnd'));

  const columnData = useMemo(() => {
    const filteredColumns = getFilteredColumns({
      visibleColumnIds,
      columns,
      searchTerm,
    });

    const orderedColumnIds = [
      ColumnType['visible-columns'],
      ColumnType['hidden-columns'],
    ];

    return {
      filteredColumns,
      orderedColumnIds,
    };
  }, [columns, visibleColumnIds, searchTerm]);

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
        canMonitor: (args) => {
          return args.source.data.instanceId === instanceId;
        },
        onDrop: (args) => {
          if (!args.location.current.dropTargets.length) return;

          const { location, source } = args;

          if (source.data.type === 'card') {
            const card = source.data as unknown as ColumnItem & {
              columnId: keyof typeof ColumnType;
            };

            const dropTarget = location.current.dropTargets.find(
              (target) => target.data.type === 'column'
            );

            if (dropTarget) {
              const targetData = dropTarget.data as unknown as {
                type: string;
                columnId: keyof typeof ColumnType;
              };

              if (targetData.columnId !== card.columnId) {
                setTimeout(() => {
                  toggleColumnVisibility(card.id);
                }, 0);
              }
            }
          }
        },
      })
    );
  }, [instanceId, toggleColumnVisibility]);

  const columns2 = getColumns();
  return <Board contextValue={contextValue} columns={columns2} />;
};

export default ManageColumns;
