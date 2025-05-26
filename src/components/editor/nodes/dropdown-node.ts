import { mergeAttributes, Node } from '@tiptap/core';
import { ReactNodeViewRenderer } from '@tiptap/react';

import Component from '../extensions/dropdown';

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

  addKeyboardShortcuts() {
    return {
      'Mod-Enter': () => {
        return this.editor
          .chain()
          .insertContentAt(this.editor.state.selection.head, {
            type: this.type.name,
          })
          .focus()
          .run();
      },
      Esc: () => {
        console.log('Esc pressed');
        const view = this.editor.view;
        const { state } = view;
        const { $from } = state.selection;
        const pos = $from.before();
        const node = state.doc.nodeAt(pos);
        if (node && node.type.name === this.name) {
          view.dispatch(state.tr.delete(pos, pos + node.nodeSize));
          return true;
        }
        return false;
      },
    };
  },

  renderHTML({ HTMLAttributes }) {
    return ['react-dropdown-component', mergeAttributes(HTMLAttributes)];
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component, {
      attrs: () => {
        return {
          dropDownItems: this.options.dropDownItems,
          dropdownPlaceholder: this.options.dropdownPlaceholder,
        };
      },
    });
  },
});

export { DropdownNode };
