import type { Meta, StoryObj } from '@storybook/react';
import { cn } from '@src/lib/utils';

import { ProfileForm } from './profile-form';

const meta: Meta = {
  title: 'Examples/Forms',
  excludeStories: ['Profile'],
};

export default meta;

export const Profile: StoryObj = {
  parameters: {},
  render: ProfileForm,
};
