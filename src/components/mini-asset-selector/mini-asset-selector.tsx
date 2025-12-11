import clsx from 'clsx';
import React, {
  forwardRef,
  KeyboardEvent,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { HiMiniTrash } from 'react-icons/hi2';

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
  onFileData?: (
    data: { dataUrl: string; filename: string; size: number } | null
  ) => void;
  /** The name attribute for the input field */
  name?: string;
  /** Custom placeholder text */
  placeholder?: string;
  /** Custom placeholder for multiple file mode */
  multiplePlaceholder?: string;
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
  /** Whether to allow multiple file selection - defaults to false. When true, URL input is hidden */
  multiple?: boolean;
  /** Callback when multiple files are selected (only used when multiple=true) */
  onSelectedFiles?: (files: File[]) => void;
  /** Existing/uploaded images to display (only used when multiple=true) */
  existingImages?: Array<{
    id: string;
    imageUrl: string;
    originalFile: string;
  }>;
  /** Selected files when multiple=true (controlled usage) */
  selectedFiles?: File[];
  /**
   * File previews for selected files when multiple=true (controlled usage).
   * If not provided, the component will manage previews internally.
   */
  filePreviews?: { file: File; preview: string }[];
  /** Callback when file previews change (only used when multiple=true) */
  onFilePreviewsChange?: (previews: { file: File; preview: string }[]) => void;
  /** Callback when an existing image is removed */
  onRemoveExistingImage?: (id: string) => void;
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
  /** Callback when the image name/preview is clicked - passes image data */
  onImageNameClick?: (imageData: {
    name: string | null;
    url: string | null;
    size: number | null;
    file: File | null;
  }) => void;
  triggerFileInput?: boolean;
  isShowEditIcon?: boolean;
  /** Whether to disable clicking on the image name - independent from the disabled prop */
  disableImageNameClick?: boolean;
}

/**
 * A versatile asset selector component that supports both file uploads and URL input.
 * Features drag & drop, preview, validation, and customizable asset management integration.
 * Now with React Hook Form integration for seamless form usage.
 */
export const MiniAssetSelector = forwardRef<
  HTMLDivElement,
  MiniAssetSelectorProps
