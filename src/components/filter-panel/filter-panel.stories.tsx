import type { Meta, StoryObj } from '@storybook/react';
import { useCallback, useRef, useState } from 'react';
import { FilterPanel } from './filter-panel';
import type {
  ApiSelectFilterState,
  FilterConfig,
  FilterValues,
  RadioFilterConfig,
} from './types';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@components/dialog/dialog';
import { Button } from '@components/button';

const meta: Meta<typeof FilterPanel> = {
  component: FilterPanel,
  title: 'Components/FilterPanel',
  parameters: {
    docs: {
      description: {
        component:
          'A reusable filter panel component with support for checkbox, date range, and API-based filters.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FilterPanel>;

// Mock data for different filter types
const mockCategories = [
  'Electronics',
  'Clothing',
  'Home & Garden',
  'Sports',
  'Books',
  'Health',
];

const mockBrands = [
  'Apple',
  'Samsung',
  'Nike',
  'Adidas',
  'Sony',
  'LG',
  'Canon',
  'Dell',
];

// Static filter configurations to avoid re-creation
const basicFilterConfig: FilterConfig[] = [
  {
    key: 'categories',
    label: 'Categories',
    type: 'select',
    options: mockCategories,
    canSelectAll: true,
    searchable: true,
  },
  {
    key: 'brands',
    label: 'Brands',
    type: 'select',
    options: mockBrands,
    canSelectAll: true,
    searchable: false,
  },
];

const dateFilterConfig: FilterConfig[] = [
  {
    key: 'categories',
    label: 'Categories',
    type: 'select',
    options: mockCategories,
    canSelectAll: true,
    searchable: true,
  },
  {
    key: 'dateRange',
    label: 'Date Range',
    type: 'dateRange',
  },
];

// Stable filter values that match the component's expectations
const defaultFilters: FilterValues = {
  categories: [],
  brands: [],
};

const dateRangeFilters: FilterValues = {
  categories: [],
  dateRange: null,
};

const preselectedFilters: FilterValues = {
  categories: ['Electronics', 'Clothing'],
  brands: ['Apple', 'Nike'],
  dateRange: {
    from: new Date(2024, 0, 1).toISOString(),
    to: new Date(2024, 11, 31).toISOString(),
  },
};

const minimalFilters: FilterValues = {
  categories: ['Electronics', 'Clothing'],
};

const minimalConfig: FilterConfig[] = [
  {
    key: 'categories',
    label: 'Categories',
    type: 'select',
    options: ['Electronics', 'Clothing'],
    canSelectAll: true,
    searchable: false,
  },
];

// Wrapper component that prevents initialization loops
const SafeFilterPanel = ({
  initialFilters,
  filterConfig,
  isLoading = false,
  ...props
}: {
  initialFilters: FilterValues;
  filterConfig: FilterConfig[];
  isLoading?: boolean;
}) => {
  const [filters, setFilters] = useState<FilterValues>(initialFilters);
  const initializationCallCount = useRef(0);

  // Handle filter changes while preventing initialization loops
  const handleFiltersChange = useCallback((newFilters: FilterValues) => {
    initializationCallCount.current += 1;

    // Skip the first automatic call from FilterPanel's useEffect initialization
    // But allow all subsequent calls (user interactions)
    if (initializationCallCount.current > 1) {
      setFilters(newFilters);
    }
  }, []);

  return (
    <div className='p-4'>
      <FilterPanel
        filters={filters}
        onFiltersChange={handleFiltersChange}
        filterConfig={filterConfig}
        isLoading={isLoading}
        {...props}
      />
      <div className='mt-4 p-4 bg-gray-100 rounded'>
        <h3 className='font-semibold mb-2'>Current Filters:</h3>
        <pre className='text-sm'>{JSON.stringify(filters, null, 2)}</pre>
      </div>
    </div>
  );
};

/** Basic filter panel with simple checkbox filters */
export const Demo: Story = {
  render: () => (
    <SafeFilterPanel
      initialFilters={defaultFilters}
      filterConfig={basicFilterConfig}
      isLoading={false}
    />
  ),
};

/** Filter panel with date range filter */
export const WithDateRange: Story = {
  render: () => (
    <SafeFilterPanel
      initialFilters={dateRangeFilters}
      filterConfig={dateFilterConfig}
      isLoading={false}
    />
  ),
};

/** Filter panel with pre-selected filters */
export const PreSelected: Story = {
  render: () => {
    const extendedConfig = [
      ...basicFilterConfig,
      {
        key: 'dateRange' as const,
        label: 'Date Range',
        type: 'dateRange' as const,
      },
    ];

    return (
      <SafeFilterPanel
        initialFilters={preselectedFilters}
        filterConfig={extendedConfig}
        isLoading={false}
      />
    );
  },
};

/** Filter panel in loading state */
export const LoadingState: Story = {
  render: () => (
    <SafeFilterPanel
      initialFilters={defaultFilters}
      filterConfig={basicFilterConfig}
      isLoading={true}
    />
  ),
};

/** Filter panel with minimal configuration */
export const Minimal: Story = {
  render: () => (
    <SafeFilterPanel
      initialFilters={minimalFilters}
      filterConfig={minimalConfig}
      isLoading={false}
    />
  ),
};

/** Filter panel with custom date formatting */
export const CustomDateFormatting: Story = {
  render: () => {
    const customFilters = {
      dateRange: {
        from: new Date(2024, 0, 1).toISOString(),
        to: new Date(2024, 5, 30).toISOString(),
      },
      categories: mockCategories.slice(0, 3),
    };

    const customConfig = [
      {
        key: 'dateRange' as const,
        label: 'Custom Date Range',
        type: 'dateRange' as const,
      },
      {
        key: 'categories' as const,
        label: 'Categories',
        type: 'select' as const,
        options: mockCategories.slice(0, 3),
        canSelectAll: true,
        searchable: false,
      },
    ];

    return (
      <SafeFilterPanel
        initialFilters={customFilters}
        filterConfig={customConfig}
        isLoading={false}
      />
    );
  },
};

/** Filter panel with API-based select options demonstrating select all functionality */
export const WithApiSelect: Story = {
  render: () => {
    // Mock API data
    const mockApiItems = Array.from({ length: 30 }, (_, i) => ({
      id: `item-${i + 1}`,
      label: `API Item ${i + 1}`,
    }));

    const ApiSelectDemo = () => {
      const [allItems, setAllItems] = useState(mockApiItems.slice(0, 20));
      const [hasNextPage, setHasNextPage] = useState(true);
      const [isLoading, setIsLoading] = useState(false);
      const [isFetchingNextPage, setIsFetchingNextPage] = useState(false);
      const [filterState, setFilterState] = useState<ApiSelectFilterState>({
        isSelectAll: false,
        includeItems: [],
        excludeItems: [],
      });

      const filters = { apiItems: [] };
      const [currentFilters, setCurrentFilters] = useState(filters);

      const handleLoadMore = useCallback(() => {
        if (isFetchingNextPage || !hasNextPage) return;

        setIsFetchingNextPage(true);
        // Simulate API delay
        setTimeout(() => {
          const nextIndex = allItems.length;
          const nextItems = mockApiItems.slice(nextIndex, nextIndex + 20);

          setAllItems((prev) => [...prev, ...nextItems]);
          setHasNextPage(nextIndex + 20 < mockApiItems.length);
          setIsFetchingNextPage(false);
        }, 1000);
      }, [allItems.length, isFetchingNextPage, hasNextPage]);

      const handleItemToggle = useCallback((itemId: string) => {
        // The filter panel will handle the state update through onUpdateFilterState
      }, []);

      const handleUpdateFilterState = useCallback(
        (newState: ApiSelectFilterState) => {
          setFilterState(newState);
        },
        []
      );

      const apiFilterConfig = [
        {
          key: 'apiItems',
          label: 'API Items (With Select All)',
          type: 'api-select' as const,
          hookKey: 'apiItems',
          searchable: true,
          canSelectAll: true,
          allAvailableItems: allItems,
          totalItemsCount: mockApiItems.length,
          isLoading: isLoading,
          isError: false,
          isFetchingNextPage: isFetchingNextPage,
          hasNextPage: hasNextPage,
          onLoadMore: handleLoadMore,
          onToggleItem: handleItemToggle,
          filterState: filterState,
          onUpdateFilterState: handleUpdateFilterState,
        },
      ];

      return (
        <div className='p-4'>
          <FilterPanel
            filters={currentFilters}
            onFiltersChange={setCurrentFilters}
            filterConfig={apiFilterConfig}
            isLoading={false}
          />

          <div className='mt-4 p-4 bg-gray-100 rounded'>
            <h3 className='font-semibold mb-2'>Current API Filter State:</h3>
            <div className='text-sm space-y-2'>
              <div>
                <strong>Select All:</strong>{' '}
                {filterState.isSelectAll ? 'Yes' : 'No'}
              </div>
              <div>
                <strong>Include Items:</strong>{' '}
                {filterState.includeItems.length}
              </div>
              <div>
                <strong>Exclude Items:</strong>{' '}
                {filterState.excludeItems.length}
              </div>
              <div>
                <strong>Loaded Items:</strong> {allItems.length} of{' '}
                {mockApiItems.length}
              </div>
              <div>
                <strong>Has More:</strong> {hasNextPage ? 'Yes' : 'No'}
              </div>
            </div>
            <details className='mt-2'>
              <summary className='cursor-pointer font-medium'>
                Full State Details
              </summary>
              <pre className='mt-2 text-xs overflow-auto'>
                {JSON.stringify(filterState, null, 2)}
              </pre>
            </details>
          </div>
        </div>
      );
    };

    return <ApiSelectDemo />;
  },
};

/** Filter panel with radio button filters using key-value pairs */
export const WithRadioFilter: Story = {
  render: () => {
    const radioFilterConfig: (FilterConfig | RadioFilterConfig)[] = [
      {
        key: 'categories',
        label: 'Categories',
        type: 'select',
        options: mockCategories,
        canSelectAll: true,
        searchable: true,
      },
      {
        key: 'sortOrder',
        label: 'Sort Order',
        type: 'radio',
        options: [
          { value: 'asc', label: 'Ascending' },
          { value: 'desc', label: 'Descending' },
          { value: 'newest', label: 'Newest First' },
          { value: 'oldest', label: 'Oldest First' },
        ],
      },
      {
        key: 'status',
        label: 'Status',
        type: 'radio',
        options: [
          { value: 'active', label: 'Active' },
          { value: 'inactive', label: 'Inactive' },
          { value: 'pending', label: 'Pending Review' },
          { value: 'archived', label: 'Archived' },
        ],
      },
    ];

    const radioFilters: FilterValues = {
      categories: [],
      sortOrder: null,
      status: null,
    };

    return (
      <SafeFilterPanel
        initialFilters={radioFilters}
        filterConfig={radioFilterConfig}
        isLoading={false}
      />
    );
  },
};

/** Filter panel inside a modal with multiple scrollable filters */
export const InsideModal: Story = {
  render: () => {
    // Create many filter options to require scrolling
    const manyCategories = Array.from(
      { length: 50 },
      (_, i) => `Category ${i + 1}`
    );
    const manyBrands = Array.from({ length: 50 }, (_, i) => `Brand ${i + 1}`);

    const modalFilterConfig: FilterConfig[] = [
      {
        key: 'categories',
        label: 'Categories',
        type: 'select',
        options: manyCategories,
        canSelectAll: true,
        searchable: true,
      },
      {
        key: 'brands',
        label: 'Brands',
        type: 'select',
        options: manyBrands,
        canSelectAll: true,
        searchable: true,
      },
    ];

    const modalFilters: FilterValues = {
      categories: [],
      brands: [],
    };

    const ModalFilterDemo = () => {
      const [filters, setFilters] = useState<FilterValues>(modalFilters);
      const [open, setOpen] = useState(false);

      return (
        <div className='p-8'>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant='outline'>Open Modal with Filter Panel</Button>
            </DialogTrigger>
            <DialogContent className='max-w-2xl max-h-[80vh] overflow-y-auto'>
              <DialogHeader>
                <DialogTitle>Filter Options</DialogTitle>
              </DialogHeader>
              <div className='py-4'>
                <p className='text-sm text-gray-600 mb-4'>
                  This modal contains a filter panel with multiple filters that
                  require scrolling. Try opening the filter panel and scrolling
                  through the options.
                </p>
                <div className='flex items-center gap-2'>
                  <span className='text-sm font-medium'>Filters:</span>
                  <FilterPanel
                    filters={filters}
                    onFiltersChange={setFilters}
                    filterConfig={modalFilterConfig}
                    isLoading={false}
                  />
                </div>
                <div className='mt-6 p-4 bg-gray-50 rounded-lg'>
                  <h4 className='font-semibold text-sm mb-2'>
                    Selected Filters:
                  </h4>
                  <pre className='text-xs overflow-auto max-h-64'>
                    {JSON.stringify(filters, null, 2)}
                  </pre>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <div className='mt-6 p-4 bg-blue-50 rounded-lg'>
            <h3 className='font-semibold mb-2'>Instructions:</h3>
            <ol className='text-sm space-y-1 list-decimal list-inside'>
              <li>Click the button to open the modal</li>
              <li>Click the filter icon to open the filter panel</li>
              <li>Try scrolling through the filter options inside the panel</li>
              <li>
                The filter panel should scroll independently within the modal
              </li>
            </ol>
          </div>
        </div>
      );
    };

    return <ModalFilterDemo />;
  },
};
