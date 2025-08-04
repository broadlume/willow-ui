import { FC } from "react";
import { IconType, SidebarItemProps } from "../types";
import { SidebarItem } from "./sidebar-item";

type Props = {
  items: SidebarItemProps[];
  location: string;
  openSections: Record<string, boolean>;
  toggleSection: (label: string) => void;
  onMenuClick: (props: { to: string; children: React.ReactNode; className?: string; onClick?: () => void }) => JSX.Element;
  className?: {
    menuClass?: string;
    menuLinkClass?: string;
  };
  rightArrow: IconType;
  downArrow: IconType;
};

export const SidebarItemList: FC<Props> = ({
  items,
  location,
  openSections,
  toggleSection,
  onMenuClick,
  className,
  rightArrow,
  downArrow,
}) => {
  return (
    <ul className="mt-2 ml-1 border-l border-gray-200 space-y-2 text-[14px]">
      {items.map((child, key) => (
        <li key={child.label + key}>
          <SidebarItem
            item={child}
            location={location}
            openSections={openSections}
            toggleSection={toggleSection}
            onMenuClick={onMenuClick}
            className={className}
            rightArrow={rightArrow}
            downArrow={downArrow}
          />
        </li>
      ))}
    </ul>
  );
};
