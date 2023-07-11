import { Meta, StoryObj } from '@storybook/react';
import { Button } from '@src/index';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A basic tooltip.',
      },
    },
  },
  render: (_) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>Hover over me!</TooltipTrigger>
        <TooltipContent>You did it!</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const Styled: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A tooltip with more styling.',
      },
    },
  },
  render: (_) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline'>Hover over me!</Button>
        </TooltipTrigger>
        <TooltipContent className='bg-beryl'>
          <p>You did it!</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};
