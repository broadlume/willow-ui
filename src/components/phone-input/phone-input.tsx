import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { InputWithSlots } from '@components/input/InputWithSlots';
import {
  Command,
  CommandInput,
  CommandList,
} from '@components/command/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@components/popover/popover';
import { COUNTRY_CODES, DEFAULT_COUNTRY_CODE } from './countryCodes';
import classNames from 'classnames';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi2';
import { z } from 'zod';
import { AsYouType, parsePhoneNumber, parseDigits, CountryCode } from 'libphonenumber-js';

interface PhoneInputProps {
  value?: string;
  onChange?: (value: string) => void;
  onCountryChange?: (countryCode: string) => void;
  defaultCountry?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  showFlag?: boolean;
}

type CountryData = (typeof COUNTRY_CODES)[0];

const usPhoneSchema = z.string().length(10, 'US phone number must be 10 digits');
const otherPhoneSchema = z.string().min(5, 'Phone number must be at least 5 digits').max(15, 'Phone number cannot exceed 15 digits');

const toDigits = (val: string) => parseDigits(val).slice(0, 15);

const extractNationalNumber = (input: string, countryCode: CountryCode): string => {
  const asYouType = new AsYouType(countryCode);
  asYouType.input(input);
  return asYouType.getNationalNumber() || parseDigits(input);
};

const formatNumber = (nationalNumber: string, countryCode: CountryCode): string => {
  if (!nationalNumber) return '';
  return new AsYouType(countryCode).input(nationalNumber);
};

const detectCountry = (input: string): CountryData | undefined => {
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

const parseInput = (input: string, fallback: CountryData) => {
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

const PhoneInput: React.FC<PhoneInputProps> = ({
  value = '',
  onChange,
  onCountryChange,
  defaultCountry = DEFAULT_COUNTRY_CODE,
  placeholder = 'Enter phone number',
  disabled = false,
  className = '',
  showFlag = true,
}) => {
  const defaultCountryData = useMemo(
    () => COUNTRY_CODES.find((c) => c.code === defaultCountry) || COUNTRY_CODES[0],
    [defaultCountry]
  );

  const [selectedCountry, setSelectedCountry] = useState<CountryData>(() => parseInput(value, defaultCountryData).country);
  const [phoneNumber, setPhoneNumber] = useState(() => parseInput(value, defaultCountryData).phoneNumber);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const next = parseInput(value, defaultCountryData);
    setSelectedCountry((prev) => (prev.code === next.country.code ? prev : next.country));
    setPhoneNumber((prev) => (prev === next.phoneNumber ? prev : next.phoneNumber));
  }, [value, defaultCountryData]);

  const formattedNumber = useMemo(
    () => formatNumber(phoneNumber, selectedCountry.code as CountryCode),
    [phoneNumber, selectedCountry.code]
  );

  const filteredCountries = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return COUNTRY_CODES;
    return COUNTRY_CODES.filter(
      (c) =>
        c.name.toLowerCase().includes(query) ||
        c.dial_code.includes(searchTerm) ||
        c.code.toLowerCase().includes(query)
    );
  }, [searchTerm]);

  const validate = useCallback((number: string, countryCode: string) => {
    if (!number) {
      setError('');
      return;
    }

    try {
      const parsed = parsePhoneNumber(number, countryCode as CountryCode);
      if (parsed?.isValid()) {
        setError('');
        return;
      }
    } catch (error) {
      console.warn('Phone validate parse failed:', error);
    }

    const schema = countryCode === 'US' ? usPhoneSchema : otherPhoneSchema;
    const result = schema.safeParse(number);
    setError(result.success ? '' : result.error.errors[0].message);
  }, []);

  useEffect(() => {
    validate(phoneNumber, selectedCountry.code);
  }, [phoneNumber, selectedCountry.code, validate]);

  const handleCountrySelect = (country: CountryData) => {
    setSelectedCountry(country);
    setIsOpen(false);
    setSearchTerm('');
    onCountryChange?.(country.code);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = toDigits(e.target.value);
    setPhoneNumber(digits);
    onChange?.(`${selectedCountry.dial_code}${digits}`);
  };

  return (
      <InputWithSlots
        error={error}
        type='tel'
        value={formattedNumber || phoneNumber}
        onChange={handlePhoneChange}
        placeholder={placeholder}
        disabled={disabled}
        className={classNames('pl-1', className)}
        prefixSlot={
          <Popover open={isOpen} onOpenChange={(open) => { setIsOpen(open); if (!open) setSearchTerm(''); }}>
            <PopoverTrigger asChild>
              <button
                className='flex items-center gap-1 px-2 py-1 border-r border-border-sec disabled:opacity-50 disabled:cursor-not-allowed'
                disabled={disabled}
              >
                {showFlag && <span className='text-base'>{selectedCountry.flag}</span>}
                <span className='text-sm font-medium'>{selectedCountry.dial_code}</span>
                {isOpen ? (
                  <HiChevronUp className='h-4 w-4 opacity-50' />
                ) : (
                  <HiChevronDown className='h-4 w-4 opacity-50' />
                )}
              </button>
            </PopoverTrigger>
            <PopoverContent className='w-75 p-0' align='start'>
              <Command>
                <CommandInput
                  placeholder='Search country...'
                  onValueChange={setSearchTerm}
                  value={searchTerm}
                />
                <CommandList className='max-h-75'>
                  {filteredCountries.length > 0 ? (
                    <div className='px-2 py-1.5'>
                      {filteredCountries.map((country) => (
                        <div
                          key={country.code}
                          className='flex items-center gap-2 px-2 py-1.5 rounded-sm cursor-pointer'
                          onClick={() => handleCountrySelect(country)}
                        >
                          {showFlag && <span className='text-lg'>{country.flag}</span>}
                          <span className='flex-1 text-sm'>{country.name}</span>
                          <span className='text-sm text-text-pri'>{country.dial_code}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className='py-6 text-center text-sm'>No country found.</div>
                  )}
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        }
      />
  );
};

export { PhoneInput }
