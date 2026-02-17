import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@components/select';
import clsx from 'clsx';
import { useState, useEffect } from 'react';
import { Editor } from '@tiptap/react';

interface SelectionTypeMenuItemContentProps {
  items: { value: string; label: string; className?: string }[];
  onSelection: (value: string) => void;
  darkMode: boolean;
  editor: Editor;
}

export const SelectionTypeMenuItemContent = ({
  items,
  onSelection,
  darkMode,
  editor,
}: SelectionTypeMenuItemContentProps) => {
  const [selectedItem, setSelectedItem] = useState(items[0].value);

  // Function to detect the current text format from the editor
  const getCurrentTextFormat = (): string => {
    if (!editor) return items[0].value;

    // Check for headings (h1-h6)
    for (let level = 1; level <= 6; level++) {
      if (editor.isActive('heading', { level })) {
        return `h${level}`;
      }
    }

    // Check for line height if items contain numeric values (like 1.0, 1.5, etc.)
    const attributes = editor.getAttributes('paragraph');
    if (attributes.lineHeight) {
      const lineHeight = attributes.lineHeight.toString();
      // Check if this line height exists in our items
      const lineHeightItem = items.find((item) => item.value === lineHeight);
      if (lineHeightItem) {
        return lineHeight;
      }
    }

    // Return first item as default (could be 'normal' for text styles, or first line height value)
    return items[0].value;
  };

  const updateFormat = () => {
    const currentFormat = getCurrentTextFormat();
    setSelectedItem(currentFormat);
  };

  // Update selected item when editor selection changes
  useEffect(() => {
    if (!editor) return;

    // Listen to editor selection and content changes
    editor.on('selectionUpdate', updateFormat);
    editor.on('update', updateFormat);

    return () => {
      editor.off('selectionUpdate', updateFormat);
      editor.off('update', updateFormat);
    };
  }, [editor, items]);

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
        tabIndex={-1}
        value={selectedItem}
        className={clsx(
          'h-6 w-32 rounded-none border-none font-normal text-black shadow-none focus:outline-none focus:ring-0',
          {
            'bg-surface-pri text-black hover:text-black': !darkMode,
            'bg-gray-900 text-white hover:text-white ': darkMode,
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
