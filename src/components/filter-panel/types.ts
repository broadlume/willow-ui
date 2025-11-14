export interface FilterValues {
  [key: string]: string[] | { from: string; to: string } | null;
}

export interface FilterConfig {
  key: string;
  label: string;
  options: string[];
  canSelectAll?: boolean;
  searchable?: boolean;
  type: 'select' | 'dateRange';
}

export interface FilterPanelProps<T extends FilterValues = FilterValues> {
  filters: T;
  onFiltersChange: (filters: T) => void;
  filterConfig: FilterConfig[];
  isLoading?: boolean;
  formatDate?: (date: string, format: string) => string;
}