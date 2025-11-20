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
          if (attributes.src) {
            return { src: attributes.src };
          }
          return {};
        },
      },
      alt: {
        default: null,
        parseHTML: element => element.getAttribute('alt'),
        renderHTML: attributes => {
          if (attributes.alt) {
            return { alt: attributes.alt };
          }
          return {};
        },
      },
      title: {
        default: null,
        parseHTML: element => element.getAttribute('title'),
        renderHTML: attributes => {
          if (attributes.title) {
            return { title: attributes.title };
          }
          return {};
        },
      },
      // Dynamic attributes storage
      dynamicAttrs: {
        default: {},
        parseHTML: (element: HTMLElement) => {
          const dynamicAttrs: Record<string, string> = {};
          Array.from(element.attributes).forEach(attr => {
            // Skip standard attributes that are handled separately
            if (!['src', 'alt', 'title'].includes(attr.name)) {
              dynamicAttrs[attr.name] = attr.value;
            }
          });
          return dynamicAttrs;
        },
        renderHTML: (attributes: Record<string, unknown>) => {
          return (attributes.dynamicAttrs as Record<string, string>) || {};
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
    // Get all attributes from HTMLAttributes
    const allAttrs = { ...HTMLAttributes };
    
    // Remove internal TipTap attributes that shouldn't be on the HTML element
    delete allAttrs.dynamicAttrs;
    
    // Remove any null/undefined values
    Object.keys(allAttrs).forEach(key => {
      if (!allAttrs[key]) {
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
          const { src, alt, title, ...dynamicAttrs } = options;
          
          return commands.insertContent({
            type: this.name,
            attrs: {
              src: src || null,
              alt: alt || null,
              title: title || null,
              dynamicAttrs: dynamicAttrs,
            },
          });
        },
    };
  },
});