import React from 'react';
import { NodeViewWrapper, NodeViewContent } from '@tiptap/react';

export const DropdownComponent = (props: any) => {
  const { node, updateAttributes } = props;
  const items = node.attrs.items || [];
  const selected = node.attrs.selected || '';

  return (
    <NodeViewWrapper as="span" className="inline-block">
      <select
        value={selected}
        onChange={e => updateAttributes({ selected: e.target.value })}
        className="~border ~rounded ~px-2 ~py-1"
      >
        <option value="">Select...</option>
        {items.map((item: string) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
    </NodeViewWrapper>
  );
};