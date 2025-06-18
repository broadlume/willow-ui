// src/components/editor/extensions/command-extension.ts
import { Extension, ReactRenderer, ReactRendererOptions } from '@tiptap/react';
import { Suggestion } from '@tiptap/suggestion';
import tippy, { Instance as TippyInstance } from 'tippy.js';

import { CommandList } from '../components/command-list';
import { Editor } from '@tiptap/react'; // Ensure this Tiptap Editor type is correctly imported

interface CommandItem {
    title: string;
    command: ({ editor, range }: { editor: Editor; range: { from: number; to: number } }) => void;
}

const getSuggestionItems = ({ query }: { query: string }): CommandItem[] => {
    return [
        {
            title: 'Paragraph',
            command: ({ editor, range }) => {
                editor
                    .chain()
                    .focus()
                    .deleteRange(range)
                    .setParagraph()
                    .run();
            },
        },
        {
            title: 'Heading 1',
            command: ({ editor, range }) => {
                editor
                    .chain()
                    .focus()
                    .deleteRange(range)
                    .setHeading({ level: 1 })
                    .run();
            },
        },
        {
            title: 'Heading 2',
            command: ({ editor, range }) => {
                editor
                    .chain()
                    .focus()
                    .deleteRange(range)
                    .setHeading({ level: 2 })
                    .run();
            },
        },
        {
            title: 'Heading 3',
            command: ({ editor, range }) => {
                editor
                    .chain()
                    .focus()
                    .deleteRange(range)
                    .setHeading({ level: 3 })
                    .run();
            },
        },
        {
            title: 'Bullet List',
            command: ({ editor, range }) => {
                editor
                    .chain()
                    .focus()
                    .deleteRange(range)
                    .toggleBulletList()
                    .run();
            },
        },
        {
            title: 'Code Block',
            command: ({ editor, range }) => {
                editor
                    .chain()
                    .focus()
                    .deleteRange(range)
                    .toggleCodeBlock()
                    .run();
            },
        },
        // Add more commands here as needed
    ].filter((item) =>
        item.title.toLowerCase().startsWith(query.toLowerCase())
    ).slice(0, 10); // Limit to 10 suggestions
};

const renderItems = () => {
    let component: ReactRenderer | null = null;
    let popup: TippyInstance | null = null;

    return {
        onStart: (props: { editor: Editor; clientRect: DOMRect | null; range: { from: number; to: number; }; query: string; }) => {
            component = new ReactRenderer(CommandList, {
                props: props,
                editor: props.editor,
            } as ReactRendererOptions);

            popup = tippy('body', {
                // THE CRITICAL FIX IS HERE: Wrap clientRect in a function
                getReferenceClientRect: () => props.clientRect,
                appendTo: () => document.body,
                content: component.element,
                showOnCreate: true,
                interactive: true,
                trigger: 'manual',
                placement: 'bottom-start',
                // Optional: Adjust offset if you want some space between cursor and menu
                // offset: [0, 10],
            })[0];
        },

        onUpdate: (props: { editor: Editor; clientRect: DOMRect | null; range: { from: number; to: number; }; query: string; }) => {
            if (component) {
                component.updateProps(props);
            }

            popup?.setProps({
                // THE CRITICAL FIX IS HERE: Wrap clientRect in a function for updates too
                getReferenceClientRect: () => props.clientRect,
            });
        },

        onKeyDown: (props: { event: KeyboardEvent }) => {
            if (component?.ref) {
                return (component.ref as any)?.onKeyDown(props.event);
            }
            return false;
        },

        onExit: () => {
            if (popup) {
                popup.destroy();
                popup = null;
            }
            if (component) {
                component.destroy();
                component = null;
            }
        },
    };
};

export const CommandExtension = Suggestion({
    char: '/',
    allowSpaces: true,
    items: getSuggestionItems,
    render: renderItems,
}) as unknown as Extension;