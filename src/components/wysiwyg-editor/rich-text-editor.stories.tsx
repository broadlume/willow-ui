import { Meta, StoryObj } from '@storybook/react';

import { RichTextEditor } from './rich-text-editor';

const meta: Meta = {
  component: RichTextEditor,
  title: 'Components/Rich Text Editor',
};

export default meta;
type Story = StoryObj<typeof RichTextEditor>;

export const Demo: Story = {
  render: (_) => {
    return <RichTextEditor />;
  },
};
