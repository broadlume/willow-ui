import type { Meta, StoryObj } from '@storybook/react';
import { BreadCrumb, BreadCrumbItem } from './breadcrumb';
import { FaChevronCircleRight } from 'react-icons/fa';

// Let's put a description here because Storybook is buggy
/** A vertically stacked set of interactive headings that each reveal a section of content. */
const meta: Meta<typeof BreadCrumb> = {
  component: BreadCrumb,
  title: 'Components/BreadCrumb',
};

export default meta;
type Story = StoryObj<typeof BreadCrumbItem>;

/** A basic BreadCrumb. */
export const Simple: Story = {
  args: {
    classNames: {
      wrapper: [],
      label: [''],
    },
    onClick: (e) => alert('clicked=' + e.target.id),
  },
  render: (args) => (
    <BreadCrumb>
      <BreadCrumbItem id='item1' label='Item 1' {...args} />
      <BreadCrumbItem id='item2' label='Item 2' {...args} />
      <BreadCrumbItem id='item3' label='Item 3' isLast={true} {...args} />
    </BreadCrumb>
  ),
};

export const Custom: Story = {
  args: {
    classNames: {
      wrapper: [''],
      label: ['text-4xl text-junglegreen'],
    },
    customIcon: () => (
      <FaChevronCircleRight className='mx-3 text-lg text-ash-light' />
    ),
    onClick: (e) => alert('clicked=' + e.target.id),
  },
  render: (args) => (
    <BreadCrumb>
      <BreadCrumbItem {...args} id='item1' label='Item 1' />
      <BreadCrumbItem {...args} id='item2' label='Item 2' />
      <BreadCrumbItem {...args} id='item3' label='Item 3' isLast={true} />
    </BreadCrumb>
  ),
};
