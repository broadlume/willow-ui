// src/components/editor/components/command-list.tsx
import React, { useState, useEffect, forwardRef, useImperativeHandle, useCallback } from 'react';
import { Editor } from '@tiptap/react';
import clsx from 'clsx';

interface CommandItem {
    title: string;
    command: ({ editor, range }: { editor: Editor; range: { from: number; to: number } }) => void;
}

interface CommandListProps {
    items: CommandItem[];
    command: (props: { id: string }) => void; // Unused, as we directly use item.command
    editor: Editor;
    range: { from: number; to: number };
    query: string; // The current query after '/'
}

// Using forwardRef to expose onKeyDown to the Tiptap Suggestion extension
export const CommandList = forwardRef(({ items, editor, range, query }: CommandListProps, ref) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Filter items based on query, this should ideally be done by the Suggestion extension
    // but doing it here for clarity if you needed to refine filtering
    const filteredItems = items.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
    );

    const selectItem = useCallback((index: number) => {
        const item = filteredItems[index];
        if (item) {
            item.command({ editor, range });
        }
    }, [filteredItems, editor, range]);

    // Handle keyboard navigation (up, down, enter)
    useImperativeHandle(ref, () => ({
        onKeyDown: ({ event }: { event: KeyboardEvent }) => {
            if (event.key === 'ArrowUp') {
                setSelectedIndex((prevIndex) => (prevIndex + filteredItems.length - 1) % filteredItems.length);
                return true; // Prevent default browser behavior (scrolling)
            }

            if (event.key === 'ArrowDown') {
                setSelectedIndex((prevIndex) => (prevIndex + 1) % filteredItems.length);
                return true; // Prevent default browser behavior (scrolling)
            }

            if (event.key === 'Enter') {
                event.preventDefault(); // Prevent new line
                selectItem(selectedIndex);
                return true; // Event handled
            }

            if (event.key === 'Escape') {
                // Tiptap's suggestion extension handles hiding on Escape
                return false; // Let Tiptap handle it
            }

            return false; // Don't handle other keys
        },
    }), [filteredItems, selectedIndex, selectItem]);

    // Reset selected index when items change (e.g., filtering)
    useEffect(() => {
        setSelectedIndex(0);
    }, [items, query]); // Also reset if query changes

    if (!filteredItems.length) {
        return <div className='p-2 text-gray-500'>No results</div>;
    }

    return (
        <div className='bg-white border border-gray-200 rounded-md shadow-lg p-1 max-h-60 overflow-y-auto'>
            {filteredItems.map((item, index) => (
                <button
                    key={item.title}
                    className={clsx(
                        'block w-full text-left px-3 py-2 rounded-md text-sm',
                        'hover:bg-blue-100 focus:bg-blue-100', // Tailwind for hover/focus
                        {
                            'bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600': index === selectedIndex,
                        }
                    )}
                    onClick={() => selectItem(index)}
                >
                    {item.title}
                </button>
            ))}
        </div>
    );
});

CommandList.displayName = 'CommandList'; // Important for forwardRef