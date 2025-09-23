import { cn } from '@src/lib/utils';
import clsx from 'clsx';
import React from 'react';
import { Input, InputProps } from './input';
import { HiExclamationCircle } from 'react-icons/hi2';

interface InputWithSlotsProps
  extends InputProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  prefixSlot?: React.ReactNode;
  postfixSlot?: React.ReactNode;
  classes?: {
    labelClass?: string;
    textFieldWrapClass?: string;
    inputClass?: string;
  };
  label?: string;
  tooltip?: JSX.Element;
  wrapperProps?: React.HTMLAttributes<HTMLDivElement>;
}

/**
 * InputWithSlots component props interface.
 *
 * @interface InputWithSlotsProps
 * @extends {React.InputHTMLAttributes<HTMLInputElement>}
 * @property {React.ReactNode} [prefixSlot] - Optional prefix slot to be rendered before the input.
 * @property {React.ReactNode} [postfixSlot] - Optional postfix slot to be rendered after the input.
 * @property {string} [labelClass] - Optional class name for the label.
 * @property {string} [inputWrapClass] - Optional class name for the input wrapper.
 * @property {string} [textFieldWrapClass] - Optional class name for the text field wrapper.
 * @property {string} [inputClass] - Optional class name for the input.
 * @property {string} [label] - Optional label text.
 */

/**
 * InputWithSlots component.
 *
 * @param {InputWithSlotsProps} props - The props for the InputWithSlots component.
 * @returns {JSX.Element} The rendered InputWithSlots component.
 *
 * @example
 * // Example usage of InputWithSlots component
 * <InputWithSlots
 *   prefixSlot={<span>$</span>}
 *   postfixSlot={<span>.00</span>}
 *   label="Price"
 *   inputProps={{ placeholder: "Enter price" }}
 * />
 */
const InputWithSlots = React.forwardRef<HTMLInputElement, InputWithSlotsProps>(
  ({
    prefixSlot,
    postfixSlot,
    classes = {
      textFieldWrapClass: '',
      labelClass: '',
      inputClass: '',
    },
    tooltip,
    label,
    wrapperProps,
    ...inputProps
  }) => {
    return (
      <div className={cn('flex flex-col', classes?.textFieldWrapClass)}>
        {label && (
          <label
            htmlFor='price'
            className={cn(
              'mb-2 text-base font-normal text-text-pri items-center flex',
              classes?.labelClass
            )}
          >
            {label}
            {inputProps.required && (
              <span className='text-text-destructive'>*</span>
            )}

            {tooltip}
          </label>
        )}

        <div
          {...wrapperProps}
          className={cn(
            'flex items-center rounded-md border border-border-sec bg-surface-pri text-sm px-2 gap-1',
            'placeholder:text-text-opt',
            'hover:border-border-opt',
            '[&:has(input:focus)]:border-border-opt focus-visible:outline-none focus-visible:ring-0',
            inputProps.error &&
              '[&:not(:has(input:focus))]:outline-destructive',
            {
              'bg-(--color-blue-50)': inputProps.dirty && !inputProps.invalid,
              'border-border-destructive hover:border-border-destructive':
                inputProps.invalid,
              'pl-3': !prefixSlot,
            },
            inputProps.disabled ? 'cursor-not-allowed bg-surface-sec' : '',
            wrapperProps?.className
          )}
        >
          {prefixSlot && prefixSlot}
          <Input
            {...inputProps}
            className={clsx(
              'flex-1 border-0 bg-transparent p-0 disabled:bg-transparent',
              'shadow-none focus-visible:outline-hidden focus-visible:ring-0',
              inputProps?.className
            )}
          />

          {postfixSlot && postfixSlot}
        </div>

        {inputProps?.error ? (
          <div
            data-testid='slots-error'
            className='mt-1 text-xs font-normal flex flex-row items-center gap-1 text-text-destructive'
          >
            <HiExclamationCircle className='h-3 w-3' />
            {inputProps?.error}
          </div>
        ) : null}
      </div>
    );
  }
);

InputWithSlots.displayName = 'InputWithSlots';

export { InputWithSlots };
