import { Node, nodeInputRule } from '@tiptap/react';
import { Plugin, PluginKey } from 'prosemirror-state';
import clsx from 'classnames';

export interface VideoOptions {
  HTMLAttributes: Record<string, any>;
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    video: {
      /**
       * Set a video node
       */
      setVideo: (src: string) => ReturnType;
      /**
       * Toggle a video
       */
      toggleVideo: () => ReturnType;
    };
  }
}

const VIDEO_INPUT_REGEX = /!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\)/;

export const Video = Node.create({
  name: 'video',
  group: 'block',
  selectable: true,
  draggable: true,
  allowGapCursor: true,
  atom: true,

  addAttributes() {
    return {
      src: {
        default: null,
        parseHTML: (el) => (el as HTMLElement).getAttribute('src'),
        renderHTML: (attrs) => ({ src: attrs.src }),
      },
      aspectRatio: {
        default: 'aspect-video', // Tailwind's 16/9
        parseHTML: (el) =>
          (el as HTMLElement).getAttribute('data-aspect-ratio') ||
          'aspect-video',
        renderHTML: (attrs) => ({ 'data-aspect-ratio': attrs.aspectRatio }),
      },
      frameborder: {
        default: '0',
        parseHTML: (el) =>
          (el as HTMLElement).getAttribute('frameborder') || '0',
        renderHTML: (attrs) => ({ frameborder: attrs.frameborder }),
      },
      allow: {
        default:
          'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
        parseHTML: (el) => (el as HTMLElement).getAttribute('allow'),
        renderHTML: (attrs) => ({ allow: attrs.allow }),
      },
      allowfullscreen: {
        default: 'true',
        parseHTML: (el) => (el as HTMLElement).getAttribute('allowfullscreen'),
        renderHTML: (attrs) => ({ allowfullscreen: attrs.allowfullscreen }),
      },
      width: {
        default: '100%',
        parseHTML: (el) => (el as HTMLElement).getAttribute('width') || '100%',
        renderHTML: (attrs) => ({ width: attrs.width }),
      },
      height: {
        default: '315',
        parseHTML: (el) => (el as HTMLElement).getAttribute('height') || '315',
        renderHTML: (attrs) => ({ height: attrs.height }),
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'iframe[src]',
      },
    ];
  },

  // MODIFY THIS ENTIRE FUNCTION to wrap the iframe in a div
  renderHTML({ node, HTMLAttributes }) {
    const widthClass =
      HTMLAttributes.width && HTMLAttributes.width !== '100%'
        ? `~w-[${HTMLAttributes.width}]`
        : '~w-full';

    // This outer div is the actual "node" that ProseMirror will manage.
    // It controls the layout and dragging.
    return [
      'div',
      {
        class: clsx(
          'video-wrapper', // A class for our CSS to target
          widthClass,
          node.attrs.aspectRatio,
          '~rounded-lg',
          '~border-2',
          '~border-transparent', // Make border transparent by default
          'hover:~border-blue-600', // Show border on hover
          '~cursor-move'
        ),
        'data-drag-handle': '', // Explicitly mark this div as the drag handle
      },
      // The iframe goes inside the wrapper
      [
        'iframe',
        {
          ...HTMLAttributes,
          // Let the iframe fill its wrapper
          class: '~w-full ~h-full ~rounded-lg',
        },
      ],
    ];
  },

  addCommands() {
    return {
      setVideo:
        (src: string) =>
        ({ commands }) => {
          let aspectRatio = '~aspect-video';
          if (
            src.includes('shorts') ||
            src.includes('9_16') ||
            src.includes('vertical') ||
            src.match(/aspect=9:16/i)
          ) {
            aspectRatio = '~aspect-[9/16]';
          }
          return commands.insertContent({
            type: this.name,
            attrs: { src, aspectRatio },
          });
        },
      toggleVideo:
        () =>
        ({ commands }) =>
          commands.toggleNode(this.name, 'paragraph'),
    };
  },

  addInputRules() {
    return [
      nodeInputRule({
        find: VIDEO_INPUT_REGEX,
        type: this.type,
        getAttributes: (match) => {
          const [, , src] = match;
          return { src };
        },
      }),
    ];
  },

  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey('videoDropPlugin'),
        props: {
          handleDOMEvents: {
            drop(view, event) {
              return false;
            },
          },
        },
      }),
    ];
  },
});
