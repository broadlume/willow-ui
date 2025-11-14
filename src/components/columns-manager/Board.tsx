import React, { useMemo } from 'react';
import { BoardContext } from './BoardContext';
import { Column } from './Column';
import { BoardProps } from './types';

export const Board: React.FC<BoardProps> = ({ contextValue, columns }) => {
  const memoizedContextValue = useMemo(() => contextValue, [contextValue]);

  return (
    <BoardContext.Provider value={memoizedContextValue}>
      <div className='gap-2 flex justify-center items-center flex-col'>
        {columns.map((column) => (
          <Column key={column.id} column={column} />
        ))}
      </div>
    </BoardContext.Provider>
  );
};

export default Board;
