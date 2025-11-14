import React from 'react';
import { HiMiniTrash } from 'react-icons/hi2';
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
  onRemove: () => void;
  onImageError: () => void;
  onImageNameClick?: (imageData: { name: string | null; url: string | null; size: number | null; file: File | null }) => void;
  originalFile?: File | null;
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({
  image,
  imageName,
  imageSize,
  imageError,
  fullWidth = true,
  disabled = false,
  onRemove,
  onImageError,
  onImageNameClick,
  originalFile,
}) => {
  const handleImageNameClick = () => {
    if (onImageNameClick && !disabled && !imageError) {
      onImageNameClick({
        name: imageName,
        url: image,
        size: imageSize,
        file: originalFile || null
      });
    }
  };

  if (!image && !imageError) {
    return null;
  }

  return (
    <div className={clsx(
      'flex justify-between p-3 bg-surface-sec border rounded-md m-4 items-center',
      {
        'w-full': fullWidth,
      }
    )}>
      <div className="flex items-center gap-2">
        {imageError ? (
          <div className="flex items-center justify-center w-24 h-24 rounded bg-surface-sec">
            <span className="text-red-500 text-sm font-medium text-center px-2">
              Invalid Image URL
            </span>
          </div>
        ) : (
          <img
            src={image || ''}
            alt="Preview"
            className="max-w-24 max-h-24 rounded"
            onError={onImageError}
          />
        )}
        {imageName && !imageError && (
          <span 
            className={clsx(
              'cursor-pointer select-none transition-colors duration-200 hover:text-text-cta',
              {
                'hover:text-primary-600 hover:underline': onImageNameClick && !disabled,
                'text-gray-500': disabled,
              }
            )}
            onClick={handleImageNameClick}
            title={onImageNameClick && !disabled ? `Click to open: ${imageName}` : imageName}
            role={onImageNameClick && !disabled ? 'button' : undefined}
            tabIndex={onImageNameClick && !disabled ? 0 : undefined}
            onKeyDown={(e) => {
              if ((e.key === 'Enter' || e.key === ' ') && onImageNameClick && !disabled) {
                e.preventDefault();
                handleImageNameClick();
              }
            }}
          >
            {imageName.length > 20
              ? `${imageName.substring(0, 20)}...`
              : imageName}
          </span>
        )}
      </div>

      {imageSize && !imageError && (
        <span>{formatFileSize(imageSize)}</span>
      )}
      
      <Button
        type="button"
        variant="link"
        className=""
        onClick={onRemove}
        aria-label="Remove image"
        disabled={disabled}
      >
        <HiMiniTrash size={20} className="text-text-destructive" />
      </Button>
    </div>
  );
};