import clsx from 'clsx';
import React, { useState } from 'react';
import { HiOutlinePhoto, HiOutlineTrash } from 'react-icons/hi2';
import { Checkbox } from '../checkbox/checkbox';

export interface GridAssetItem {
  id: string;
  name: string;
  imageUrl: string; // URL for the image
  selected?: boolean;
}

export interface GridImageGalleryProps {
  /** Array of assets to display in the grid */
  items: GridAssetItem[];
  /** Callback when selection changes */
  onSelectionChange?: (selectedIds: string[]) => void;
  /** Callback when an item is clicked (single click) */
  onItemClick?: (item: GridAssetItem) => void;
  /** Callback when an item is double clicked */
  onItemDoubleClick?: (item: GridAssetItem) => void;
  /** Callback when the menu button is clicked */
  onMenuClick?: (item: GridAssetItem, event: React.MouseEvent) => void;
  /** Callback when delete button is clicked */
  onDelete?: (selectedIds: string[]) => void;
  /** Allow multiple selection */
  allowMultiSelect?: boolean;
  /** Number of columns in the grid */
  columns?: 2 | 3 | 4 | 5 | 6;
  /** Custom class name for the grid container */
  className?: string;
  /** Whether selection is enabled */
  selectable?: boolean;
  /** Custom render function for the card content */
  renderCardContent?: (item: GridAssetItem) => React.ReactNode;
  /** Show action buttons (Select All, Delete) */
  showActionButtons?: boolean;
}

/**
 * GridImageGallery - A grid-based image gallery component for displaying images.
 * Supports selection, custom actions, and flexible layout options.
 */
export const GridImageGallery: React.FC<GridImageGalleryProps> = ({
  items,
  onSelectionChange,
  onItemClick,
  onItemDoubleClick,
  onMenuClick,
  onDelete,
  allowMultiSelect = true,
  columns = 4,
  className,
  selectable = true,
  renderCardContent,
  showActionButtons = true,
}) => {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const handleCheckboxChange = (itemId: string, checked: boolean) => {
    const newSelectedIds = new Set(selectedIds);

    if (checked) {
      if (allowMultiSelect) {
        newSelectedIds.add(itemId);
      } else {
        newSelectedIds.clear();
        newSelectedIds.add(itemId);
      }
    } else {
      newSelectedIds.delete(itemId);
    }

    setSelectedIds(newSelectedIds);
    onSelectionChange?.(Array.from(newSelectedIds));
  };

  const handleCardClick = (item: GridAssetItem) => {
    if (selectable && !allowMultiSelect) {
      const newSelectedIds = new Set<string>();
      if (!selectedIds.has(item.id)) {
        newSelectedIds.add(item.id);
        setSelectedIds(newSelectedIds);
        onSelectionChange?.(Array.from(newSelectedIds));
      }
    }
    onItemClick?.(item);
  };

  const handleCardDoubleClick = (item: GridAssetItem) => {
    onItemDoubleClick?.(item);
  };

  const handleSelectAll = () => {
    if (selectedIds.size === items.length) {
      // Deselect all
      setSelectedIds(new Set());
      onSelectionChange?.([]);
    } else {
      // Select all
      const allIds = new Set(items.map((item) => item.id));
      setSelectedIds(allIds);
      onSelectionChange?.(Array.from(allIds));
    }
  };

  const handleDelete = () => {
    if (selectedIds.size > 0 && onDelete) {
      onDelete(Array.from(selectedIds));
      setSelectedIds(new Set());
      onSelectionChange?.([]);
    }
  };

  const selectedCount = selectedIds.size;
  const allSelected = selectedCount === items.length && items.length > 0;

  return (
    <div className={className}>
      {/* Action Buttons */}
      {showActionButtons && selectable && items.length > 0 && (
        <div className='flex items-center justify-end gap-3 mb-4 px-4'>
          <button
            onClick={handleSelectAll}
            className={clsx(
              'px-4 py-2 text-sm font-medium rounded-md border transition-colors',
              {
                'bg-surface-cta-bg border-border-cta text-text-cta hover:bg-cta-25':
                  allSelected,
                'bg-surface-pri border-border-pri text-text-pri hover:bg-surface-sec':
                  !allSelected,
              }
            )}
          >
            {allSelected ? 'Deselect All' : 'Select All'}
          </button>

          {selectedCount > 0 && onDelete && (
            <button
              onClick={handleDelete}
              className='px-4 py-2 text-sm font-medium rounded-md border border-border-destructive bg-surface-destructive-bg text-text-destructive hover:bg-red-100 transition-colors flex items-center gap-2'
            >
              <HiOutlineTrash className='w-4 h-4' />
              Delete ({selectedCount})
            </button>
          )}
        </div>
      )}

      {/* Grid */}
      <div className='grid gap-3 px-4 pb-4' style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(216px, 1fr))' }}>
        {items.map((item) => {
          const isSelected = selectedIds.has(item.id);

          return (
            <div
              key={item.id}
              className={clsx(
                'relative group cursor-pointer rounded-lg border transition-all duration-200 overflow-hidden bg-surface-pri w-54 h-40',
                {
                  'border-border-cta ring-2 ring-cta-25': isSelected,
                  'border-border-sec hover:border-border-pri': !isSelected,
                }
              )}
              onClick={() => handleCardClick(item)}
              onDoubleClick={() => handleCardDoubleClick(item)}
            >
              {/* Checkbox */}
              {selectable && (
                <div
                  className='absolute top-2 left-2 z-10'
                  onClick={(e) => e.stopPropagation()}
                >
                  <Checkbox
                    checked={isSelected}
                    onCheckedChange={(checked) =>
                      handleCheckboxChange(item.id, checked as boolean)
                    }
                    className='cursor-pointer'
                  />
                </div>
              )}

              {/* Card Content */}
              <div className='flex flex-col h-full'>
                {renderCardContent ? (
                  renderCardContent(item)
                ) : (
                  <>
                    {/* Image */}
                    <div className='w-full h-28 bg-surface-sec flex items-center justify-center overflow-hidden'>
                      {item.imageUrl ? (
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className='w-full h-full object-cover'
                          loading='lazy'
                        />
                      ) : (
                        <HiOutlinePhoto className='w-12 h-12 text-icon-pri' />
                      )}
                    </div>

                    {/* Item Name */}
                    <div className='px-3 py-2 bg-surface-pri h-12 flex items-center'>
                      <p
                        className={clsx('text-sm font-medium truncate', {
                          'text-text-cta': isSelected,
                          'text-text-pri': !isSelected,
                        })}
                        title={item.name}
                      >
                        {item.name}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

GridImageGallery.displayName = 'GridImageGallery';

export default GridImageGallery;
