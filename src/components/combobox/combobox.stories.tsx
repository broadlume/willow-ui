import { Meta, StoryObj } from '@storybook/react';
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxFooter,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
} from './combobox';
import {
  Button,
  Checkbox,
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

export const Demo: Story = {
  render: (_) => (
    <Combobox>
      <ComboboxValue className='~w-[200px]' placeholder='Select framework...' />
      <ComboboxContent>
        <ComboboxInput placeholder='Search frameworks...' />
        <ComboboxEmpty>No results found.</ComboboxEmpty>
        <ComboboxList>
          <ComboboxGroup>
            {frameworks.map((framework) => (
              <ComboboxItem key={framework.value} value={framework.value}>
                {framework.label}
              </ComboboxItem>
            ))}
          </ComboboxGroup>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  ),
};

const LocationDemoComponent = ({ placeholder, values }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <Combobox>
      <ComboboxValue className='~w-[300px]' placeholder={placeholder} />
      <ComboboxContent>
        <ComboboxInput placeholder='Search locations...' />
        <ComboboxEmpty>No results found.</ComboboxEmpty>
        <ComboboxList>
          <ComboboxGroup>
            {values.map((location) => (
              <ComboboxItem key={location.value} value={location.value}>
                {location.label}
              </ComboboxItem>
            ))}
          </ComboboxGroup>
        </ComboboxList>
        <Dialog open={open} onOpenChange={setOpen}>
          <ComboboxFooter onSelect={() => setOpen((prev) => !prev)}>
            <FaPlus />
            Add location
          </ComboboxFooter>
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
      </ComboboxContent>
    </Combobox>
  );
};

export const FooterDemo: StoryObj = {
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
      <Combobox value={value} onChange={setValue}>
        <ComboboxValue className='~w-[300px]' placeholder={placeholder} />
        <ComboboxContent>
          <ComboboxInput placeholder={placeholder} />
          <ComboboxEmpty>No results found.</ComboboxEmpty>
          <ComboboxList>
            <ComboboxGroup>
              {values.map((framework) => (
                <ComboboxItem key={framework.value} value={framework.value}>
                  {framework.label}
                </ComboboxItem>
              ))}
            </ComboboxGroup>
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
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
export const Controlled: StoryObj = {
  render: ControlledDemoComponent,
  args: {
    placeholder: 'Select framework...',
    values: frameworks,
  },
};

export const LongListDemo: Story = {
  render: (_) => (
    <Combobox>
      <ComboboxValue className='~w-[200px]' placeholder='Select...' />
      <ComboboxContent>
        <ComboboxInput placeholder='Random placeholder' />
        <ComboboxEmpty>No results found.</ComboboxEmpty>
        <ComboboxList>
          <ComboboxGroup>
            {longList.map((item) => (
              <ComboboxItem key={item.value} value={item.value}>
                {item.label}
              </ComboboxItem>
            ))}
          </ComboboxGroup>
        </ComboboxList>
        <ComboboxFooter>Test</ComboboxFooter>
      </ComboboxContent>
    </Combobox>
  ),
};
