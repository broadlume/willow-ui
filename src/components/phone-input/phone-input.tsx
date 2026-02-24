import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
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
import { Button } from '@components/button';
import {
  COUNTRY_CODES,
  DEFAULT_COUNTRY_CODE,
  getValidationForCountry,
} from './countryCodes';
import classNames from 'classnames';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi2';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import type { CountryCode } from 'libphonenumber-js';
import {
  PhoneInputProps,
  CountryData,
  CountryListProps,
  CountryDisplayProps,
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
    {showDialCode && (
      <span className={dialCodeClassName}>{country.dial_code}</span>
    )}
  </>
);

const CountryList: React.FC<CountryListProps> = ({
  countries,
  showFlag,
  onSelect,
}) => {
  if (!countries.length) {
    return <div className='py-6 text-center text-sm'>No country found.</div>;
  }

  return (
    <div className='px-2 py-1.5'>
      {countries.map((country) => (
        <div
          key={country.code}
          className='flex items-center gap-2 px-2 py-1.5 rounded-sm cursor-pointer hover:bg-surface-sec'
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
  defaultCountry,
  placeholder = 'Enter phone number',
  disabled = false,
  className = '',
  showFlag = true,
  error: externalError,
  ...additionalProps
}) => {
  const Default = defaultCountry ?? DEFAULT_COUNTRY_CODE;
  const defaultCountryData = useMemo(
    () =>
      COUNTRY_CODES.find((c) => c.code === Default) ||
      COUNTRY_CODES[0],
    [Default]
  );

  const [selectedCountry, setSelectedCountry] = useState<CountryData>(
    () =>
      parseInput(
        value,
        defaultCountryData,
        Default as CountryCode
      ).country
  );
  const [phoneNumber, setPhoneNumber] = useState(
    () =>
      parseInput(
        value,
        defaultCountryData,
        Default as CountryCode
      ).phoneNumber
  );
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [internalError, setInternalError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const userSelectedCountryRef = useRef<string | null>(null);

  // Sync from value prop - detect from number when loading saved E.164
  useEffect(() => {
    const preferred =
      (userSelectedCountryRef.current as CountryCode) ??
      (Default as CountryCode);
    const next = parseInput(value, defaultCountryData, preferred);
    setPhoneNumber((prev) =>
      prev === next.phoneNumber ? prev : next.phoneNumber
    );
    if (value && value.replace(/\D/g, '').length > 0) {
      setSelectedCountry((prev) =>
        prev.code === next.country.code ? prev : next.country
      );
    }
  }, [value, defaultCountryData, Default]);

  const formattedNumber = useMemo(
    () => formatNumber(phoneNumber, selectedCountry.code as CountryCode),
    [phoneNumber, selectedCountry.code]
  );

  const filteredCountries = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return COUNTRY_CODES;

    return COUNTRY_CODES.filter((c) => {
      const name = c.name.toLowerCase();
      return name.startsWith(query) || c.dial_code.includes(searchTerm);
    });
  }, [searchTerm]);

  const validate = useCallback((number: string, countryCode: string) => {
    if (!number) {
      setInternalError('');
      return;
    }

    const fullNumber = `${COUNTRY_CODES.find((c) => c.code === countryCode)?.dial_code ?? ''}${number}`;
    try {
      const parsed = parsePhoneNumberFromString(
        fullNumber,
        countryCode as CountryCode
      );
      if (parsed?.isValid()) {
        setInternalError('');
        return;
      }
    } catch {
      // ignore
    }

    const schema = getValidationForCountry(countryCode);
    const result = schema.safeParse(number);
    setInternalError(result.success ? '' : result.error.errors[0].message);
  }, []);

  useEffect(() => {
    validate(phoneNumber, selectedCountry.code);
  }, [phoneNumber, selectedCountry.code, validate]);

  const handleCountrySelect = (country: CountryData) => {
    userSelectedCountryRef.current = country.code;
    setSelectedCountry(country);
    setIsOpen(false);
    setSearchTerm('');
    onCountryChange?.(country.code);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const newDigits = toDigits(newValue);

    const fixedLengthCountries = ['US', 'CA', 'IN'];
    const maxDigits = fixedLengthCountries.includes(selectedCountry.code)
      ? 10
      : 15;
    if (newDigits.length > maxDigits) {
      return;
    }

    const currentFormatted = formatNumber(phoneNumber, selectedCountry.code as CountryCode);
    const deletedFormattingOnly =
      newDigits === phoneNumber &&
      newValue.length < currentFormatted.length;
    const digitsToSet = deletedFormattingOnly
      ? phoneNumber.slice(0, -1)
      : newDigits;

    setPhoneNumber(digitsToSet);

    const isFixedLengthCountry = fixedLengthCountries.includes(
      selectedCountry.code
    );
    const isValidLength =
      !isFixedLengthCountry || digitsToSet.length === 10;
    const valueToEmit =
      digitsToSet && isValidLength
        ? `${selectedCountry.dial_code}${digitsToSet}`
        : '';
    onChange?.(valueToEmit);
  };

  const displayError = externalError || internalError;

  return (
    <InputWithSlots
      ref={inputRef}
      {...additionalProps}
      error={displayError}
      type='tel'
      value={formattedNumber || phoneNumber}
      onChange={handlePhoneChange}
      placeholder={placeholder}
      disabled={disabled}
      className={classNames('pl-1 min-w-0', className)}
      prefixSlot={
        <div className='flex w-[5.5rem] shrink-0 items-center justify-center'>
          <Popover
            open={isOpen}
            onOpenChange={(open) => {
              setIsOpen(open);
              if (!open) setSearchTerm('');
            }}
          >
            <PopoverTrigger asChild>
              <Button
                type='button'
                variant='ghost'
                className='flex h-full w-full items-center justify-center gap-1 px-2 py-1 border-r border-border-sec rounded-none shadow-none bg-transparent hover:bg-transparent'
                disabled={disabled}
              >
                <CountryDisplay
                  country={selectedCountry}
                  showFlag={showFlag}
                  showDialCode
                  flagClassName='text-base mt-[1px]'
                  dialCodeClassName='text-sm font-medium'
                />
                {isOpen ? (
                  <HiChevronUp className='h-4 w-4 opacity-50' />
                ) : (
                  <HiChevronDown className='h-4 w-4 opacity-50' />
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-75 p-0' align='start'>
              <Command>
                <CommandInput
                  placeholder='Search country...'
                  onValueChange={setSearchTerm}
                  value={searchTerm}
                />
                <CommandList className='max-h-75 overflow-y-scroll [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-md [&::-webkit-scrollbar-thumb]:hover:bg-gray-400'>
                  <CountryList
                    countries={filteredCountries}
                    showFlag={showFlag}
                    onSelect={handleCountrySelect}
                  />
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      }
    />
  );
};

export { PhoneInput };
