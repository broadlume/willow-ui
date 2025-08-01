import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  useCallback,
} from 'react';
import clsx from 'clsx';
import { CommandItem } from '../extensions/slash-command'; // Import the interface
import { Button } from '@components/button';

interface SlashCommandMenuProps {
  items: CommandItem[];
  command: (item: CommandItem) => void;
}

// Define the handle type for useImperativeHandle
interface SlashCommandMenuHandle {
  onKeyDown: (event: KeyboardEvent) => boolean;
}

const SlashCommandMenu = forwardRef<SlashCommandMenuHandle, SlashCommandMenuProps>(
  ({ items, command }, ref) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const selectItem = useCallback(
      (index: number) => {
        const item = items[index];
        if (item) {
          command(item);
        }
      },
      [items, command]
    );

    // Navigation handlers
    const upHandler = useCallback(() => {
      setSelectedIndex((prevIndex) =>
        (prevIndex + items.length - 1) % items.length
      );
    }, [items.length]);

    const downHandler = useCallback(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, [items.length]);

    const enterHandler = useCallback(() => {
      selectItem(selectedIndex);
    }, [selectedIndex, selectItem]);

    // Expose `onKeyDown` to the parent (Tiptap extension)
    useImperativeHandle(ref, () => ({
      onKeyDown: (event: KeyboardEvent) => {
        if (event.key === 'ArrowUp') {
          upHandler();
          return true; // Indicate that the event was handled
        }
        if (event.key === 'ArrowDown') {
          downHandler();
          return true; // Indicate that the event was handled
        }
        if (event.key === 'Enter') {
          enterHandler();
          return true; // Indicate that the event was handled
        }
        return false; // Event not handled by this component
      },
    }));

    useEffect(() => {
      // Reset selected index when the list of items changes (e.g., filtered)
      setSelectedIndex(0);
    }, [items]);

    // If no items, render nothing
    if (!items || items.length === 0) {
      return null;
    }

    return (
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden max-h-60 overflow-y-auto p-2">
        {items.map((item, index) => (
          <Button
            type='button'
            variant='link'
            key={index}
            className={clsx(
              'block w-full text-left px-4 py-2 text-xs color-[#000] rounded-none',
              'hover:bg-blue-50 hover:text-blue-700 hover:border-none',
              {
                'border-b-2 border-blue-800 text-blue-800': index === selectedIndex,
              }
            )}
            onClick={() => selectItem(index)}
          >
            {item.title}
          </Button>
        ))}
      </div>
    );
  }
);

SlashCommandMenu.displayName = 'SlashCommandMenu';

export { SlashCommandMenu };