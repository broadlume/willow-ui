import { z } from 'zod';
import {
  getCountries,
  getCountryCallingCode,
  type CountryCode,
} from 'libphonenumber-js';

/**
 * Converts ISO 3166-1 alpha-2 country code to flag emoji using regional indicator symbols.
 * e.g. "US" -> "🇺🇸", "CA" -> "🇨🇦"
 */
function countryCodeToFlag(code: string): string {
  if (code.length !== 2) return '';
  return [...code]
    .map((char) => String.fromCodePoint(0x1f1e6 - 65 + char.charCodeAt(0)))
    .join('');
}

/**
 * Get display name for country using Intl API (no extra dependency).
 */
function getCountryName(code: string): string {
  try {
    return new Intl.DisplayNames(['en'], { type: 'region' }).of(code) ?? code;
  } catch {
    return code;
  }
}

export type CountryData = {
  name: string;
  flag: string;
  code: string;
  dial_code: string;
};

/**
 * Build country list from libphonenumber-js metadata.
 */
function buildCountryList(): CountryData[] {
  const countries = getCountries();
  return countries
    .map((code: CountryCode) => ({
      code,
      name: getCountryName(code),
      flag: countryCodeToFlag(code),
      dial_code: `+${getCountryCallingCode(code)}`,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export const COUNTRY_CODES = buildCountryList();

export const DEFAULT_COUNTRY_CODE = 'US';

export const PHONE_VALIDATION: Record<string, z.ZodSchema> = {
  US: z.string().length(10, 'US phone number must be 10 digits'),
  CA: z.string().length(10, 'Canada phone number must be 10 digits'),
  IN: z.string().length(10, 'India phone number must be 10 digits'),
};

export const DEFAULT_PHONE_SCHEMA = z
  .string()
  .min(5, 'Phone number must be at least 5 digits')
  .max(15, 'Phone number cannot exceed 15 digits');

export const getValidationForCountry = (countryCode: string) => {
  return PHONE_VALIDATION[countryCode] || DEFAULT_PHONE_SCHEMA;
};
