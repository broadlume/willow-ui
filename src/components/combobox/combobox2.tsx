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
import { useCommandState } from 'cmdk';

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

interface ComboboxContextValue {
  /** Placeholder text to display when no option is selected. */
  placeholder?: string;
  /** Children elements to be rendered at the bottom of the combobox, typically used for custom elements or additional functionality. */
  children?: React.ReactNode;
  /** Array of selected option values. This prop is used to control the component (controlled mode). When not provided, the component works in uncontrolled mode. */
  value: string[];
  /** Callback function that is called when the selection changes. It receives the new array of selected option values. */
  onChange?: (selectedValues: string[]) => void;
  /** Optional filter function to use when searching. */
  filter?: ((value: string, search: string) => number) | undefined;
  /** Function to determine if the combobox is truncated. */
  truncated?: boolean;
  /** Function to set the truncated state. */
  setTruncated?: React.Dispatch<React.SetStateAction<boolean>>;
  /** Function to handle selection of an option. */
  handleSelect?: (currentValue: string) => void;
}
const ComboboxContext = React.createContext<ComboboxContextValue>(
  {} as ComboboxContextValue
);

function useComboboxContext() {
  const context = React.useContext(ComboboxContext);
  if (!context) {
    throw new Error(
      'useComboboxContext must be used within a ComboboxProvider'
    );
  }
  return context;
}

type ComboboxValueProps = {
  /** Additional CSS class names to apply to the combobox for custom styling. */
  className?: string;
};
const ComboboxValue = ({ className }: ComboboxValueProps) => {
  const { value, placeholder, truncated, setTruncated } = useComboboxContext();

  const hasSelectedValues = value.length > 0;
  const getFullSelectedText = () => {
    if (value.length === 0) return placeholder;
    const count = truncated ? `(${value.length}) ` : '';
    const names = value.join(', ');
    return `${count}${names}`;
  };
  const getTooltipText = () => {
    const names = value.join(', ');
    return `${names}`;
  };

  return (
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
  );
};

const ComboboxContent = ({ children }: { children: React.ReactNode }) => {
  const { placeholder, filter } = useComboboxContext();

  return (
    <PopoverContent className='popover-content ~p-0'>
      <Command className='~rounded-none' filter={filter}>
        <CommandInput
          placeholder={placeholder}
          className='~h-9'
          wrapperClassName={cn('~rounded-none ~border-4 ~border-b-[5px]')}
        />
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandList>{children}</CommandList>
      </Command>
    </PopoverContent>
  );
};

const ComboboxGroup = ({ children }: { children: React.ReactNode }) => {
  return <CommandGroup>{children}</CommandGroup>;
};

type ComboboxItemProps = {
  value: string;
  children: React.ReactNode;
};
const ComboboxItem = ({ value: itemValue, children }: ComboboxItemProps) => {
  const { value, handleSelect } = useComboboxContext();
  const isSelected = (_value: string) => value.includes(_value);
  return (
    <CommandItem
      value={itemValue}
      onSelect={handleSelect}
      className={cn(!isSelected(itemValue) && '~text-muted-foreground')}
    >
      <Checkbox checked={isSelected(itemValue)} className='~mr-3' />
      {children}
    </CommandItem>
  );
};

/** A multi-select combobox. */
const Combobox2 = ({
  placeholder = 'Search...',
  children,
  value,
  onChange,
  filter,
}: Props) => {
  // State to track if the combobox is truncated
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

  return (
    <ComboboxContext.Provider
      value={{
        placeholder,
        children,
        value: selectedValues,
        onChange: isControlled ? onChange : setSelectedValuesState,
        filter,
        truncated,
        setTruncated,
        handleSelect,
      }}
    >
      <TooltipProvider>
        <Popover>{children}</Popover>
      </TooltipProvider>
    </ComboboxContext.Provider>
  );
};

export {
  ComboboxValue,
  ComboboxContent,
  ComboboxGroup,
  ComboboxItem,
  Combobox2,
};
