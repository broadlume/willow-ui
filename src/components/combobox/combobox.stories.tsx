import { Meta, StoryObj } from '@storybook/react';
import { Combobox } from './combobox';
import {
  Button,
  Checkbox,
  CommandGroup,
  CommandItem,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Input,
  Label,
} from '@src/index';
import { FaPlus } from 'react-icons/fa';
import { useState } from 'react';

const meta: Meta<typeof Combobox> = {
  component: Combobox,
  title: 'Components/Combobox',
};

export default meta;
type Story = StoryObj<typeof Combobox>;

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

const locations = [
  {
    value: 'clearwater',
    label: 'Clearwater',
  },
  {
    value: 'north-tampa',
    label: 'North Tampa',
  },
  {
    value: 'safety-harbor',
    label: 'Safety Harbor',
  },
  {
    value: 'south-tampa',
    label: 'South Tampa',
  },
  {
    value: 'st-petersburg',
    label: 'St. Petersburg',
  },
];

// A long list of any non-repeating values, for testing scrolling.
const longList = Array.from({ length: 100 }, (_, i) => ({
  value: i.toString(),
  label: `Item ${i}`,
}));

const LocationDemoComponent = ({ placeholder, values }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <Combobox placeholder={placeholder} values={values} className='~w-[300px]'>
      <CommandGroup>
        <Dialog open={open} onOpenChange={setOpen}>
          <CommandItem
            className='caption-1 ~cursor-pointer ~gap-2 ~text-mosaic aria-selected:~text-mosaic'
            onSelect={() => setOpen((prev) => !prev)}
          >
            <FaPlus />
            Add location
          </CommandItem>
          <DialogContent className='sm:~max-w-[425px]'>
            <DialogHeader>
              <DialogTitle>Add location</DialogTitle>
              <DialogDescription>
                Add a new location to your list.
              </DialogDescription>
            </DialogHeader>
            <div className='~grid ~grid-cols-4 ~items-center ~gap-4'>
              <Label htmlFor='name' className='~text-right'>
                Name
              </Label>
              <Input id='name' defaultValue='' className='~col-span-3' />
            </div>
            <DialogFooter>
              <Button variant='secondary' onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type='submit' onClick={() => setOpen(false)}>
                Add
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CommandGroup>
    </Combobox>
  );
};

export const Demo: Story = {
  render: LocationDemoComponent,
  args: {
    placeholder: 'Location',
    values: locations,
  },
};

const ControlledDemoComponent = ({ placeholder, values }: any) => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <div className='tw-reset ~flex ~flex-col ~gap-2'>
      <Combobox
        placeholder={placeholder}
        values={values}
        value={value}
        onChange={setValue}
      />
      <p>External control:</p>
      {values.map((_value) => (
        <div className='~flex ~gap-1' key={_value.value}>
          <Checkbox
            id={_value.value}
            checked={value.includes(_value.value)}
            onCheckedChange={(e) => {
              if (e === true) {
                setValue((prev) => [...prev, _value.value]);
              } else if (e === false) {
                setValue((prev) => prev.filter((v) => v !== _value.value));
              }
            }}
          />
          <Label htmlFor={_value.value}>{_value.label}</Label>
        </div>
      ))}
    </div>
  );
};
export const Controlled: Story = {
  render: ControlledDemoComponent,
  args: {
    placeholder: 'Select framework...',
    values: frameworks,
  },
};

export const LongListDemo: Story = {
  render: (_) => <Combobox values={longList} />,
};
