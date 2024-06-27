import { useRef, useState } from "react";

import { Button } from "@components/button";

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
    console.log("File(s) dropped");

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();

    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      [...ev.dataTransfer.items].forEach((item) => {
        // If dropped items aren't files, reject them
        if (item.kind === "file") {
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
    if (file && ["image/png", "image/jpeg"].includes(file?.type as string)) {
      setFile(file);
    }
  };

  const dragOverHandler = (ev: React.DragEvent<HTMLDivElement>) => {
    if (!onDrag) {
      setOnDrag(true);
    }
    console.log("File(s) in drop zone");

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  };

  const dragLeaveHandler = (ev: React.DragEvent<HTMLDivElement>) => {
    if (onDrag) {
      setOnDrag(false);
    }
    console.log("File(s) left drop zone");

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
      className={`~flex ~flex-col ~justify-center ~items-center ~w-3/4 ~mx-auto ~p-8 ~bg-[#FAFAFA] ~rounded ~border-dotted ~border-2 ${onDrag ? "~border-[#1FA384]" : "~border-[#E8E8E8]"}`}
    >
      <div className="~flex ~justify-center ~items-center">
        <p className="~text-sm ~text-[#A6A6A6] ~mr-2">Drag and Drop or</p>
        <Button
          className="~primary-type-button ~text-[0.7rem]"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            fileInput.current?.click();
          }}
        >
          Browse
        </Button>
        <input
          type="file"
          accept="image/png, image/jpeg"
          name="logo"
          hidden={true}
          onChange={(e) => onFileChange(e)}
          ref={fileInput}
        />
      </div>
      {file?.name ? <p className="~mt-2 ~text-center">{file?.name}</p> : ''}
    </div>
  );
};

export { DragNDropFileInput };
