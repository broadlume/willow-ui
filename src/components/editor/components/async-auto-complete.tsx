import { Input } from "@components/input/input";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { useDebounce } from "@src/lib/hooks/useDebounce";
import { useEffect, useRef, useState } from "react";
import { cn } from '@src/lib/utils';

interface AsyncSelectAutoCompleteProps {
  value: string | null;
  onChange: (value: string | null, label?: string | null) => void;
  fetchOptions: (query: string) => Promise<{ label: string; value: string }[]>;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  autoFocus?: boolean;
  darkMode?: boolean;
}

export const AsyncSelectAutoComplete: React.FC<AsyncSelectAutoCompleteProps> = ({
  value,
  onChange,
  fetchOptions,
  placeholder = 'Type to search...',
  disabled,
  className = '',
  autoFocus = false,
  darkMode = false,
}) => {
  const [inputValue, setInputValue] = useState(value || '');
  const [options, setOptions] = useState<{ label: string; value: string }[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [highlighted, setHighlighted] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const debouncedInputValue = useDebounce(inputValue, 500);

  useEffect(() => {
    if (!debouncedInputValue) {
      setOptions([]);
      return;
    }

    setLoading(true);
    fetchOptions(debouncedInputValue).then((opts) => {
      setOptions(opts);
      setLoading(false);
      setHighlighted(0);
    });
  }, [debouncedInputValue, fetchOptions]);

  useEffect(() => {
    if (autoFocus) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
        setOpen(true);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [autoFocus]);

  const handleSelect = (option: { label: string; value: string }) => {
    onChange(option.value, option.label);
    setInputValue(option.label);
    setOptions([]);
    setOpen(false);
  };

  return (
    <div className={cn('~relative ~w-full', className)}>
      <div
        className={cn(
          '~flex ~items-center ~border ~rounded-md ~px-2 ~py-1',
          disabled && '~opacity-50 ~pointer-events-none',
          darkMode
            ? '~bg-gray-900 ~border-gray-700'
            : '~bg-white'
        )}
      >
        <Input
          ref={inputRef}
          placeholder={placeholder}
          className={cn(
            'focus-visible:~ring-0 focus:~outline-none ~outline-none ~border-none ~shadow-none',
            darkMode ? '~bg-gray-900 ~text-gray-100' : ''
          )}
          value={inputValue}
          onChange={e => {
            setInputValue(e.target.value);
            if (!open) setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          disabled={disabled}
          onKeyDown={e => {
            if (!open) return;
            if (e.key === 'ArrowDown') {
              setHighlighted(h => Math.min(h + 1, options.length - 1));
              e.preventDefault();
            } else if (e.key === 'ArrowUp') {
              setHighlighted(h => Math.max(h - 1, 0));
              e.preventDefault();
            } else if (e.key === 'Enter' && options[highlighted]) {
              handleSelect(options[highlighted]);
              e.preventDefault();
            } else if (e.key === 'Escape') {
              setOpen(false);
              e.preventDefault();
            }
          }}
        />
        <CaretSortIcon className={cn("~ml-2 ~h-4 ~w-4 ~opacity-50", darkMode ? "~text-gray-400" : "")} />
      </div>
      {open && (
        <div
          className={cn(
            "~absolute ~z-50 ~mt-1 ~w-full ~rounded-md ~border ~shadow-lg ~max-h-60 ~overflow-auto",
            darkMode
              ? "~bg-gray-900 ~border-gray-700 ~text-gray-100"
              : "~bg-white"
          )}
        >
          {loading ? (
            <div className={cn("~px-3 ~py-2", darkMode ? "~text-gray-400" : "~text-gray-400")}>Loading...</div>
          ) : options.length === 0 && inputValue ? (
            <div className={cn("~px-3 ~py-2", darkMode ? "~text-gray-400" : "~text-gray-400")}>
              <div className={cn("~px-2 ~py-1.5 ~text-sm", darkMode ? "~text-gray-400" : "~text-gray-500")}>
                No results found.
              </div>
              {/* <Button
                className={cn('~mt-4')}
                onClick={(e) => {
                  e.preventDefault();
                  alert('You can add a new item: ' + inputValue);
                }}
              >
                Add new Token "{inputValue}"
              </Button> */}
            </div>
          ) : (
            options.map((option, idx) => (
              <div
                key={option.value}
                className={cn(
                  '~px-3 ~py-2 ~cursor-pointer',
                  idx === highlighted
                    ? darkMode
                      ? '~bg-gray-800 ~text-blue-300'
                      : '~bg-blue-100'
                    : darkMode
                    ? 'hover:~bg-gray-800'
                    : 'hover:~bg-gray-100'
                )}
                onMouseDown={e => {
                  e.preventDefault();
                  handleSelect(option);
                }}
              >
                {option.label}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};
