import { Extension } from '@tiptap/core';

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    indentation: {
      setIndentation: (level: number) => ReturnType;
      unsetIndentation: () => ReturnType;
    };
  }
}

export const Indentation = Extension.create({
  name: 'indentation',

  addOptions() {
    return {
      types: ['paragraph'],
      maxLevel: 8,
      minLevel: 0,
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
              return margin ? parseInt(margin, 10) / 2 : 0;
            },
            renderHTML: attributes => {
              if (!attributes.indent || attributes.indent === 0) {
                return {};
              }
              return { style: `margin-left: ${attributes.indent * 2}em;` };
            },
          },
        },
      },
    ];
  },

  addCommands() {
    return {
      setIndentation:
        (level: number) =>
        ({ chain, state }) => {
          const { maxLevel, minLevel } = this.options;
          const safeLevel = Math.max(minLevel, Math.min(maxLevel, level));
          return chain().updateAttributes('paragraph', { indent: safeLevel }).run();
        },
      unsetIndentation:
        () =>
        ({ chain }) => {
          return chain().updateAttributes('paragraph', { indent: 0 }).run();
        },
    };
  },
});
