import React from 'react';
import { HiMiniTrash } from 'react-icons/hi2';
import { FaEdit } from 'react-icons/fa';
import clsx from 'clsx';
import { Button } from '../../button';
import { formatFileSize } from './utils';

export interface ImagePreviewProps {
  image: string | null;
  imageName: string | null;
  imageSize: number | null;
  imageError: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  disableImageNameClick?: boolean;
  onRemove: () => void;
  onImageError: () => void;
  onImageNameClick?: (imageData: {
    name: string | null;
    url: string | null;
    size: number | null;
    file: File | null;
  }) => void;
  originalFile?: File | null;
  isShowEditIcon?: boolean;
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({
  image,
  imageName,
  imageSize,
  imageError,
  fullWidth = true,
  disabled = false,
  disableImageNameClick = false,
  onRemove,
  onImageError,
  onImageNameClick,
  originalFile,
  isShowEditIcon = false,
}) => {
  const handleImageNameClick = () => {
    if (
      onImageNameClick &&
      !disableImageNameClick &&
      !disabled &&
      !imageError
    ) {
      onImageNameClick({
        name: imageName,
        url: image,
        size: imageSize,
        file: originalFile || null,
      });
    }
  };

  if (!image && !imageError) {
    return null;
  }

  return (
    <div
      className={clsx(
        'flex justify-between p-3 bg-surface-sec border rounded-md m-4 items-center',
        {
          'w-full': fullWidth,
        }
      )}
    >
      <div className='flex items-center gap-2'>
        {imageError ? (
          <div className='flex items-center justify-center w-24 h-24 rounded bg-surface-sec'>
            <span className='text-red-500 text-sm font-medium text-center px-2'>
              Invalid Image URL
            </span>
          </div>
        ) : (
          <img
            src={image || ''}
            alt='Preview'
            className='max-w-24 max-h-24 rounded'
            onError={onImageError}
          />
        )}
        {imageName && !imageError && (
          <span
            className={clsx(
              'flex items-center gap-2 select-none transition-colors duration-200',
              {
                'cursor-pointer hover:text-primary-600 hover:underline':
                  onImageNameClick && !disableImageNameClick && !disabled,
                'text-gray-500 cursor-not-allowed':
                  disableImageNameClick || disabled,
              }
            )}
            onClick={handleImageNameClick}
            title={
              onImageNameClick && !disableImageNameClick && !disabled
                ? `Click to open: ${imageName}`
                : imageName
            }
            role={
              onImageNameClick && !disableImageNameClick && !disabled
                ? 'button'
                : undefined
            }
            tabIndex={
              onImageNameClick && !disableImageNameClick && !disabled
                ? 0
                : undefined
            }
            onKeyDown={(e) => {
              if (
                (e.key === 'Enter' || e.key === ' ') &&
                onImageNameClick &&
                !disableImageNameClick &&
                !disabled
              ) {
                e.preventDefault();
                handleImageNameClick();
              }
            }}
          >
            {imageName.length > 20
              ? `${imageName.substring(0, 20)}...`
              : imageName}

            {isShowEditIcon && (
              <FaEdit
                className={clsx('min-w-3.5 min-h-3.5 w-3.5 h-3.5 mt-1', {
                  'cursor-not-allowed text-gray-500':
                    disableImageNameClick || disabled,
                  'text-text-cta': !disableImageNameClick && !disabled,
                })}
              />
            )}
          </span>
        )}
      </div>

      {imageSize && !imageError && <span>{formatFileSize(imageSize)}</span>}

      <Button
        type='button'
        variant='link'
        className=''
        onClick={onRemove}
        aria-label='Remove image'
        disabled={disabled}
      >
        <HiMiniTrash size={20} className='text-text-destructive' />
      </Button>
    </div>
  );
};
