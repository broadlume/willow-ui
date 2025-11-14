import { createContext, useContext } from 'react';
import invariant from 'tiny-invariant';
import { BoardContextValue } from './types';

export const BoardContext = createContext<BoardContextValue | null>(null);

export function useBoardContext(): BoardContextValue {
  const context = useContext(BoardContext);
  invariant(context, 'useBoardContext must be used within a BoardProvider');
  return context;
}
