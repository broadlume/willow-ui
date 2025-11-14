import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@components/accordion/accordion';
import { Button } from '@components/button';

import { Checkbox } from '@components/checkbox/checkbox';
import { DatePicker } from '@components/date-picker/date-picker';
import { Input } from '@components/input/input';
import { Label } from '@components/label/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@components/popover/popover';
import { useEffect, useMemo, useState } from 'react';
import type { DateRange } from 'react-day-picker';
import { HiAdjustments, HiOutlineSearch } from 'react-icons/hi';
import { HiMiniCalendarDays, HiOutlineXCircle } from 'react-icons/hi2';
import { CountBadge } from './count-badge';
import type { FilterPanelProps, FilterValues } from './types';

/**
 * Reusable filter panel component with support for checkbox and date range filters
 */
const FilterPanel = <T extends FilterValues = FilterValues>({
  filters,
  onFiltersChange,
  filterConfig,
  isLoading = true,
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
  // Popover state management
  const [isOpen, setIsOpen] = useState(false);
  // Search terms for filtering options within each filter
  const [searchTerms, setSearchTerms] = useState<Record<string, string>>({});
  // Date range picker states
  const [dateRanges, setDateRanges] = useState<
    Record<string, DateRange | undefined>
  >({});

  // Initialize filters with all options selected by default
  useEffect(() => {
    const initialized: T = { ...filters };
    filterConfig.forEach(({ key, type, options }) => {
      if (
        type === 'select' &&
        (!filters[key] || (filters[key] as string[]).length === 0)
      ) {
        (initialized as any)[key] = [...options];
      }
      if (type === 'dateRange' && filters[key] === undefined) {
        (initialized as any)[key] = null;
      }
    });
    onFiltersChange(initialized);
  }, [filterConfig]);

  // Toggle individual checkbox filter values
  const handleCheckboxChange = (key: string, value: string) => {
    const current = (filters[key] as string[]) || [];
    const newValues = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    onFiltersChange({ ...filters, [key]: newValues });
  };

  // Handle select all/deselect all for checkbox filters
  const handleSelectAll = (key: string, allValues: string[]) => {
    const current = (filters[key] as string[]) || [];
    const newValues = current.length === allValues.length ? [] : [...allValues];
    onFiltersChange({ ...filters, [key]: newValues });
  };

  // Handle date range selection and filtering
  const handleDateRangeChange = (key: string, range: DateRange | undefined) => {
    setDateRanges((prev) => ({ ...prev, [key]: range }));

    if (range?.from && range?.to) {
      onFiltersChange({
        ...filters,
        [key]: {
          from: range.from.toISOString(),
          to: range.to.toISOString(),
        },
      });
    } else if (!range) {
      onFiltersChange({ ...filters, [key]: null });
    }
  };

  // Reset all filters to their default empty state
  const handleClearAll = () => {
    const cleared = { ...filters };
    filterConfig.forEach(({ key, type }) => {
      (
        cleared as Record<
          string,
          string[] | { from: string; to: string } | null
        >
      )[key] = type === 'dateRange' ? null : [];
    });
    onFiltersChange(cleared);
    setSearchTerms({});
    setDateRanges({});
  };

  // Filter options based on search term
  const filterOptions = (options: string[], term: string) =>
    options.filter((option) =>
      option.toLowerCase().includes(term.toLowerCase())
    );

  // Count active filters for badge display
  const activeFiltersCount = useMemo(
    () =>
      Object.entries(filters).filter(([key, val]) => {
        const filter = filterConfig.find((f) => f.key === key);
        if (filter?.type === 'dateRange') return val !== null;
        return Array.isArray(val) && val.length > 0;
      }).length,
    [filters, filterConfig]
  );

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
            {filterConfig.map(
              ({
                key,
                label,
                options,
                canSelectAll = true,
                searchable,
                type,
              }) =>
                type === 'dateRange' ? (
                  // Date range filter section
                  <div
                    key={key}
                    className='w-full border-b border-[#E5E5E5] px-1 py-1'
                  >
                    {filters[key] ? (
                      // Show selected date range with clear option when dates are selected
                      <>
                        {/* Display selected date range with clear option */}
                        <div className='mb-2 flex h-[24px] w-[172px] cursor-pointer items-center justify-between gap-[8px] rounded-[4px] bg-[#FFFFFF] px-[4px] py-[4px] font-medium shadow-[0_1px_2px_rgba(0,0,0,0.06),_0_1px_3px_rgba(0,0,0,0.1)]'>
                          <span className='text-[13px] text-[#1A1A1A]'>
                            {formatDate(
                              (filters[key] as { from: string; to: string })
                                .from,
                              'mm-dd-yyyy'
                            )}{' '}
                            to{' '}
                            {formatDate(
                              (filters[key] as { from: string; to: string }).to,
                              'mm-dd-yyyy'
                            )}
                          </span>
                          <button
                            type='button'
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDateRangeChange(key, undefined);
                            }}
                            className='rounded text-[#1A6CFF] hover:text-[#1A1A1A]'
                          >
                            <HiOutlineXCircle
                              className='!h-[16px] !w-[16px]'
                              color='#1A6CFF'
                            />
                          </button>
                        </div>
                      </>
                    ) : (
                      // Show label and date picker when no dates are selected
                      <div className='flex w-full items-center justify-between'>
                        <span>{label}</span>
                        {/* Date picker component */}
                        <DatePicker
                          mode='range'
                          selected={dateRanges[key]}
                          onOpenChange={(open) => {
                            if (!open) {
                              // Clear temporary date range state when picker closes
                              setDateRanges((prev) => ({
                                ...prev,
                                [key]: undefined,
                              }));
                            }
                          }}
                          onSelect={(range: DateRange | undefined) => {
                            handleDateRangeChange(key, range);
                          }}
                          trigger={
                            <Button variant={'ghost'} className='p-1'>
                              <HiMiniCalendarDays
                                className='w-4 h-4'
                                color='#666666'
                              />
                            </Button>
                          }
                        />
                      </div>
                    )}
                  </div>
                ) : (
                  // Checkbox filter section
                  <AccordionItem
                    key={key}
                    value={key}
                    className='w-full border-b border-[#E5E5E5] px-1 py-1'
                  >
                    <AccordionTrigger
                      className='flex items-center justify-between py-2 text-[14px] font-normal text-[#1A1A1A] hover:no-underline'
                      caretClasses='h-2 w-4 text-[#666666]'
                    >
                      <div className='flex w-full items-center justify-between'>
                        <div className='flex items-center gap-2'>
                          <span>{label}</span>
                        </div>

                        {/* Show count of selected filters (Not showing the count when all options are selected) */}
                        {Array.isArray(filters[key]) &&
                          (filters[key] as string[]).length > 0 &&
                          (filters[key] as string[]).length <
                            options.length && (
                            <CountBadge
                              count={(filters[key] as string[]).length}
                            />
                          )}
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className='space-y-3 pb-3'>
                      {/* Search input for filtering options */}
                      {searchable && (
                        <div className='relative'>
                          <HiOutlineSearch className='absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9CA3AF]' />
                          <Input
                            placeholder='Search'
                            value={searchTerms[key] || ''}
                            onChange={(e) =>
                              setSearchTerms({
                                ...searchTerms,
                                [key]: e.target.value,
                              })
                            }
                            className='h-8 w-full rounded-md border border-[#E5E5E5] pl-8 text-[13px]'
                          />
                        </div>
                      )}

                      <div className='ml-2 mt-1 space-y-2'>
                        <div className='scrollbar-hide max-h-[200px] space-y-4 overflow-y-auto'>
                          {/* Select all/deselect all option */}
                          {canSelectAll && (
                            <div
                              key={`${key}-select-all`}
                              className='flex items-center gap-2'
                            >
                              <Checkbox
                                className='data-[state=checked]:!border-surface-cta data-[state=checked]:!bg-surface-cta data-[state=indeterminate]:!border-surface-cta data-[state=indeterminate]:!bg-surface-cta h-[14px] w-[14px] !rounded-[4px] border !border-[#CCCCCC]'
                                id={`${key}-select-all`}
                                checked={
                                  (filters[key] as string[])?.length ===
                                  options.length
                                    ? true
                                    : (filters[key] as string[])?.length > 0
                                    ? 'indeterminate'
                                    : false
                                }
                                data-state={
                                  (filters[key] as string[])?.length ===
                                  options.length
                                    ? 'checked'
                                    : (filters[key] as string[])?.length > 0
                                    ? 'indeterminate'
                                    : 'unchecked'
                                }
                                onCheckedChange={() =>
                                  handleSelectAll(key, options)
                                }
                                disabled={isLoading}
                              />
                              <Label
                                htmlFor={`${key}-select-all`}
                                className='cursor-pointer text-[14px] text-[#1A1A1A]'
                              >
                                Select All
                              </Label>
                            </div>
                          )}

                          {/* Individual filter options */}
                          {filterOptions(options, searchTerms[key] || '').map(
                            (option) => (
                              <div
                                key={option}
                                className='flex items-center gap-2'
                              >
                                <Checkbox
                                  className='data-[state=checked]:!border-surface-cta data-[state=checked]:!bg-surface-cta h-[14px] w-[14px] !rounded-[4px] border !border-[#CCCCCC]'
                                  id={`${key}-${option}`}
                                  checked={(filters[key] as string[])?.includes(
                                    option
                                  )}
                                  onCheckedChange={() =>
                                    handleCheckboxChange(key, option)
                                  }
                                  disabled={isLoading}
                                />
                                <Label
                                  htmlFor={`${key}-${option}`}
                                  className='cursor-pointer text-[14px]'
                                >
                                  {option}
                                </Label>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                )
            )}
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
