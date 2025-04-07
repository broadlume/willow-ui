import { useRef, useState } from 'react';

import { Button } from '@components/button';
import clsx from 'clsx';

interface DragNDropFileInputProps {
  file: File;
  setFile: (updater: File) => void;
  infoMessage?: string;
  classNames?: {
    root?: string;
    label?: string;
    button?: string;
    wrapper?: string;
  };
  otherProps?: {
    input?: React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >;
  };
}
/**
 * DragNDropFileInput is a React functional component that provides a drag-and-drop
 * interface for uploading image files. It supports both drag-and-drop and manual
 * file selection via a button click.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {File} props.file - The currently selected file.
 * @param {function} props.setFile - A function to update the selected file.
 * @param {string} [props.infoMessage] - Optional message to display below the input.
 * @param {Object} [props.classNames] - Optional object to customize CSS class names for different parts of the component.
 * @param {string} [props.classNames.root] - CSS class for the root element.
 * @param {string} [props.classNames.label] - CSS class for the label element.
 * @param {string} [props.classNames.button] - CSS class for the button element.
 * @param {string} [props.classNames.wrapper] - CSS class for the wrapper element.
 * @param {Object} [props.otherProps] - Additional properties for the input element.
 * @param {Object} [props.otherProps.input] - Detailed HTML properties for the input element.
 * @param {string} [props.otherProps.input.accept] - Accepted file types for the input.
 *
 * @returns {JSX.Element} The rendered component.
 *
 * @example
 * <DragNDropFileInput
 *   file={selectedFile}
 *   setFile={setSelectedFile}
 *   infoMessage="Please upload an image file."
 *   classNames={{ root: 'custom-root', label: 'custom-label' }}
 * />
 */
const DragNDropFileInput: React.FC<DragNDropFileInputProps> = ({
  file,
  setFile,
  infoMessage,
  otherProps = {
    input: {
      accept: 'image/png, image/jpeg',
    },
  },
  classNames = { root: '', label: '', button: '', wrapper: '' },
}) => {
  const fileInput = useRef<HTMLInputElement>(null);
  const [onDrag, setOnDrag] = useState(false);

  const dropHandler = (ev: React.DragEvent<HTMLDivElement>) => {
    setOnDrag(false);
    console.log('File(s) dropped');

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();

    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      [...ev.dataTransfer.items].forEach((item) => {
        // If dropped items aren't files, reject them
        if (item.kind === 'file') {
          setDroppedFile(item.getAsFile());
        }
      });
    } else {
      // Use DataTransfer interface to access the file(s)
      [...ev.dataTransfer.files].forEach((file) => {
        setDroppedFile(file);
      });
    }
  };

  const setDroppedFile = (file: File | undefined | null) => {
    if (file && [otherProps?.input?.accept].includes(file?.type as string)) {
      setFile(file);
    }
  };

  const dragOverHandler = (ev: React.DragEvent<HTMLDivElement>) => {
    if (!onDrag) {
      setOnDrag(true);
    }
    console.log('File(s) in drop zone');

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  };

  const dragLeaveHandler = (ev: React.DragEvent<HTMLDivElement>) => {
    if (onDrag) {
      setOnDrag(false);
    }
    console.log('File(s) left drop zone');

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div
      onDrop={(event) => dropHandler(event)}
      onDragOver={(event) => dragOverHandler(event)}
      onDragLeave={(event) => dragLeaveHandler(event)}
      className={clsx(
        `~mx-auto ~flex ~w-3/4 ~flex-col ~items-center ~justify-center ~rounded ~border-2 ~border-dotted ~bg-[#FAFAFA] ~p-8 ${
          onDrag ? '~border-[#1FA384]' : '~border-[#E8E8E8]'
        } `,
        classNames.root
      )}
    >
      <div
        className={clsx(
          '~flex ~items-center ~justify-center',
          classNames.wrapper
        )}
      >
        <p className={clsx('~mr-2 ~text-sm ~text-[#A6A6A6]', classNames.label)}>
          Drag and Drop or
        </p>
        <Button
          className={clsx(
            '~primary-type-button ~text-[0.7rem]',
            'custom-primary-button custom-primary-font',
            classNames.button
          )}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            fileInput.current?.click();
          }}
        >
          Browse
        </Button>
        <input
          {...otherProps.input}
          type='file'
          name='logo'
          hidden={true}
          onChange={(e) => onFileChange(e)}
          ref={fileInput}
        />
      </div>
      {infoMessage ? <p className='~mt-2 ~text-center'>{infoMessage}</p> : ''}
      {file?.name ? <p className='~mt-2 ~text-center'>{file?.name}</p> : ''}
    </div>
  );
};

export { DragNDropFileInput };
