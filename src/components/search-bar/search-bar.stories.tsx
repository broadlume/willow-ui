import type { Meta, StoryObj } from '@storybook/react';

import { SearchBar } from './search-bar';

const meta: Meta<typeof SearchBar> = {
  component: SearchBar,
  title: 'Components/Search Bar'
};

export default meta;
type Story = StoryObj<typeof meta>;

/** Custom shortcut: Cmd+/ / Ctrl+/ */
export const Search: Story = {
  args: {
    placeholder: 'Search',
  },
};

/** Custom shortcut example */
export const CustomShortcutCmdB: Story = {
  args: {
    placeholder: 'Search (Cmd + B)',
    searchShortcut: {
      keys: ['meta+b', 'ctrl+b'],
      label: '⌘ B', // override label
    },
  },
};

/** Search shortcut disabled */
export const ShortcutDisabled: Story = {
  args: {
    placeholder: 'Search',
    enableSearchShortcut: false,
  },
};
