import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@components/select';
import clsx from 'clsx';
import { useState } from 'react';

interface SelectionTypeMenuItemContentProps {
  items: { value: string; label: string; className?: string }[];
  onSelection: (value: string) => void;
  darkMode: boolean;
}

export const SelectionTypeMenuItemContent = ({
  items,
  onSelection,
  darkMode,
}: SelectionTypeMenuItemContentProps) => {
  const [selectedItem, setSelectedItem] = useState(items[0].value);
  const selectedItemLabel =
    items.find((item) => item.value === selectedItem)?.label || selectedItem;

  return (
    <Select
      onValueChange={(value) => {
        setSelectedItem(value);
        onSelection(value);
      }}
    >
      <SelectTrigger
        value={selectedItem}
        className={clsx(
          '~h-6 ~w-32 ~rounded-none ~border-none ~font-normal ~text-black ~shadow-none focus:~outline-none focus:~ring-0',
          {
            '~bg-surface-pri ~text-black hover:~text-black': !darkMode,
            '~bg-gray-900 ~text-white hover:~text-white ': darkMode,
          }
        )}
      >
        <SelectValue>{selectedItemLabel}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <SelectItem
            className={clsx(item.className)}
            key={item.value}
            value={item.value}
          >
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
