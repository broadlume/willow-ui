import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@components/accordion/accordion';
import { RadioFilterConfig } from '../types';

interface RadioFilterItemProps {
  config: RadioFilterConfig;
  selectedValue: string | null;
  onRadioChange: (key: string, value: string) => void;
}

export const RadioFilterItem = ({
  config,
  selectedValue,
  onRadioChange,
}: RadioFilterItemProps) => {
  const { key, label, options } = config;

  return (
    <AccordionItem
      key={key}
      value={key}
      data-testid={`${key}-accordion-item`}
      className='w-full border-b border-border-sec px-1 py-1'
    >
      <AccordionTrigger
        className='flex items-center justify-between py-2 text-sm font-normal text-text-pri hover:no-underline'
        caretClasses='h-2 w-4 text-icon-pri'
      >
        <div className='flex w-full items-center justify-between'>
          <div className='flex items-center gap-2'>
            <span>{label}</span>
          </div>
          {/* Show selected option label if any */}
          {selectedValue && (
            <span className='text-xs text-text-sec truncate max-w-24'>
              {options.find((opt) => opt.value === selectedValue)?.label}
            </span>
          )}
        </div>
      </AccordionTrigger>

      <AccordionContent className='space-y-1 pb-3'>
        {options.map((option) => (
          <label
            key={option.value}
            className='flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 hover:bg-surface-sec'
            data-testid={`${key}-radio-option-${option.value}`}
          >
            <input
              type='radio'
              name={key}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => onRadioChange(key, option.value)}
              className='h-4 w-4 cursor-pointer accent-surface-cta'
            />
            <span className='text-sm text-text-pri'>{option.label}</span>
          </label>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};
