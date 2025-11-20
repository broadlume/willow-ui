import { Node, mergeAttributes } from '@tiptap/core';

export interface CustomImageOptions {
  inline: boolean;
  allowBase64: boolean;
  HTMLAttributes: Record<string, string>;
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    image: {
      /**
       * Add an image with any attributes
       */
      setCustomImage: (options: Record<string, string | undefined>) => ReturnType;
    };
  }
}

export const CustomImage = Node.create<CustomImageOptions>({
  name: 'image',

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
      src: {
        default: null,
        parseHTML: element => element.getAttribute('src'),
        renderHTML: attributes => {
          return {
            src: attributes.src,
          };
        },
      },
      alt: {
        default: null,
        parseHTML: element => element.getAttribute('alt'),
        renderHTML: attributes => {
          return {
            alt: attributes.alt,
          };
        },
      },
      title: {
        default: null,
        parseHTML: element => element.getAttribute('title'),
        renderHTML: attributes => {
          return {
            title: attributes.title,
          };
        },
      },
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
    const standardAttrs = {
      src: HTMLAttributes.src,
      alt: HTMLAttributes.alt,
      title: HTMLAttributes.title,
    };
    
    const customAttrs = HTMLAttributes.allAttributes || {};
    const allAttrs = { ...standardAttrs, ...customAttrs };
    
    // Remove any null/undefined values
    Object.keys(allAttrs).forEach(key => {
      if (allAttrs[key] === null || allAttrs[key] === undefined) {
        delete allAttrs[key];
      }
    });
    
    return ['img', mergeAttributes(this.options.HTMLAttributes, allAttrs)];
  },

  addCommands() {
    return {
      setCustomImage:
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