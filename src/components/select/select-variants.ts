import { cva } from 'class-variance-authority';

const selectVariants = cva([
  'tw-reset flex h-9 w-full min-w-0 items-center justify-between rounded-md border border-border bg-surface-pri px-3 py-2 shadow-sm text-sm',
  'ring-offset-background',
  'data-[placeholder]:text-input',
  'focus:outline-none focus:ring-1 focus:ring-ring',
  'disabled:cursor-not-allowed disabled:opacity-50',
]);

export { selectVariants };
