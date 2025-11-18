import { Checkbox } from '@components/checkbox/checkbox';
import { Label } from '@components/label/label';
import { ApiSelectFilterConfig } from '../types';

interface ApiFilterListProps {
  filterKey: string;
  config: ApiSelectFilterConfig;
  isLoading: boolean;
  onScroll: (event: React.UIEvent<HTMLDivElement>) => void;
  scrollRef: (el: HTMLDivElement | null) => void;
}

export const ApiFilterList = ({
  filterKey,
  config,
  isLoading,
  onScroll,
  scrollRef,
}: ApiFilterListProps) => {
  return (
    <div className='ml-2 mt-1 space-y-2'>
      <div
        ref={scrollRef}
        className='scrollbar-hide max-h-[200px] space-y-4 overflow-y-auto'
        onScroll={onScroll}
      >
        {/* Loading state for initial load */}
        {config.isLoading &&
          (!config.allAvailableItems ||
            config.allAvailableItems.length === 0) && (
            <div className='text-[12px] text-[#9CA3AF] p-2'>Loading...</div>
          )}

        {/* Error state */}
        {config.isError && (
          <div className='text-[12px] text-red-500 p-2'>Error loading data</div>
        )}

        {/* Render available items */}
        {config.allAvailableItems?.map((item, index) => {
          const isChecked = config.selectedItems?.includes(item.id) || false;
          return (
            <div
              key={`${item.id}-${index}`}
              className='flex items-center gap-2'
            >
              <Checkbox
                className='data-[state=checked]:!border-surface-cta data-[state=checked]:!bg-surface-cta h-[14px] w-[14px] !rounded-[4px] border !border-[#CCCCCC] [var(--color-green-500)]'
                id={`${filterKey}-${item.id}`}
                checked={isChecked}
                onCheckedChange={() => {
                  if (config.onToggleItem) {
                    config.onToggleItem(item.id);
                  }
                }}
                disabled={isLoading}
              />
              <Label
                htmlFor={`${filterKey}-${item.id}`}
                className='cursor-pointer text-[14px]'
              >
                {item.label}
              </Label>
            </div>
          );
        })}

        {/* Loading more indicator */}
        {config.hasNextPage && config.isFetchingNextPage && (
          <div className='text-[12px] text-[#9CA3AF] p-2 text-center'>
            Loading...
          </div>
        )}

        {/* Spacer for scrolling */}
        {(config.allAvailableItems?.length || 0) > 0 && <div className='h-2' />}
      </div>
    </div>
  );
};
