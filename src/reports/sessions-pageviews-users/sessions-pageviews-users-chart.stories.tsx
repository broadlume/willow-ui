import type { Meta, StoryObj } from '@storybook/react';
import { SessionsPageviewsUsersChart } from './sessions-pageviews-users-chart';

const meta: Meta<typeof SessionsPageviewsUsersChart> = {
  component: SessionsPageviewsUsersChart,
  title: 'Reports/Sessions+Page Views+Users',
};

export default meta;
type Story = StoryObj<typeof meta>;

/** A typical sample order lead card in DealerHQ. */
export const Demo: Story = {
  render: (_) => <SessionsPageviewsUsersChart />,
};
