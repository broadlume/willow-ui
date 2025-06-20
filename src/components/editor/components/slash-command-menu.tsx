import React from 'react';
import clsx from 'clsx';

type CommandItem = {
  title: string;
  command: () => void;
};

type Props = {
  items: CommandItem[];
  command: (item: CommandItem) => void;
  selectedIndex: number;
};

export const SlashCommandMenu: React.FC<Props> = ({ items, command, selectedIndex }) => {
  return (
    <div className="flex gap-2 bg-black text-white p-2 rounded shadow-lg">
      {items.map((item, index) => (
        <button
          key={item.title}
          onClick={() => command(item)}
          className={clsx(
            'px-3 py-1 rounded',
            index === selectedIndex ? 'bg-white text-black font-semibold' : 'hover:bg-white hover:text-black'
          )}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};