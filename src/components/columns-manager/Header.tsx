import React from 'react';

export const Header = ({ children }: React.PropsWithChildren) => (
  <div className=''>
    <span
      className='uppercase text-text-opt text-xs font-medium tracking-[3.6px]'
      data-testid='column-name'
    >
      {children}
    </span>
  </div>
);
