import { ComponentType, ReactNode } from 'react';

export type SidebarItemProps = {
  label: string;
  link?: string;
  links?: string[]; // Support for multiple links
  linkPattern?: string; // Support for regex pattern matching
  hidden?: boolean;
  items?: SidebarItemProps[];
};

export type SidebarProps = {
  items: SidebarItemProps[];
  location: string;
  onMenuClick: (props: {
    to: string;
    children: ReactNode;
    className?: string;
    onClick?: () => void;
  }) => JSX.Element;
  rightArrow?: ComponentType<{ className?: string }>;
  downArrow?: ComponentType<{ className?: string }>;
  className?: {
    menuClass?: string;
    menuLinkClass?: string;
  };
  defaultParentOpen?: boolean;
  classNames?: {
    asideClassName?: string;
  };
};

export type IconType = ComponentType<{ className?: string }>;
