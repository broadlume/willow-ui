import { Meta, StoryObj } from '@storybook/react';

import { WYSIWYGEditor } from './wysiwyg-editor';

const meta: Meta = {
  component: WYSIWYGEditor,
  title: 'Components/WYSIWYG Editor',
};

export default meta;
type Story = StoryObj<typeof WYSIWYGEditor>;

export const Demo: Story = {
  render: (_) => {
    return <WYSIWYGEditor />;
  },
};
