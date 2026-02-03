import React from 'react';

import { cn } from '@src/lib/utils';

interface DiffProps extends React.HTMLAttributes<HTMLElement> {
  /** Custom drag handle component to replace the default handle */
  dragHandle?: React.ReactNode;
}

/** A component that shows a side-by-side comparison of two items with a draggable resizer. */
const Diff = React.forwardRef<HTMLElement, DiffProps>(
  ({ className, children, dragHandle, ...props }, ref) => {
    const containerRef = React.useRef<HTMLElement>(null);
    const [position, setPosition] = React.useState(50);
    const [isDragging, setIsDragging] = React.useState(false);

    React.useImperativeHandle(ref, () => containerRef.current!);

    const handleMouseDown = React.useCallback(() => {
      setIsDragging(true);
    }, []);

    const handleMouseUp = React.useCallback(() => {
      setIsDragging(false);
    }, []);

    const handleMouseMove = React.useCallback(
      (e: MouseEvent) => {
        if (!isDragging || !containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        setPosition(Math.max(0, Math.min(100, percentage)));
      },
      [isDragging]
    );

    const handleTouchMove = React.useCallback(
      (e: TouchEvent) => {
        if (!isDragging || !containerRef.current) return;

        const touch = e.touches[0];
        const rect = containerRef.current.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        setPosition(Math.max(0, Math.min(100, percentage)));
      },
      [isDragging]
    );

    React.useEffect(() => {
      if (isDragging) {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('touchmove', handleTouchMove);
        document.addEventListener('touchend', handleMouseUp);
      }

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleMouseUp);
      };
    }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

    const childArray = React.Children.toArray(children);
    const item1 = childArray[0];
    const item2 = childArray[1];

    const defaultHandle = (
      <>
        {/* Vertical line */}
        <div
          className='pointer-events-auto absolute inset-y-0 left-0 w-[2px] -translate-x-1/2 cursor-ew-resize bg-primary/80 shadow-lg'
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        />

        {/* Handle */}
        <div
          className='pointer-events-auto absolute left-0 top-1/2 flex size-8 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border-2 border-primary bg-background shadow-lg'
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <svg
            className='size-4 text-primary'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M8 9L12 5L16 9'
              strokeLinecap='round'
              strokeLinejoin='round'
              transform='rotate(90 12 12)'
            />
            <path
              d='M8 15L12 19L16 15'
              strokeLinecap='round'
              strokeLinejoin='round'
              transform='rotate(90 12 12)'
            />
          </svg>
        </div>
      </>
    );

    return (
      <figure
        ref={containerRef}
        className={cn(
          'tw-reset relative m-0 inline-block overflow-hidden',
          isDragging && 'select-none',
          className
        )}
        style={{
          isolation: 'isolate',
        }}
        tabIndex={0}
        {...props}
      >
        {/* Item 1 */}
        <div className='relative' role='img' tabIndex={0}>
          {item1}
        </div>

        {/* Item 2 - clipped overlay */}
        <div
          className='absolute inset-0 overflow-hidden'
          style={{
            clipPath: `inset(0 ${100 - position}% 0 0)`,
          }}
          role='img'
        >
          <div className='absolute inset-0'>{item2}</div>
        </div>

        {/* Resizer */}
        <div
          className='pointer-events-none absolute inset-0 z-10'
          style={{
            left: `${position}%`,
            transform: 'translateX(-50%)',
            width: '0px',
          }}
        >
          {dragHandle || defaultHandle}
        </div>
      </figure>
    );
  }
);
Diff.displayName = 'Diff';

const DiffItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('tw-reset', className)} {...props} />
));
DiffItem.displayName = 'DiffItem';

export { Diff, DiffItem };
