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
        '~w-48', // Common width
        {
          // Children-based layout
          '~h-[34px] ~flex ~items-center ~py-1 ~px-[15px]': hasChildren,
          '~h-6 ~block ~transition-colors ~duration-150 ~font-bold': !hasChildren,
          // Padding depending on active state
          '~pl-[11px] ~border-l-[4px] ~border-l-indigo-600 ~text-indigo-600': hasChildren && isActive,
          '~pl-[15px]': hasChildren && !isActive,

          // Active styling (for non-children)
          '~text-indigo-600': !hasChildren && isActive,
        },
        'hover:~text-violet-600',
        className
      )}
    >
      {label}
    </LinkComponent>
  );
};
