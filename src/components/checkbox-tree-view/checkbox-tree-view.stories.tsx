import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { TreeView } from './checkbox-tree-view';

const meta: Meta = {
  component: TreeView,
  title: 'Components/Checkbox Tree View',
};

export default meta;
type Story = StoryObj<typeof TreeView>;

export const Demo: Story = {
  render: (_) => {
    const [treeData, setTreeData] = useState([
      {
        id: '1',
        name: 'Parent 1',
        value: 'parent1',
        children: [
          { id: '2', name: 'Child 1.1', value: 'child1.1' },
          { id: '3', name: 'Child 1.2', value: 'child1.2' },
        ],
      },
      {
        id: '4',
        name: 'Parent 2',
        value: 'parent2',
        children: [
          {
            id: '5',
            name: 'Child 2.1',
            value: 'child2.1',
            children: [
              { id: '6', name: 'Grandchild 2.1.1', value: 'grandchild2.1.1' },
            ],
          },
        ],
      },
    ]);
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    const handleTreeChange = (selectedValues: string[]) => {
      setSelectedValues(selectedValues);
      console.log('Selected Values:', selectedValues);
    };

    return (
      <div>
        <TreeView data={treeData} onChange={handleTreeChange} />
        <pre>
          <p className='font-bold'>Selected Values:</p>
          {selectedValues.map((val) => (
            <p>{val}</p>
          ))}
        </pre>
      </div>
    );
  },
};
