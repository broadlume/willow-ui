import { Extension } from '@tiptap/core';
import Suggestion from '@tiptap/suggestion';
import { createRoot, Root } from 'react-dom/client';
import React from 'react';
import { SlashCommandMenu } from '../components/slash-command-menu';

let container: HTMLDivElement | null = null;
let root: Root | null = null;

export const SlashCommand = Extension.create({
  name: 'slash-command',

  addOptions() {
    return {
      suggestion: {
        char: '/',
        items: ({ query }: { query: string }) => {
          const commands = [
            {
              title: 'Heading 1',
              command: ({ editor }) => editor.chain().focus().toggleHeading({ level: 1 }).run(),
            },
            {
              title: 'Heading 2',
              command: ({ editor }) => editor.chain().focus().toggleHeading({ level: 2 }).run(),
            },
            {
              title: 'Bullet List',
              command: ({ editor }) => editor.chain().focus().toggleBulletList().run(),
            },
            {
              title: 'Code Block',
              command: ({ editor }) => editor.chain().focus().toggleCodeBlock().run(),
            },
          ];

          return commands.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
          );
        },
        render: () => {
          let selectedIndex = 0;

          return {
            onStart: (props) => {
              if (container) return;

              container = document.createElement('div');
              container.style.position = 'absolute';
              container.style.zIndex = '1000';
              document.body.appendChild(container);

              root = createRoot(container);

              const rect = props.clientRect?.();
              if (rect) {
                container.style.left = `${rect.left}px`;
                container.style.top = `${rect.bottom + window.scrollY + 4}px`;
              }

              root.render(
                <SlashCommandMenu
                  items={props.items}
                  selectedIndex={selectedIndex}
                  command={props.command}
                />
              );
            },
            onUpdate(props) {
              if (!container || !root) return;

              const rect = props.clientRect?.();
              if (rect) {
                container.style.left = `${rect.left}px`;
                container.style.top = `${rect.bottom + window.scrollY + 4}px`;
              }

              root.render(
                <SlashCommandMenu
                  items={props.items}
                  selectedIndex={selectedIndex}
                  command={props.command}
                />
              );
            },
            onKeyDown(props) {
              const items = props.items;

              if (!items || items.length === 0) return false;

              if (props.event.key === 'ArrowRight') {
                selectedIndex = (selectedIndex + 1) % items.length;
                return true;
              }

              if (props.event.key === 'ArrowLeft') {
                selectedIndex = (selectedIndex - 1 + items.length) % items.length;
                return true;
              }

              if (props.event.key === 'Enter') {
                props.command(items[selectedIndex]);
                return true;
              }

              if (props.event.key === 'Escape') {
                return true;
              }

              return false;
            },
            onExit() {
              if (root && container) {
                // Defer unmount to avoid React race condition
                queueMicrotask(() => {
                  root?.unmount();
                  container?.remove();
                  root = null;
                  container = null;
                });
              }
            },
          };
        },
      },
    };
  },

  addProseMirrorPlugins() {
    return [Suggestion({ editor: this.editor, ...this.options.suggestion })];
  },
});