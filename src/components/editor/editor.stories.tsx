import { Meta, StoryObj } from '@storybook/react';

import { Editor } from './editor';

const meta: Meta = {
  component: Editor,
  title: 'Components/Editor',
};

export default meta;
type Story = StoryObj<typeof Editor>;

export const Demo: Story = {
  render: (_) => {
    return <Editor
      dropdownItems={[
        { label: 'Ferrari', value: 'option1' },
        { label: 'Ghini', value: 'option2' },
        { label: 'Chevy', value: 'option3' },
        { label: 'Fiat', value: 'option4' },
      ]}
      dropdownPlaceholder="Select a car"
    />;
  },
};
