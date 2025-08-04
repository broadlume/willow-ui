import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './sidebar';
import { LinkComponent } from './components/link-component';
import { HiChevronDown, HiChevronRight } from "react-icons/hi2";

const meta: Meta<typeof Sidebar> = {
  component: Sidebar,
  title: 'Components/Sidebar',
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Demo: Story = {
  args: {
    items: [
      { label: "HOME", link: '#' },
      {
        label: "PRODUCTS",
        items: [
          { label: "Browse", link: `#` },
          { label: "Assign", link: `#` },
          { label: "Import", link: `#` },
          { label: "Jobs", link: `#` },
          {
            label: "Admin",
            items: [
              { label: "Manufacturers", link: `#` },
              { label: "Categories", link: `#` },
              { label: "Import Mappings", link: `#` },
            ],
          },
        ],
      },
      { label: "COMPANIES", link: '#' }
    ],
    location: '/',
    onMenuClick: ({ to, children, className }) => (
      <LinkComponent to={to} className={className} >
        {children}
      </LinkComponent>
    ),
    rightArrow: HiChevronRight,
    downArrow: HiChevronDown,
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
    onMenuClick: {
      description: 'Render function to create a link.',
      control: false,
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
  render: (args) => <Sidebar {...args} />,
};