>(
  (
    {
      selectedFile,
      onSelectedFile,
      selectedURL,
      onSelectedURL,
      onFileData,
      name = 'asset',
      placeholder = 'Enter Image URL here or Drag & drop here 1200 x 630 pixels (minimum 600 x 315 pixels)',
      multiplePlaceholder = 'Drag & drop files here or click Browse',
      disabled = false,
      browseButtonText = 'Browse',
      replaceButtonText = 'Replace',
      onBrowseClick,
      onFileUpload,
      maxFileSize = 10 * 1024 * 1024, // 10MB default
      acceptedFileTypes = ['image/*'],
      className,
      showBrowseButton = true,
      customBrowseButton,
      fullWidth = true,
      multiple = false,
      onSelectedFiles,
      existingImages = [],
      selectedFiles: controlledSelectedFiles,
      filePreviews: controlledFilePreviews,
      onFilePreviewsChange,
      onRemoveExistingImage,
      // React Hook Form compatibility props
      value,
      onChange,
      onBlur,
      error = false,
      errorMessage,
      onPaste,
      onImageNameClick,
      triggerFileInput,
      isShowEditIcon = false,
      disableImageNameClick = false,
    },
    ref
  ) => {
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
      originalFile,
    } = state;

    // State for multiple files (supports controlled and uncontrolled usage)
    const [uncontrolledSelectedFiles, setUncontrolledSelectedFiles] = useState<
      File[]
    >([]);
    const [uncontrolledFilePreviews, setUncontrolledFilePreviews] = useState<
      { file: File; preview: string }[]
    >([]);

    const isSelectedFilesControlled = Array.isArray(controlledSelectedFiles);
    const isFilePreviewsControlled = Array.isArray(controlledFilePreviews);

    const selectedFiles = isSelectedFilesControlled
      ? controlledSelectedFiles
      : uncontrolledSelectedFiles;

    const filePreviews = isFilePreviewsControlled
      ? controlledFilePreviews
      : uncontrolledFilePreviews;

    const updateSelectedFiles = (files: File[]) => {
      if (!isSelectedFilesControlled) {
        setUncontrolledSelectedFiles(files);
      }
      onSelectedFiles?.(files);
    };

    const updateFilePreviews = (
      previews: { file: File; preview: string }[]
    ) => {
      if (!isFilePreviewsControlled) {
        setUncontrolledFilePreviews(previews);
      }
      onFilePreviewsChange?.(previews);
    };

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
              size: imageSize,
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

    const handleMultipleFilesDrop = (files: File[]) => {
      // Append dropped files to existing files
      const updatedFiles = [...selectedFiles, ...files];
      updateSelectedFiles(updatedFiles);

      // Generate previews for new image files
      const newPreviews: { file: File; preview: string }[] = [];
      files.forEach((file) => {
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (ev) => {
            const preview = ev.target?.result as string;
            newPreviews.push({ file, preview });
            if (
              newPreviews.length ===
              files.filter((f) => f.type.startsWith('image/')).length
            ) {
              updateFilePreviews([...filePreviews, ...newPreviews]);
            }
          };
          reader.readAsDataURL(file);
        }
      });

      if (onSelectedFiles) {
        onSelectedFiles(updatedFiles);
      }
    };

    const { handleDrop, handleDragOver, handleDragLeave } = useDragAndDrop(
      loading,
      disabled,
      processFile,
      dispatch,
      multiple,
      handleMultipleFilesDrop
    );

    // Enhanced useEffect to properly sync with external selectedURL changes and form value
    useEffect(() => {
      const currentValue =
        value !== undefined ? value : selectedFile || selectedURL;

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
      const currentValue =
        value !== undefined ? value : selectedFile || selectedURL;
      if (!currentValue || currentValue === '') {
        dispatch({ type: 'RESET_STATE' });
      }
    }, [selectedURL, value, selectedFile]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (multiple) {
        // Handle multiple files - add to existing files instead of replacing
        const files = e.target.files;
        if (files && files.length > 0) {
          const newFiles = Array.from(files);
          // Append new files to existing files
          const updatedFiles = [...selectedFiles, ...newFiles];
          updateSelectedFiles(updatedFiles);

          // Generate previews for new image files
          const newPreviews: { file: File; preview: string }[] = [];
          newFiles.forEach((file) => {
            if (file.type.startsWith('image/')) {
              const reader = new FileReader();
              reader.onload = (ev) => {
                const preview = ev.target?.result as string;
                newPreviews.push({ file, preview });
                if (
                  newPreviews.length ===
                  newFiles.filter((f) => f.type.startsWith('image/')).length
                ) {
                  updateFilePreviews([...filePreviews, ...newPreviews]);
                }
              };
              reader.readAsDataURL(file);
            }
          });

          if (onSelectedFiles) {
            onSelectedFiles(updatedFiles);
          }
          // Clear the input to allow selecting the same files again
          e.target.value = '';
        }
      } else {
        // Handle single file (existing behavior)
        const file = e.target.files?.[0];
        if (file) {
          processFile(file, dispatch);
        }
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
        getImageSizeFromUrl(value).then((size) => {
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
        dispatch({
          type: 'SET_INPUT_ERROR',
          payload: 'Please enter a valid image URL.',
        });
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

    const handleRemoveFile = (fileToRemove: File) => {
      const updatedFiles = selectedFiles.filter((f) => f !== fileToRemove);
      updateSelectedFiles(updatedFiles);
      updateFilePreviews(filePreviews.filter((p) => p.file !== fileToRemove));
      if (onSelectedFiles) {
        onSelectedFiles(updatedFiles);
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
              'border border-blue-500 p-3':
                multiple &&
                (selectedFiles.length > 0 || existingImages.length > 0),
              'border border-surface-cta p-3': !multiple && image,
              'opacity-50 pointer-events-none': disabled,
              'w-full': fullWidth,
              'border-destructive': error || errorMessage,
            },
            className
          )}
          onBlur={onBlur}
          data-testid='mini-asset-selector-wrapper'
        >
          {multiple ? (
            <div className='w-full space-y-3'>
              <URLInput
                value={displayValue}
                placeholder={multiplePlaceholder}
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
                hasImage={false}
                multiple={multiple}
                selectedFilesCount={selectedFiles.length}
                onBrowseClick={handleBrowseClick}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                onFileChange={handleFileChange}
                onBlur={onBlur}
                onPaste={onPaste}
              />

              {(existingImages.length > 0 || selectedFiles.length > 0) && (
                <div className='w-full space-y-2 max-h-[500px] overflow-y-auto'>
                  {[
                    ...selectedFiles.map((file, index) => ({
                      type: 'new' as const,
                      data: file,
                      index,
                    })),
                    ...existingImages.map((image) => ({
                      type: 'existing' as const,
                      data: image,
                    })),
                  ].map((item) => {
                    if (item.type === 'existing') {
                      const image = item.data as (typeof existingImages)[0];
                      return (
                        <div
                          key={image.id}
                          className={clsx(
                            'flex justify-between p-2 bg-surface-sec border rounded-md items-center',
                            {
                              'w-full': fullWidth,
                            }
                          )}
                        >
                          <div className='flex items-center gap-6'>
                            <img
                              src={image.imageUrl}
                              alt={image.originalFile}
                              className='w-20 h-[50px] rounded object-cover'
                            />
                            <div className='flex flex-col'>
                              <span className='text-sm font-medium'>
                                {image.originalFile.length > 30
                                  ? `${image.originalFile.substring(0, 30)}...`
                                  : image.originalFile}
                              </span>
                            </div>
                          </div>

                          <div className='flex items-center gap-2'>
                            {/* Size info not available for existing images */}
                            <span className='text-xs text-blue-600'>
                              Uploaded
                            </span>

                            {onRemoveExistingImage && (
                              <button
                                type='button'
                                onClick={() => onRemoveExistingImage(image.id)}
                                disabled={disabled}
                                className='p-2 hover:bg-surface-ter rounded transition-colors'
                                title='Remove image'
                              >
                                <HiMiniTrash
                                  className='text-red-500'
                                  size={18}
                                />
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    } else {
                      const file = item.data as File;
                      const index = item.index;
                      const preview = filePreviews.find((p) => p.file === file);
                      return (
                        <div
                          key={`${file.name}-${index}`}
                          className={clsx(
                            'flex justify-between p-2 bg-surface-sec border rounded-md items-center',
                            {
                              'w-full': fullWidth,
                            }
                          )}
                        >
                          <div className='flex items-center gap-6'>
                            {preview ? (
                              <img
                                src={preview.preview}
                                alt={file.name}
                                className='w-20 h-[50px]  rounded object-cover'
                              />
                            ) : (
                              <div className='w-24 h-24 rounded bg-surface-ter flex items-center justify-center text-xs text-center px-2'>
                                {file.type.split('/')[1]?.toUpperCase() ||
                                  'FILE'}
                              </div>
                            )}
                            <div className='flex flex-col'>
                              <span className='text-sm font-medium'>
                                {file.name.length > 30
                                  ? `${file.name.substring(0, 30)}...`
                                  : file.name}
                              </span>
                            </div>
                          </div>

                          <div className='flex items-center gap-2'>
                            <span className='text-xs text-gray-500'>
                              {(file.size / 1024).toFixed(2)} KB
                            </span>
                            <button
                              type='button'
                              onClick={() => handleRemoveFile(file)}
                              disabled={disabled}
                              className='p-2 hover:bg-surface-ter rounded transition-colors'
                              title='Remove file'
                            >
                              <HiMiniTrash className='text-red-500' size={18} />
                            </button>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              )}
            </div>
          ) : (
            <>
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
                multiple={false}
                selectedFilesCount={0}
                onBrowseClick={handleBrowseClick}
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                onFileChange={handleFileChange}
                onBlur={onBlur}
                onPaste={onPaste}
                triggerFileInput={triggerFileInput}
              />

              <ImagePreview
                image={image}
                imageName={imageName}
                imageSize={imageSize}
                imageError={imageError}
                fullWidth={fullWidth}
                disabled={disabled}
                disableImageNameClick={disableImageNameClick}
                onRemove={handleRemoveImage}
                onImageError={handleImageError}
                onImageNameClick={onImageNameClick}
                originalFile={originalFile}
                isShowEditIcon={isShowEditIcon}
              />
            </>
          )}
        </div>
      </DragDropZone>
    );
  }
);

MiniAssetSelector.displayName = 'MiniAssetSelector';

export default MiniAssetSelector;
