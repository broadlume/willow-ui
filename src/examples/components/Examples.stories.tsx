import type { Meta, StoryObj } from '@storybook/react';

import { CreateAccountDemo } from './CreateAccount';
import { PaymentMethodDemo } from './PaymentMethod';
import { CookieSettingsDemo } from './CookieSettings';

const meta: Meta = {
  title: 'Examples/Examples',
  tags: ['autodocs'],
};

export default meta;

export const CreateAccount: StoryObj = {
  render: CreateAccountDemo,
};

export const PaymentMethod: StoryObj = {
  render: PaymentMethodDemo,
};

export const CookieSettings: StoryObj = {
  render: CookieSettingsDemo,
};
