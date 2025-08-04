import { cn } from '@src/lib/utils';
import clsx from 'clsx';
import React from 'react';
import { Input, InputProps } from './input';

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
const InputWithSlots = React.forwardRef<
  Parameters<typeof Input>[0],
  InputWithSlotsProps
>(
  ({
    prefixSlot,
    postfixSlot,
    classes = {
      textFieldWrapClass: '',
      labelClass: '',
      inputClass: '',
    },

    label,
    wrapperProps,
    ...inputProps
  }) => {
    return (
      <div className={cn('~flex ~flex-col', classes?.textFieldWrapClass)}>
        {label && (
          <label
            htmlFor='price'
            className={cn(
              '~mb-2 ~block ~text-sm ~font-normal ~text-text-pri',
              classes?.labelClass
            )}
          >
            {label}
          </label>
        )}

        <div
          {...wrapperProps}
          className={cn(
            '~flex ~items-stretch ~rounded-md ~border ~border-border-sec ~bg-surface-pri  ~text-sm',
            'placeholder:~text-text-opt',
            'hover:~border-border-opt',
            'focus-visible:~border-border-opt focus-visible:~outline-none focus-visible:~ring-0',
            inputProps.error &&
              '[&:not(:has(input:focus))]:~outline-destructive',
            {
              '~bg-[var(--color-blue-50)]':
                inputProps.dirty && !inputProps.invalid,
              '~border-border-destructive ~text-text-destructive':
                inputProps.invalid,
                '~pl-3': !prefixSlot,
            },
            inputProps.disabled ? '~cursor-not-allowed ~bg-surface-sec' : '',
            wrapperProps?.className
          )}
        >
          {prefixSlot && prefixSlot}
          <Input
            {...inputProps}
            className={clsx(
              '~flex-1 ~border-0 ~bg-transparent ~p-0 disabled:~bg-transparent',
              '~shadow-none focus-visible:~outline-none focus-visible:~ring-0',
              inputProps?.className
            )}
          />

          {postfixSlot && postfixSlot}
        </div>

        {inputProps?.error ? (
          <p className='~mt-1 ~text-xs ~font-normal ~text-text-destructive'>
            {inputProps?.error}
          </p>
        ) : null}
      </div>
    );
  }
);

InputWithSlots.displayName = 'InputWithSlots';

export { InputWithSlots };
