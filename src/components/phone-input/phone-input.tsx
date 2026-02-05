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
import { parsePhoneNumber, CountryCode } from 'libphonenumber-js';
import {
  PhoneInputProps,
  CountryData,
  CountryListProps,
  CountryDisplayProps,
  getPhoneSchema,
  toDigits,
  formatNumber,
  parseInput,
} from './constants';

const CountryDisplay: React.FC<CountryDisplayProps> = ({
  country,
  showFlag,
  showName = false,
  showDialCode = false,
  flagClassName = 'text-base',
  nameClassName = 'flex-1 text-sm',
  dialCodeClassName = 'text-sm text-text-pri',
}) => (
  <>
    {showFlag && <span className={flagClassName}>{country.flag}</span>}
    {showName && <span className={nameClassName}>{country.name}</span>}
    {showDialCode && <span className={dialCodeClassName}>{country.dial_code}</span>}
  </>
);

const CountryList: React.FC<CountryListProps> = ({
  countries,
  showFlag,
  onSelect,
}) => {
  if (countries.length === 0) {
    return <div className='py-6 text-center text-sm'>No country found.</div>;
  }

  return (
    <div className='px-2 py-1.5'>
      {countries.map((country) => (
        <div
          key={country.code}
          className='flex items-center gap-2 px-2 py-1.5 rounded-sm cursor-pointer'
          onClick={() => onSelect(country)}
        >
          <CountryDisplay 
            country={country} 
            showFlag={showFlag} 
            showName 
            showDialCode
            flagClassName='text-lg'
          />
        </div>
      ))}
    </div>
  );
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
  error: externalError,
  ...additionalProps
}) => {
  const defaultCountryData = useMemo(
    () => COUNTRY_CODES.find((c) => c.code === defaultCountry) || COUNTRY_CODES[0],
    [defaultCountry]
  );

  const [selectedCountry, setSelectedCountry] = useState<CountryData>(() => parseInput(value, defaultCountryData).country);
  const [phoneNumber, setPhoneNumber] = useState(() => parseInput(value, defaultCountryData).phoneNumber);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [internalError, setInternalError] = useState('');

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
      setInternalError('');
      return;
    }

    try {
      const parsed = parsePhoneNumber(number, countryCode as CountryCode);
      if (parsed?.isValid()) {
        setInternalError('');
        return;
      }
    } catch (error) {
      console.warn('Phone validate parse failed:', error);
    }

    const schema = getPhoneSchema(countryCode);
    const result = schema.safeParse(number);
    setInternalError(result.success ? '' : result.error.errors[0].message);
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

  const displayError = externalError || internalError;

  return (
      <InputWithSlots
        {...additionalProps}
        error={displayError}
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
                <CountryDisplay 
                  country={selectedCountry} 
                  showFlag={showFlag} 
                  showDialCode 
                  dialCodeClassName='text-sm font-medium'
                />
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
                  <CountryList
                    countries={filteredCountries}
                    showFlag={showFlag}
                    onSelect={handleCountrySelect}
                  />
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        }
      />
  );
};

export { PhoneInput }
