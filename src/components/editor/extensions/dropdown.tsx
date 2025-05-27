import { NodeViewRendererProps, NodeViewWrapper } from '@tiptap/react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@components/select';

const Dropdown = (props: NodeViewRendererProps) => {
  const { view, getPos, node } = props;
  const { dropDownItems, dropdownPlaceholder } = node.attrs;

  const handleSelect = (value: string) => {
    if (typeof getPos === 'function') {
      const pos = getPos();
      view.dispatch(
        view.state.tr.replaceWith(
          pos,
          pos + node.nodeSize,
          view.state.schema.text(`{{${value}}}`)
        )
      );
    }
  };

  return (
    <NodeViewWrapper>
      <Select onValueChange={handleSelect}>
        <SelectTrigger className='~w-[180px]'>
          <SelectValue placeholder={dropdownPlaceholder} />
        </SelectTrigger>
        <SelectContent>
          {(dropDownItems || []).map((item: { value: string; label: string }) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </NodeViewWrapper>
  );
};

export default Dropdown;
