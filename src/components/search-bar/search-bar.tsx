import React, { useEffect, useRef } from 'react';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import { InputWithSlots } from '../input/InputWithSlots';

/* -------------------------------------------------------
 * Types
 * ----------------------------------------------------- */

export interface SearchShortcutConfig {
  key: string;
  meta?: boolean;
  ctrl?: boolean;
  alt?: boolean;
  shift?: boolean;
  label?: string;
}

export interface SearchBarProps
  extends React.ComponentProps<typeof InputWithSlots> {
  enableSearchShortcut?: boolean;
  shortcut?: SearchShortcutConfig;
}

/* -------------------------------------------------------
 * Utils
 * ----------------------------------------------------- */

const isMac =
  typeof navigator !== 'undefined' &&
  navigator.platform.toUpperCase().includes('MAC');

/* -------------------------------------------------------
 * Hook
 * ----------------------------------------------------- */

function useSearchShortcut(
  enabled: boolean | undefined,
  inputRef: React.RefObject<HTMLInputElement>,
  shortcut?: SearchShortcutConfig
) {
  useEffect(() => {
    if (!enabled) return;

    const resolvedShortcut = {
      key: shortcut?.key ?? '/',
      meta: shortcut?.meta ?? (isMac ? true : false),
      ctrl: shortcut?.ctrl ?? (isMac ? false : true),
      alt: shortcut?.alt ?? false,
      shift: shortcut?.shift ?? false,
    };

    const handler = (e: KeyboardEvent) => {
      const isCorrectKey =
        e.key.toLowerCase() === resolvedShortcut.key.toLowerCase();

      const modifiersMatch =
        e.metaKey === resolvedShortcut.meta &&
        e.ctrlKey === resolvedShortcut.ctrl &&
        e.altKey === resolvedShortcut.alt &&
        e.shiftKey === resolvedShortcut.shift;

      const target = e.target as HTMLElement;
      const isTyping =
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable;

      if (isCorrectKey && modifiersMatch && !isTyping) {
        e.preventDefault();
        inputRef.current?.focus();
      }

      if (e.key === 'Escape' && document.activeElement === inputRef.current) {
        e.preventDefault();
        // inputRef.current?.blur();
      }
    };

    window.addEventListener('keydown', handler);
    return () => {
      window.removeEventListener('keydown', handler);
    };
  }, [enabled, inputRef, shortcut]);
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
      shortcut,
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

    useSearchShortcut(enableSearchShortcut, inputRef, shortcut);

    // UI label (also defaulted)
    const shortcutLabel = shortcut?.label ?? '/';

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
          (enableSearchShortcut ? (
            <kbd data-testid="kbd">
              <span className="rounded border border-border-pri px-2 py-1 text-xs text-text-opt">
                {shortcutLabel}
              </span>
            </kbd>
          ) : null)
        }
        {...props}
      />
    );
  }
);

SearchBar.displayName = 'SearchBar';
