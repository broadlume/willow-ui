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
        otherProps={{
          input: {
            accept: '*',
          },
        }}
        button={
          <>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='~h-6 ~w-6'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M12 2l9 7-9 7-9-7 9-7z' />
              <path d='M12 22V8' />
            </svg>{' '}
            Browse Files
          </>
        }
        label='Drag and drop your files here or '
        topIcon={
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='~h-6 ~w-6'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M12 2l9 7-9 7-9-7 9-7z' />
            <path d='M12 22V8' />
          </svg>
        }
      />
    );
  },
};
