import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { DateRange } from 'react-day-picker';
import {
  ApiSelectFilterConfig,
  FilterPanelProps,
  FilterValues,
} from '../types';

// Threshold for infinite scroll trigger (pixels from bottom)
const INFINITE_SCROLL_THRESHOLD = 50;

export const useFilterPanel = <T extends FilterValues = FilterValues>({
  filters,
  onFiltersChange,
  filterConfig,
}: Pick<
  FilterPanelProps<T>,
  'filters' | 'onFiltersChange' | 'filterConfig'
>) => {
  // Popover state management
  const [isOpen, setIsOpen] = useState(false);
  // Search terms for filtering options within each filter
  const [searchTerms, setSearchTerms] = useState<Record<string, string>>({});
  // Date range picker states
  const [dateRanges, setDateRanges] = useState<
    Record<string, DateRange | undefined>
  >({});
  // Refs for infinite scroll containers
  const scrollContainerRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Initialize empty filters only if not already set
  useEffect(() => {
    const initialized: T = { ...filters };
    let hasChanges = false;

    filterConfig.forEach((config) => {
      const { key, type } = config;
      if (type === 'select' && filters[key] === undefined) {
        (initialized as Record<string, unknown>)[key] = [];
        hasChanges = true;
      }
      if (type === 'dateRange' && filters[key] === undefined) {
        (initialized as Record<string, unknown>)[key] = null;
        hasChanges = true;
      }
    });

    if (hasChanges) {
      onFiltersChange(initialized);
    }
  }, [filterConfig, filters, onFiltersChange]);

  // Toggle individual checkbox filter values
  const handleCheckboxChange = useCallback(
    (key: string, value: string) => {
      const current = (filters[key] as string[]) || [];
      const newValues = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];

      const newFilters = { ...filters, [key]: newValues };
      onFiltersChange(newFilters);
    },
    [filters, onFiltersChange]
  );

  // Handle select all/deselect all for checkbox filters
  const handleSelectAll = useCallback(
    (key: string, allValues: string[]) => {
      const current = (filters[key] as string[]) || [];
      // Check if all available options are currently selected
      const allSelected = allValues.every((value) => current.includes(value));
      const newValues = allSelected ? [] : [...allValues];
      onFiltersChange({ ...filters, [key]: newValues });
    },
    [filters, onFiltersChange]
  );

  // Handle date range selection and filtering
  const handleDateRangeChange = useCallback(
    (key: string, range: DateRange | undefined) => {
      if (range?.from && range?.to) {
        setDateRanges((prev) => ({ ...prev, [key]: undefined })); // Clear temp state
        onFiltersChange({
          ...filters,
          [key]: {
            from: range.from.toISOString(),
            to: range.to.toISOString(),
          },
        });
      } else if (!range) {
        // Clearing the filter
        setDateRanges((prev) => ({ ...prev, [key]: undefined }));
        onFiltersChange({ ...filters, [key]: null });
      } else {
        // Partial selection (only from date) - store in temp state
        setDateRanges((prev) => ({ ...prev, [key]: range }));
      }
    },
    [filters, onFiltersChange]
  );

  // Reset all filters to their default empty state
  const handleClearAll = useCallback(() => {
    const cleared = { ...filters };
    filterConfig.forEach((config) => {
      const { key, type } = config;

      if (type === 'dateRange') {
        (
          cleared as Record<
            string,
            string[] | { from: string; to: string } | null
          >
        )[key] = null;
      } else if ('hookKey' in config) {
        // Handle API-based filters
        const apiConfig = config as ApiSelectFilterConfig;
        // Clear all selected items by toggling each one
        if (apiConfig.selectedItems && apiConfig.onToggleItem) {
          apiConfig.selectedItems.forEach((itemId) => {
            if (apiConfig.onToggleItem) {
              apiConfig.onToggleItem(itemId);
            }
          });
        }
        // Also clear from local filters state
        (
          cleared as Record<
            string,
            string[] | { from: string; to: string } | null
          >
        )[key] = [];
      } else {
        // Handle regular select filters
        (
          cleared as Record<
            string,
            string[] | { from: string; to: string } | null
          >
        )[key] = [];
      }
    });
    onFiltersChange(cleared);
    setSearchTerms({});
    setDateRanges({});
  }, [filters, filterConfig, onFiltersChange]);

  // Filter options based on search term
  const filterOptions = useCallback(
    (options: string[], term: string) =>
      options.filter((option) =>
        option.toLowerCase().includes(term.toLowerCase())
      ),
    []
  );

  // Handle infinite scroll for API-based filters
  const handleScroll = useCallback(
    (key: string, config: ApiSelectFilterConfig) => {
      return (event: React.UIEvent<HTMLDivElement>) => {
        const element = event.currentTarget;
        const { scrollTop, scrollHeight, clientHeight } = element;

        // Calculate if we're near the bottom with better precision
        const scrollBottom = scrollTop + clientHeight;
        const isAtBottom =
          scrollBottom >= scrollHeight - INFINITE_SCROLL_THRESHOLD;

        // More permissive check for small containers
        const isNearBottom = scrollBottom >= scrollHeight * 0.85; // 85% scrolled

        // Use the more permissive check for small containers
        const shouldLoadMore =
          isAtBottom || (scrollHeight < 300 && isNearBottom);

        // Trigger load more if conditions are met
        if (
          shouldLoadMore &&
          config.hasNextPage &&
          !config.isFetchingNextPage &&
          config.onLoadMore
        ) {
          config.onLoadMore();
        }
      };
    },
    []
  );

  // Count active filters for badge display
  const activeFiltersCount = useMemo(() => {
    let count = 0;

    filterConfig.forEach((config) => {
      const { key, type } = config;

      if (type === 'dateRange') {
        if (filters[key] !== null) count++;
      } else if ('hookKey' in config) {
        // API-based filters
        const apiConfig = config as ApiSelectFilterConfig;
        if (apiConfig.selectedItems && apiConfig.selectedItems.length > 0) {
          count++;
        }
      } else {
        // Regular select filters
        const val = filters[key];
        if (Array.isArray(val) && val.length > 0) {
          count++;
        }
      }
    });

    return count;
  }, [filters, filterConfig]);

  return {
    // State
    isOpen,
    setIsOpen,
    searchTerms,
    setSearchTerms,
    dateRanges,
    setDateRanges,
    scrollContainerRefs,
    activeFiltersCount,

    // Handlers
    handleCheckboxChange,
    handleSelectAll,
    handleDateRangeChange,
    handleClearAll,
    handleScroll,
    filterOptions,
  };
};
