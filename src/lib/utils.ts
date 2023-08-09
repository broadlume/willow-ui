import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const customTailwindMerge = extendTailwindMerge({ prefix: '~' });

export function cn(...inputs: ClassValue[]) {
  return customTailwindMerge(clsx(inputs));
}

export function getRandomAvatar(seed: string) {
  return `https://api.dicebear.com/6.x/lorelei/svg?seed=${seed}&backgroundColor=E8E8E8&translateY=4`;
}
