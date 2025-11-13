import clsx from 'clsx';
import React, {
    forwardRef,
    KeyboardEvent,
    useEffect,
    useReducer,
} from 'react';

import {
    assetSelectorReducer,
    DragDropZone,
    ImagePreview,
    initialState,
    URLInput,
    urlSchema,
    useDragAndDrop,
    useFileHandler,
    getFileNameFromUrl,
    getImageSizeFromUrl,
} from './components';

export interface MiniAssetSelectorProps {
  /** The currently selected file object */
  selectedFile?: File | null;
  /** Callback when a file is selected */
  onSelectedFile?: (file: File | null) => void;
  /** The currently selected URL string */
  selectedURL?: string | null;
  /** Callback when a URL is selected */
  onSelectedURL?: (url: string | null) => void;
  /** Callback when file data is available (includes metadata for conversion) */
  onFileData?: (data: { dataUrl: string; filename: string; size: number } | null) => void;
  /** The name attribute for the input field */
  name?: string;
  /** Custom placeholder text */
  placeholder?: string;
  /** Whether the component is disabled */
  disabled?: boolean;
  /** Custom browse button text */
  browseButtonText?: string;
  /** Custom replace button text */
  replaceButtonText?: string;
  /** Callback when browse button is clicked - allows custom asset manager integration */
  onBrowseClick?: () => void;
  /** Custom file upload handler - if provided, will be called instead of default file handling */
  onFileUpload?: (file: File) => void;
  /** Maximum file size in bytes */
  maxFileSize?: number;
  /** Accepted file types */
  acceptedFileTypes?: string[];
  /** Custom class name for the wrapper */
  className?: string;
  /** Whether to show the browse button - defaults to true */
  showBrowseButton?: boolean;
  /** Custom browse button component - if provided, replaces the default button */
  customBrowseButton?: React.ReactNode;
  /** Whether to make the component full width - defaults to true */
  fullWidth?: boolean;
  /** Value for controlled component usage (React Hook Form compatibility) */
  value?: File | string | null;
  /** Change handler for controlled component usage (React Hook Form compatibility) */
  onChange?: (value: File | string | null) => void;
  /** Blur handler for form validation */
  onBlur?: () => void;
  /** Error state for form validation */
  error?: boolean;
  /** Error message for form validation */
  errorMessage?: string;
  /** Paste event handler for the URL input */
  onPaste?: (e: React.ClipboardEvent<HTMLInputElement>) => void;
}

/**
 * A versatile asset selector component that supports both file uploads and URL input.
 * Features drag & drop, preview, validation, and customizable asset management integration.
 * Now with React Hook Form integration for seamless form usage.
 */
