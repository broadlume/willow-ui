// LinkComponent.tsx
import clsx from 'clsx';
import React from 'react';

type LinkComponentProps = {
  to: string;
  className?: string;
  children: React.ReactNode;
};

export const LinkComponent: React.FC<LinkComponentProps> = ({
  to,
  className,
  children,
}) => {
  return (
    <a
      href={to}
      className={clsx(
        "~w-48 ~h-[34px] ~flex ~items-center ~py-1 ~pl-[11px] ~px-[15px]",
        "~border-l-[4px] ~border-l-indigo-600",
        "~text-indigo-600 hover:~text-violet-600",
        className
      )}    >
      {children}
    </a>
  );
};
