import type { Meta, StoryObj } from '@storybook/react';

import { LeadCard } from './lead-card/lead-card';
import { TooltipProvider } from '@src/index';

const meta: Meta<typeof LeadCard> = {
  component: LeadCard,
  title: 'DHQ/Lead Card',
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

/** A basic lead card. */
export const Demo: Story = {
  render: (_) => <LeadCard />,
};
