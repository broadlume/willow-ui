import { Extension } from '@tiptap/core';

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    indentation: {
      setIndentation: (value: number) => ReturnType;
      unsetIndentation: () => ReturnType;
    };
  }
}

export const Indentation = Extension.create({
  name: 'indentation',

  addOptions() {
    return {
      // Add 'bulletList' and 'orderedList' to support UL/OL indentation
      types: ['paragraph', 'heading', 'bulletList', 'orderedList'],
    };
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          indent: {
            default: 0,
            parseHTML: element => {
              const margin = element.style.marginLeft;
              if (margin && margin.endsWith('em')) {
                return parseFloat(margin);
              }
              if (margin && margin.endsWith('px')) {
                return parseFloat(margin) / 16;
              }
              return 0;
            },
            renderHTML: attributes => {
              if (!attributes.indent || attributes.indent === 0) {
                return {};
              }
              return { style: `margin-left: ${attributes.indent}em;` };
            },
          },
        },
      },
    ];
  },

  addCommands() {
    return {
      setIndentation:
        (value: number) =>
        ({ chain }) => {
          let c = chain();
          this.options.types.forEach(type => {
            c = c.updateAttributes(type, { indent: value });
          });
          return c.run();
        },
      unsetIndentation:
        () =>
        ({ chain }) => {
          let c = chain();
          this.options.types.forEach(type => {
            c = c.updateAttributes(type, { indent: 0 });
          });
          return c.run();
        },
    };
  },
});
