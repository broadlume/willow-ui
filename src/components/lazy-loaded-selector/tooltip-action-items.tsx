import React from 'react';
import {
  HiMiniArrowTopRightOnSquare,
  HiOutlineClipboardDocument,
  HiOutlineClipboardDocumentCheck,
} from 'react-icons/hi2';

interface TooltipActionItemsProps {
  itemId: string;
  itemUrl?: string;
  copiedItemId: string | null;
  onCopy: (id: string, key: string) => void;
}

/**
 * Action items component for tooltip with copy and open URL functionality
 */
const TooltipActionItems: React.FC<TooltipActionItemsProps> = ({
  itemId,
  itemUrl,
  copiedItemId,
  onCopy,
}) => {
  return (
    <div className='flex flex-col'>
      {/* Copy retailer ID action - shows check icon on successful copy */}
      <div
        className='flex gap-2 p-2 cursor-pointer rounded-sm'
        onClick={() => onCopy(itemId, `${itemId}-retailer`)}
      >
        <button className='cursor-pointer'>
          {copiedItemId === `${itemId}-retailer` ? (
            <HiOutlineClipboardDocumentCheck className='text-icon-pri w-4 h-4' />
          ) : (
            <HiOutlineClipboardDocument className='text-icon-pri w-4 h-4' />
          )}
        </button>
        <p>
          <span className='text-sm text-text-pri'>Copy Retailer ID</span>
        </p>
      </div>

      {/* Open website URL in new tab */}
      {itemUrl ? (
        <div
          className='flex gap-2 p-2 cursor-pointer rounded-sm'
          onClick={() => (itemUrl ? window.open(itemUrl, '_blank') : undefined)}
        >
          <button className='cursor-pointer'>
            <HiMiniArrowTopRightOnSquare className='text-icon-pri w-4 h-4' />
          </button>
          <p>
            <span className='text-sm text-text-pri'>Open Website URL</span>
          </p>
        </div>
      ) : null}
    </div>
  );
};

export { TooltipActionItems };
