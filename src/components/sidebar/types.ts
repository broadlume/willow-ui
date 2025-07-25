export type SidebarItem = {
  label: string;
  link?: string;
  hidden?: boolean;
  items?: SidebarItem[];
};

export type SideBarProps = {
  items: SidebarItem[];
  location: string;
  LinkComponent: React.ComponentType<any>;
  rightArrow?: any;
  downArrow?: any;
  className?: {
    menuClass?: string;
    menuLinkClass?: string;
  };
};
