import React from 'react';
import { NodeViewWrapper } from '@tiptap/react';
import { NodeViewProps } from '@tiptap/core';
import { useNodeViewContext } from '../context/node-view-context';
import { AsyncSelectAutoComplete } from '../components/async-auto-complete';

const AutocompleteNodeComponent: React.FC<NodeViewProps> = ({
  editor,
  getPos,
  deleteNode,
  ...rest
}) => {
  const { fetchOptions, darkMode } = useNodeViewContext();

  console.log('contexr', { darkMode });

  const handleSelect = (value: string | null, label: string | null) => {
    if (!label || typeof getPos !== 'function') {
      deleteNode();
      return;
    }
    editor.chain().focus().deleteRange({ from: getPos(), to: getPos() + 1 }).insertContent(`{{${label}}} `).run();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      deleteNode();
    }
  };

  return (
    <NodeViewWrapper as="span" className="inline-block" onKeyDown={handleKeyDown}>
      <AsyncSelectAutoComplete
        {...rest}
        value={null}
        onChange={(value, label) => handleSelect(value, label!)}
        fetchOptions={fetchOptions}
        autoFocus={true}
        className='~w-1/4'
        darkMode={darkMode}
      />
    </NodeViewWrapper>
  );
};

export default AutocompleteNodeComponent;