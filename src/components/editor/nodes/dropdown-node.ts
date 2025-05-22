import { Node, mergeAttributes } from '@tiptap/core';
import { ReactNodeViewRenderer } from '@tiptap/react';
import { DropdownComponent } from '../components/dropdown-component';

export const DropdownNode = Node.create({
  name: 'dropdown',

  group: 'inline',
  inline: true,
  atom: true,

  addAttributes() {
    return {
      items: {
        default: [],
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'span[data-dropdown]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['span', mergeAttributes(HTMLAttributes, { 'data-dropdown': '' }), 0];
  },

  addNodeView() {
    return ReactNodeViewRenderer(DropdownComponent);
  },
});