import { HiCheck, HiMiniXCircle } from 'react-icons/hi2';
import { Button, Popover, PopoverContent, PopoverTrigger } from '@src/index';
import { useState } from 'react';
import { AsyncInputSearch } from './async-input-search';
import { RxCaretSort } from 'react-icons/rx';
import { Checkbox } from '@src/components/checkbox/checkbox';

interface AsyncAutocompleteItem {
  value: string;
  label: string;
  description?: string;
}

interface AdditionalProps {
  inputProps?: Omit<
    Parameters<typeof AsyncInputSearch>[0],
    'items' | 'onSelect' | 'onScroll' | 'onSearch' | 'renderItem' | 'getKey' | 'searchValue'
  >;
  popoverContentProps?: React.HTMLAttributes<HTMLDivElement> &
    Record<`data-${string}`, string>;
  buttonProps?: React.ComponentProps<typeof Button> &
    Record<`data-${string}`, string>;
}

interface ClassNames {
  buttonClassName?: string;
  popoverContentClassName?: string;
  wrapperClassName?: string;
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
   * Enable multiple selection mode with checkboxes
   */
  multiSelect?: boolean;
  /**
   * Array of selected items when in multi-select mode
   */
  selectedItems?: AsyncAutocompleteItem[];
  /**
   * Callback for multi-select mode when items are selected/deselected
   */
  onMultiSelect?: (items: AsyncAutocompleteItem[]) => void;
  /**
   * Optional additional props for customizing the internal components.
   *
   * @property {object} inputProps - Props passed directly to the AsyncInputSearch component,
   * excluding core props like 'items', 'onSelect', 'onScroll', 'onSearch', 'renderItem', and 'getKey'
   * (which are already managed by AsyncAutocomplete internally).
   * @property {object} popoverContentProps - Props passed to the PopoverContent component.
   * @property {object} buttonProps - Props passed to the trigger Button component.
   *
   * This allows consumers of AsyncAutocomplete to override or extend certain behaviors or styles,
   * such as custom placeholder text, debounce delay, additional classNames, and html events.
   */
  additionalProps?: AdditionalProps;
  showClear?: boolean;
  onClear?: () => void;
  classNames?: ClassNames;
  dataTestId?: string;
};

/**
 * AsyncAutocomplete is a component that provides an asynchronous autocomplete dropdown.
 * It displays a searchable list of items, allows selection, and supports infinite scroll.
 *
 * @param {Object} props - The props for AsyncAutocomplete.
 * @param {Array<{ label: string, value: string, description?: string }>} props.data - The list of items to display in the autocomplete.
 * @param {(event: React.UIEvent<HTMLDivElement>) => void} props.onScroll - Callback triggered when the dropdown is scrolled.
 * @param {(search: string) => void} [props.onSearch] - Optional callback triggered when the search input changes. If not provided, search input will not be shown.
 * @param {(item: { label: string, value: string, description?: string }) => void} props.onSelect - Callback triggered when an item is selected (single-select mode).
 * @param {{ label: string, value: string, description?: string } | null} props.selectedData - The currently selected item (single-select mode).
 * @param {string} [props.wrapClassName] - Optional class name for wrapping the input.
 * @param {string} [props.placeholder='Search...'] - Placeholder text for the search input.
 * @param {boolean} [props.multiSelect=false] - Enable multiple selection mode with checkboxes.
 * @param {Array<{ label: string, value: string, description?: string }>} [props.selectedItems] - Array of selected items (multi-select mode).
 * @param {(items: Array<{ label: string, value: string, description?: string }>) => void} [props.onMultiSelect] - Callback for multi-select mode.
 * @param {boolean} [props.showClear] - Whether to show the clear button when there's a selection.
 * @param {() => void} [props.onClear] - Callback triggered when the clear button is clicked.
 * @param {Object} [props.additionalProps] - Additional props for customizing internal components.
 * @param {Object} [props.additionalProps.inputProps] - Props passed to the AsyncInputSearch component.
 * @param {Object} [props.additionalProps.popoverContentProps] - Props passed to the PopoverContent component.
 * @param {Object} [props.additionalProps.buttonProps] - Props passed to the trigger Button component.
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
  additionalProps,
  placeholder = 'Search...',
  showClear,
  onClear,
  classNames,
  multiSelect = false,
  selectedItems = [],
  onMultiSelect,
}: Props) => {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (query: string) => {
    setSearchValue(query);
    onSearch?.(query);
  };

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);

    // Clear search when popover close
    if (!isOpen) {
      setSearchValue('');
      if (searchValue !== '') {
        onSearch?.('');
      }
    }
  };

  const handleMultiSelectToggle = (item: AsyncAutocompleteItem) => {
    if (!onMultiSelect) return;

    const isSelected = selectedItems.some(
      (selected) => selected.value === item.value
    );

    if (isSelected) {
      onMultiSelect(
        selectedItems.filter((selected) => selected.value !== item.value)
      );
    } else {
      onMultiSelect([...selectedItems, item]);
    }
  };

  return (
    <div className='w-full'>
      <Popover open={open} onOpenChange={handleOpenChange}>
        <PopoverTrigger asChild>
          <div
            className={`relative ${classNames?.wrapperClassName ?? 'w-full'}`}
          >
            <Button
              {...additionalProps?.buttonProps}
              variant='outline'
              role='combobox'
              aria-expanded={open}
              aria-label='async-autocomplete'
              className={`w-full justify-between rounded-md bg-background font-normal normal-case ${classNames?.buttonClassName}`}
            >
              {multiSelect
                ? placeholder
                : selectedData
                ? selectedData.label
                : placeholder}
              <RxCaretSort />
            </Button>
            {showClear && !multiSelect && selectedData && onClear && (
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
          {...additionalProps?.popoverContentProps}
          className={`w-[var(--radix-popover-trigger-width)] p-0 ${classNames?.popoverContentClassName}`}
        >
          <AsyncInputSearch
            {...additionalProps?.inputProps}
            items={data}
            onScroll={onScroll}
            onSearch={handleSearchChange}
            searchValue={searchValue}
            onSelect={(e) => {
              if (multiSelect) {
                handleMultiSelectToggle(e);
              } else {
                handleOpenChange(false);
                onSelect(e);
              }
            }}
            selectedItem={selectedData}
            wrapClassName={wrapClassName}
            placeholder={placeholder}
            getKey={(item) => item.value}
            renderItem={(item, isSelected) => {
              const isMultiSelected =
                multiSelect &&
                selectedItems.some((selected) => selected.value === item.value);

              return (
                <div className='flex items-center gap-2'>
                  {multiSelect && (
                    <Checkbox
                      checked={isMultiSelected}
                      onCheckedChange={() => handleMultiSelectToggle(item)}
                      onClick={(e) => e.stopPropagation()}
                    />
                  )}
                  <div className='flex flex-col justify-between flex-1'>
                    <div className='flex items-center justify-between'>
                      <p className='text-sm'>{item.label}</p>
                      {!multiSelect && isSelected && (
                        <HiCheck className='h-3 w-3' />
                      )}
                    </div>
                    {item?.description && (
                      <p className='mb-2 text-xs text-zinc-500'>
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              );
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
