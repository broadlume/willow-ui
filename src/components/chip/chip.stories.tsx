import type { Meta, StoryObj } from '@storybook/react';

import { Chip } from './chip';

const meta: Meta<typeof Chip> = {
  component: Chip,
  title: 'Components/Chip',
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Demo: Story = {
  render: (_) => (
    <div className='~flex ~space-x-2'>
      <Chip>Chip</Chip>
    </div>
  ),
};
