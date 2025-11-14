import React, { DragEvent } from 'react';
import clsx from 'clsx';

export interface DragDropZoneProps {
  dragActive: boolean;
  dragError: boolean;
  loading: boolean;
  disabled: boolean;
  children: React.ReactNode;
  onDrop: (e: DragEvent<HTMLDivElement>) => void;
  onDragOver: (e: DragEvent<HTMLDivElement>) => void;
  onDragLeave: (e: DragEvent<HTMLDivElement>) => void;
}

export const DragDropZone: React.FC<DragDropZoneProps> = ({
  dragActive,
  dragError,
  loading,
  disabled,
  children,
  onDrop,
  onDragOver,
  onDragLeave,
}) => {
  return (
    <div 
      className="relative"
      onDrop={loading || disabled ? undefined : onDrop}
      onDragOver={loading || disabled ? undefined : onDragOver}
      onDragLeave={loading || disabled ? undefined : onDragLeave}
    >
      {children}
      
      {dragActive && !loading && !disabled && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none rounded z-10">
          <span
            className={clsx('font-semibold', {
              'text-blue-600': !dragError,
              'text-red-600': dragError,
            })}
          >
            {dragError ? 'Choose Image File' : 'Drop image here'}
          </span>
        </div>
      )}

      {loading && (
        <div className="absolute inset-0 bg-white/70 flex items-center justify-center rounded z-10">
          <span className="text-blue-600 font-semibold">Uploading...</span>
        </div>
      )}
    </div>
  );
};