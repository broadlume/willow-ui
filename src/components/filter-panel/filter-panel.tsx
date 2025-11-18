import { Accordion } from '@components/accordion/accordion';
import { Button } from '@components/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@components/popover/popover';
import { HiAdjustments } from 'react-icons/hi';
import { DateRangeFilter } from './components/date-range-filter';
import { SelectFilterItem } from './components/select-filter-item';
import { useFilterPanel } from './hooks/use-filter-panel';
import { FilterPanelProps, FilterValues } from './types';

/**
 * Reusable filter panel component with support for checkbox, date range, and API-based infinite scroll filters
 */
const FilterPanel = <T extends FilterValues = FilterValues>({
  filters,
  onFiltersChange,
  filterConfig,
  isLoading = false,
  formatDate = (date: string, format: string) => {
    const d = new Date(date);
    if (format === 'mm-dd-yyyy') {
      return `${(d.getMonth() + 1).toString().padStart(2, '0')}-${d
        .getDate()
        .toString()
        .padStart(2, '0')}-${d.getFullYear()}`;
    }
    return d.toLocaleDateString();
  },
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
    handleDateRangeChange,
    handleClearAll,
    handleScroll,
    filterOptions,
  } = useFilterPanel({ filters, onFiltersChange, filterConfig });

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger>
        {/* Filter toggle button with active count badge */}
        <Button
          id='filter-button'
          variant='outline'
          size='sm'
          className='border-border-pri ml-1 !rounded-md border bg-transparent px-2'
          aria-label='Filter'
        >
          <HiAdjustments className='rotate-90 text-base' />
          {activeFiltersCount > 0 && (
            <span className='bg-surface-cta absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full text-[0.625rem] font-medium text-white'>
              {activeFiltersCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent
        align='end'
        className='flex max-h-[577px] w-[222px] flex-col rounded-md bg-white p-2 text-[14px] font-normal leading-[100%] shadow-[0_2px_8px_rgba(0,0,0,0.1)]'
      >
        <div className='scrollbar-hide flex-1 overflow-y-auto'>
          <Accordion type='multiple'>
            {filterConfig.map((config) => {
              const { key, type } = config;

              return type === 'dateRange' ? (
                <DateRangeFilter
                  key={key}
                  filterKey={key}
                  label={config.label}
                  selectedRange={
                    filters[key] as { from: string; to: string } | null
                  }
                  tempRange={dateRanges[key]}
                  formatDate={formatDate}
                  onDateRangeChange={handleDateRangeChange}
                />
              ) : (
                <SelectFilterItem
                  key={key}
                  config={config}
                  selectedValues={(filters[key] as string[]) || []}
                  searchTerm={searchTerms[key] || ''}
                  isLoading={isLoading}
                  onSearchChange={(key: string, term: string) => {
                    setSearchTerms((prev) => ({ ...prev, [key]: term }));
                  }}
                  onCheckboxChange={handleCheckboxChange}
                  onSelectAll={handleSelectAll}
                  onScroll={handleScroll}
                  scrollRef={(key: string) => (el: HTMLDivElement | null) => {
                    scrollContainerRefs.current[key] = el;
                  }}
                  filterOptions={filterOptions}
                />
              );
            })}
          </Accordion>
        </div>

        {/* Clear all filters button */}
        <div className='pt-2'>
          <Button
            variant='default'
            onClick={handleClearAll}
            className='mx-auto flex h-[32px] w-[206px] items-center justify-center !rounded-[2px] !bg-[#FEE2E2] text-[12px] font-medium !text-[#E00000]'
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
