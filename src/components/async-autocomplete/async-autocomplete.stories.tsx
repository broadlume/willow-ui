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
                onBlur: () => console.log('Input blurred')
              }
            }
          }}
          wrapClassName='w-80'
        />
      </div>
    );
  },
};
