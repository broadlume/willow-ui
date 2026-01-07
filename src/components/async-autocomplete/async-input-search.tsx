import React from 'react';
import { Command, CommandInput, CommandList } from '@src/index';

type AsyncInputSearchProps<T> = {
  commandInputProps?: Parameters<typeof CommandInput>[0];
  items: T[];
  onScroll: () => void;
  onSearch?: (query: string) => void;
  searchValue?: string;
  onSelect: (item: T) => void;
  selectedItem?: T | null;
  wrapClassName?: string;
  placeholder?: string;
  renderItem: (item: T, isSelected: boolean) => React.ReactNode;
  getKey: (item: T) => string | number;
};

/**
 * A generic asynchronous input search component.
 *
 * Renders a search input and a list of items, supporting infinite scroll and selection.
 *
 * @template T - The type of items in the list.
 *
 * @param {Object} props - The props for the component.
 * @param {T[]} props.items - The array of items to display in the list.
 * @param {() => void} props.onScroll - Callback invoked when the user scrolls to the bottom of the list.
 * @param {(query: string) => void} [props.onSearch] - Optional callback invoked when the search input value changes. If not provided, search input will not be shown.
 * @param {string} [props.searchValue] - Controlled search value for the input.
 * @param {(item: T) => void} props.onSelect - Callback invoked when an item is selected.
 * @param {T | undefined} props.selectedItem - The currently selected item.
 * @param {string} [props.wrapClassName] - Optional class name for the wrapper element.
 * @param {string} [props.placeholder] - Placeholder text for the search input.
 * @param {(item: T, isSelected: boolean) => React.ReactNode} props.renderItem - Function to render each item.
 * @param {(item: T) => React.Key} props.getKey - Function to get a unique key for each item.
 * @param {(item: T) => string} [props.getLabel] - Optional function to get a label for test IDs. If provided, each option will have a data-testid of "{label}-option".
 *
 * @returns {JSX.Element} The rendered async input search component.
 */
export function AsyncInputSearch<T>({
  commandInputProps = {},
  items,
  onScroll,
  onSearch,
  searchValue = '',
  onSelect,
  selectedItem,
  wrapClassName = '',
  placeholder = 'Search...',
  renderItem,
  getKey,
}: AsyncInputSearchProps<T>) {
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    if (
      Math.abs(target.scrollHeight - target.scrollTop - target.clientHeight) < 5
    ) {
      onScroll();
    }
  };

  return (
    <Command className={wrapClassName}>
      {onSearch && (
        <CommandInput
          {...commandInputProps}
          value={searchValue}
          placeholder={placeholder}
          className='h-9'
          onValueChange={(q) => onSearch(q)}
        />
      )}
      <CommandList onScroll={handleScroll}>
        {items.length ? (
          <>
            {items.map((item) => {
              const key = getKey(item);
              const isSelected = selectedItem && getKey(selectedItem) === key;
              return (
                <div
                  key={key}
                  onClick={() => onSelect(item)}
                  className='hover:bg-slate-100 cursor-pointer rounded-xs px-2 py-1.5 text-sm'
                  data-testid={key + '-option'}
                >
                  {renderItem(item, Boolean(isSelected))}
                </div>
              );
            })}
          </>
        ) : (
          <div className='py-6 text-center text-sm'>No results found.</div>
        )}
      </CommandList>
    </Command>
  );
}
