import * as React from 'react';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';

import { cn } from '@src/lib/utils';
import {
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@src/index';
import { selectVariants } from '@components/select/select-variants';

const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
];

const SelectedChip = ({ children }: { children: React.ReactNode }) => (
  <div className='~rounded-full ~bg-secondary ~px-2 ~text-secondary-foreground'>
    {children}
    <Button
      variant='ghost'
      size='icon'
      className='~ml-2 ~h-5 ~w-5 ~shrink-0 ~rounded-full ~opacity-50'
    >
      x
    </Button>
  </div>
);

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [values, setValues] = React.useState<string[]>([]);

  const handleSelect = (currentValue: string) => {
    // setValue(currentValue === value ? '' : currentValue);
    setValues((prevValues) =>
      prevValues.includes(currentValue)
        ? prevValues
        : [...prevValues, currentValue]
    );
    setOpen(false);
  };

  const unselectedValues = frameworks.filter(
    (framework) => !values.includes(framework.value)
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className={cn(selectVariants(), '~justify-start ~gap-2')}>
        {values.map((framework) => (
          <SelectedChip>{framework}</SelectedChip>
        ))}
        {value
          ? frameworks.find((framework) => framework.value === value)?.label
          : 'Select framework...'}
        <CaretSortIcon className='~ml-auto ~h-4 ~w-4 ~shrink-0 ~opacity-50' />
      </PopoverTrigger>
      <PopoverContent className='~w-[200px] ~p-0'>
        <Command>
          <CommandInput placeholder='Search framework...' className='h-9' />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {unselectedValues.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue);
                  handleSelect(currentValue);
                  setOpen(false);
                }}
              >
                {framework.label}
                <CheckIcon
                  className={cn(
                    '~ml-auto ~h-4 ~w-4',
                    value === framework.value ? '~opacity-100' : '~opacity-0'
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
