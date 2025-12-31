import React, { useRef } from 'react';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import { useHotkeys } from 'react-hotkeys-hook';
import { InputWithSlots } from '../input/InputWithSlots';

function getShortcutLabel(
  shortcut: { keys: string[]; label?: string },
  isMac: boolean
): string {
  if (shortcut.label) return shortcut.label;

  const key = isMac
    ? shortcut.keys.find((k) => k.includes('meta'))
    : shortcut.keys.find((k) => k.includes('ctrl'));

  if (!key) return '';

  return key
    .replace('meta', '⌘')
    .replace('ctrl', 'Ctrl')
    .replace('shift', '⇧')
    .replace('alt', '⌥')
    .replace('slash', '/')
    .replace(/\+/g, ' ')
    .toUpperCase();
}

/* -------------------------------------------------------
 * Types
 * ----------------------------------------------------- */

export interface SearchShortcut {
  keys: string[];     // e.g. ['meta+/', 'ctrl+/']
  label?: string;     // optional override
}

interface SearchBarProps
  extends React.ComponentProps<typeof InputWithSlots> {
  enableSearchShortcut?: boolean;
  searchShortcut?: SearchShortcut;
}

/* -------------------------------------------------------
 * Component
 * ----------------------------------------------------- */

export const SearchBar = React.forwardRef<
  HTMLInputElement,
  SearchBarProps
>(
  (
    {
      enableSearchShortcut = true,
      searchShortcut,
      prefixSlot,
      postfixSlot,
      placeholder = 'Search',
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const setRef = (node: HTMLInputElement | null) => {
      inputRef.current = node;
      if (typeof ref === 'function') ref(node);
      else if (ref) ref.current = node;
    };

    // 🔹 Default shortcut (Cmd+/ | Ctrl+/)
    const effectiveShortcut: SearchShortcut = searchShortcut ?? {
      keys: ['meta+slash', 'ctrl+slash'],
    };

    // 🔹 Register shortcut
    useHotkeys(
      effectiveShortcut.keys.join(','),
      (e) => {
        e.preventDefault();
        inputRef.current?.focus();
      },
      { enabled: enableSearchShortcut },
      [effectiveShortcut]
    );

    // 🔹 Auto-generate label
    const isMac =
      typeof navigator !== 'undefined' &&
      navigator.platform.toUpperCase().includes('MAC');

    const shortcutLabel = getShortcutLabel(effectiveShortcut, isMac);

    return (
      <InputWithSlots
        ref={setRef}
        type="search"
        placeholder={placeholder}
        prefixSlot={
          prefixSlot ?? (
            <HiMiniMagnifyingGlass className="h-4 w-4 text-text-opt" />
          )
        }
        postfixSlot={
          postfixSlot ??
          (enableSearchShortcut && shortcutLabel ? (
            <kbd className="rounded border px-2 py-1 text-xs text-text-opt">
              {shortcutLabel}
            </kbd>
          ) : null)
        }
        {...props}
      />
    );
  }
);

SearchBar.displayName = 'SearchBar';
