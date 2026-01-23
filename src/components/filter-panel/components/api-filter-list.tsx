import { Checkbox } from '@components/checkbox/checkbox';
import { Input } from '@components/input/input';
import { Label } from '@components/label/label';
import { Loader } from '@components/Loader/Loader';
import { HiOutlineSearch } from 'react-icons/hi';
import { ApiSelectFilterConfig } from '../types';

interface ApiFilterListProps {
  filterKey: string;
  config: ApiSelectFilterConfig;
  isLoading: boolean;
  searchTerm?: string;
  onSearchChange?: (term: string) => void;
  onScroll: (event: React.UIEvent<HTMLDivElement>) => void;
  scrollRef: (el: HTMLDivElement | null) => void;
  onSelectAll: (key: string, isSelectAll: boolean) => void;
  onItemToggle?: (key: string, itemId: string) => void;
}

export const ApiFilterList = ({
  filterKey,
  config,
  isLoading,
  searchTerm = '',
  onSearchChange,
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

  // Filter items based on search term
  const filteredItems =
    config.allAvailableItems?.filter((item) =>
      item.label.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

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
    if (!filteredItems.length) return false;

    // If we're in select all mode but have some exclusions, it's indeterminate
    if (filterState.isSelectAll && filterState.excludeItems.length > 0) {
      return true;
    }

    // If we're not in select all mode, check if some but not all visible items are selected
    if (!filterState.isSelectAll) {
      const availableItemIds = filteredItems.map((item) => item.id);
      const selectedCount = availableItemIds.filter((id) =>
        isItemSelected(id)
      ).length;
      return selectedCount > 0 && selectedCount < availableItemIds.length;
    }

    return false;
  };

  const isSelectAllChecked = () => {
    if (!filteredItems.length) return false;

    // If select all is true, show as checked (even if not all options are loaded)
    // This ensures the checkbox reflects the true select all state
    if (filterState.isSelectAll) {
      return true;
    }

    // If not in select all mode, check if all visible items are selected
    const availableItemIds = filteredItems.map((item) => item.id);
    return (
      availableItemIds.length > 0 &&
      availableItemIds.every((id) => isItemSelected(id))
    );
  };
  return (
    <>
      {/* Search input for filtering options */}
      {config.searchable && (
        <div
          className='relative'
          data-testid={`${filterKey}-api-list-search-input`}
        >
          <HiOutlineSearch className='absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-icon-pri' />
          <Input
            placeholder='Search'
            value={searchTerm}
            onChange={(e) => onSearchChange?.(e.target.value)}
            className='h-8 w-full rounded-md border !border-border-pri pl-8 text-sm'
          />
        </div>
      )}

      <div
        className='ml-2 mt-1 space-y-2'
        data-testid={`${filterKey}-api-list`}
      >
        <div
          ref={scrollRef}
          className='scrollbar-hide max-h-[200px] space-y-4 overflow-y-auto'
          onScroll={onScroll}
        >
          {/* Select All Checkbox */}
          {canSelectAll && filteredItems.length > 0 && (
            <div
              key={`${filterKey}-select-all`}
              className='flex items-center gap-2'
            >
              <Checkbox
                id={`${filterKey}-select-all`}
                className='data-[state=checked]:!border-surface-cta data-[state=checked]:!bg-surface-cta data-[state=indeterminate]:!border-surface-cta data-[state=indeterminate]:!bg-surface-cta h-3.5 w-3.5 !rounded border !border-border-pri'
                checked={
                  isSelectAllIndeterminate()
                    ? 'indeterminate'
                    : isSelectAllChecked()
                }
                data-state={
                  isSelectAllIndeterminate()
                    ? 'indeterminate'
                    : isSelectAllChecked()
                    ? 'checked'
                    : 'unchecked'
                }
                onCheckedChange={(checked) => {
                  onSelectAll(filterKey, !!checked);
                }}
                disabled={isLoading || searchTerm?.length > 0}
              />
              <Label
                htmlFor={`${filterKey}-select-all`}
                className='cursor-pointer text-sm text-text-pri'
              >
                Select All
              </Label>
            </div>
          )}
          {/* Loading state for initial load */}
          {config.isLoading && !config.allAvailableItems?.length && (
            <div className='flex items-center justify-center'>
              <Loader
                data-testid={`${filterKey}-loading-icon`}
                className='h-4 w-4'
              />
            </div>
          )}

          {/* Error state */}
          {config.isError && (
            <div className='flex justify-center text-xs text-red-500 p-2'>
              Error loading data
            </div>
          )}

          {/* Render available items */}
          {filteredItems.map((item, index) => {
            const isChecked = isItemSelected(item.id);
            return (
              <div
                key={`${item.id}-${index}`}
                className='flex items-center gap-2'
              >
                <Checkbox
                  className='data-[state=checked]:!border-surface-cta data-[state=checked]:!bg-surface-cta h-3.5 w-3.5 !rounded border !border-border-pri'
                  checked={isChecked}
                  id={`${filterKey}-${item.id}`}
                  onCheckedChange={() => {
                    // Use the new item toggle handler if available, otherwise fall back to original
                    if (config.onToggleItem) {
                      config.onToggleItem(item.id);
                    } else if (onItemToggle) {
                      onItemToggle(filterKey, item.id);
                    }
                  }}
                  disabled={isLoading}
                />
                <Label
                  htmlFor={`${filterKey}-${item.id}`}
                  className='cursor-pointer text-sm'
                >
                  {item.label}
                </Label>
              </div>
            );
          })}

          {/* Loading more indicator */}
          {config.hasNextPage && config.isFetchingNextPage && (
            <div className='flex items-center justify-center'>
              <Loader
                data-testid={`${filterKey}-loading-icon`}
                className='h-4 w-4'
              />
            </div>
          )}

          {/* Spacer for scrolling */}
          {filteredItems.length > 0 && <div className='h-2' />}
        </div>
      </div>
    </>
  );
};
