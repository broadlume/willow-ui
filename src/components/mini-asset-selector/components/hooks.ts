import React, { DragEvent } from 'react';
import { AssetSelectorAction, ErrorTypes } from './types';

// Helper function to check if file is an image
export const isImageFile = (file: File): boolean => {
  // Ensure file object has necessary properties
  if (!file || typeof file !== 'object') {
    console.warn('🚨 Invalid file object detected');
    return false;
  }

  // First check MIME type if available
  if (file.type && typeof file.type === 'string') {
    return file.type.startsWith('image/');
  }

  // Fallback to file extension check
  if (file.name && typeof file.name === 'string') {
    const imageExtensions = [
      '.jpg',
      '.jpeg',
      '.png',
      '.gif',
      '.bmp',
      '.webp',
      '.svg',
    ];
    const fileName = file.name.toLowerCase();
    return imageExtensions.some((ext) => fileName.endsWith(ext));
  }

  // If we can't determine, assume it's not an image
  console.warn(
    '🚨 Cannot determine if file is an image - missing type and name properties'
  );
  return false;
};

// Custom hook for file validation and handling
export const useFileHandler = (
  maxSizeInBytes = 10 * 1024 * 1024, // 10MB default
  acceptedFileTypes: string[] = ['image/*'],
  onFileUpload?: (file: File) => void,
  handleValueChange?: (value: File | string | null) => void,
  preferDataUrl = false, // New parameter to indicate if we should prefer data URLs
  onError?: (error: {
    type: ErrorTypes;
    message: string;
  } | null) => void // Callback for error handling
) => {
  const validateFile = (file: File): string | null => {
    // Basic file object validation
    if (!file || typeof file !== 'object') {
      return 'Invalid file object';
    }

    // Check if file has required properties
    if (typeof file.size !== 'number') {
      return 'File size information unavailable';
    }

    if (!file.name || typeof file.name !== 'string') {
      return 'File name unavailable';
    }

    // Check file size
    if (file.size > maxSizeInBytes) {
      return `File size must be less than ${(
        maxSizeInBytes /
        (1024 * 1024)
      ).toFixed(1)}MB`;
    }

    // Check file type using helper function
    const isValidType = acceptedFileTypes.some((type) => {
      if (type === 'image/*') {
        return isImageFile(file);
      }
      return file.type === type;
    });

    if (!isValidType) {
      return `File type must be one of: ${acceptedFileTypes.join(', ')}`;
    }

    return null;
  };

  const processFile = (
    file: File,
    dispatch: React.Dispatch<AssetSelectorAction>
  ) => {
    const error = validateFile(file);
    if (error) {
      dispatch({ type: 'SET_INPUT_ERROR', payload: error });
      // Determine error type based on error message
      onError?.({
        type: ErrorTypes.INPUT_ERROR,
        message: error,
      });
      return false;
    }

    dispatch({ type: 'SET_LOADING', payload: true });
    dispatch({
      type: 'SET_IMAGE',
      payload: {
        image: '',
        name: file.name,
        size: file.size,
        isDataUrl: true, // Mark this as a data URL from dropped file
        file: file, // Include the original File object
      },
    });

    const reader = new FileReader();
    reader.onload = (ev) => {
      const dataUrl = ev.target?.result as string;
      dispatch({
        type: 'SET_IMAGE',
        payload: {
          image: dataUrl,
          name: file.name,
          size: file.size,
          isDataUrl: true, // Mark this as a data URL
          file: file, // Include the original File object
        },
      });
      dispatch({ type: 'SET_INPUT_VALUE', payload: '' });
      dispatch({ type: 'SET_LOADING', payload: false });

      // Now call the appropriate handlers after the file has been read
      if (onFileUpload) {
        onFileUpload(file);
      } else if (handleValueChange) {
        // For URL-only integrations (like Formik), pass the data URL instead of the File
        if (preferDataUrl) {
          handleValueChange(dataUrl);
        } else {
          handleValueChange(file);
        }
      }
    };

    reader.onerror = () => {
      dispatch({ type: 'SET_INPUT_ERROR', payload: 'Error reading file' });
      dispatch({ type: 'SET_LOADING', payload: false });
      // Notify parent of the error
      onError?.({
        type: ErrorTypes.INPUT_ERROR,
        message: 'Error reading file',
      });
    };

    reader.readAsDataURL(file);
    return true;
  };

  return { validateFile, processFile };
};

// Custom hook for drag and drop functionality
export const useDragAndDrop = (
  loading: boolean,
  disabled: boolean,
  processFile: (
    file: File,
    dispatch: React.Dispatch<AssetSelectorAction>
  ) => boolean,
  dispatch: React.Dispatch<AssetSelectorAction>,
  multiple?: boolean,
  onMultipleFiles?: (files: File[]) => void,
  onError?: (error: {
    type: ErrorTypes;
    message: string;
  } | null) => void
) => {
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    if (loading || disabled) return;
    e.preventDefault();
    e.stopPropagation();
    dispatch({
      type: 'SET_DRAG_STATE',
      payload: { active: false, error: false },
    });

    try {
      const files = e.dataTransfer.files;

      if (multiple && files && files.length > 0) {
        // Handle multiple files
        const fileArray = Array.from(files);
        if (onMultipleFiles) {
          onMultipleFiles(fileArray);
        }
        return;
      }

      // Handle single file (existing behavior)
      const file = files?.[0];

      if (file) {
        // Additional safety check for file object
        if (!file.name || typeof file.name !== 'string') {
          dispatch({
            type: 'SET_DRAG_STATE',
            payload: { active: false, error: true },
          });
          dispatch({
            type: 'SET_INPUT_ERROR',
            payload: 'Invalid file detected',
          });
          return;
        }

        if (isImageFile(file)) {
          processFile(file, dispatch);
        } else {
          dispatch({
            type: 'SET_DRAG_STATE',
            payload: { active: false, error: true },
          });
          dispatch({
            type: 'SET_INPUT_ERROR',
            payload: 'Please drop an image file',
          });
          onError?.({
            type: ErrorTypes.DRAG_ERROR,
            message: 'Please drop an image file',
          });
        }
      }
    } catch (error) {
      console.error('Error handling file drop:', error);
      dispatch({
        type: 'SET_DRAG_STATE',
        payload: { active: false, error: true },
      });
      dispatch({
        type: 'SET_INPUT_ERROR',
        payload: 'Error processing dropped file',
      });
      onError?.({
        type: ErrorTypes.DRAG_ERROR,
        message: 'Error processing dropped file',
      });
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    if (loading || disabled) return;
    e.preventDefault();
    e.stopPropagation();
    dispatch({
      type: 'SET_DRAG_STATE',
      payload: { active: true, error: false },
    });

    if (multiple) {
      // For multiple files, just show active state
      dispatch({
        type: 'SET_DRAG_STATE',
        payload: { active: true, error: false },
      });
    } else {
      // For single file, validate type
      const item = e.dataTransfer.items?.[0];
      if (item && item.type && !item.type.startsWith('image/')) {
        dispatch({
          type: 'SET_DRAG_STATE',
          payload: { active: true, error: true },
        });
      } else {
        dispatch({
          type: 'SET_DRAG_STATE',
          payload: { active: true, error: false },
        });
      }
    }
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    if (loading || disabled) return;
    e.preventDefault();
    e.stopPropagation();
    dispatch({
      type: 'SET_DRAG_STATE',
      payload: { active: false, error: false },
    });
  };

  return { handleDrop, handleDragOver, handleDragLeave };
};
