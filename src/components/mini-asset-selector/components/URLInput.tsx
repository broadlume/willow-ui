import React, { KeyboardEvent } from 'react';
import clsx from 'clsx';
import { InputWithSlots } from '../../input/InputWithSlots';
import { BrowseButton } from './BrowseButton';

export interface URLInputProps {
  value: string;
  placeholder?: string;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  showBrowseButton?: boolean;
  name?: string;
  error?: boolean;
  errorMessage?: string;
  inputError?: string | null;
  // Browse button props
  browseButtonText?: string;
  replaceButtonText?: string;
  customBrowseButton?: React.ReactNode;
  acceptedFileTypes?: string[];
  hasImage?: boolean;
  multiple?: boolean;
  selectedFilesCount?: number;
  onBrowseClick?: () => void;
  // Event handlers
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onPaste?: (e: React.ClipboardEvent<HTMLInputElement>) => void;
  triggerFileInput?: boolean;
}

export const URLInput: React.FC<URLInputProps> = ({
  value,
  placeholder = 'Enter Image URL here or Drag & drop here 1200 x 630 pixels (minimum 600 x 315 pixels)',
  disabled = false,
  loading = false,
  fullWidth = true,
  showBrowseButton = true,
  name = 'asset',
  error = false,
  errorMessage,
  inputError,
  // Browse button props
  browseButtonText,
  replaceButtonText,
  customBrowseButton,
  acceptedFileTypes,
  hasImage = false,
  multiple = false,
  selectedFilesCount = 0,
  onBrowseClick,
  // Event handlers
  onChange,
  onKeyDown,
  onFileChange,
  onBlur,
  onPaste,
  triggerFileInput
}) => {
  return (
    <>
      {multiple ? (
        // When multiple is true, show same design as URL input but read-only with file count
        <InputWithSlots
          name={name}
          className={clsx(
            'h-10 placeholder:text-xs placeholder:!text-icon-pri focus-visible:outline-none items-center',
            {
              'w-full': fullWidth,
            }
          )}
          value={
            selectedFilesCount > 0
              ? `${selectedFilesCount} file${
                  selectedFilesCount !== 1 ? 's' : ''
                } selected`
              : ''
          }
          disabled={loading || disabled}
          readOnly
          postfixSlot={
            showBrowseButton ? (
              <BrowseButton
                browseButtonText={browseButtonText}
                replaceButtonText={replaceButtonText}
                customBrowseButton={customBrowseButton}
                acceptedFileTypes={acceptedFileTypes}
                disabled={disabled}
                loading={loading}
                hasImage={false}
                name={name}
                multiple={multiple}
                onBrowseClick={onBrowseClick}
                onFileChange={onFileChange}
              />
            ) : undefined
          }
          placeholder={placeholder}
          classes={{
            inputClass: clsx(
              'h-10 placeholder:text-sm focus-visible:outline-none cursor-default',
              {
                'w-full': fullWidth,
              }
            ),
            textFieldWrapClass: fullWidth ? 'w-full' : undefined,
          }}
          wrapperProps={{
            className: clsx('items-center !border-border-cta', {
              'border-destructive': error || errorMessage || inputError,
            }),
          }}
        />
      ) : (
        <InputWithSlots
          name={name}
          className={clsx(
            'h-10 placeholder:text-xs placeholder:!text-icon-pri focus-visible:outline-none items-center',
            {
              'w-full': fullWidth,
            }
          )}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onBlur={onBlur}
          onPaste={onPaste}
          disabled={loading || disabled}
          postfixSlot={
            showBrowseButton ? (
              <BrowseButton
                browseButtonText={browseButtonText}
                replaceButtonText={replaceButtonText}
                customBrowseButton={customBrowseButton}
                acceptedFileTypes={acceptedFileTypes}
                disabled={disabled}
                loading={loading}
                hasImage={hasImage}
                name={name}
                multiple={multiple}
                onBrowseClick={onBrowseClick}
                onFileChange={onFileChange}
                triggerFileInput={triggerFileInput}
              />
            ) : undefined
          }
          placeholder={placeholder}
          classes={{
            inputClass: clsx(
              'h-10 placeholder:text-sm focus-visible:outline-none',
              {
                'w-full': fullWidth,
              }
            ),
            textFieldWrapClass: fullWidth ? 'w-full' : undefined,
          }}
          wrapperProps={{
            className: clsx('items-center !border-border-cta', {
              'border-destructive': error || errorMessage || inputError,
            }),
          }}
        />
      )}
      {(inputError || errorMessage) && (
        <div className='text-text-destructive text-sm mt-1'>
          {errorMessage || inputError}
        </div>
      )}
    </>
  );
};
