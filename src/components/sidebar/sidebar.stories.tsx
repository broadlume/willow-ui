import type { Meta, StoryObj } from '@storybook/react';
import { SideBar } from './sidebar';  // Adjust the import path to where your SidebarMenu component is located
import { LinkComponent } from './link-component'; // Adjust if necessary (your Link component used in SidebarMenu)
import { ChevronDown, ChevronRight } from 'lucide-react';

const meta: Meta<typeof SideBar> = {
  component: SideBar,
  title: 'Components/SideBar',
};

export default meta;
type Story = StoryObj<typeof SideBar>;
  const base="http://localhost:6006/";

/** Basic SideBar menu example */
export const Demo: Story = {
  args: {
    items: [
      { label: "HOME", link: '#' },
    {
      label: "PRODUCTS",
      items: [
        { label: "Browse", link: `#` },
        { label: "Assign", link:`#` },
        { label: "Import", link:`#` },
        { label: "Jobs", link: `#` },
        {
          label: "Admin",
          items: [
            { label: "Manufacturers", link: `#` },
            { label: "Categories", link: `#`},
            { label: "Import Mappings", link: `#` },
          ],
        },
      ],
    },
    { label: "COMPANIES", link: '#' }
    ],
    location: '/',
    LinkComponent: LinkComponent, // Pass your link component
    rightArrow: ChevronRight,
    downArrow: ChevronDown,
  },
  argTypes: {
    items: {
      description: 'The list of sidebar items to display.',
      control: 'object',
    },
    location: {
      description: 'The current active route.',
      control: 'text',
    },
    LinkComponent: {
      description: 'Custom Link component to handle navigation.',
      control: 'object',
    },
    rightArrow: {
      description: 'The icon for expanding the section.',
      control: 'object',
    },
    downArrow: {
      description: 'The icon for collapsing the section.',
      control: 'object',
    },
  },
  render: (args) => <SideBar {...args} />,
};

/** Sidebar with multiple variants (active and collapsed sections) */


