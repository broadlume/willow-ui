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
}) => {
  if (!image && !imageError) {
    return null;
  }

  return (
    <div className={clsx(
      'flex justify-between p-3 bg-surface-sec border rounded-md m-4',
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
          <span>
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