import { Button } from '@components/button';
import { DatePicker } from '@components/date-picker/date-picker';
import { format } from 'date-fns';
import type { DateRange } from 'react-day-picker';
import { HiMiniCalendarDays, HiOutlineXCircle } from 'react-icons/hi2';

interface DateRangeFilterProps {
  filterKey: string;
  label: string;
  selectedRange: { from: string; to: string } | null;
  tempRange: DateRange | undefined;
  onDateRangeChange: (key: string, range: DateRange | undefined) => void;
}

export const DateRangeFilter = ({
  filterKey,
  label,
  selectedRange,
  tempRange,
  onDateRangeChange,
}: DateRangeFilterProps) => {
  return (
    <div
      className='w-full border-b border-border-sec px-1 py-1'
      data-testid={`date-range-filter-${filterKey}`}
    >
      {selectedRange ? (
        // Show selected date range with clear option when dates are selected
        <div
          data-testid={`date-range-filter-selected-range-${filterKey}`}
          className='px-1 py-1 flex h-6 w-[169px] cursor-pointer items-center justify-between rounded bg-surface-pri font-medium shadow-shadow-dropdown'
        >
          <span className='text-xs text-text-pri'>
            {format(new Date(selectedRange.from), 'MM-dd-yyyy')} to{' '}
            {format(new Date(selectedRange.to), 'MM-dd-yyyy')}
          </span>
          <button
            type='button'
            onClick={(e) => {
              e.stopPropagation();
              onDateRangeChange(filterKey, undefined);
            }}
            className='rounded text-text-cta cursor-pointer'
          >
            <HiOutlineXCircle className='h-4 w-4 text-text-cta' />
          </button>
        </div>
      ) : (
        // Show label and date picker when no dates are selected
        <div
          className='flex w-full items-center justify-between'
          data-testid={`date-range-filter-${filterKey}`}
        >
          <span>{label}</span>
          <DatePicker
            mode='range'
            selected={tempRange}
            onOpenChange={(open) => {
              if (!open) {
                // Clear temporary date range state when picker closes
                // This would need to be handled by parent component
              }
            }}
            onSelect={(range: DateRange | undefined) => {
              onDateRangeChange(filterKey, range);
            }}
            trigger={
              <Button variant={'ghost'} className='p-1'>
                <HiMiniCalendarDays className='w-4 h-4 text-icon-pri' />
              </Button>
            }
          />
        </div>
      )}
    </div>
  );
};
