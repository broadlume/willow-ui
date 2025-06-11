import { Node, nodeInputRule } from '@tiptap/core';
import { ReactNodeViewRenderer } from '@tiptap/react';
import { VideoComponent } from './video-component'; // Adjust path if needed

export interface VideoOptions {
  HTMLAttributes: Record<string, any>;
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    video: {
      setVideo: (options: { src: string }) => ReturnType;
    };
  }
}

const VIDEO_INPUT_REGEX = /!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\)/;

export const Video = Node.create<VideoOptions>({
  name: 'video',
  group: 'block',
  atom: true,
  draggable: true,

  addAttributes() {
    return {
      src: {
        default: null,
        // --- THE FIX IS HERE ---
        // We must tell Tiptap how to render this attribute to HTML.
        // This will be merged into the `HTMLAttributes` passed to the main `renderHTML` function.
        renderHTML: attributes => {
          if (!attributes.src) {
            return {};
          }
          return {
            src: attributes.src,
          };
        },
      },
    };
  },

  parseHTML() {
    return [{
      // This selector now matches the output of `renderHTML` for consistency.
      tag: 'div[data-video-wrapper] iframe[src]',
      getAttrs: dom => ({
        src: (dom as HTMLElement).getAttribute('src'),
      }),
    }];
  },

  renderHTML({ HTMLAttributes }) {
    // This function is now correct because `HTMLAttributes` will contain the `src`
    // attribute thanks to our fix in `addAttributes`.
    return ['div', { 'data-video-wrapper': '' }, ['iframe', HTMLAttributes]];
  },

  addCommands() {
    return {
      setVideo: (options) => ({ commands }) => {
        return commands.insertContent({
          type: this.name,
          attrs: options,
        });
      },
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

  addNodeView() {
    return ReactNodeViewRenderer(VideoComponent);
  },
});