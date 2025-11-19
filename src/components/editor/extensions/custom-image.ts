import { Node, mergeAttributes } from '@tiptap/core';

export interface CustomImageOptions {
  inline: boolean;
  allowBase64: boolean;
  HTMLAttributes: Record<string, string>;
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    customImage: {
      /**
       * Add an image with any attributes
       */
      setImage: (options: Record<string, string | undefined>) => ReturnType;
    };
  }
}

export const CustomImage = Node.create<CustomImageOptions>({
  name: 'customImage',

  addOptions() {
    return {
      inline: false,
      allowBase64: false,
      HTMLAttributes: {},
    };
  },

  inline() {
    return this.options.inline;
  },

  group() {
    return this.options.inline ? 'inline' : 'block';
  },

  draggable: true,

  addAttributes() {
    return {
      // Accept any attribute dynamically
      allAttributes: {
        default: {},
        parseHTML: element => {
          const allAttrs: Record<string, string> = {};
          Array.from(element.attributes).forEach(attr => {
            allAttrs[attr.name] = attr.value;
          });
          return allAttrs;
        },
        renderHTML: attributes => {
          return attributes.allAttributes || {};
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'img[src]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['img', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes.allAttributes || {})];
  },

  addCommands() {
    return {
      setImage:
        (options) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: {
              allAttributes: options,
            },
          });
        },
    };
  },
});