import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { AsyncAutocomplete } from './async-autocomplete';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@components/dialog/dialog';
import { Button } from '@components/button';


const meta: Meta<typeof AsyncAutocomplete> = {
  component: AsyncAutocomplete,
  title: 'Components/Async Auto complete',
  parameters: {
    docs: {
      description: {
        component:
          'AsyncAutocomplete with search, select, and infinite scroll functionality.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AsyncAutocomplete>;

type Item = {
  value: string;
  label: string;
};

export const Interactive: Story = {
  render: () => {
    const initialData = [
      { value: '1', label: 'Apple' },
      { value: '2', label: 'Banana' },
      { value: '3', label: 'Blueberry' },
      { value: '4', label: 'Cherry' },
      { value: '5', label: 'Date' },
      { value: '6', label: 'Elderberry' },
      { value: '7', label: 'Fig' },
      { value: '8', label: 'Grape' },
      { value: '9', label: 'Honeydew' },
      { value: '10', label: 'Kiwi' },
    ];
    const [data, setData] = useState(initialData);
    const [selectedData, setSelectedData] = useState<Item | null>(null);

    const handleSearch = (query: string) => {
      // Simulate search by filtering initialData
      const filtered = initialData.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase())
      );
      setData(filtered);
    };

    const handleSelect = (item: Item) => {
      setSelectedData(item);
    };

    const handleScroll = () => {
      // Simulate loading more data
      const nextId = data.length + 1;
      const moreData = [
        { value: `${nextId}`, label: `Fruit ${nextId}` },
        { value: `${nextId + 1}`, label: `Fruit ${nextId + 1}` },
      ];
      setData((prev) => [...prev, ...moreData]);
    };

    return (
      <div>
        <AsyncAutocomplete
          data={data}
          onSearch={handleSearch}
          onSelect={handleSelect}
          onScroll={handleScroll}
          selectedData={selectedData}
          additionalProps={{
            inputProps: {
              commandInputProps: {
                onBlur: () => console.log('Input blurred'),
              },
            },
          }}
          classNames={{
            wrapperClassName: 'w-[300px]',
          }}
        />
      </div>
    );
  },
};

export const InsideModal: Story = {
  render: () => {
       const initialData = [
      { value: '1', label: 'Apple' },
      { value: '2', label: 'Banana' },
      { value: '3', label: 'Blueberry' },
      { value: '4', label: 'Cherry' },
      { value: '5', label: 'Date' },
      { value: '6', label: 'Elderberry' },
      { value: '7', label: 'Fig' },
      { value: '8', label: 'Grape' },
      { value: '9', label: 'Honeydew' },
      { value: '10', label: 'Kiwi' },
    ];
    const [data, setData] = useState(initialData);
    const [selectedData, setSelectedData] = useState<Item | null>(null);

    const handleSearch = (query: string) => {
      // Simulate search by filtering initialData
      const filtered = initialData.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase())
      );
      setData(filtered);
    };

    const handleSelect = (item: Item) => {
      setSelectedData(item);
    };

    const handleScroll = () => {
      // Simulate loading more data
      const nextId = data.length + 1;
      const moreData = [
        { value: `${nextId}`, label: `Fruit ${nextId}` },
        { value: `${nextId + 1}`, label: `Fruit ${nextId + 1}` },
      ];
      setData((prev) => [...prev, ...moreData]);
    };


    const ModalFilterDemo = () => {
      const [open, setOpen] = useState(false);

      return (
        <div className='p-8'>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant='outline'>Open Modal with Filter Panel</Button>
            </DialogTrigger>
            <DialogContent className='max-w-2xl max-h-[80vh] overflow-y-auto'>
              <DialogHeader>
                <DialogTitle>Filter Options</DialogTitle>
              </DialogHeader>
              <div className='py-4'>

                  <ol className='text-sm space-y-1 list-decimal list-inside'>
              <li>Click the button to open the modal</li>
              <li>Click the filter icon to open the filter panel</li>
              <li>Try scrolling through the filter options inside the panel</li>
              <li>The filter panel should scroll independently within the modal</li>
            </ol>

              <ol className='text-sm space-y-1 list-decimal list-inside'>
              <li>Click the button to open the modal</li>
              <li>Click the filter icon to open the filter panel</li>
              <li>Try scrolling through the filter options inside the panel</li>
              <li>The filter panel should scroll independently within the modal</li>
            </ol>

              <ol className='text-sm space-y-1 list-decimal list-inside'>
              <li>Click the button to open the modal</li>
              <li>Click the filter icon to open the filter panel</li>
              <li>Try scrolling through the filter options inside the panel</li>
              <li>The filter panel should scroll independently within the modal</li>
            </ol>
                <AsyncAutocomplete
                  data={data}
                  onSearch={handleSearch}
                  onSelect={handleSelect}
                  onScroll={handleScroll}
                  selectedData={selectedData}
                  additionalProps={{
                    inputProps: {
                      commandInputProps: {
                        onBlur: () => console.log('Input blurred'),
                      },
                    },
                  }}
                  classNames={{
                    wrapperClassName: 'w-[300px] max-h-[300px]',
                  }}
                />
              </div>
            </DialogContent>
          </Dialog>

          <div className='mt-6 p-4 bg-blue-50 rounded-lg'>
            <h3 className='font-semibold mb-2'>Instructions:</h3>
            <ol className='text-sm space-y-1 list-decimal list-inside'>
              <li>Click the button to open the modal</li>
              <li>Click the filter icon to open the filter panel</li>
              <li>Try scrolling through the filter options inside the panel</li>
              <li>The filter panel should scroll independently within the modal</li>
            </ol>
          </div>
        </div>
      );
    };

    return <ModalFilterDemo />;
  },
};