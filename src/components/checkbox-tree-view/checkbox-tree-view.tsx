import React, { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import { Checkbox } from '@components/checkbox/checkbox';
import { Label } from '@components/label/label';
import { Button } from '@components/button';

type TreeNode = {
  id: string;
  name: string;
  value: string;
  children?: TreeNode[];
};

type TreeViewProps = {
  data: TreeNode[];
  onChange?: (selectedValues: string[]) => void;
};

type CheckedState = Record<
  string,
  { checked: boolean; indeterminate: boolean }
>;

const TreeView: React.FC<TreeViewProps> = ({ data, onChange }) => {
  const [checkedState, setCheckedState] = useState<CheckedState>({});
  const [expandedState, setExpandedState] = useState<Record<string, boolean>>(
    {}
  ); // Track expanded state

  const reset = () => {
    const newState = Object.keys(checkedState).reduce((acc, key) => {
      acc[key] = { checked: false, indeterminate: false };
      return acc;
    }, {} as CheckedState);
    setCheckedState(newState);
    if (onChange) onChange([]);
  };

  useEffect(() => {
    const initializeState = (nodes: TreeNode[]): CheckedState => {
      const state: CheckedState = {};
      const traverse = (node: TreeNode) => {
        state[node.id] = { checked: false, indeterminate: false };
        if (node.children) {
          node.children.forEach(traverse);
        }
      };
      nodes.forEach(traverse);
      return state;
    };

    const initializeExpandedState = (
      nodes: TreeNode[]
    ): Record<string, boolean> => {
      const state: Record<string, boolean> = {};
      const traverse = (node: TreeNode) => {
        state[node.id] = true; // Default to expanded
        if (node.children) {
          node.children.forEach(traverse);
        }
      };
      nodes.forEach(traverse);
      return state;
    };

    setCheckedState(initializeState(data));
    setExpandedState(initializeExpandedState(data));
  }, [data]);

  const handleCheckboxChange = (id: string) => {
    const newState = { ...checkedState };

    const updateChildren = (nodeId: string, checked: boolean) => {
      newState[nodeId].checked = checked;
      newState[nodeId].indeterminate = false;
      const node = findNodeById(data, nodeId);
      if (node?.children) {
        node.children.forEach((child) => updateChildren(child.id, checked));
      }
    };

    const updateParents = (nodeId: string) => {
      const parentNode = findParentById(data, nodeId, null);
      if (parentNode) {
        const allChecked = parentNode.children?.every(
          (child) => newState[child.id].checked
        );
        const anyChecked = parentNode.children?.some(
          (child) =>
            newState[child.id].checked || newState[child.id].indeterminate
        );

        newState[parentNode.id].checked = !!allChecked;
        newState[parentNode.id].indeterminate = !!(!allChecked && anyChecked);
        updateParents(parentNode.id);
      }
    };

    const currentNode = newState[id];
    const isChecked = !currentNode.checked;
    updateChildren(id, isChecked);
    updateParents(id);

    setCheckedState(newState);

    if (onChange) {
      // const selectedValues = Object.keys(newState)
      //     .filter((key) => newState[key].checked)
      //     .map((key) => findNodeById(data, key)?.value)
      //     .filter(Boolean) as string[]
      const selectedValues = getSelectedChildrenValues(data);
      onChange(selectedValues);
    }
  };

  const findNodeById = (nodes: TreeNode[], id: string): TreeNode | null => {
    for (const node of nodes) {
      if (node.id === id) return node;
      if (node.children) {
        const found = findNodeById(node.children, id);
        if (found) return found;
      }
    }
    return null;
  };

  const findParentById = (
    nodes: TreeNode[],
    id: string,
    parent: TreeNode | null
  ): TreeNode | null => {
    for (const node of nodes) {
      if (node.id === id) return parent;
      if (node.children) {
        const found = findParentById(node.children, id, node);
        if (found) return found;
      }
    }
    return null;
  };

  const toggleExpand = (id: string) => {
    setExpandedState((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const getSelectedChildrenValues = (nodes: TreeNode[]): string[] => {
    let selectedValues: string[] = [];

    nodes.forEach((node) => {
      // If the node has children, recursively process them
      if (node.children && node.children.length > 0) {
        selectedValues = selectedValues.concat(
          getSelectedChildrenValues(node.children)
        );
      } else if (checkedState[node.id]?.checked) {
        // Only add leaf node values if they are checked
        selectedValues.push(node.value);
      }
    });

    return selectedValues;
  };

  const renderTree = (nodes: TreeNode[]) => (
    <ul className='~ml-4 ~list-none'>
      {nodes.map((node) => (
        <li key={node.id}>
          <div className='~mb-2 ~flex ~items-center ~gap-2'>
            {/* Space reserved for Chevron, even if the node doesn't have one */}
            <span className='~w-4 ~shrink-0'>
              {node.children && node.children.length > 0 && (
                <span
                  onClick={() => toggleExpand(node.id)}
                  className='~cursor-pointer'
                >
                  {expandedState[node.id] ? (
                    <FaChevronDown />
                  ) : (
                    <FaChevronRight />
                  )}
                </span>
              )}
            </span>
            {/* <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={
                                    checkedState[node.id]?.checked || false
                                }
                                ref={(el) => {
                                    if (el)
                                        el.indeterminate =
                                            checkedState[node.id]
                                                ?.indeterminate || false
                                }}
                                onChange={() => handleCheckboxChange(node.id)}
                            />
                            {node.name}
                        </label> */}

            <Checkbox
              data-testid={'checkbox-' + node.id}
              {...(checkedState[node.id]?.indeterminate
                ? { checked: 'indeterminate' }
                : checkedState[node.id]?.checked
                ? { checked: true }
                : { checked: false })}
              onClick={() => handleCheckboxChange(node.id)}
            />

            <Label data-testid={'label-' + node.id}>{node.name}</Label>
          </div>
          {/* Children are indented */}
          {node.children && expandedState[node.id] && renderTree(node.children)}
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      {renderTree(data)}
      <Button className='~mt-2' onClick={reset}>
        Reset Tree
      </Button>
    </div>
  );
};

export { TreeView };
