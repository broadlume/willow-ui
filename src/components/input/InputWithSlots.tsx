import { cn } from '@src/lib/utils';
import clsx from 'clsx';
import React from 'react';
import { Input } from './input';

interface InputWithSlotsProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
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
              '~mb-2 ~block ~text-sm/6 ~font-medium ~text-gray-900',
              classes?.labelClass
            )}
          >
            {label}
          </label>
        )}

        <div
          {...wrapperProps}
          className={cn(
            '~gap[12px] ~flex ~h-[32px] ~items-stretch ~rounded-md ~border ~border-gray-300 ~bg-white ~px-[12px] ~py-[4px] ~shadow-sm ~outline-1 ~-outline-offset-1 ~outline-gray-300 ~transition-colors',
            '[&:has(input:focus)]:~border-blue-500 [&:has(input:focus)]:~ring-1 [&:has(input:focus)]:~ring-ring', // Show ring and border on parent div if input is focused
            wrapperProps?.className
          )}
        >
          {prefixSlot && prefixSlot}
          <Input
            {...inputProps}
            className={clsx(
              '~flex-1 ~border-0 ~bg-transparent ~p-0',
              'focus-visible:~outline-none focus-visible:~ring-0',
              inputProps?.className
            )}
          />

          {postfixSlot && postfixSlot}
        </div>
      </div>
    );
  }
);

InputWithSlots.displayName = 'InputWithSlots';

export { InputWithSlots };
