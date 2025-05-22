import React from 'react';

export const DropdownComponent = ({ node, updateAttributes, editor }: any) => {
  const { items } = node.attrs;

  const insertItem = (item: string) => {
    editor.chain().focus().insertContent(`@@${item}@@`).run();
    editor.commands.deleteNode('dropdown'); // Remove the dropdown node
  };

  return (
    <span className="relative">
      <ul className="absolute bg-white border border-gray-300 rounded-md shadow-md z-10">
        {items.map((item: string) => (
          <li
            key={item}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => insertItem(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </span>
  );
};