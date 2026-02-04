import { ComponentType, ReactNode } from 'react';

export type SidebarItemProps = {
  label: string;
  link?: string;
  links?: string[]; // Support for multiple links
  hidden?: boolean;
  items?: SidebarItemProps[];
  linkPattern?: string; // Support for regex pattern matching
  openInNewTab?: boolean; // Flag to indicate if the link should open in a new tab
};

export type SidebarProps = {
  items: SidebarItemProps[];
  location: string;
  onMenuClick: (props: {
    to: string;
    children: ReactNode;
    className?: string;
    onClick?: () => void;
    openInNewTab?: boolean;
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
