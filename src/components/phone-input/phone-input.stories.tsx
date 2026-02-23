import { Meta, StoryObj } from '@storybook/react';
import { PhoneInput } from './phone-input';
import { useState } from 'react';

const meta: Meta<typeof PhoneInput> = {
  component: PhoneInput,
  title: 'Components/Phone Input',
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'Phone number with country code (e.g., +19328656416)',
    },
    defaultCountry: {
      control: 'text',
      description: 'Default country code (e.g., US, GB, IN)',
    },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    showFlag: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof PhoneInput>;

export const Default: Story = {
  args: {
    placeholder: 'Enter phone number',
    showFlag: true,
  },
};

export const WithDefaultCountry: Story = {
  args: {
    placeholder: 'Enter phone number',
    defaultCountry: 'AR',
    showFlag: true,
  },
};

export const WithoutFlags: Story = {
  args: {
    placeholder: 'Enter phone number',
    showFlag: false,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Enter phone number',
    disabled: true,
    value: '+112345637890',
  },
};

export const CountryFormats: Story = {
  render: () => {
    const countries = [
      { code: 'US', label: 'United States', placeholder: '(555) 123-4567' },
      { code: 'GB', label: 'United Kingdom', placeholder: '7911 123456' },
      { code: 'IN', label: 'India', placeholder: '98765 43210' },
      { code: 'AU', label: 'Australia', placeholder: '412 345 678' },
      { code: 'CA', label: 'Canada', placeholder: '(416) 555-0123' },
      { code: 'DE', label: 'Germany', placeholder: '030 12345678' },
      { code: 'FR', label: 'France', placeholder: '06 12 34 56 78' },
      { code: 'JP', label: 'Japan', placeholder: '090-1234-5678' },
    ];

    return (
      <div className='space-y-4'>
        {countries.map((c) => (
          <PhoneInput
            key={c.code}
            defaultCountry={c.code}
            placeholder={c.placeholder}
            label={c.label}
          />
        ))}
      </div>
    );
  },
};

export const AutoDetectFromValue: Story = {
  render: () => {
    const phoneNumbers: Array<{
      label: string;
      phone: string;
    }> = [
      { label: 'US', phone: '+18323456789' },
      { label: 'India', phone: '+919876543210' },
      { label: 'Germany', phone: '+493012345678' },
      { label: 'France', phone: '+33612345678' },
      { label: 'Australia', phone: '+61412345678' },
      { label: 'Canada', phone: '+14165550123' },
      { label: 'Japan', phone: '+8109901234567' },
      { label: 'Brazil', phone: '+5511987654321' },
      { label: 'China', phone: '+8613812345678' },
      { label: 'Jersey (+44)', phone: '+441534123456' },
    ];

    return (
      <div className='space-y-4'>
        <div className='p-4 border border-border-cta rounded'>
          <p className='text-sm'>
            <strong>Auto-Detection:</strong> Pass a phone number with country
            code (e.g., &quot;+919876543210&quot;) and the component automatically
            detects the country and formats the number. For shared codes (+1, +44),
            use <code>defaultCountry</code> to disambiguate.
          </p>
        </div>
        {phoneNumbers.map((item) => (
          <PhoneInput
            key={item.phone}
            value={item.phone}
            label={`${item.label}: ${item.phone}`}
          />
        ))}
      </div>
    );
  },
};
