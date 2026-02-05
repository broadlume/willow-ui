import { AsYouType, parsePhoneNumber, CountryCode } from 'libphonenumber-js';
import { COUNTRY_CODES } from './countryCodes';
import { InputWithSlots } from '../input/InputWithSlots';

export type PhoneInputProps = Parameters<typeof InputWithSlots>[0] & {
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

export const toDigits = (val: string) => val.replace(/\D/g, '').slice(0, 15);

export const extractNationalNumber = (
  input: string,
  countryCode: CountryCode
): string => {
  const asYouType = new AsYouType(countryCode);
  asYouType.input(input);
  return asYouType.getNationalNumber() || toDigits(input);
};

export const formatNumber = (
  nationalNumber: string,
  countryCode: CountryCode
): string => {
  if (!nationalNumber) return '';

  const asYouType = new AsYouType(countryCode);
  const formatted = asYouType.input(nationalNumber);

  if (formatted === nationalNumber && nationalNumber.length > 5) {
    try {
      const phoneNumber = parsePhoneNumber(nationalNumber, countryCode);
      if (phoneNumber?.isValid()) {
        return phoneNumber.format('NATIONAL');
      }
    } catch (e) {
      console.log(e);
    }
  }

  return formatted;
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

  return countryCode
    ? COUNTRY_CODES.find((c) => c.code === countryCode)
    : undefined;
};

export const parseInput = (input: string, fallback: CountryData) => {
  if (input.startsWith('+')) {
    const detected = detectCountry(input);
    const country = detected || fallback;
    return {
      country,
      phoneNumber: toDigits(
        extractNationalNumber(input, country.code as CountryCode)
      ),
    };
  }
  return { country: fallback, phoneNumber: toDigits(input) };
};
