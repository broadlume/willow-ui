import  { FC, useState } from "react";
import { HiChevronDown, HiChevronRight } from "react-icons/hi2";
import { SideBarSection } from "./sidebar-section";
import { SidebarItem, SideBarProps } from "./types";

const getInitialOpenSections = (pathname: string, items: SidebarItem[]): Record<string, boolean> => {
  const openSections: Record<string, boolean> = {};

  const traverse = (nodes: SidebarItem[], path: string[] = []): boolean => {
    for (const node of nodes) {
      if (node.link === pathname) {
        for (const label of path) openSections[label] = true;
        return true;
      }
      if (node.items?.length) {
        const found = traverse(node.items, [...path, node.label]);
        if (found) return true;
      }
    }
    return false;
  };

  traverse(items);
  return openSections;
};

export const SideBar: FC<SideBarProps> = ({
  items,
  location,
  LinkComponent,
  rightArrow = HiChevronRight,
  downArrow = HiChevronDown,
  className,
}) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(() =>
    getInitialOpenSections(location, items)
  );

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const closeAllSections = () => {
    setOpenSections({});
  };

  return (
    <aside className="~w-64 ~h-screen ~border-r ~py-6 ~px-8 ~bg-neutral-100 ~text-sm ~flex ~flex-col ~gap-6">
      {items
        .filter((item) => !item.hidden)
        .map((item, key) => (
          <SideBarSection
            key={item.label + key}
            item={item}
            location={location}
            openSections={openSections}
            toggleSection={toggleSection}
            closeAllSections={closeAllSections}
            LinkComponent={LinkComponent}
            className={className}
            rightArrow={rightArrow}
            downArrow={downArrow}
          />
        ))}
    </aside>
  );
};
