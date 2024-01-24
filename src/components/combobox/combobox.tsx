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
  placeholder?: string;
  values?: { value: string; label: string }[];
  className?: string;
  children?: React.ReactNode;
};

/** A multi-select combobox. */
export function Combobox({
  placeholder = 'Search...',
  values = [],
  className = '',
  children,
}: Props) {
  const [selectedValues, setSelectedValues] = React.useState<string[]>([]);
  const [truncated, setTruncated] = React.useState(false);

  const handleSelect = (currentValue: string) => {
    setSelectedValues((prevValues) =>
      prevValues.includes(currentValue)
        ? prevValues.filter((v) => v !== currentValue)
        : [...prevValues, currentValue]
    );
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
          <Command className='~rounded-none'>
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
