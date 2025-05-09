import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { DragNDropFileInput } from './drag-n-drop-file-input';

const meta: Meta = {
  component: DragNDropFileInput,
  title: 'Components/DragNDrop File Input',
};

export default meta;
type Story = StoryObj<typeof DragNDropFileInput>;

export const Demo: Story = {
  render: (_) => {
    const [file, setFile] = useState(new File([''], ''));
    return (
      <DragNDropFileInput
        file={file}
        setFile={setFile}
        key='dnd-file-input'
        infoMessage='Only Image files are supported'
      />
    );
  },
};
