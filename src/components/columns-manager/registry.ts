import type { CleanupFn } from '@atlaskit/pragmatic-drag-and-drop/types';

interface Entry {
  element: HTMLElement;
}

interface Registry<TKey> {
  register: (key: TKey, entry: Entry) => CleanupFn;
  get: (key: TKey) => Entry | undefined;
  keys: () => TKey[];
}

export function createRegistry<
  TKey extends string | number | symbol
>(): Registry<TKey> {
  const map = new Map<TKey, Entry>();

  return {
    register: (key: TKey, entry: Entry): CleanupFn => {
      map.set(key, entry);
      return () => {
        map.delete(key);
      };
    },
    get: (key: TKey): Entry | undefined => {
      return map.get(key);
    },
    keys: (): TKey[] => {
      return Array.from(map.keys());
    },
  };
}
