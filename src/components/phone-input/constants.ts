import {
  parsePhoneNumberFromString,
  formatIncompletePhoneNumber,
  type CountryCode,
} from 'libphonenumber-js';
import { COUNTRY_CODES } from './countryCodes';
import { InputWithSlots } from '../input/InputWithSlots';

export type PhoneInputProps = Omit<
  Parameters<typeof InputWithSlots>[0],
  'onChange' | 'value'
> & {
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

export const toDigits = (val: string) =>
  val.replace(/\D/g, '').slice(0, 15);


export const formatNumber = (
  nationalNumber: string,
  countryCode: CountryCode
): string => {
  if (!nationalNumber) return '';
  return formatIncompletePhoneNumber(nationalNumber, countryCode);
};

export const detectCountry = (
  input: string,
  preferredCountry?: CountryCode
): CountryData | undefined => {
  if (!input.startsWith('+')) return undefined;

  let countryCode: CountryCode | undefined;

  try {
    const parsed = parsePhoneNumberFromString(input, preferredCountry);
    if (parsed) {
      countryCode = parsed.country;
      if (!countryCode && typeof parsed.getPossibleCountries === 'function') {
        const possible = parsed.getPossibleCountries();
        if (possible.length > 0) {
          const pref = preferredCountry
            ? COUNTRY_CODES.find((c) => c.code === preferredCountry)
            : undefined;
          const preferredMatchesValue =
            pref && input.startsWith(pref.dial_code);

          countryCode =
            preferredMatchesValue &&
            possible.includes(preferredCountry as CountryCode)
              ? (preferredCountry as CountryCode)
              : possible[0];
        }
      }
    }
  } catch {
    console.error('Phone detectCountry parse failed:',input)  }

  if (countryCode) {
    return COUNTRY_CODES.find((c) => c.code === countryCode);
  }
  // When detection fails (e.g. "+1" only), prefer preferredCountry if it matches
  if (preferredCountry) {
    const pref = COUNTRY_CODES.find((c) => c.code === preferredCountry);
    if (pref && input.startsWith(pref.dial_code)) {
      return pref;
    }
  }
  return undefined;
};


export const parseInput = (
  input: string,
  fallback: CountryData,
  preferredCountry?: CountryCode
) => {
  if (input.startsWith('+')) {
    const pref = (preferredCountry ?? fallback.code)
      ? COUNTRY_CODES.find(
          (c) => c.code === (preferredCountry ?? fallback.code)
        )
      : undefined;
    const preferredMatchesValue = pref && input.startsWith(pref.dial_code);
    const effectivePreferred = preferredMatchesValue
      ? (preferredCountry ?? (fallback.code as CountryCode))
      : undefined;

    const detected = detectCountry(input, effectivePreferred);
    const country = detected || fallback;

    const dialCodeLength = country.dial_code.length;
    const nationalPart = input.slice(dialCodeLength);

    if (!nationalPart || nationalPart.trim() === '') {
      return { country, phoneNumber: '' };
    }

    const nationalDigits = toDigits(nationalPart);
    return { country, phoneNumber: nationalDigits };
  }
  return { country: fallback, phoneNumber: toDigits(input) };
};
