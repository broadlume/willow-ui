import { FC } from 'react';
import { cn } from '@src/lib/utils';

type SidebarLinkProps = {
  to: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
  hasChildren?: boolean;
  onMenuClick: (props: {
    to: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
  }) => JSX.Element;
  className?: string;
};

export const SidebarLink: FC<SidebarLinkProps> = ({
  to,
  label,
  isActive,
  onClick,
  hasChildren = false,
  onMenuClick,
  className = ''
}) => {
  const linkClass = cn(
    'w-48 hover:text-violet-600',
    {
      'h-[34px] flex items-center py-1 px-[15px]': hasChildren,
      'h-6 block transition-colors duration-150 font-bold': !hasChildren,
      'pl-[11px] border-l-[4px] border-l-indigo-600 text-indigo-600': hasChildren && isActive,
      'pl-[15px]': hasChildren && !isActive,
      'text-indigo-600': !hasChildren && isActive,
    },
    className
  );

  return onMenuClick({
    to,
    onClick,
    className: linkClass,
    children: label,
  });
};
