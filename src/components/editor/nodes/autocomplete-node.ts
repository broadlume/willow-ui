// import { Node, mergeAttributes, InputRule } from '@tiptap/core';
// import { ReactNodeViewRenderer } from '@tiptap/react';
// import AutocompleteNodeComponent from '../extensions/autocomplete';

// // --- MODIFIED ---
// // Step 1: Flatten the options interface. No more `componentProps`.
// export interface AutocompleteNodeOptions {
//   fetchOptions: (query: string) => Promise<{ label: string; value: string }[]>;
//   placeholder?: string;
//   className?: string;
//   disabled?: boolean;
// }

// export const AutocompleteInputRule = new InputRule({
//   find: /\{\{$/,
//   handler: ({ state, range }) => {
//     const { tr } = state;
//     tr.delete(range.from, range.to);
//     tr.insert(range.from, state.schema.nodes.autocompleteNode.create());
//   },
// });

// // Use the flattened generic
// export const AutocompleteNode = Node.create<AutocompleteNodeOptions>({
//   name: 'autocompleteNode',
//   group: 'inline',
//   inline: true,
//   atom: true,

//   // --- MODIFIED ---
//   // Step 2: Update the default options to be flat.
//   addOptions() {
//     return {
//       fetchOptions: async () => [],
//       placeholder: 'Type to search...',
//       className: '',
//       disabled: false,
//     };
//   },

//   addAttributes() {
//     return {};
//   },

//   parseHTML() {
//     return [{ tag: 'span[data-type="autocomplete-node"]' }];
//   },

//   renderHTML({ HTMLAttributes }) {
//     return ['span', mergeAttributes(HTMLAttributes, { 'data-type': 'autocomplete-node' })];
//   },

//   // --- MODIFIED ---
//   // Step 3: Pass the entire (and now flat) options object as props.
//   addNodeView() {
//     // We use `as any` to tell TypeScript that we are aware of the type
//     // mismatch and are manually satisfying the component's props.
//     return ReactNodeViewRenderer(AutocompleteNodeComponent as any, this.options);
//   },

//   addInputRules() {
//     return [AutocompleteInputRule];
//   },
// });

import { Node, InputRule } from '@tiptap/core';
import { ReactNodeViewRenderer } from '@tiptap/react';
import AutocompleteNodeComponent from '../extensions/autocomplete';

export const AutocompleteInputRule = new InputRule({
  find: /\{\{$/,
  handler: ({ state, range }) => {
    state.tr
      .delete(range.from, range.to)
      .insert(range.from, state.schema.nodes.autocompleteNode.create());
  },
});

export const AutocompleteNode = Node.create({
  name: 'autocompleteNode',
  group: 'inline',
  inline: true,
  atom: true,

  addAttributes: () => ({}),
  parseHTML: () => [{ tag: 'span[data-type="autocomplete-node"]' }],
  renderHTML: ({ HTMLAttributes }) => [
    'span',
    { ...HTMLAttributes, 'data-type': 'autocomplete-node' },
  ],

  addNodeView() {
    return ReactNodeViewRenderer(AutocompleteNodeComponent);
  },

  addInputRules() {
    return [AutocompleteInputRule];
  },
});
