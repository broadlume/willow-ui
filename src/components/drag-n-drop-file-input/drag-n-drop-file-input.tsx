import { useRef, useState } from 'react';

import { Button } from '@components/button';

interface DragNDropFileInputProps {
  file: File;
  setFile: (updater: File) => void;
}

const DragNDropFileInput: React.FC<DragNDropFileInputProps> = ({
  file,
  setFile,
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

  const validateFile = (file?: File) => {
    if (!file) {
      return false;
    }
    const type = file.type.split('/')[0];
    const validArray = otherProps?.input?.accept?.split(',') || [];
    console.log('File type:', type, validArray);
    return (
      validArray.includes(`${type}/*`) ||
      validArray.includes(`*`) ||
      validArray.includes(file?.type as string)
    );
  };

  const setDroppedFile = (file: File | undefined | null) => {
    if (file && validateFile(file)) {
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
    if (validateFile(e?.target?.files?.[0])) {
      console.log('File selected:', e.target.files?.[0]);
      setFile(e.target.files?.[0]);
    }
  };

  return (
    <div
      onDrop={(event) => dropHandler(event)}
      onDragOver={(event) => dragOverHandler(event)}
      onDragLeave={(event) => dragLeaveHandler(event)}
      className={`~mx-auto ~flex ~w-3/4 ~flex-col ~items-center ~justify-center ~rounded ~border-2 ~border-dotted ~bg-[#FAFAFA] ~p-8 ${
        onDrag ? '~border-[#1FA384]' : '~border-[#E8E8E8]'
      }`}
    >
      <div className='~flex ~items-center ~justify-center'>
        <p className='~mr-2 ~text-sm ~text-[#A6A6A6]'>Drag and Drop or</p>
        <Button
          className='~primary-type-button ~text-[0.7rem]'
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            fileInput.current?.click();
          }}
        >
          Browse
        </Button>
        <input
          type='file'
          accept='image/png, image/jpeg'
          name='logo'
          hidden={true}
          onChange={(e) => onFileChange(e)}
          ref={fileInput}
        />
      </div>
      {file?.name ? <p className='~mt-2 ~text-center'>{file?.name}</p> : ''}
    </div>
  );
};

export { DragNDropFileInput };
