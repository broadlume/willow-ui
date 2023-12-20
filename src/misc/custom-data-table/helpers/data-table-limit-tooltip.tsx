//Render a tooltip if the number of items in the array is greater than the max

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@src/index';

type Props = {
  items: any[];
  max: number;
};

const DataTableLimitToolTip = ({ items, max }: Props) => {
  return items.length > max ? (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className='~text-left'>
          {[...items].splice(0, max - 1).join(', ')}...
        </TooltipTrigger>
        <TooltipContent>{items.join(', ')}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ) : (
    <>{items.join(', ')}</>
  );
};

export { DataTableLimitToolTip };
