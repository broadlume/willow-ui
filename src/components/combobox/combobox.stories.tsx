import { Meta, StoryObj } from '@storybook/react';
import { Combobox } from './combobox';
import {
  Button,
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

const LocationDemoComponent = () => {
  const [open, setOpen] = useState(false);
  return (
    <Combobox placeholder='Locations' values={locations} className='~w-[300px]'>
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
  render: (_) => <LocationDemoComponent />,
};

export const Demo2: Story = {
  render: (_) => (
    <Combobox placeholder='Select framework...' values={frameworks} />
  ),
};

export const Demo3: Story = {
  render: (_) => <Combobox values={longList} />,
};
