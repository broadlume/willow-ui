import { HiCheck, HiMiniXCircle } from 'react-icons/hi2';
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
  onSearch?: (q: string) => void;
  onSelect: (data: AsyncAutocompleteItem) => void;
  selectedData?: AsyncAutocompleteItem | null;
  wrapClassName?: string;
  placeholder?: string;
  /**
   * Optional additional props for customizing the internal AsyncInputSearch component.
   *
   * @property {object} inputProps - Props passed directly to the AsyncInputSearch component,
   * excluding core props like 'items', 'onSelect', 'onScroll', 'onSearch', 'renderItem', and 'getKey'
   * (which are already managed by AsyncAutocomplete internally).
   *
   * This allows consumers of AsyncAutocomplete to override or extend certain input behaviors or styles,
   * such as custom placeholder text, debounce delay, or additional classNames and html events.
   */
  additionalProps?: {
    inputProps?: Omit<
      Parameters<typeof AsyncInputSearch>[0] & {},
      'items' | 'onSelect' | 'onScroll' | 'onSearch' | 'renderItem' | 'getKey'
    >;
    popoverContentProps?: React.HTMLAttributes<HTMLDivElement>;
  };
  showClear?: boolean;
  onClear?: () => void;
  classNames?: {
    buttonClassName?: string;
    popoverContentClassName?: string;
    wrapperClassName?: string;
  };
};

/**
 * AsyncAutocomplete is a component that provides an asynchronous autocomplete dropdown.
 * It displays a searchable list of items, allows selection, and supports infinite scroll.
 *
 * @param {Object} props - The props for AsyncAutocomplete.
 * @param {Array<{ label: string, value: string, description?: string }>} props.data - The list of items to display in the autocomplete.
 * @param {(event: React.UIEvent<HTMLDivElement>) => void} props.onScroll - Callback triggered when the dropdown is scrolled.
 * @param {(search: string) => void} [props.onSearch] - Optional callback triggered when the search input changes. If not provided, search input will not be shown.
 * @param {(item: { label: string, value: string, description?: string }) => void} props.onSelect - Callback triggered when an item is selected.
 * @param {{ label: string, value: string, description?: string } | null} props.selectedData - The currently selected item.
 * @param {string} [props.wrapClassName] - Optional class name for wrapping the input.
 * @param {string} [props.placeholder='Search...'] - Placeholder text for the search input.
 * @param {boolean} [props.showClear] - Whether to show the clear button when there's a selection.
 * @param {() => void} [props.onClear] - Callback triggered when the clear button is clicked.
 * @param {React.HTMLAttributes<HTMLDivElement>} [props.popoverContentProps] - Additional props to pass to the PopoverContent (onWheel, onMouseEnter, etc.).
 * @param {Object} [props.classNames] - Object containing className overrides for different parts of the component.
 * @param {string} [props.classNames.buttonClassName] - Class name for the trigger button.
 * @param {string} [props.classNames.popoverContentClassName] - Class name for the dropdown content.
 * @param {string} [props.classNames.wrapperClassName] - Class name for the wrapper div.
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
  additionalProps = {},
  placeholder = 'Search...',
  showClear,
  onClear,
  classNames,
}: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className={`relative ${classNames?.wrapperClassName}`}>
          <Button
            variant='outline'
            role='combobox'
            aria-expanded={open}
            aria-label='async-autocomplete'
            className={`min-w-[300px] justify-between rounded-md bg-background font-normal normal-case ${classNames?.buttonClassName}`}
          >
            {selectedData ? selectedData.label : placeholder}
            <RxCaretSort />
          </Button>
          {showClear && selectedData && onClear && (
            <button
              type='button'
              className='absolute right-10 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50 hover:opacity-100 z-10 hover:cursor-pointer text-icon-pri'
              onClick={(e) => {
                e.stopPropagation();
                onClear();
              }}
              aria-label='Clear selection'
            >
              <HiMiniXCircle className='h-4 w-4' />
            </button>
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent
        {...additionalProps.popoverContentProps}
        className={`w-[var(--radix-popover-trigger-width)] p-0 ${classNames?.popoverContentClassName}`}
      >
        <AsyncInputSearch
          {...additionalProps.inputProps}
          items={data}
          onScroll={onScroll}
          onSearch={onSearch}
          onSelect={(e) => {
            setOpen(false);
            onSelect(e);
          }}
          selectedItem={selectedData}
          wrapClassName={wrapClassName}
          placeholder={placeholder}
          getKey={(item) => item.value}
          renderItem={(item, isSelected) => (
            <div className='flex flex-col justify-between'>
              <div className='flex items-center justify-between'>
                <p className='text-sm'>{item.label}</p>
                {isSelected && <HiCheck className='h-3 w-3' />}
              </div>
              {item?.description && (
                <p className='mb-2 text-xs text-zinc-500'>{item.description}</p>
              )}
            </div>
          )}
        />
      </PopoverContent>
    </Popover>
  );
};