export const MiniAssetSelector = forwardRef<HTMLDivElement, MiniAssetSelectorProps>(({
  selectedFile,
  onSelectedFile,
  selectedURL,
  onSelectedURL,
  onFileData,
  name = 'asset',
  placeholder = "Enter Image URL here or Drag & drop here 1200 x 630 pixels (minimum 600 x 315 pixels)",
  disabled = false,
  browseButtonText = "Browse",
  replaceButtonText = "Replace",
  onBrowseClick,
  onFileUpload,
  maxFileSize = 10 * 1024 * 1024, // 10MB default
  acceptedFileTypes = ['image/*'],
  className,
  showBrowseButton = true,
  customBrowseButton,
  fullWidth = true,
  // React Hook Form compatibility props
  value,
  onChange,
  onBlur,
  error = false,
  errorMessage,
  onPaste,
}, ref) => {
  const [state, dispatch] = useReducer(assetSelectorReducer, initialState);

  const {
    image,
    imageName,
    imageSize,
    inputValue,
    inputError,
    dragActive,
    loading,
    dragError,
    imageError,
    isDataUrl,
  } = state;

  // Helper function to handle value changes (React Hook Form compatibility)
  const handleValueChange = (newValue: File | string | null) => {
    if (onChange) {
      onChange(newValue);
    }
    
    // Also call the specific handlers for backward compatibility
    if (typeof newValue === 'string') {
      onSelectedURL?.(newValue);
      onSelectedFile?.(null);
      onFileData?.(null);
    } else if (newValue instanceof File) {
      // If we have a File but only URL callback is available, convert to data URL
      if (onSelectedURL && !onSelectedFile && image) {
        // If onFileData is available, provide metadata for conversion
        if (onFileData && imageName && imageSize) {
          onFileData({
            dataUrl: image,
            filename: imageName,
            size: imageSize
          });
        } else {
          onSelectedURL(image);
        }
      } else {
        onSelectedFile?.(newValue);
        onSelectedURL?.(null);
        onFileData?.(null);
      }
    } else {
      onSelectedFile?.(null);
      onSelectedURL?.(null);
      onFileData?.(null);
    }
  };

  // Custom hooks for better organization
  const { processFile } = useFileHandler(
    maxFileSize,
    acceptedFileTypes,
    onFileUpload,
    handleValueChange,
    !!onSelectedURL && !onSelectedFile // Prefer data URL if only URL callback is available
  );

  const { handleDrop, handleDragOver, handleDragLeave } = useDragAndDrop(
    loading,
    disabled,
    processFile,
    dispatch
  );

  // Enhanced useEffect to properly sync with external selectedURL changes and form value
  useEffect(() => {
    const currentValue = value !== undefined ? value : (selectedFile || selectedURL);
    
    if (currentValue instanceof File) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        dispatch({
          type: 'SET_IMAGE',
          payload: {
            image: ev.target?.result as string,
            name: currentValue.name,
            size: currentValue.size,
          },
        });
      };
      reader.readAsDataURL(currentValue);
    } else if (typeof currentValue === 'string' && currentValue) {
      // When selectedURL is provided externally (e.g., from form reset)
      dispatch({ type: 'SET_INPUT_VALUE', payload: currentValue });
      
      // Extract filename from URL for network images
      const getFileNameFromUrl = (url: string): string => {
        try {
          const urlPath = new URL(url).pathname;
          const fileName = urlPath.split('/').pop() || 'image';
          return fileName.includes('.') ? fileName : `${fileName}.jpg`;
        } catch {
          return 'image.jpg';
        }
      };
      
      dispatch({
        type: 'SET_IMAGE',
        payload: { 
          image: currentValue,
          name: getFileNameFromUrl(currentValue),
          size: undefined, // Network images don't have immediate size info
        },
      });
    } else {
      // When selectedURL is null or empty (e.g., from form reset)
      dispatch({ type: 'RESET_STATE' });
    }
  }, [selectedFile, selectedURL, value]);

  // Additional useEffect to handle when selectedURL becomes null/empty
  useEffect(() => {
    const currentValue = value !== undefined ? value : (selectedFile || selectedURL);
    if (!currentValue || currentValue === '') {
      dispatch({ type: 'RESET_STATE' });
    }
  }, [selectedURL, value, selectedFile]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file, dispatch);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    dispatch({ type: 'SET_INPUT_VALUE', payload: newValue });

    // If we had a data URL and user is typing, clear the image state
    if (isDataUrl && newValue !== imageName) {
      dispatch({ type: 'CLEAR_PREVIEW' });
    }

    // Immediately update the parent component
    handleValueChange(newValue);

    // Clear the preview when input is empty
    if (newValue.length === 0) {
      dispatch({ type: 'CLEAR_PREVIEW' });
    }
  };

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (loading || disabled) return;
    if (e.key === 'Enter') {
      e.preventDefault();
      if (inputValue.trim() !== '') {
        validateAndSetImage(inputValue.trim());
      }
    }
  };

  const validateAndSetImage = (value: string) => {
    const result = urlSchema.safeParse(value);
    if (result.success) {
      dispatch({ type: 'SET_LOADING', payload: true });
      
      // Extract filename from URL
      const fileName = getFileNameFromUrl(value);
      
      // First set the image immediately with available info
      dispatch({
        type: 'SET_IMAGE',
        payload: { 
          image: value,
          name: fileName,
          size: undefined, // Will be updated once fetched
        },
      });
      
      // Then try to fetch the file size
      getImageSizeFromUrl(value).then(size => {
        dispatch({
          type: 'SET_IMAGE',
          payload: { 
            image: value,
            name: fileName,
            size: size || undefined,
          },
        });
        dispatch({ type: 'SET_LOADING', payload: false });
        handleValueChange(value);
      });
    } else {
      dispatch({ type: 'SET_INPUT_ERROR', payload: 'Please enter a valid image URL.' });
    }
  };

  const handleRemoveImage = () => {
    // Clear all internal state
    dispatch({ type: 'RESET_STATE' });

    // Notify parent components
    handleValueChange(null);

    // Create a synthetic event to trigger form change handlers
    const inputElement = document.querySelector(
      `input[name="${name}"]`
    ) as HTMLInputElement;
    if (inputElement) {
      inputElement.value = '';
      const changeEvent = new Event('change', { bubbles: true });
      Object.defineProperty(changeEvent, 'target', {
        writable: false,
        value: inputElement,
      });
      inputElement.dispatchEvent(changeEvent);
    }
  };

  const handleImageError = () => {
    dispatch({ type: 'SET_IMAGE_ERROR', payload: true });
  };

  const handleBrowseClick = () => {
    if (onBrowseClick) {
      onBrowseClick();
    }
  };

  // Check if there's any image selected (either file or URL)
  const hasImage = image && !imageError;

  // Calculate display value - show filename for data URLs, actual URL for regular URLs
  const displayValue = isDataUrl && imageName ? imageName : inputValue;

  return (
    <DragDropZone
      dragActive={dragActive}
      dragError={dragError}
      loading={loading}
      disabled={disabled}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      <div
        ref={ref}
        className={clsx(
          'rounded-md inline-flex justify-start items-center gap-3 flex-col',
          {
            'border border-blue-500 bg-blue-50 p-3': dragActive && !dragError,
            'border border-red-500 bg-red-50 p-3': dragActive && dragError,
            'border border-surface-cta p-3': image,
            'opacity-50 pointer-events-none': disabled,
            'w-full': fullWidth,
            'border-destructive': error || errorMessage,
          },
          className
        )}
        onBlur={onBlur}
        data-testid="mini-asset-selector-wrapper"
      >
        <URLInput
          value={displayValue}
          placeholder={placeholder}
          disabled={disabled}
          loading={loading}
          fullWidth={fullWidth}
          showBrowseButton={showBrowseButton}
          name={name}
          error={error}
          errorMessage={errorMessage}
          inputError={inputError}
          browseButtonText={browseButtonText}
          replaceButtonText={replaceButtonText}
          customBrowseButton={customBrowseButton}
          acceptedFileTypes={acceptedFileTypes}
          hasImage={!!hasImage}
          onBrowseClick={handleBrowseClick}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          onFileChange={handleFileChange}
          onBlur={onBlur}
          onPaste={onPaste}
        />

        <ImagePreview
          image={image}
          imageName={imageName}
          imageSize={imageSize}
          imageError={imageError}
          fullWidth={fullWidth}
          disabled={disabled}
          onRemove={handleRemoveImage}
          onImageError={handleImageError}
        />
      </div>
    </DragDropZone>
  );
});

MiniAssetSelector.displayName = 'MiniAssetSelector';

export default MiniAssetSelector;