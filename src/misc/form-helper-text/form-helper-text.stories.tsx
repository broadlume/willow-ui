import { Meta, StoryObj } from '@storybook/react';
import { FormHelperText } from './form-helper-text';

const meta: Meta<typeof FormHelperText> = {
  title: 'Misc/Form Helper Text',
  component: FormHelperText,
  args: {
    text: 'This is some helper text.',
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof FormHelperText>;

export const Default: Story = {};
