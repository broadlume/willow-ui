import { Checkbox } from '@components/checkbox/checkbox';
import { Input } from '@components/input/input';
import { Label } from '@components/label/label';
import { HiOutlineSearch } from 'react-icons/hi';

interface StaticFilterListProps {
  filterKey: string;
  options: string[];
  selectedValues: string[];
  searchTerm: string;
  canSelectAll: boolean;
  searchable: boolean;
  isLoading: boolean;
  onSearchChange: (term: string) => void;
  onCheckboxChange: (value: string) => void;
  onSelectAll: (allValues: string[]) => void;
  filterOptions: (options: string[], term: string) => string[];
}

export const StaticFilterList = ({
  filterKey,
  options,
  selectedValues,
  searchTerm,
  canSelectAll,
  searchable,
  isLoading,
  onSearchChange,
  onCheckboxChange,
  onSelectAll,
  filterOptions,
}: StaticFilterListProps) => {
  const filteredOptions = filterOptions(options, searchTerm);

  return (
    <>
      {/* Search input for filtering options */}
      {searchable && (
        <div className='relative'>
          <HiOutlineSearch className='absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-icon-pri' />
          <Input
            placeholder='Search'
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className='h-8 w-full rounded-md border border-border-pri! pl-8 text-sm'
          />
        </div>
      )}

      <div className='ml-2 mt-1 space-y-2'>
        <div className='scrollbar-hide max-h-[200px] space-y-4 overflow-y-auto'>
          {/* Select all/deselect all option */}
          {canSelectAll && (
            <div
              key={`${filterKey}-select-all`}
              className='flex items-center gap-2'
            >
              <Checkbox
                className='data-[state=checked]:border-surface-cta! data-[state=checked]:bg-surface-cta! data-[state=indeterminate]:border-surface-cta! data-[state=indeterminate]:bg-surface-cta! h-3.5 w-3.5 rounded! border border-border-pri!'
                id={`${filterKey}-select-all`}
                checked={
                  selectedValues?.length === options.length
                    ? true
                    : selectedValues?.length > 0
                    ? 'indeterminate'
                    : false
                }
                data-state={
                  selectedValues?.length === options.length
                    ? 'checked'
                    : selectedValues?.length > 0
                    ? 'indeterminate'
                    : 'unchecked'
                }
                onCheckedChange={() => onSelectAll(options)}
                disabled={isLoading}
              />
              <Label
                htmlFor={`${filterKey}-select-all`}
                className='cursor-pointer text-sm text-text-pri'
              >
                Select All
              </Label>
            </div>
          )}

          {/* Individual filter options */}
          {filteredOptions.map((option) => (
            <div key={option} className='flex items-center gap-2'>
              <Checkbox
                className='data-[state=checked]:border-surface-cta! data-[state=checked]:bg-surface-cta! h-3.5 w-3.5 rounded! border border-border-pri!'
                id={`${filterKey}-${option}`}
                checked={selectedValues?.includes(option)}
                onCheckedChange={() => onCheckboxChange(option)}
                disabled={isLoading}
              />
              <Label
                htmlFor={`${filterKey}-${option}`}
                className='cursor-pointer text-sm'
              >
                {option}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
