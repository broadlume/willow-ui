import { NodeViewRendererProps, NodeViewWrapper } from '@tiptap/react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@components/select';
import { EditorView } from 'prosemirror-view';
import { Node as ProseMirrorNode } from 'prosemirror-model';

interface DropdownNodeViewProps {
  view: EditorView;
  getPos: () => number;
  node: ProseMirrorNode;
  dropDownItems: { value: string; label: string }[];
  dropdownPlaceholder: string;
}

const Dropdown = (props: NodeViewRendererProps) => {
  const { view, getPos, node } = props;
  const { dropDownItems, dropdownPlaceholder } = node.attrs as DropdownNodeViewProps;

  const handleSelect = (value: string) => {
    if (typeof getPos === 'function') {
      view.dispatch(
        view.state.tr
          .insertText(`{{${value}}}`, getPos(), getPos() + node.nodeSize)
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
          {
            dropDownItems?.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))
          }
        </SelectContent>
      </Select>
    </NodeViewWrapper>
  );
};

export default Dropdown;
