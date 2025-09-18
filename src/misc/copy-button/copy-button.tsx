import React, { useState } from 'react';
import { FaRegCopy } from 'react-icons/fa';
import { Button } from '../../components/button';

interface CopyButtonProps {
  value: string;
}

/** A button that copies the provided value to the clipboard */
const CopyButton: React.FC<CopyButtonProps> = ({ value }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000); // Message visible for 2 seconds
  };

  return (
    <Button onClick={handleCopy} variant='ghost' size='sm'>
      <span className='mr-2 font-normal normal-case'>
        {copied ? 'Copied to clipboard!' : value}
      </span>
      <FaRegCopy />
    </Button>
  );
};

export { CopyButton };
