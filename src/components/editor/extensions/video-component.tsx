import React from 'react';
import { NodeViewWrapper, NodeViewContent, ReactNodeViewRenderer } from '@tiptap/react';
import { NodeViewProps } from '@tiptap/core';
import clsx from 'classnames';

export const VideoComponent: React.FC<NodeViewProps> = ({ node, selected }) => {
  const { src } = node.attrs;

  return (
    // NodeViewWrapper is a Tiptap component that provides the necessary wrapper element.
    <NodeViewWrapper
      className={clsx('video-wrapper relative cursor-pointer rounded-lg', {
        // This class is applied when the node is selected
        'ProseMirror-selectednode': selected,
      })}
      draggable="true"
      data-drag-handle
    >
      {/* This is the most important part. We make the entire wrapper non-editable.
        This tells the browser and Tiptap "DO NOT let the user type here."
        This prevents the iframe from interfering with any editor transactions.
      */}
      <div contentEditable={false} className="relative">
        <iframe
          src={src}
          className="aspect-video w-full rounded-lg"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </NodeViewWrapper>
  );
};