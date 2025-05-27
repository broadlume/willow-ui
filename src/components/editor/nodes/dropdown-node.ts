import { mergeAttributes, Node } from '@tiptap/core';
import { ReactNodeViewRenderer } from '@tiptap/react';

import Dropdown from '../extensions/dropdown';

const DropdownNode = Node.create({
  name: 'dropdownComponent',
  group: 'inline',
  inline: true,
  atom: true,

  addAttributes() {
    return {
      count: {
        default: 0,
      },
      dropDownItems: {
        default: [],
        parseHTML: (element) =>
          JSON.parse(element.getAttribute('data-dropdown-items') || '[]'),
        renderHTML: (attributes) => {
          if (!attributes.dropDownItems) return {};
          console.log('Rendering dropdown items:', attributes.dropDownItems);
          return {
            'data-dropdown-items': JSON.stringify(attributes.dropDownItems),
          };
        },
      },
      dropdownPlaceholder: {
        default: '',
        parseHTML: (element) =>
          element.getAttribute('data-dropdown-placeholder') || '',
        renderHTML: (attributes) => {
          if (!attributes.dropdownPlaceholder) return {};
          return {
            'data-dropdown-placeholder': attributes.dropdownPlaceholder,
          };
        },
      },
    };
  },

  addOptions() {
    return {
      dropDownItems: [],
      dropdownPlaceholder: '',
    };
  },

  parseHTML() {
    return [
      {
        tag: 'react-dropdown-component',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['react-dropdown-component', mergeAttributes(HTMLAttributes)];
  },

  addNodeView() {
    return ReactNodeViewRenderer(Dropdown);
  },
});

export { DropdownNode };
