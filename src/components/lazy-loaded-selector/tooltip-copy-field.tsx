import React from 'react';
import { HiMiniClipboardDocument } from 'react-icons/hi2';

interface TooltipCopyFieldProps {
  label: string;
  value: string;
  onCopy: () => void;
}

/**
 * Reusable copy field component for tooltip displaying label-value pair with copy functionality
 */
const TooltipCopyField: React.FC<TooltipCopyFieldProps> = ({
  label,
  value,
  onCopy,
}) => {
  return (
    <div className='flex gap-4 w-auto'>
      {/* Display label and value */}
      <p>
        <span className='font-bold text-sm text-white'>{label}:</span>
        <span className='text-sm text-white'> {value}</span>
      </p>
      {/* Copy button */}
      <button className='cursor-pointer' onClick={onCopy}>
        <HiMiniClipboardDocument className='text-icon-invert w-4 h-4' />
      </button>
    </div>
  );
};

export { TooltipCopyField };
