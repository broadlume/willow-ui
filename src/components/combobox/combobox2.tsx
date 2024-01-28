import * as React from 'react';
import { CaretSortIcon } from '@radix-ui/react-icons';

import { cn } from '@src/lib/utils';
import {
  Checkbox,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Popover,
  PopoverContent,
  PopoverTrigger,
  selectVariants,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TruncatedText,
} from '@src/index';

type Props = {
  /** Placeholder text to display when no option is selected. */
  placeholder?: string;
  /** Array of objects representing the options for the combobox. Each object should have a `value` (unique identifier) and a `label` (display text). */
  values?: { value: string; label: string }[];
  /** Additional CSS class names to apply to the combobox for custom styling. */
  className?: string;
  /** Children elements to be rendered at the bottom of the combobox, typically used for custom elements or additional functionality. */
  children?: React.ReactNode;
  /** Array of selected option values. This prop is used to control the component (controlled mode). When not provided, the component works in uncontrolled mode. */
  value?: string[];
  /** Callback function that is called when the selection changes. It receives the new array of selected option values. */
  onChange?: (selectedValues: string[]) => void;
  /** Optional filter function to use when searching. */
  filter?: ((value: string, search: string) => number) | undefined;
};

/** A multi-select combobox. */
export function Combobox2({
  placeholder = 'Search...',
  values = [],
  className = '',
  children,
  value,
  onChange,
  filter,
}: Props) {
  const [truncated, setTruncated] = React.useState(false);

  // Determine if the component is controlled
  const isControlled = value != null;

  // Internal state for uncontrolled mode
  const [selectedValuesState, setSelectedValuesState] = React.useState<
    string[]
  >([]);

  // Use controlled value or internal state based on the component mode
  const selectedValues = isControlled ? value : selectedValuesState;

  const handleSelect = (currentValue: string) => {
    const newSelectedValues = selectedValues.includes(currentValue)
      ? selectedValues.filter((v) => v !== currentValue)
      : [...selectedValues, currentValue];

    if (isControlled && onChange) {
      // If controlled, call the onChange prop
      onChange(newSelectedValues);
    } else {
      // If uncontrolled, update the internal state
      setSelectedValuesState(newSelectedValues);
    }
  };

  const getFullSelectedText = () => {
    if (selectedValues.length === 0) return placeholder;
    const count = truncated ? `(${selectedValues.length}) ` : '';
    const names = values
      .filter((value) => selectedValues.includes(value.value))
      .map((value) => value.label)
      .join(', ');
    return `${count}${names}`;
  };
  const getTooltipText = () => {
    const names = values
      .filter((value) => selectedValues.includes(value.value))
      .map((value) => value.label)
      .join(', ');
    return `${names}`;
  };

  const isSelected = (value: string) => selectedValues.includes(value);
  const hasSelectedValues = selectedValues.length > 0;

  return (
    <TooltipProvider>
      <Popover>
        <Tooltip>
          <TooltipContent
            className={cn('tooltip-content-max', !truncated && '~hidden')}
          >
            {getTooltipText()}
          </TooltipContent>
          <TooltipTrigger asChild>
            <PopoverTrigger
              className={cn(
                selectVariants(),
                '~justify-start ~gap-1',
                !hasSelectedValues && '~text-input',
                className
              )}
            >
              <TruncatedText onTruncation={setTruncated}>
                {getFullSelectedText()}
              </TruncatedText>
              <CaretSortIcon className='~ml-auto ~h-4 ~w-4 ~shrink-0 ~opacity-50' />
            </PopoverTrigger>
          </TooltipTrigger>
        </Tooltip>
        <PopoverContent className='popover-content ~p-0'>
          <Command className='~rounded-none' filter={filter}>
            <CommandInput
              placeholder={placeholder}
              className='~h-9'
              wrapperClassName={cn('~rounded-none ~border-4 ~border-b-[5px]')}
            />
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandList>
              <CommandGroup>
                {values?.map((value) => (
                  <CommandItem
                    key={value.value}
                    value={value.value}
                    onSelect={handleSelect}
                    className={cn(
                      !isSelected(value.value) && '~text-muted-foreground'
                    )}
                  >
                    <Checkbox
                      checked={isSelected(value.value)}
                      className='~mr-3'
                    />
                    {value.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
            {children}
          </Command>
        </PopoverContent>
      </Popover>
    </TooltipProvider>
  );
}
