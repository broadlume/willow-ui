import React from 'react';
import { NodeViewProps } from '@tiptap/core';
import { NodeViewWrapper } from '@tiptap/react';

export const IframeVideoComponent: React.FC<NodeViewProps> = ({ node, selected }) => {
  const { src } = node.attrs;

  return (
    // NodeViewWrapper provides the necessary Tiptap context
    <NodeViewWrapper
      className={`video-wrapper my-4 rounded-lg overflow-hidden ${selected ? 'ProseMirror-selectednode' : ''}`}
      as="div"
    >
      {/* This non-editable div is the "shield". It protects the Tiptap editor 
        from the iframe, preventing clicks and focus from being stolen.
      */}
      <div contentEditable={false} className="relative w-full aspect-video">
        <iframe
          src={src}
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </NodeViewWrapper>
  );
};