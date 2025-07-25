import { ComponentType, FC } from "react";
import { SidebarItem } from "./types";
import { SideBarItem } from "./sidebar-item";

type Props = {
  items: SidebarItem[];
  location: string;
  openSections: Record<string, boolean>;
  toggleSection: (label: string) => void;
  LinkComponent: ComponentType<any>;
  className?: {
    menuClass?: string;
    menuLinkClass?: string;
  };
  rightArrow: any;
  downArrow: any;
};

export const SideBarItemList: FC<Props> = ({
  items,
  location,
  openSections,
  toggleSection,
  LinkComponent,
  className,
  rightArrow,
  downArrow,
}) => {
  return (
    <ul className="~mt-2 ~ml-1 ~border-l ~border-gray-200 ~space-y-2 ~text-[14px]">
      {items.map((child, key) => (
        <li key={child.label + key}>
          <SideBarItem
            item={child}
            location={location}
            openSections={openSections}
            toggleSection={toggleSection}
            LinkComponent={LinkComponent}
            className={className}
            rightArrow={rightArrow}
            downArrow={downArrow}
          />
        </li>
      ))}
    </ul>
  );
};
