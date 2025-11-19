import { Checkbox } from '@components/checkbox/checkbox';
import { Label } from '@components/label/label';
import { ApiSelectFilterConfig } from '../types';

interface ApiFilterListProps {
  filterKey: string;
  config: ApiSelectFilterConfig;
  isLoading: boolean;
  onScroll: (event: React.UIEvent<HTMLDivElement>) => void;
  scrollRef: (el: HTMLDivElement | null) => void;
  onSelectAll: (key: string, isSelectAll: boolean) => void;
  onItemToggle?: (key: string, itemId: string) => void;
}

export const ApiFilterList = ({
  filterKey,
  config,
  isLoading,
  onScroll,
  scrollRef,
  onSelectAll,
  onItemToggle,
}: ApiFilterListProps) => {
  const canSelectAll = config.canSelectAll ?? true;
  const filterState = config.filterState || {
    isSelectAll: false,
    includeItems: [],
    excludeItems: [],
  };

  // Determine if an item should be checked based on select all state
  const isItemSelected = (itemId: string) => {
    if (filterState.isSelectAll) {
      // If select all is true, item is selected unless it's in exclude list
      return !filterState.excludeItems.includes(itemId);
    } else {
      // If select all is false, item is selected if it's in include list
      return filterState.includeItems.includes(itemId);
    }
  };

  // Determine select all checkbox state
  const isSelectAllIndeterminate = () => {
    if (!config.allAvailableItems?.length) return false;

    // If we're in select all mode but have some exclusions, it's indeterminate
    if (filterState.isSelectAll && filterState.excludeItems.length > 0) {
      return true;
    }

    // If we're not in select all mode, check if some but not all visible items are selected
    if (!filterState.isSelectAll) {
      const availableItemIds = config.allAvailableItems.map((item) => item.id);
      const selectedCount = availableItemIds.filter((id) =>
        isItemSelected(id)
      ).length;
      return selectedCount > 0 && selectedCount < availableItemIds.length;
    }

    return false;
  };

  const isSelectAllChecked = () => {
    if (!config.allAvailableItems?.length) return false;

    // If select all is true, show as checked (even if not all options are loaded)
    // This ensures the checkbox reflects the true select all state
    if (filterState.isSelectAll) {
      return true;
    }

    // If not in select all mode, check if all visible items are selected
    const availableItemIds = config.allAvailableItems.map((item) => item.id);
    return (
      availableItemIds.length > 0 &&
      availableItemIds.every((id) => isItemSelected(id))
    );
  };
  return (
    <div className='ml-2 mt-1 space-y-2'>
      {/* Select All Checkbox */}
      {canSelectAll &&
        config.allAvailableItems &&
        config.allAvailableItems.length > 0 && (
          <div className='flex items-center gap-2 pb-2 border-b border-[--color-border]'>
            <Checkbox
              className='data-[state=checked]:!border-surface-cta data-[state=checked]:!bg-surface-cta h-[14px] w-[14px] !rounded-[4px] border !border-[--color-grey-20]'
              id={`${filterKey}-select-all`}
              checked={
                isSelectAllIndeterminate()
                  ? 'indeterminate'
                  : isSelectAllChecked()
              }
              onCheckedChange={(checked) => {
                onSelectAll(filterKey, !!checked);
              }}
              disabled={isLoading}
            />
            <Label
              htmlFor={`${filterKey}-select-all`}
              className='cursor-pointer text-[14px] font-medium'
            >
              Select All
            </Label>
          </div>
        )}

      <div
        ref={scrollRef}
        className='scrollbar-hide max-h-[200px] space-y-4 overflow-y-auto'
        onScroll={onScroll}
      >
        {/* Loading state for initial load */}
        {config.isLoading && !config.allAvailableItems?.length && (
          <div className='text-[12px] text-[--color-grey-30] p-2'>
            Loading...
          </div>
        )}

        {/* Error state */}
        {config.isError && (
          <div className='text-[12px] text-red-500 p-2'>Error loading data</div>
        )}

        {/* Render available items */}
        {config.allAvailableItems?.map((item, index) => {
          const isChecked = isItemSelected(item.id);
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
                  // Use the new item toggle handler if available, otherwise fall back to original
                  if (onItemToggle) {
                    onItemToggle(filterKey, item.id);
                  } else if (config.onToggleItem) {
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
          <div className='text-[12px] text-[--color-grey-30] p-2 text-center'>
            Loading...
          </div>
        )}

        {/* Spacer for scrolling */}
        {(config.allAvailableItems?.length || 0) > 0 && <div className='h-2' />}
      </div>
    </div>
  );
};
