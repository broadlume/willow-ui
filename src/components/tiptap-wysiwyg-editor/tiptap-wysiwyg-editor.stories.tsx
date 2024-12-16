import { Meta, StoryObj } from '@storybook/react';

import { TiptapEditor } from './tiptap-wysiwyg-editor';

const meta: Meta = {
  component: TiptapEditor,
  title: 'Components/TipTap Editor',
};

export default meta;
type Story = StoryObj<typeof TiptapEditor>;

export const Demo: Story = {
  render: (_) => {
    return <TiptapEditor />;
  },
};
