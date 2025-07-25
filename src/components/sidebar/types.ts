import { ComponentType } from "react";

export type SidebarItem = {
  label: string;
  link?: string;
  hidden?: boolean;
  items?: SidebarItem[];
};

export type SideBarProps = {
  items: SidebarItem[];
  location: string;
  LinkComponent: ComponentType<any>;
  rightArrow?: ComponentType<{ className?: string }>;
  downArrow?: ComponentType<{ className?: string }>;
  className?: {
    menuClass?: string;
    menuLinkClass?: string;
  };
};

export type IconType = ComponentType<{ className?: string }>;
