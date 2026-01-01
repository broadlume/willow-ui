import classNames from 'classnames';
import React, {
  forwardRef,
  Fragment,
  memo,
  useEffect,
  useRef,
  useState,
} from 'react';
import ReactDOM from 'react-dom';
import { HiOutlineEye, HiOutlineEyeSlash } from 'react-icons/hi2';
import { RiDraggable } from 'react-icons/ri';
import invariant from 'tiny-invariant';

import {
  attachClosestEdge,
  extractClosestEdge,
  type Edge,
} from '@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge';
import { DropIndicator } from '@atlaskit/pragmatic-drag-and-drop-react-drop-indicator/box';
import { combine } from '@atlaskit/pragmatic-drag-and-drop/combine';
import {
  draggable,
  dropTargetForElements,
} from '@atlaskit/pragmatic-drag-and-drop/element/adapter';
import { preserveOffsetOnSource } from '@atlaskit/pragmatic-drag-and-drop/element/preserve-offset-on-source';
import { setCustomNativeDragPreview } from '@atlaskit/pragmatic-drag-and-drop/element/set-custom-native-drag-preview';

import { Button } from '@components/button';
import { useBoardContext } from './BoardContext';
import { ColumnItem, ColumnType } from './types';

type State =
  | { type: 'idle' }
  | { type: 'preview'; container: HTMLElement; rect: DOMRect }
  | { type: 'dragging' };

const idleState: State = { type: 'idle' };
const draggingState: State = { type: 'dragging' };

export type CardPrimitiveProps = {
  closestEdge: Edge | null;
  item: ColumnItem & { columnId: keyof typeof ColumnType };
  state: State;
};

const CardPrimitive = forwardRef<HTMLDivElement, CardPrimitiveProps>(
  function CardPrimitive({ closestEdge, item, state }, ref) {
    const { handleCardVisibility } = useBoardContext();

    const handleCheckboxClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      handleCardVisibility({ card: item });
    };

    const isVisible = item.columnId === 'visible-columns';

    return (
      <div
        ref={ref}
        data-testid={`column-card-wrapper`}
        className={classNames(
          'relative w-full box-border flex',
          state.type === 'dragging' ? 'opacity-30' : '',
          closestEdge === 'bottom' ? 'flex-col-reverse' : '',
          closestEdge ? 'gap-2' : ''
        )}
      >
        <div
          data-testid={`column-card`}
          className={classNames('flex items-center py-2 w-full')}
        >
          <Button
            variant={'ghost'}
            data-testid={`column-card-draggable`}
            className='cursor-grab bg-inherit text-inherit shadow-none h-fit w-fit disabled:[&>svg]:opacity-40 p-0 mr-3'
          >
            <RiDraggable className=' bg-inherit text-inherit w-4 h-4' />
          </Button>
          <span
            data-testid={`column-card-text`}
            className='text-text-pri text-sm font-normal ml-3 flex-1 leading-none'
          >
            {item.content}
          </span>
          <Button
            variant={'ghost'}
            disabled={item.isFixed}
            data-testid={`column-card-visible-hidden-btn`}
            className='cursor-pointer bg-inherit text-inherit shadow-none h-fit w-fit disabled:[&>svg]:opacity-40 p-0'
            onClick={handleCheckboxClick}
          >
            {isVisible ? (
              <HiOutlineEye
                data-testid={`column-card-visible-btn`}
                className='text-text-warning'
                size={16}
              />
            ) : (
              <HiOutlineEyeSlash
                data-testid={`column-card-hidden-btn`}
                className='text-icon-pri'
                size={16}
              />
            )}
          </Button>
        </div>

        {closestEdge && (
          <DropIndicator
            data-testid={`column-card-drop-indicator`}
            gap={'0'}
            edge={closestEdge}
          />
        )}
      </div>
    );
  }
);

export const Card = memo(function Card({
  item,
}: {
  item: CardPrimitiveProps['item'];
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { id, columnId } = item;
  const [closestEdge, setClosestEdge] = useState<Edge | null>(null);
  const [state, setState] = useState<State>(idleState);
  const { instanceId, registerCard } = useBoardContext();

  useEffect(() => {
    invariant(ref.current);
    return registerCard({
      cardId: id,
      entry: {
        element: ref.current,
      },
    });
  }, [registerCard, id]);

  useEffect(() => {
    const element = ref.current;
    invariant(element);

    return combine(
      draggable({
        element: element,
        getInitialData: () => ({
          type: 'card',
          itemId: id,
          ...item,
          instanceId,
          columnId: columnId,
        }),
        onGenerateDragPreview: ({ location, source, nativeSetDragImage }) => {
          const rect = source.element.getBoundingClientRect();

          setCustomNativeDragPreview({
            nativeSetDragImage,
            getOffset: preserveOffsetOnSource({
              element,
              input: location.current.input,
            }),
            render({ container }) {
              setState({ type: 'preview', container, rect });
              return () => setState(draggingState);
            },
          });
        },
        onDragStart: () => setState(draggingState),
        onDrop: () => setState(idleState),
      }),
      dropTargetForElements({
        element: element,
        canDrop: ({ source }) => {
          return (
             source.data.type === 'card'
          );
        },
        getIsSticky: () => true,
        getData: ({ input, element }) => {
          const data = { 
            type: 'card', 
            itemId: id,
            columnId: columnId
          };
          return attachClosestEdge(data, {
            input,
            element,
            allowedEdges: ['top', 'bottom'],
          });
        },
        onDragEnter: (args) => {
          if (args.source.data.itemId !== id) {
            setClosestEdge(extractClosestEdge(args.self.data));
          }
        },
        onDrag: (args) => {
          if (args.source.data.itemId !== id) {
            setClosestEdge(extractClosestEdge(args.self.data));
          }
        },
        onDragLeave: () => {
          setClosestEdge(null);
        },
        onDrop: () => {
          setClosestEdge(null);
        },
      })
    );
  }, [instanceId, item, id]);

  return (
    <Fragment>
      <CardPrimitive
        ref={ref}
        item={item}
        state={state}
        closestEdge={closestEdge}
      />
      {state.type === 'preview' &&
        ReactDOM.createPortal(
          <div
            style={{
              boxSizing: 'border-box',
              width: state.rect.width,
              height: state.rect.height,
            }}
          >
            <CardPrimitive item={item} state={state} closestEdge={null} />
          </div>,
          state.container
        )}
    </Fragment>
  );
});
