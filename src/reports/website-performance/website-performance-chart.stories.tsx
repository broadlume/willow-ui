import type { Meta, StoryObj } from '@storybook/react';
import { WebsitePerformanceChart } from './website-performance-chart';

const meta: Meta<typeof WebsitePerformanceChart> = {
  component: WebsitePerformanceChart,
  title: 'Reports/Website Performance',
};

export default meta;
type Story = StoryObj<typeof meta>;

/** A typical sample order lead card in DealerHQ. */
export const Demo: Story = {
  render: (_) => <WebsitePerformanceChart />,
};
