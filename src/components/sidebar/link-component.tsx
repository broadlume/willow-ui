// LinkComponent.tsx
import React from 'react';

export const LinkComponent: React.FC<{ to: string; className?: string; children: React.ReactNode;onClick?: () => void }> = ({ to, className, children, onClick }) => {
  return (
    <a
      href={to}
      className="~w-48 ~h-[34px] ~flex ~items-center ~py-1 ~pl-[11px] ~px-[15px] ~border-l-[4px] ~border-l-indigo-600 ~text-indigo-600 hover:~text-violet-600"
    >      {children}
    </a>
  );
};
