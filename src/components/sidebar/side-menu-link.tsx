import React from 'react';
import { cn } from '@src/lib/utils';

type SideBarLinkProps = {
  to: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
  hasChildren?: boolean;
  LinkComponent: React.ComponentType<any>;
  className?: string;
};

export const SideBarLink: React.FC<SideBarLinkProps> = ({
  to,
  label,
  isActive,
  onClick,
  hasChildren = false,
  LinkComponent,
  className = ''
}) => {
  return (
    <LinkComponent
      to={to}
      onClick={onClick}
      className={cn(
        hasChildren
          ? isActive
            ? '~w-48 ~h-[34px] ~flex ~items-center ~py-1 ~pl-[11px] ~px-[15px] ~border-l-[4px] ~border-l-indigo-600 ~text-indigo-600'
            : '~w-48 ~h-[34px] ~flex ~items-center ~py-1 ~pl-[15px] ~px-[15px]'
          : '~w-48 ~h-6 ~block ~transition-colors ~duration-150 ~font-bold',
        isActive ? '~text-indigo-600' : '',
        'hover:~text-violet-600',
        className
      )}
    >
      {label}
    </LinkComponent>
  );
};
