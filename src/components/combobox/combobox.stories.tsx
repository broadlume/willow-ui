import { Meta, StoryObj } from '@storybook/react';
import { render } from 'react-dom';
import { ComboboxDemo } from './combobox';

const meta: Meta = {
  // component: ,
  title: 'Components/Combobox',
};

export default meta;
type Story = StoryObj;

export const Demo: Story = {
  render: (_) => <ComboboxDemo />,
};
