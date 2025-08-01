import { HiCheck } from 'react-icons/hi2';
import { Button, Popover, PopoverContent, PopoverTrigger } from '@src/index';
import { useState } from 'react';
import { AsyncInputSearch } from './async-input-search';

import { RxCaretSort } from 'react-icons/rx';

interface AsyncAutocompleteItem {
  value: string;
  label: string;
  description?: string;
}

type Props = {
  data: AsyncAutocompleteItem[];
  onScroll: () => void;
  onSearch: (q: string) => void;
  onSelect: (data: AsyncAutocompleteItem) => void;
  selectedData?: AsyncAutocompleteItem | null;
  wrapClassName?: string;
  placeholder?: string;
};

/**
 * AsyncAutocomplete is a component that provides an asynchronous autocomplete dropdown.
 * It displays a searchable list of items, allows selection, and supports infinite scroll.
 *
 * @param {Object} props - The props for AsyncAutocomplete.
 * @param {Array<{ label: string, value: string, description?: string }>} props.data - The list of items to display in the autocomplete.
 * @param {(event: React.UIEvent<HTMLDivElement>) => void} props.onScroll - Callback triggered when the dropdown is scrolled.
 * @param {(search: string) => void} props.onSearch - Callback triggered when the search input changes.
 * @param {(item: { label: string, value: string, description?: string }) => void} props.onSelect - Callback triggered when an item is selected.
 * @param {{ label: string, value: string, description?: string } | null} props.selectedData - The currently selected item.
 * @param {string} [props.wrapClassName] - Optional class name for wrapping the input.
 * @param {string} [props.placeholder='Search...'] - Placeholder text for the search input.
 *
 * @returns {JSX.Element} The rendered AsyncAutocomplete component.
 */
export const AsyncAutocomplete = ({
  data,
  onScroll,
  onSearch,
  onSelect,
  selectedData,
  wrapClassName,
  placeholder = 'Search...',
}: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          aria-label='async-autocomplete'
          className='~min-w-[300px] ~justify-between ~rounded-md ~bg-background ~font-normal ~normal-case'
        >
          {selectedData ? selectedData.label : placeholder}
          <RxCaretSort />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='~min-w-[300px] ~p-0'>
        <AsyncInputSearch
          items={data}
          onScroll={onScroll}
          onSearch={onSearch}
          onSelect={onSelect}
          selectedItem={selectedData}
          wrapClassName={wrapClassName}
          placeholder={placeholder}
          getKey={(item) => item.value}
          renderItem={(item, isSelected) => (
            <div className='~flex ~flex-col ~justify-between'>
              <div className='~flex ~items-center ~justify-between'>
                <p className='~text-sm'>{item.label}</p>
                {isSelected && <HiCheck className='~h-3 ~w-3' />}
              </div>
              {item?.description && (
                <p className='~mb-2 ~text-xs ~text-zinc-500'>
                  {item.description}
                </p>
              )}
            </div>
          )}
        />
      </PopoverContent>
    </Popover>
  );
};
