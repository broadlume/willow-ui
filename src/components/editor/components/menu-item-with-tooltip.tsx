import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@components/tooltip/tooltip';

interface MenuItemWithTooltipProps {
  children: React.ReactNode;
  tooltipContent: string;
}

export const MenuItemWithTooltip: React.FC<MenuItemWithTooltipProps> = ({
  children,
  tooltipContent,
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className='~mt-1' type='button'>
          {children}
        </TooltipTrigger>
        <TooltipContent>{tooltipContent}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
