import type { Meta, StoryObj } from '@storybook/react';

import { LeadCard } from './lead-card';
import { TooltipProvider } from '@src/index';
import { lead } from '../data/leads';

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

/** A typical sample order lead card in DealerHQ. */
export const Demo: Story = {
  render: (_) => <LeadCard lead={lead} />,
};
