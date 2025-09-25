import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { DragNDropFileInput } from './drag-n-drop-file-input';
import { IoIosFolderOpen } from 'react-icons/io';

const meta: Meta<typeof DragNDropFileInput> = {
  component: DragNDropFileInput,
  title: 'Components/DragNDrop File Input',
};

export default meta;
type Story = StoryObj<typeof DragNDropFileInput>;

/**
 * Single File Upload Example
 */
export const SingleFile: Story = {
  render: () => {
    function SingleFileWrapper() {
      const [file, setFile] = useState<File | null>(null);

      return (
        <DragNDropFileInput
          file={file}
          setFile={setFile}
          key="dnd-single-file-input"
          infoMessage="Only image files are supported"
          otherProps={{
            input: {
              accept: 'image/*',
            },
          }}
          button={
            <>
              <IoIosFolderOpen className="~h-4 ~w-4" />
              Browse
            </>
          }
          label="Drag & drop here or select a single file to upload."
          topIcon={''}
        />
      );
    }
    return <SingleFileWrapper />;
  },
};


/**
 * Multiple File Upload Example
 */
export const MultipleFiles: Story = {
  render: () => {

    function MultipleFilesWrapper() {
      const [files, setFiles] = useState<File[]>([]);

      return (
        <DragNDropFileInput
          file={files}
          setMultipleFiles={setFiles}
          key="dnd-multiple-file-input"
          infoMessage="You can upload one or more files"
          otherProps={{
            input: {
              accept: '*',
              multiple: true, // ✅ enable multiple
            },
          }}
          button={
            <>
              <IoIosFolderOpen className="~h-4 ~w-4" />
              Browse
            </>
          }
          label="Drag & drop files here or select multiple files."
          topIcon={''}
        />
      );
    }
    return <MultipleFilesWrapper />;
  },
};
