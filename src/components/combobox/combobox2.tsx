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

interface ComboboxContextValue {
  /** Placeholder text to display when no option is selected. */
  placeholder?: string;
  /** Children elements to be rendered at the bottom of the combobox, typically used for custom elements or additional functionality. */
  children?: React.ReactNode;
  /** Array of selected option values. This prop is used to control the component (controlled mode). When not provided, the component works in uncontrolled mode. */
  value: string[];
  /** Internal value, including a mapping of values to labels. */
  internalValue: ComboboxItemValue[];
  /** Callback function that is called when the selection changes. It receives the new array of selected option values. */
  onChange?: (selectedValues: string[]) => void;
  /** Optional filter function to use when searching. */
  filter?: ((value: string, search: string) => number) | undefined;
  /** Function to determine if the combobox is truncated. */
  truncated?: boolean;
  /** Function to set the truncated state. */
  setTruncated?: React.Dispatch<React.SetStateAction<boolean>>;
  /** Function to handle selection of an option. */
  handleSelect: (value: string) => void;
  /** Map of values to labels. */
  itemsMap: Map<string, string>;
  addItem: (item: ComboboxItemValue) => void;
  removeItem: (itemValue: string) => void;
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

// Helper function to extract items from children
function extractItems(children: React.ReactNode): ComboboxItemValue[] {
  return React.Children.toArray(children).flatMap((child) => {
    // Type guard to check if the element is a valid React element
    if (React.isValidElement(child)) {
      // Further check if it's a ComboboxItem or has children
      if (child.type === ComboboxItem) {
        // Cast the child to have ComboboxItemProps
        const comboboxItem = child as React.ReactElement<ComboboxItemProps>;
        return [
          {
            value: comboboxItem.props.value,
            label: React.Children.toArray(comboboxItem.props.children).join(''),
          },
        ];
      } else if (child.props && child.props.children) {
        // Recursively extract items from children
        return extractItems(child.props.children);
      }
    }
    return [];
  });
}

type ComboboxValueProps = {
  /** Additional CSS class names to apply to the combobox for custom styling. */
  className?: string;
};
const ComboboxValue = ({ className }: ComboboxValueProps) => {
  const { value, itemsMap, placeholder, truncated, setTruncated } =
    useComboboxContext();

  const hasSelectedValues = value.length > 0;
  const getFullSelectedText = () => {
    if (value.length === 0) return placeholder;
    const count = truncated ? `(${value.length}) ` : '';
    const names = value.map((v) => itemsMap.get(v) || v).join(', ');
    return `${count}${names}`;
  };
  const getTooltipText = () => {
    const labels = value.map((v) => itemsMap.get(v) || v);
    const result = labels.join(', ');
    return `${result}`;
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
  const { placeholder, filter, addItem, removeItem } = useComboboxContext();

  React.useEffect(() => {
    console.log('rendering combobox content');
    const items = extractItems(children);

    if (items) {
      items.forEach((item) => {
        if (item) {
          addItem(item);
        }
      });
    }

    return () => {
      console.log('unmounting combobox content');
      if (items) {
        items.forEach((item) => {
          if (item) {
            removeItem(item.value);
          }
        });
      }
    };
  }, [children, addItem, removeItem]);

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
  children: string;
};

interface ComboboxItemValue {
  value: string;
  label: string;
}
const ComboboxItem = ({ value: _value, children }: ComboboxItemProps) => {
  const { value, handleSelect } = useComboboxContext();

  const isSelected = value.includes(_value);

  return (
    <CommandItem
      value={_value}
      onSelect={handleSelect}
      className={cn(!isSelected && '~text-muted-foreground')}
    >
      <Checkbox checked={isSelected} className='~mr-3' />
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

  const [itemsMap, setItemsMap] = React.useState(new Map());
  const addItem = React.useCallback((item: ComboboxItemValue) => {
    setItemsMap((prev) => new Map(prev).set(item.value, item.label));
  }, []);
  const removeItem = React.useCallback((itemValue: string) => {
    setItemsMap((prev) => {
      const newMap = new Map(prev);
      newMap.delete(itemValue);
      return newMap;
    });
  }, []);

  // Determine if the component is controlled
  const isControlled = value != null;

  // Internal state for uncontrolled mode
  const [internalSelectedValues, setInternalSelectedValues] = React.useState<
    ComboboxItemValue[]
  >([]);

  // Use controlled value or internal state based on the component mode
  const selectedValues = isControlled
    ? value
    : internalSelectedValues.map((v) => v.value);

  const handleSelect = (_value: string) => {
    const label = itemsMap.get(_value);
    if (label == null) return;
    const redundant = internalSelectedValues.find((v) => v.value === _value);
    const newInternalSelectedValues = redundant
      ? internalSelectedValues.filter((v) => v.value !== _value)
      : [...internalSelectedValues, { value: _value, label }];

    if (isControlled && onChange) {
      const newSelectedValues = newInternalSelectedValues.map((v) => v.value);
      onChange(newSelectedValues);
    }
    setInternalSelectedValues(newInternalSelectedValues);
  };

  // if value changes, update internal state
  React.useEffect(() => {
    if (value == null) return;
    const newMap = value
      .map((v) => {
        const label = itemsMap.get(v);
        if (label == null) return null;
        return { value: v, label };
      })
      .filter((v) => v != null) as ComboboxItemValue[];
    setInternalSelectedValues(newMap);
  }, [value, itemsMap]);

  return (
    <ComboboxContext.Provider
      value={{
        placeholder,
        children,
        value: selectedValues,
        internalValue: internalSelectedValues,
        onChange: isControlled ? onChange : undefined,
        filter,
        truncated,
        setTruncated,
        handleSelect,
        itemsMap,
        addItem,
        removeItem,
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
