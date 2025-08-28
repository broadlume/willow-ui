import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@components/select";
import clsx from "clsx";
import { useState } from "react";

interface SelectionTypeMenuItemContentProps {
  items: { value: string, label: string, className?: string }[];
  onSelection: (value: string) => void;
}

export const SelectionTypeMenuItemContent = ({ items, onSelection }: SelectionTypeMenuItemContentProps) => {
    const [selectedItem, setSelectedItem] = useState(items[0].value);
    const selectedItemLabel = items.find(item => item.value === selectedItem)?.label || selectedItem;
  
    return (
      <Select onValueChange={value => {
        setSelectedItem(value);
        onSelection(value);
      }}>
        <SelectTrigger tabIndex={-1} value={selectedItem} className='~w-32 ~h-6 ~border-none ~shadow-none focus:outline-none focus:ring-0'>
          <SelectValue>{selectedItemLabel}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          {items.map(item => (
            <SelectItem className={clsx(item.className)} key={item.value} value={item.value}>{item.label}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
}
