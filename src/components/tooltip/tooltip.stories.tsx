import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@src/index';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: 'Components/Tooltip',
};

export default meta;
type Story = StoryObj<typeof meta>;

/** A basic tooltip. */
export const Default: Story = {
  render: (_) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>Hover over me!</TooltipTrigger>
        <TooltipContent>You did it!</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

/** A tooltip with custom styling. */
export const Styled: Story = {
  render: (_) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline'>Hover over me!</Button>
        </TooltipTrigger>
        <TooltipContent className='bg-[#000] p-2 rounded-md'>
          <p>You did it!</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};
