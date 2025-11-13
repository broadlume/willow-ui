import { Input } from '@components/input/input';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@components/sheet/sheet';
import React, { useState } from 'react';
import { HiMagnifyingGlass, HiMiniXCircle } from 'react-icons/hi2';
import ManageColumns from './ManageColumns';
import { ColumnManagerProps } from './types';

export const ColumnManager: React.FC<ColumnManagerProps> = ({
  isOpen,
  onClose,
  columns,
  visibleColumnIds,
  toggleColumnVisibility,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <SheetContent
        className='w-[400px] overflow-auto p-0'
        showCloseIcon={false}
      >
        <div className='flex w-full flex-col gap-3 px-3 py-6'>
          <SheetHeader
            className='mb-3.5 flex flex-row items-center justify-between'
            data-testid='manage-columns-title'
          >
            <SheetTitle>Column Manager</SheetTitle>
            <HiMiniXCircle
              className='cursor-pointer'
              size={24}
              onClick={onClose}
            />
          </SheetHeader>

          <div className='relative mb-3.5'>
            <Input
              placeholder='Search Columns'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='pl-8'
              data-testid='manage-columns-search-bar'
            />
            <HiMagnifyingGlass
              className='absolute left-2 top-1/2 -translate-y-1/2 transform text-gray-400'
              size={18}
            />
          </div>

          <div data-testid='manage-columns-visible-hidden-container'>
            <ManageColumns
              columns={columns}
              visibleColumnIds={visibleColumnIds}
              toggleColumnVisibility={toggleColumnVisibility}
              searchTerm={searchTerm}
            />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default React.memo(ColumnManager);
