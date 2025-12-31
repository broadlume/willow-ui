import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './search-bar';

const meta: Meta<typeof SearchBar> = {
  title: 'Components/SearchBar',
  component: SearchBar,
  args: {
    placeholder: 'Search',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/* -------------------------------------------------------
 * Stories
 * ----------------------------------------------------- */

export const Demo: Story = {};

/** Search bar without keyboard shortcut */
export const WithoutShortcut: Story = {
  args: {
    enableSearchShortcut: false,
  },
};

/** Custom shortcut: Cmd/Ctrl + F */
export const CustomShortcutCmdF: Story = {
  args: {
    shortcut: {
      key: 'f',
      label: '⌘ F',
    },
  },
};
