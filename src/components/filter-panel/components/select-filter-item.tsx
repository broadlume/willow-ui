import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@components/accordion/accordion';
import { CountBadge } from '../count-badge';
import { ApiSelectFilterConfig, FilterConfig } from '../types';
import { ApiFilterList } from './api-filter-list';
import { StaticFilterList } from './static-filter-list';

interface SelectFilterItemProps {
  config: FilterConfig | ApiSelectFilterConfig;
  selectedValues: string[];
  searchTerm: string;
  isLoading: boolean;
  onSearchChange: (key: string, term: string) => void;
  onCheckboxChange: (key: string, value: string) => void;
  onSelectAll: (key: string, allValues: string[]) => void;
  onApiSelectAll?: (key: string, isSelectAll: boolean) => void;
  onApiItemToggle?: (key: string, itemId: string) => void;
  onScroll: (
    key: string,
    config: ApiSelectFilterConfig
  ) => (event: React.UIEvent<HTMLDivElement>) => void;
  scrollRef: (key: string) => (el: HTMLDivElement | null) => void;
  filterOptions: (options: string[], term: string) => string[];
  apiFilterState?: import('../types').ApiSelectFilterState;
}

export const SelectFilterItem = ({
  config,
  selectedValues,
  searchTerm,
  isLoading,
  onSearchChange,
  onCheckboxChange,
  onSelectAll,
  onApiSelectAll,
  onApiItemToggle,
  onScroll,
  scrollRef,
  filterOptions,
  apiFilterState,
}: SelectFilterItemProps) => {
  const { key, label } = config;
  const options = ('options' in config ? config.options : []) || [];
  const canSelectAll =
    ('canSelectAll' in config ? config.canSelectAll : true) ?? true;
  const searchable =
    ('searchable' in config ? config.searchable : false) ?? false;

  const isApiFilter = 'hookKey' in config;
  const apiConfig = isApiFilter ? (config as ApiSelectFilterConfig) : null;

  return (
    <AccordionItem
      key={key}
      value={key}
      className='w-full border-b border-[--color-border] px-1 py-1'
    >
      <AccordionTrigger
        className='flex items-center justify-between py-2 text-[14px] font-normal text-[--color-grey-90] hover:no-underline'
        caretClasses='h-2 w-4 text-[--color-grey-60]'
      >
        <div className='flex w-full items-center justify-between'>
          <div className='flex items-center gap-2'>
            <span>{label}</span>
          </div>

          {/* Show count of selected filters */}
          {(() => {
            if (isApiFilter && apiConfig) {
              const filterState = apiFilterState || {
                isSelectAll: false,
                includeItems: [],
                excludeItems: [],
              };

              if (filterState.isSelectAll) {
                // Show total count minus excluded items
                const totalCount = apiConfig.totalItemsCount || 0;
                const selectedCount =
                  totalCount - filterState.excludeItems.length;
                if (selectedCount > 0) {
                  return <CountBadge count={selectedCount} />;
                }
              } else if (filterState.includeItems.length > 0) {
                return <CountBadge count={filterState.includeItems.length} />;
              }
            } else {
              // Static select filters - show count when any items are selected
              if (selectedValues.length > 0) {
                return <CountBadge count={selectedValues.length} />;
              }
            }
            return null;
          })()}
        </div>
      </AccordionTrigger>

      <AccordionContent className='space-y-3 pb-3'>
        {isApiFilter && apiConfig ? (
          <ApiFilterList
            filterKey={key}
            config={{
              ...apiConfig,
              filterState: apiFilterState,
            }}
            isLoading={isLoading}
            onScroll={onScroll(key, apiConfig)}
            scrollRef={scrollRef(key)}
            onSelectAll={onApiSelectAll || (() => {})}
            onItemToggle={onApiItemToggle}
          />
        ) : (
          <StaticFilterList
            filterKey={key}
            options={options}
            selectedValues={selectedValues}
            searchTerm={searchTerm}
            canSelectAll={canSelectAll}
            searchable={searchable}
            isLoading={isLoading}
            onSearchChange={(term) => onSearchChange(key, term)}
            onCheckboxChange={(value) => onCheckboxChange(key, value)}
            onSelectAll={(allValues) => onSelectAll(key, allValues)}
            filterOptions={filterOptions}
          />
        )}
      </AccordionContent>
    </AccordionItem>
  );
};
