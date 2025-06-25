import { Extension } from '@tiptap/core';
import Suggestion from '@tiptap/suggestion';
import { ReactRenderer } from '@tiptap/react';
import { SlashCommandMenu } from '../components/slash-command-menu';
import tippy from 'tippy.js';

// Define the type for command items
export interface CommandItem {
  title: string;
  command: ({ editor }: { editor: any }) => void;
  icon?: React.ReactNode;
}

export const SlashCommand = Extension.create({
  name: 'slash-command',

  addOptions() {
    return {
      suggestion: {
        char: '/',
        startOfLine: true,
        command: ({ editor, range, props }) => {
          editor.chain().focus().deleteRange(range).run();
          props.command({ editor });
        },
        items: ({ query }: { query: string }) => {
          const commands: CommandItem[] = [
            {
              title: 'Heading 1',
              command: ({ editor }) => editor.chain().focus().toggleHeading({ level: 1 }).run(),
            },
            {
              title: 'Heading 2',
              command: ({ editor }) => editor.chain().focus().toggleHeading({ level: 2 }).run(),
            },
            {
              title: 'Heading 3',
              command: ({ editor }) => editor.chain().focus().toggleHeading({ level: 3 }).run(),
            },
            {
              title: 'Paragraph',
              command: ({ editor }) => editor.chain().focus().setParagraph().run(),
            },
            {
              title: 'Embed',
              command: ({ editor }) => {
                const url = window.prompt('Enter video URL to embed');
                if (url) {
                  editor.chain().focus().setVideo(url).run();
                }
              },
            },
          ];

          return commands.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
          );
        },
        render: () => {
          let component: ReactRenderer;
          let popup: any;

          return {
            onStart: (props) => {
              component = new ReactRenderer(SlashCommandMenu, {
                props,
                editor: props.editor,
              });

              // Position the menu using Tippy.js
              popup = tippy('body', {
                getReferenceClientRect: props.clientRect,
                appendTo: () => document.body,
                content: component.element,
                showOnCreate: true,
                interactive: true,
                trigger: 'manual',
                placement: 'bottom-start',
                offset: [0, 8],
                theme: 'light',
                maxWidth: 'none',
              });
            },
            onUpdate(props) {
              component.updateProps(props);

              // Update popup position if clientRect changes
              popup[0].setProps({
                getReferenceClientRect: props.clientRect,
              });
            },
            onKeyDown(props) {
              if (props.event.key === 'Escape') {
                popup[0].hide();
                return true;
              }

              // Pass key events to the React component
              return component.ref?.onKeyDown(props.event);
            },
            onExit() {
              popup[0].destroy();
              component.destroy();
            },
          };
        },
      },
    };
  },

  addProseMirrorPlugins() {
    return [
      Suggestion({
        editor: this.editor,
        ...this.options.suggestion,
      }),
    ];
  },
});
