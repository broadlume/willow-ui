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
import { AsYouType, parsePhoneNumber, CountryCode } from 'libphonenumber-js';

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

const toDigits = (val: string) => val.replace(/\D/g, '').slice(0, 15);

const extractNationalNumber = (input: string, country: CountryData): string => {
  const clean = input.replace(/[^0-9+]/g, '');
  if (clean.startsWith(country.dial_code)) {
    return clean.slice(country.dial_code.length);
  }
  return clean.replace(/^\+/, '');
};

const formatNumber = (nationalNumber: string, countryCode: string): string => {
  if (!nationalNumber) return '';
  return new AsYouType(countryCode as CountryCode).input(nationalNumber);
};

const detectCountry = (input: string): CountryData | undefined => {
  if (!input.startsWith('+')) return undefined;

  try {
    const parsed = parsePhoneNumber(input);
    if (parsed?.country) {
      return COUNTRY_CODES.find((c) => c.code === parsed.country);
    }
  } catch (error) {
    console.warn('Phone detectCountry strict parse failed:', error);
  }

  try {
    const asYouType = new AsYouType();
    asYouType.input(input);
    const countryCode = asYouType.getCountry();
    if (countryCode) {
      return COUNTRY_CODES.find((c) => c.code === countryCode);
    }
  } catch (error) {
    console.warn('Phone detectCountry heuristic failed:', error);
  }

  return undefined;
};

const deriveState = (input: string, fallback: CountryData) => {
  if (input.startsWith('+')) {
    const detected = detectCountry(input);
    if (detected) {
      return {
        country: detected,
        phoneNumber: toDigits(extractNationalNumber(input, detected)),
      };
    }
    return {
      country: fallback,
      phoneNumber: toDigits(extractNationalNumber(input, fallback)),
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

  const [selectedCountry, setSelectedCountry] = useState<CountryData>(() => deriveState(value, defaultCountryData).country);
  const [phoneNumber, setPhoneNumber] = useState(() => deriveState(value, defaultCountryData).phoneNumber);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const next = deriveState(value, defaultCountryData);
    setSelectedCountry((prev) => (prev.code === next.country.code ? prev : next.country));
    setPhoneNumber((prev) => (prev === next.phoneNumber ? prev : next.phoneNumber));
  }, [value, defaultCountryData]);

  const formattedNumber = useMemo(
    () => formatNumber(phoneNumber, selectedCountry.code),
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
    <div className={classNames(className)}>
      <InputWithSlots
        error={error}
        type='tel'
        value={formattedNumber || phoneNumber}
        onChange={handlePhoneChange}
        placeholder={placeholder}
        disabled={disabled}
        className='pl-1'
        prefixSlot={
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
              <button
                className='flex items-center gap-1 px-2 py-1 border-r border-border-sec disabled:opacity-50 disabled:cursor-not-allowed'
                disabled={disabled}
              >
                {showFlag && <span className='text-base'>{selectedCountry.flag}</span>}
                <span className='text-sm font-medium'>{selectedCountry.dial_code}</span>
                {isOpen ? (
                  <HiChevronUp className='h-3 w-3 opacity-50' />
                ) : (
                  <HiChevronDown className='h-3 w-3 opacity-50' />
                )}
              </button>
            </PopoverTrigger>
            <PopoverContent className='w-[300px] p-0' align='start'>
              <Command>
                <CommandInput
                  placeholder='Search country...'
                  onValueChange={setSearchTerm}
                  value={searchTerm}
                />
                <CommandList className='max-h-[300px]'>
                  {filteredCountries.length > 0 ? (
                    <div className='px-2 py-1.5'>
                      {filteredCountries.map((country) => (
                        <div
                          key={country.code}
                          className='flex items-center gap-2 px-2 py-1.5 hover:bg-slate-100 rounded-sm cursor-pointer'
                          onClick={() => handleCountrySelect(country)}
                        >
                          {showFlag && <span className='text-lg'>{country.flag}</span>}
                          <span className='flex-1 text-sm'>{country.name}</span>
                          <span className='text-sm text-muted-foreground'>{country.dial_code}</span>
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
    </div>
  );
};

export { PhoneInput };
