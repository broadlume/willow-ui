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
  className = '',
}) => {
  const linkClass = cn(
    'w-48 hover:text-text-brand',
    {
      'h-8 flex items-center py-1 px-4': hasChildren,
      'h-6 block transition-colors duration-150 font-semibold': !hasChildren,
      'border-l-4 border-l-text-brand text-text-brand': hasChildren && isActive,
      'pl-4': hasChildren && !isActive,
      'text-text-brand': !hasChildren && isActive,
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
