import clsx from 'clsx';
import React from 'react';
import {
  HiChevronDown,
  HiMiniChevronLeft,
  HiMiniChevronRight,
} from 'react-icons/hi2';
import {
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../index';

export interface PaginationProps {
  /** Current page index (0-based) */
  pageIndex: number;
  /** Current page size */
  pageSize: number;
  /** Total number of items across all pages */
  totalItems: number;
  /** Available page size options */
  pageSizeOptions?: number[];
  /** Callback when page index changes */
  onPageChange: (pageIndex: number) => void;
  /** Callback when page size changes */
  onPageSizeChange?: (pageSize: number) => void;
  /** Custom class name for the wrapper */
  className?: string;
  /** Show page numbers */
  showPageNumbers?: boolean;
  /** Label for items per page */
  itemsPerPageLabel?: string;
}

/**
 * Pagination - A reusable pagination component for tables and grids.
 * Provides page navigation, page size selection, and item count display.
 */
export const Pagination: React.FC<PaginationProps> = ({
  pageIndex,
  pageSize,
  totalItems,
  pageSizeOptions = [5, 10, 20, 50],
  onPageChange,
  onPageSizeChange,
  className,
  showPageNumbers = false,
  itemsPerPageLabel = 'Items per page',
}) => {
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const currentPage = pageIndex + 1;

  const handlePreviousPage = () => {
    if (pageIndex > 0) {
      onPageChange(pageIndex - 1);
    }
  };

  const handleNextPage = () => {
    if (pageIndex < totalPages - 1) {
      onPageChange(pageIndex + 1);
    }
  };

  const handlePageSizeChange = (value: string) => {
    const nextSize = Number(value);
    if (!Number.isNaN(nextSize) && pageSizeOptions.includes(nextSize)) {
      onPageSizeChange?.(nextSize);
    }
  };

  const handleGoToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page - 1);
    }
  };

  // Generate page numbers for display
  const pageNumbers = React.useMemo(() => {
    if (!showPageNumbers) return [];

    let startPage = 1;
    let endPage = totalPages;

    if (totalPages > 5) {
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage + 2 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  }, [currentPage, totalPages, showPageNumbers]);

  return (
    <div
      className={clsx(
        'flex items-center justify-between gap-3 px-4 pb-4',
        className
      )}
    >
      {/* Items per page */}
      <div className='flex flex-1 flex-row items-center justify-start gap-3'>
        <p className='text-xs font-normal'>{itemsPerPageLabel}</p>
        <Select
          value={pageSize.toString()}
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
        {/* Item count display */}
        <p className='text-xs text-text-opt'>
          {totalItems === 0
            ? '0 of 0'
            : `${pageIndex * pageSize + 1}–${Math.min(
              (pageIndex + 1) * pageSize,
              totalItems
            )} of ${totalItems}`}
        </p>

        <div className='flex items-center gap-3'>
          {/* Previous button */}
          <Button
            type='button'
            onClick={handlePreviousPage}
            disabled={pageIndex <= 0}
            className='h-[30px] w-[30px] rounded-md bg-surface-cta p-2 font-normal text-white shadow-none hover:bg-surface-cta hover:opacity-90 disabled:border-none disabled:bg-transparent disabled:text-text-pri'
          >
            <HiMiniChevronLeft className='h-4 w-4' />
          </Button>

          {/* Page numbers (optional) */}
          {showPageNumbers &&
            pageNumbers.map((page) => (
              <Button
                key={page}
                type='button'
                variant={currentPage === page ? 'outline' : 'ghost'}
                onClick={() => handleGoToPage(page)}
                className={clsx(
                  'h-[30px] w-[30px] rounded-md p-2 text-sm font-normal text-text-pri shadow-none disabled:bg-transparent',
                  currentPage === page && 'border border-border-primary'
                )}
              >
                {page}
              </Button>
            ))}

          {/* Next button */}
          <Button
            type='button'
            onClick={handleNextPage}
            disabled={pageIndex >= totalPages - 1}
            className='h-[30px] w-[30px] rounded-md bg-surface-cta p-2 font-normal text-white shadow-none hover:bg-surface-cta hover:opacity-90 disabled:border-none disabled:bg-transparent disabled:text-text-pri'
          >
            <HiMiniChevronRight className='h-4 w-4' />
          </Button>
        </div>
      </div>
    </div>
  );
};

Pagination.displayName = 'Pagination';

export default Pagination;
