import { combine } from '@atlaskit/pragmatic-drag-and-drop/combine';
import { dropTargetForElements } from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import classNames from 'classnames';
import { memo, useEffect, useRef } from 'react';
import invariant from 'tiny-invariant';
import { useBoardContext } from './BoardContext';
import { Card } from './Card';
import { Header } from './Header';
import { ColumnProps, ColumnType } from './types';

export const Column = memo(function Column({ column }: ColumnProps) {
  const columnId = column.id;
  const columnRef = useRef<HTMLDivElement | null>(null);
  const { instanceId, registerColumn } = useBoardContext();

  useEffect(() => {
    invariant(columnRef.current);
    return registerColumn({
      columnId,
      entry: {
        element: columnRef.current,
      },
    });
  }, [columnId, registerColumn]);

  useEffect(() => {
    const element = columnRef.current;
    invariant(element);

    return combine(
      dropTargetForElements({
        element,
        canDrop: ({ source }) => {
          const sourceData = source.data as {
            columnId?: keyof typeof ColumnType;
            instanceId?: symbol;
            type?: string;
          };
          return (
            source.data.instanceId === instanceId &&
            source.data.type === 'card' &&
            sourceData.columnId !== columnId
          );
        },
        getIsSticky: () => true,
        getData: () => ({
          type: 'column',
          columnId,
          instanceId,
        }),
        onDragEnter: () => {
          element.classList.add('bg-gray-50');
        },
        onDragLeave: () => {
          element.classList.remove('bg-gray-50');
        },
        onDrop: () => {
          element.classList.remove('bg-gray-50');
        },
      })
    );
  }, [columnId, instanceId]);

  return (
    <div
      className={classNames('flex w-full flex-col items-start justify-center')}
      data-testid={`column`}
      ref={columnRef}
    >
      <div className='w-full'>
        <div className={classNames('w-full')}>
          {/* Header */}
          <div
            className={classNames(
              'text-color-text-subtlest select-none',
              'items-center justify-between'
            )}
            data-testid={`column-header`}
          >
            <Header data-testid={`column-header-title`}>{column.title}</Header>
          </div>
          {/* List */}
          <div className={'pt-2'} data-testid={'column-list-wrapper'}>
            <div
              data-testid={'column-list'}
              className={
                'flex w-full flex-col items-start justify-center gap-1'
              }
            >
              {column.items.length ? (
                column.items.map((item) => (
                  <Card item={{ ...item, columnId: column.id }} key={item.id} />
                ))
              ) : (
                <div
                  data-testid={'column-list-no-items-found'}
                  className='flex h-20 w-full items-center justify-center rounded-md bg-gray-50 text-sm text-gray-400'
                >
                  No Columns Found
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
