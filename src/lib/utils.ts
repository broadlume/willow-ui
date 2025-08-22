import { clsx, type ClassValue } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const customTailwindMerge = extendTailwindMerge({ prefix: '' });

export function cn(...inputs: ClassValue[]) {
  return customTailwindMerge(clsx(inputs));
}

export function getRandomAvatar(seed: string) {
  return `https://api.dicebear.com/6.x/lorelei/svg?seed=${seed}&backgroundColor=E8E8E8&translateY=4`;
}

export function generateUntypeableId(length) {
  const privateUseAreaStart = 0xe000;
  const privateUseAreaEnd = 0xf8ff;
  let id = '';

  for (let i = 0; i < length; i++) {
    const codePoint =
      Math.floor(
        Math.random() * (privateUseAreaEnd - privateUseAreaStart + 1)
      ) + privateUseAreaStart;
    id += String.fromCharCode(codePoint);
  }

  return id;
}
