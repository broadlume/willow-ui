import { Accordion } from '@components/accordion/accordion';
import { Button } from '@components/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@components/popover/popover';
import { HiAdjustments } from 'react-icons/hi';
import { DateRangeFilter } from './components/date-range-filter';
import { RadioFilterItem } from './components/radio-filter-item';
import { SelectFilterItem } from './components/select-filter-item';
import { useFilterPanel } from './hooks/use-filter-panel';
import { FilterPanelProps, FilterValues, RadioFilterConfig } from './types';
import { Badge } from '@components/badge/badge';
import clsx from 'clsx';

/**
 * Reusable filter panel component with support for checkbox, date range, and API-based infinite scroll filters
 */
const FilterPanel = <T extends FilterValues = FilterValues>({
  filters,
  onFiltersChange,
  filterConfig,
  isLoading = false,
  isClearAllSticky = true,
  classNames,
  inModal = false,
}: FilterPanelProps<T>) => {
  // Use the custom hook for all filter panel logic
  const {
    isOpen,
    setIsOpen,
    searchTerms,
    setSearchTerms,
    dateRanges,
    scrollContainerRefs,
    activeFiltersCount,
    handleCheckboxChange,
    handleSelectAll,
    handleApiSelectAll,
    handleApiItemToggle,
    handleDateRangeChange,
    handleRadioChange,
    handleClearAll,
    handleScroll,
    handleSearchChange,
    filterOptions,
    getApiFilterState,
  } = useFilterPanel({ filters, onFiltersChange, filterConfig });

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen} modal={inModal}>
      <PopoverTrigger data-testid='filter-panel-popover-trigger' className={classNames?.popoverTriggerClassName} >
        {/* Filter toggle button with active count badge */}
        <Button
          id='filter-button'
          variant='outline'
          size='sm'
          className={clsx('border-border-pri ml-1 !rounded-md border bg-transparent px-2 relative overflow-visible', classNames?.buttonClassName)}
          aria-label='Filter'
        >
          <HiAdjustments className='rotate-90 text-base' />
          {activeFiltersCount > 0 && (
            <Badge className='bg-surface-cta absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full text-2xs font-medium text-white'>
              {activeFiltersCount}
            </Badge>
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent
        data-testid='filter-panel-popover-content'
        align='end'
        className={clsx('flex max-h-96 w-55.5 flex-col rounded-md bg-white p-2 text-sm font-normal shadow-shadow-sm overflow-y-auto', classNames?.popoverContentClassName)}
      >
        <div className='scrollbar-hide flex-1 overflow-y-auto'>
          <Accordion type='multiple'>
            {filterConfig.map((config) => {
              const { key, type } = config;

              if (type === 'dateRange') {
                return (
                  <DateRangeFilter
                    key={key}
                    filterKey={key}
                    label={config.label}
                    selectedRange={
                      filters[key] as { from: string; to: string } | null
                    }
                    tempRange={dateRanges[key]}
                    onDateRangeChange={handleDateRangeChange}
                  />
                );
              }

              if (type === 'radio') {
                return (
                  <RadioFilterItem
                    key={key}
                    config={config as RadioFilterConfig}
                    selectedValue={(filters[key] as string) || null}
                    onRadioChange={handleRadioChange}
                  />
                );
              }

              return (
                <SelectFilterItem
                  key={key}
                  config={config}
                  selectedValues={(filters[key] as string[]) || []}
                  searchTerm={searchTerms[key] || ''}
                  isLoading={isLoading}
                  onSearchChange={handleSearchChange}
                  onCheckboxChange={handleCheckboxChange}
                  onSelectAll={handleSelectAll}
                  onApiSelectAll={handleApiSelectAll}
                  onApiItemToggle={handleApiItemToggle}
                  onScroll={handleScroll}
                  scrollRef={(key: string) => (el: HTMLDivElement | null) => {
                    scrollContainerRefs.current[key] = el;
                  }}
                  filterOptions={filterOptions}
                  apiFilterState={
                    'hookKey' in config ? getApiFilterState(key) : undefined
                  }
                />
              );
            })}
          </Accordion>
        </div>

        {/* Clear all filters button */}
        <div className={clsx('pt-2', { 'sticky bottom-0': isClearAllSticky })}>
          <Button
            variant='default'
            onClick={handleClearAll}
            data-testid='filter-panel-clear-all-button'
            className={clsx('mx-auto flex h-8 w-51.5 items-center justify-center !rounded-sm !bg-surface-ter text-xs font-medium !text-text-destructive', classNames?.clearAllButtonClassName)}
          >
            Clear All
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

FilterPanel.displayName = 'FilterPanel';

export { FilterPanel };
