export interface FilterValues {
  [key: string]: string[] | { from: string; to: string } | null;
}

export interface FilterConfig {
  key: string;
  label: string;
  type: 'select' | 'dateRange' | 'api-select';
  options?: string[];
  canSelectAll?: boolean;
  searchable?: boolean;
}

export interface AllAvailableItems {
  id: string;
  label: string;
}

export interface ApiSelectFilterConfig
  extends Omit<FilterConfig, 'type' | 'options'> {
  type: 'api-select';
  hookKey: string;
  apiOptions?: Record<string, string | number | boolean | undefined>;
  unselectedItems?: string[];
  allAvailableItems?: AllAvailableItems[];
  totalItemsCount?: number;
  isLoading?: boolean;
  isError?: boolean;
  isFetchingNextPage?: boolean;
  hasNextPage?: boolean;
  onLoadMore?: () => void;
  onToggleItem?: (itemId: string) => void;
  isInitialization?: boolean;
}

export interface FilterPanelProps<T extends FilterValues = FilterValues> {
  filters: T;
  onFiltersChange: (filters: T) => void;
  filterConfig: (FilterConfig | ApiSelectFilterConfig)[];
  isLoading?: boolean;
  formatDate?: (date: string, format: string) => string;
}
