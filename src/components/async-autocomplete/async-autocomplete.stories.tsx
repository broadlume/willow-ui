import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { AsyncAutocomplete } from './async-autocomplete';

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

export const MultiSelect: Story = {
  render: () => {
    const initialData = [
      { value: '1', label: 'Apple', description: 'A sweet red fruit' },
      { value: '2', label: 'Banana', description: 'A yellow tropical fruit' },
      { value: '3', label: 'Blueberry', description: 'Small blue berries' },
      { value: '4', label: 'Cherry', description: 'Small red stone fruit' },
      { value: '5', label: 'Date', description: 'Sweet brown fruit' },
      { value: '6', label: 'Elderberry', description: 'Dark purple berries' },
      { value: '7', label: 'Fig', description: 'Sweet soft fruit' },
      { value: '8', label: 'Grape', description: 'Small round fruit' },
      { value: '9', label: 'Honeydew', description: 'Sweet melon' },
      { value: '10', label: 'Kiwi', description: 'Fuzzy brown fruit' },
    ];
    const [data, setData] = useState(initialData);
    const [selectedItems, setSelectedItems] = useState<Item[]>([]);

    const handleSearch = (query: string) => {
      // Simulate search by filtering initialData
      const filtered = initialData.filter((item) =>
        item.label.toLowerCase().includes(query.toLowerCase())
      );
      setData(filtered);
    };

    const handleMultiSelect = (items: Item[]) => {
      setSelectedItems(items);
      console.log('Selected items:', items);
    };

    const handleScroll = () => {
      // Simulate loading more data
      const nextId = data.length + 1;
      const moreData = [
        { value: `${nextId}`, label: `Fruit ${nextId}`, description: `Description for fruit ${nextId}` },
        { value: `${nextId + 1}`, label: `Fruit ${nextId + 1}`, description: `Description for fruit ${nextId + 1}` },
      ];
      setData((prev) => [...prev, ...moreData]);
    };

    return (
      <div>
        <AsyncAutocomplete
          multiSelect={true}
          data={data}
          onSearch={handleSearch}
          onSelect={(item) => console.log('Single select not used in multi-select mode')}
          onMultiSelect={handleMultiSelect}
          onScroll={handleScroll}
          selectedItems={selectedItems}
          placeholder="Select fruits..."
          classNames={{
            wrapperClassName: 'w-[400px]',
          }}
        />

        {/* Display selected items externally */}
        <div className="mt-4">
          <div className="text-sm text-gray-600 mb-2">
            <strong>Selected count:</strong> {selectedItems.length}
          </div>
          
          {selectedItems.length > 0 && (
            <div className="space-y-2">
              <strong className="text-sm">Selected Items:</strong>
              <div className="space-y-1">
                {selectedItems.map((item) => (
                  <div
                    key={item.value}
                    className="flex items-center justify-between bg-secondary px-3 py-2 rounded-md text-sm"
                  >
                    <div className="flex flex-col">
                      <span>{item.label}</span>
                      {item.description && (
                        <span className="text-xs text-muted-foreground">{item.description}</span>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        const newItems = selectedItems.filter((i) => i.value !== item.value);
                        setSelectedItems(newItems);
                      }}
                      className="ml-2 opacity-50 hover:opacity-100"
                      aria-label={`Remove ${item.label}`}
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  },
};
