import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const customTailwindMerge = extendTailwindMerge({ prefix: '~' });
export function cn(...inputs: ClassValue[]) {
  return customTailwindMerge(clsx(inputs));
}

// literally just for dev in case you want class sorting can be used in a variable
export function tw(x: string) {
  return x;
}
