import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { DateRange } from 'react-day-picker';
import {
  ApiSelectFilterConfig,
  ApiSelectFilterState,
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
  // API filter states for select all functionality
  const [apiFilterStates, setApiFilterStates] = useState<
    Record<string, ApiSelectFilterState>
  >({});

  // Helper to get current API filter state
  const getApiFilterState = useCallback(
    (key: string): ApiSelectFilterState => {
      return (
        apiFilterStates[key] || {
          isSelectAll: false,
          includeItems: [],
          excludeItems: [],
        }
      );
    },
    [apiFilterStates]
  );

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
      // Initialize API filter states
      if (type === 'api-select' && !apiFilterStates[key]) {
        setApiFilterStates((prev) => ({
          ...prev,
          [key]: { isSelectAll: false, includeItems: [], excludeItems: [] },
        }));
      }
    });

    if (hasChanges) {
      onFiltersChange(initialized);
    }
  }, [filterConfig, filters, onFiltersChange, apiFilterStates]);

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

  // Handle API select all functionality
  const handleApiSelectAll = useCallback(
    (key: string, isSelectAll: boolean) => {
      const config = filterConfig.find(
        (c) => c.key === key
      ) as ApiSelectFilterConfig;
      if (!config || config.type !== 'api-select') return;

      const currentState = getApiFilterState(key);
      const allAvailableItemIds =
        config.allAvailableItems?.map((item) => item.id) || [];

      let newState: ApiSelectFilterState;

      if (isSelectAll) {
        // Scenario 3: User clicks select all checkbox
        // Always set isSelectAll: true when select all is clicked
        // This ensures newly loaded items will be automatically selected
        newState = { isSelectAll: true, includeItems: [], excludeItems: [] };
      } else {
        // Deselect all
        newState = { isSelectAll: false, includeItems: [], excludeItems: [] };
      }

      setApiFilterStates((prev) => ({ ...prev, [key]: newState }));

      // Update config if it has state update handler
      if (config.onUpdateFilterState) {
        config.onUpdateFilterState(newState);
      }
    },
    [filterConfig, getApiFilterState]
  );

  // Handle individual API item toggle
  const handleApiItemToggle = useCallback(
    (key: string, itemId: string) => {
      const currentState = getApiFilterState(key);
      let newState: ApiSelectFilterState;

      if (currentState.isSelectAll) {
        // Scenario 4: Select all is true, user unselects some items
        if (currentState.excludeItems.includes(itemId)) {
          // Remove from exclude list (re-select)
          newState = {
            ...currentState,
            excludeItems: currentState.excludeItems.filter(
              (id) => id !== itemId
            ),
          };
        } else {
          // Add to exclude list (deselect)
          newState = {
            ...currentState,
            excludeItems: [...currentState.excludeItems, itemId],
          };
        }
      } else {
        // Scenario 1: Select all is false, manage include list
        if (currentState.includeItems.includes(itemId)) {
          // Remove from include list
          newState = {
            ...currentState,
            includeItems: currentState.includeItems.filter(
              (id) => id !== itemId
            ),
          };
        } else {
          // Add to include list
          newState = {
            ...currentState,
            includeItems: [...currentState.includeItems, itemId],
          };
        }

        // Check if all available items are now selected (Scenario 2)
        const config = filterConfig.find(
          (c) => c.key === key
        ) as ApiSelectFilterConfig;
        if (config && !config.hasNextPage) {
          const allAvailableItemIds =
            config.allAvailableItems?.map((item) => item.id) || [];
          const allSelected = allAvailableItemIds.every((id) =>
            newState.includeItems.includes(id)
          );

          if (
            allSelected &&
            allAvailableItemIds.length === config.totalItemsCount
          ) {
            // All items are selected and loaded, switch to select all mode
            newState = {
              isSelectAll: true,
              includeItems: [],
              excludeItems: [],
            };
          }
        }
      }

      setApiFilterStates((prev) => ({ ...prev, [key]: newState }));

      // Update config if it has state update handler
      const config = filterConfig.find(
        (c) => c.key === key
      ) as ApiSelectFilterConfig;
      if (config?.onUpdateFilterState) {
        config.onUpdateFilterState(newState);
      }
    },
    [filterConfig, getApiFilterState]
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

        // Reset API filter state
        const resetState = {
          isSelectAll: false,
          includeItems: [],
          excludeItems: [],
        };
        setApiFilterStates((prev) => ({ ...prev, [key]: resetState }));

        // Notify config about state reset
        if (apiConfig.onUpdateFilterState) {
          apiConfig.onUpdateFilterState(resetState);
        }

        // Clear all selected items by toggling each one (for backward compatibility)
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
        // API-based filters - check filter state
        const filterState = getApiFilterState(key);
        if (
          filterState.isSelectAll ||
          filterState.includeItems.length > 0 ||
          filterState.excludeItems.length > 0
        ) {
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
  }, [filters, filterConfig, getApiFilterState]);

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
    apiFilterStates,

    // Handlers
    handleCheckboxChange,
    handleSelectAll,
    handleApiSelectAll,
    handleApiItemToggle,
    handleDateRangeChange,
    handleClearAll,
    handleScroll,
    filterOptions,
    getApiFilterState,
  };
};
