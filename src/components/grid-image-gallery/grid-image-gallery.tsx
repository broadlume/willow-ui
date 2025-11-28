import clsx from 'clsx';
import React, { type UIEvent, useMemo, useState } from 'react';
import {
  HiChevronDown,
  HiMiniChevronLeft,
  HiMiniChevronRight,
  HiOutlinePhoto,
  HiOutlineTrash,
} from 'react-icons/hi2';
import {
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../index';
import { Card } from '../card/card';
import { Checkbox } from '../checkbox/checkbox';

export interface GridAssetItem {
  id: string;
  name: string;
  /** URL for the image, if available. */
  imageUrl?: string;
  /** Optional flag to indicate the item is still loading. */
  isLoading?: boolean;
  /** Optional arbitrary data for the consumer (e.g. domain model). */
  meta?: unknown;
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
  /**
   * Custom render function for the card body content.
   * This is rendered inside a `Card` and below the selection checkbox.
   */
  renderCardContent?: (
    item: GridAssetItem,
    context: { isSelected: boolean }
  ) => React.ReactNode;
  /**
   * Low‑level escape hatch to fully control how each item is rendered.
   * When provided, this is responsible for rendering the whole card.
   */
  renderItem?: (
    item: GridAssetItem,
    context: {
      isSelected: boolean;
      onClick: () => void;
      onDoubleClick: () => void;
    }
  ) => React.ReactNode;
  /** Show action buttons (Select All, Delete) */
  showActionButtons?: boolean;
  /**
   * Enable simple windowed rendering for large lists.
   * When enabled, only the visible rows are rendered to avoid performance issues.
   */
  virtualized?: boolean;
  /** Fixed height for a single row when `virtualized` is true. */
  virtualizedRowHeight?: number;
  /** Height of the scroll container when `virtualized` is true. */
  virtualizedContainerHeight?: number;
  /** Zero-based page index, when using the built-in pagination footer. */
  pageIndex?: number;
  /** Page size, when using the built-in pagination footer. */
  pageSize?: number;
  /** Total number of items across all pages. Defaults to `items.length`. */
  totalItems?: number;
  /** Available page size options for the pagination footer. */
  pageSizeOptions?: number[];
  /** Callback when page index changes (0-based). */
  onPageChange?: (pageIndex: number) => void;
  /** Callback when page size changes. */
  onPageSizeChange?: (pageSize: number) => void;
  /** Explicitly control whether pagination footer is shown. If not provided, auto-detects based on callbacks or total items. */
  showPagination?: boolean;
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
  renderItem,
  virtualized = false,
  virtualizedRowHeight = 176,
  virtualizedContainerHeight = 600,
  pageIndex,
  pageSize,
  totalItems,
  pageSizeOptions = [12, 24, 48, 96],
  onPageChange,
  onPageSizeChange,
  showPagination: showPaginationProp,
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

  const currentPageIndex = pageIndex ?? 0;
  const total = totalItems ?? items.length;
  
  // Ensure pageSize is a valid option, defaulting to first option if not provided or not in options
  const effectivePageSize = pageSize ?? pageSizeOptions[0] ?? 12;
  const currentPageSize = pageSizeOptions.includes(effectivePageSize)
    ? effectivePageSize
    : pageSizeOptions[0] ?? 12;
  
  const totalPages = Math.max(1, Math.ceil(total / currentPageSize));
  // Pagination only shows when explicitly enabled via showPagination flag,
  // or when both pagination callbacks are provided (indicating intentional pagination setup)
  const hasPagination = showPaginationProp  

  const handlePreviousPage = () => {
    if (!onPageChange) return;
    if (currentPageIndex <= 0) return;
    onPageChange(currentPageIndex - 1);
  };

  const handleNextPage = () => {
    if (!onPageChange) return;
    if (currentPageIndex >= totalPages - 1) return;
    onPageChange(currentPageIndex + 1);
  };

  const handlePageSizeChange = (value: string) => {
    const nextSize = Number(value);
    if (!Number.isNaN(nextSize) && pageSizeOptions.includes(nextSize)) {
      onPageSizeChange?.(nextSize);
    }
  };

  const totalRows = useMemo(
    () => Math.ceil(items.length / columns),
    [items.length, columns]
  );

  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    if (!virtualized) return;
    setScrollTop(event.currentTarget.scrollTop);
  };

  const virtualization = useMemo(() => {
    if (!virtualized) {
      return {
        startIndex: 0,
        endIndex: items.length,
        offsetTop: 0,
        totalHeight: undefined as number | undefined,
      };
    }

    const containerHeight = virtualizedContainerHeight;
    const rowHeight = virtualizedRowHeight;

    const startRow = Math.max(Math.floor(scrollTop / rowHeight) - 1, 0);
    const visibleRowCount = Math.ceil(containerHeight / rowHeight) + 2;
    const endRow = Math.min(startRow + visibleRowCount, totalRows - 1);

    const startIndex = startRow * columns;
    const endIndex = Math.min((endRow + 1) * columns, items.length);
    const offsetTop = startRow * rowHeight;
    const totalHeight = totalRows * rowHeight;

    return { startIndex, endIndex, offsetTop, totalHeight };
  }, [
    virtualized,
    items.length,
    columns,
    scrollTop,
    virtualizedContainerHeight,
    virtualizedRowHeight,
    totalRows,
  ]);

  const visibleItems = useMemo(
    () => items.slice(virtualization.startIndex, virtualization.endIndex),
    [items, virtualization.startIndex, virtualization.endIndex]
  );

  return (
    <div className={className}>
      {/* Action Buttons */}
      {showActionButtons && selectable && items.length > 0 && (
        <div className='flex items-center justify-between gap-3 mb-4 px-4'>
          <div />
          <div className='flex items-center gap-3'>
            <button
              type='button'
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
                type='button'
                onClick={handleDelete}
                className='px-4 py-2 text-sm font-medium rounded-md border border-border-destructive bg-surface-destructive-bg text-text-destructive hover:bg-red-100 transition-colors flex items-center gap-2'
              >
                <HiOutlineTrash className='w-4 h-4' />
                Delete ({selectedCount})
              </button>
            )}
          </div>
        </div>
      )}

      {/* Grid */}
      <div
        className={clsx('px-4 pb-4', virtualized && 'overflow-y-auto')}
        style={
          virtualized ? { maxHeight: virtualizedContainerHeight } : undefined
        }
        onScroll={handleScroll}
      >
        {virtualized ? (
          <div
            style={{
              position: 'relative',
              height: virtualization.totalHeight,
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: virtualization.offsetTop,
                left: 0,
                right: 0,
              }}
            >
              <div
                className='grid gap-3'
                style={{
                  gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                }}
              >
                {visibleItems.map((item) => {
                  const isSelected = selectedIds.has(item.id);

                  if (renderItem) {
                    return (
                      <React.Fragment key={item.id}>
                        {renderItem(item, {
                          isSelected,
                          onClick: () => handleCardClick(item),
                          onDoubleClick: () => handleCardDoubleClick(item),
                        })}
                      </React.Fragment>
                    );
                  }

                  return (
                    <Card
                      key={item.id}
                      className={clsx(
                        'relative group cursor-pointer rounded-lg border transition-all duration-200 overflow-hidden w-54 h-40',
                        {
                          'border-border-cta ring-2 ring-cta-25': isSelected,
                          'border-border-sec hover:border-border-pri':
                            !isSelected,
                        }
                      )}
                      onClick={() => handleCardClick(item)}
                      onDoubleClick={() => handleCardDoubleClick(item)}
                    >
                      {/* Checkbox */}
                      {selectable && (
                        <div className='absolute top-2 left-2 z-10'>
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
                          renderCardContent(item, { isSelected })
                        ) : (
                          <>
                            {/* Image / Placeholder / Loading */}
                            <div className='w-full h-28 bg-surface-sec flex items-center justify-center overflow-hidden'>
                              {item.isLoading ? (
                                <div className='w-full h-full flex flex-col animate-pulse bg-surface-sec'>
                                  {/* Image skeleton */}
                                  <div className='w-full h-28 bg-surface-pri' />

                                  {/* Text skeleton */}
                                  <div className='px-3 py-2 flex items-center gap-2'>
                                    <div className='h-3 w-6 bg-surface-pri rounded' />
                                    <div className='h-3 flex-1 bg-surface-pri/80 rounded' />
                                  </div>
                                </div>
                              ) : item.imageUrl ? (
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
                                className={clsx(
                                  'text-sm font-medium truncate',
                                  {
                                    'text-text-cta': isSelected,
                                    'text-text-pri': !isSelected,
                                  }
                                )}
                                title={item.name}
                              >
                                {item.name}
                              </p>
                            </div>
                          </>
                        )}
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div
            className='grid gap-3'
            style={{
              gridTemplateColumns: 'repeat(auto-fill, minmax(216px, 1fr))',
            }}
          >
            {items.map((item) => {
              const isSelected = selectedIds.has(item.id);

              if (renderItem) {
                return (
                  <React.Fragment key={item.id}>
                    {renderItem(item, {
                      isSelected,
                      onClick: () => handleCardClick(item),
                      onDoubleClick: () => handleCardDoubleClick(item),
                    })}
                  </React.Fragment>
                );
              }

              return (
                <Card
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
                    <div className='absolute top-2 left-2 z-10'>
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
                      renderCardContent(item, { isSelected })
                    ) : (
                      <>
                        {/* Image / Placeholder / Loading */}
                        <div className='w-full h-28 bg-surface-sec flex items-center justify-center overflow-hidden'>
                          {item.isLoading ? (
                            <div className='w-full h-full flex flex-col animate-pulse bg-surface-sec'>
                              {/* Image skeleton */}
                              <div className='w-full h-28 bg-surface-pri' />

                              {/* Text skeleton */}
                              <div className='px-3 py-2 flex items-center gap-2'>
                                <div className='h-3 w-6 bg-surface-pri rounded' />
                                <div className='h-3 flex-1 bg-surface-pri/80 rounded' />
                              </div>
                            </div>
                          ) : item.imageUrl ? (
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
                </Card>
              );
            })}
          </div>
        )}
      </div>

      {/* Pagination Footer (similar style to table component) */}
      {hasPagination && (
        <div className='flex items-center justify-between gap-3 px-4 pb-4'>
          {/* Items per page */}
          <div className='flex flex-1 flex-row items-center justify-start gap-3'>
            <p className='text-xs font-normal'>Items per page</p>
            <Select
              value={currentPageSize.toString()}
              onValueChange={handlePageSizeChange}
            >
              <SelectTrigger
                icon={<HiChevronDown className='h-4 w-4' />}
                className='h-[30px] w-fit text-xs font-normal [&>span]:mr-2'
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {pageSizeOptions.map((opt) => (
                  <SelectItem
                    key={opt}
                    value={opt.toString()}
                    className='text-xs font-normal'
                  >
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Pagination controls */}
          <div className='flex items-center gap-3'>
            <p className='text-xs text-text-opt'>
              {total === 0
                ? '0 of 0'
                : `${currentPageIndex * currentPageSize + 1}–${Math.min(
                    (currentPageIndex + 1) * currentPageSize,
                    total
                  )} of ${total}`}
            </p>
            <div className='flex items-center gap-[12px]'>
              <Button
                type='button'
                onClick={handlePreviousPage}
                disabled={currentPageIndex <= 0}
                className='h-[30px] w-[30px] rounded-md bg-surface-cta p-2 font-normal text-white shadow-none hover:bg-surface-cta hover:opacity-90 disabled:border-none disabled:bg-transparent disabled:text-text-pri'
              >
                <HiMiniChevronLeft className='h-4 w-4' />
              </Button>
              <Button
                type='button'
                onClick={handleNextPage}
                disabled={currentPageIndex >= totalPages - 1}
                className='h-[30px] w-[30px] rounded-md bg-surface-cta p-2 font-normal text-white shadow-none hover:bg-surface-cta hover:opacity-90 disabled:border-none disabled:bg-transparent disabled:text-text-pri'
              >
                <HiMiniChevronRight className='h-4 w-4' />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

GridImageGallery.displayName = 'GridImageGallery';

export default GridImageGallery;
