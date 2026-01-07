import React, { useRef } from 'react';
import { HiFolderOpen } from 'react-icons/hi2';
import clsx from 'clsx';
import { Button } from '../../button';
import { Input } from '../../input/input';

export interface BrowseButtonProps {
  browseButtonText?: string;
  replaceButtonText?: string;
  customBrowseButton?: React.ReactNode;
  acceptedFileTypes?: string[];
  disabled?: boolean;
  loading?: boolean;
  hasImage?: boolean;
  name?: string;
  multiple?: boolean;
  triggerFileInput?: boolean;
  onBrowseClick?: () => void;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const BrowseButton: React.FC<BrowseButtonProps> = ({
  browseButtonText = 'Browse',
  replaceButtonText = 'Replace',
  customBrowseButton,
  acceptedFileTypes = ['image/*'],
  disabled = false,
  loading = false,
  hasImage = false,
  name = 'asset',
  multiple = true,
  triggerFileInput = false,
  onBrowseClick,
  onFileChange,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleBrowseClick = () => {
    if (multiple) {  // Multiple file mode 
      fileInputRef.current?.click();
    }
    else if (onBrowseClick) {
      // If triggerFileInput is true, open file picker first before calling custom handler
      // This allows BOTH file selection AND custom logic (e.g., analytics, asset manager)
      if (triggerFileInput) {
        fileInputRef.current?.click();
      }
      // Execute custom handler (e.g., open asset manager modal, logging, etc.)
      onBrowseClick();
    }
    else {
      fileInputRef.current?.click();  // Single file mode
    }
  };

  if (customBrowseButton) {
    return (
      <div onClick={handleBrowseClick}>
        {customBrowseButton}
        <Input
          ref={fileInputRef}
          type='file'
          accept={acceptedFileTypes.join(',')}
          className='hidden'
          data-testid='mini-asset-selector-file-input'
          onChange={onFileChange}
          disabled={loading || disabled}
          multiple={multiple}
        />
      </div>
    );
  }

  return (
    <div
      className={clsx(
        'flex cursor-pointer items-center text-base text-text-opt',
        {
          'opacity-50 pointer-events-none': loading || disabled,
        }
      )}
      onMouseDown={(e) => e.preventDefault()}
      title='Upload Image'
    >
      <Button
        type='button'
        className='bg-surface-cta font-semibold gap-2 text-white py-0 h-7'
        onClick={handleBrowseClick}
        disabled={loading || disabled}
      >
        <HiFolderOpen size={18} />
        {hasImage ? replaceButtonText : browseButtonText}
      </Button>
      <Input
        ref={fileInputRef}
        type='file'
        accept={acceptedFileTypes.join(',')}
        className='hidden'
        data-testid='mini-asset-selector-file-input'
        onChange={onFileChange}
        disabled={loading || disabled}
        multiple={multiple}
      />
    </div>
  );
};
