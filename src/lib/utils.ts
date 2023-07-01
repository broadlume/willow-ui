import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// literally just for dev in case you want class sorting can be used in a variable
export function tw(x: string) {
  return x;
}
