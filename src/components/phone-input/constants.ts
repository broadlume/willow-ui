import { z } from 'zod';
import { AsYouType, parsePhoneNumber, parseDigits, CountryCode } from 'libphonenumber-js';
import { COUNTRY_CODES } from './countryCodes';
import React from 'react';

export interface PhoneInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  value?: string;
  onChange?: (value: string) => void;
  onCountryChange?: (countryCode: string) => void;
  defaultCountry?: string;
  showFlag?: boolean;
  label?: string;
  error?: string;
  dirty?: boolean;
  invalid?: boolean;
  postfixSlot?: React.ReactNode;
  classes?: {
    labelClass?: string;
    textFieldWrapClass?: string;
    inputClass?: string;
  };
  tooltip?: JSX.Element;
  wrapperProps?: React.HTMLAttributes<HTMLDivElement>;
}

export type CountryData = (typeof COUNTRY_CODES)[0];

export interface CountryListProps {
  countries: CountryData[];
  showFlag: boolean;
  onSelect: (country: CountryData) => void;
}

export interface CountryDisplayProps {
  country: CountryData;
  showFlag: boolean;
  showName?: boolean;
  showDialCode?: boolean;
  flagClassName?: string;
  nameClassName?: string;
  dialCodeClassName?: string;
}

export const usPhoneSchema = z.string().length(10, 'US phone number must be 10 digits');
export const otherPhoneSchema = z.string().min(5, 'Phone number must be at least 5 digits').max(15, 'Phone number cannot exceed 15 digits');

export const toDigits = (val: string) => parseDigits(val).slice(0, 15);

export const extractNationalNumber = (input: string, countryCode: CountryCode): string => {
  const asYouType = new AsYouType(countryCode);
  asYouType.input(input);
  return asYouType.getNationalNumber() || parseDigits(input);
};

export const formatNumber = (nationalNumber: string, countryCode: CountryCode): string => {
  if (!nationalNumber) return '';
  return new AsYouType(countryCode).input(nationalNumber);
};

export const detectCountry = (input: string): CountryData | undefined => {
  if (!input.startsWith('+')) return undefined;

  let countryCode: CountryCode | undefined;

  try {
    const parsed = parsePhoneNumber(input);
    countryCode = parsed?.country;
  } catch (error) {
    console.error('Phone detectCountry parse failed:', error);
  }

  if (!countryCode) {
    const asYouType = new AsYouType();
    asYouType.input(input);
    countryCode = asYouType.getCountry();
  }

  return countryCode ? COUNTRY_CODES.find((c) => c.code === countryCode) : undefined;
};

export const parseInput = (input: string, fallback: CountryData) => {
  if (input.startsWith('+')) {
    const detected = detectCountry(input);
    const country = detected || fallback;
    return {
      country,
      phoneNumber: toDigits(extractNationalNumber(input, country.code as CountryCode)),
    };
  }
  return { country: fallback, phoneNumber: toDigits(input) };
};
