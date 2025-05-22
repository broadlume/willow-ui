import React from 'react';
import { cn } from '@src/lib/utils';

interface InputWithSlotsProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  prefixSlot?: React.ReactNode;
  postfixSlot?: React.ReactNode;
  labelClass?: string;
  inputWrapClass?: string;
  textFieldWrapClass?: string;
  inputClass?: string;
  label?: string;
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
    inputWrapClass,
    textFieldWrapClass,
    labelClass,
    inputClass,
    label,
    ...inputProps
  }) => {
    return (
      <div className={cn('~flex ~flex-col', textFieldWrapClass)}>
        {label && (
          <label
            htmlFor='price'
            className={cn(
              '~mb-2 ~block ~text-sm/6 ~font-medium ~text-gray-900',
              labelClass
            )}
          >
            {label}
          </label>
        )}

        <div
          className={cn(
            '~flex ~items-stretch ~rounded-md ~border ~border-gray-300 ~bg-white ~shadow-sm ~outline-1 ~-outline-offset-1 ~outline-gray-300 ~transition-colors',
            inputWrapClass
          )}
        >
          {prefixSlot && prefixSlot}
          <input
            className={cn(
              '~block ~h-10 ~min-w-0 ~grow ~rounded-md ~py-0.5 ~text-base ~text-gray-900 placeholder:~text-gray-400 focus:~outline-none sm:~text-sm/6',
              ' placeholder:~text-input',
              prefixSlot ? '~px-1' : '~px-3',
              inputClass
            )}
            {...inputProps}
          />

          {postfixSlot && postfixSlot}
        </div>
      </div>
    );
  }
);

InputWithSlots.displayName = 'InputWithSlots';

export { InputWithSlots };
