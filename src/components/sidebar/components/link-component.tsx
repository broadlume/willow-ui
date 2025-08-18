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
        "w-48 h-8 flex items-center py-1 pl-3 px-4",
        "border-l-4 border-l-text-brand",
        "text-text-brand hover:text-text-brand",
        className
      )}>
      {children}
    </a>
  );
};
