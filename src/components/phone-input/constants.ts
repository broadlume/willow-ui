import { z } from 'zod';
import { AsYouType, parsePhoneNumber, CountryCode } from 'libphonenumber-js';
import { COUNTRY_CODES, getValidationForCountry } from './countryCodes';
import { InputWithSlots } from '../input/InputWithSlots';

export type PhoneInputProps =  Parameters<typeof InputWithSlots>[0] & {
  value?: string;
  onChange?: (value: string) => void;
  onCountryChange?: (countryCode: string) => void;
  defaultCountry?: string;
  showFlag?: boolean;
};


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

export const getPhoneSchema = (countryCode: string) => {
  const { minDigits, maxDigits } = getValidationForCountry(countryCode);
  
  if (minDigits === maxDigits) {
    return z.string().length(minDigits, `Phone number must be ${minDigits} digits`);
  }
  
  return z.string()
    .min(minDigits, `Phone number must be at least ${minDigits} digits`)
    .max(maxDigits, `Phone number cannot exceed ${maxDigits} digits`);
};

export const toDigits = (val: string) => val.replace(/\D/g, '').slice(0, 15);

export const extractNationalNumber = (input: string, countryCode: CountryCode): string => {
  const asYouType = new AsYouType(countryCode);
  asYouType.input(input);
  return asYouType.getNationalNumber() || toDigits(input);
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
