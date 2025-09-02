import clsx from 'clsx';
import { FC, useState } from 'react';
import { HiChevronDown, HiChevronRight } from 'react-icons/hi2';
import { SidebarSection } from './components/sidebar-section';
import { SidebarItemProps, SidebarProps } from './types';
import { isLocationActive } from "./utils/link-matcher";

const getInitialOpenSections = (
  pathname: string,
  items: SidebarItemProps[]
): Record<string, boolean> => {
  const openSections: Record<string, boolean> = {};

  const traverse = (
    nodes: SidebarItemProps[],
    path: string[] = []
  ): boolean => {
    for (const node of nodes) {
      if (isLocationActive(pathname, node)) {
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
/**
 * Sidebar navigation component that renders a hierarchical list of menu items.
 *
 * @component
 * @param {SidebarProps} props - Props for the Sidebar component.
 * @param {SidebarItem[]} props.items - The sidebar items to render (can be nested).
 * @param {string} props.location - The current active route path.
 * @param {(link: string) => void} [props.onMenuClick] - Callback when a menu link is clicked (useful for custom navigation logic).
 * @param {ComponentType<{ className?: string }>} [props.rightArrow] - Icon shown when a section is collapsed (defaults to `HiChevronRight`).
 * @param {ComponentType<{ className?: string }>} [props.downArrow] - Icon shown when a section is expanded (defaults to `HiChevronDown`).
 * @param {{ menuClass?: string; menuLinkClass?: string }} [props.className] - Optional custom class names for styling menu and links.
 *
 * @returns {JSX.Element} The rendered Sidebar component.
 */
export const Sidebar: FC<SidebarProps> = ({
  items,
  location,
  onMenuClick,
  rightArrow = HiChevronRight,
  downArrow = HiChevronDown,
  className,
  defaultParentOpen = false,
  classNames = {
    asideClassName: '',
  },
}) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    () => {
      const initialOpen = getInitialOpenSections(location, items);
      if (defaultParentOpen) {
        items.forEach((item) => {
          if (item.items?.length) {
            initialOpen[item.label] = true;
          }
        });
      }
      return initialOpen;
    }
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
    <aside
      className={clsx(
        'w-64 h-screen border-r px-8 bg-surface-pri text-base flex flex-col gap-6',
        classNames.asideClassName
      )}
    >
      {items
        .filter((item) => !item.hidden)
        .map((item, key) => (
          <SidebarSection
            key={item.label + key}
            item={item}
            location={location}
            openSections={openSections}
            toggleSection={toggleSection}
            closeAllSections={closeAllSections}
            onMenuClick={onMenuClick}
            className={className}
            rightArrow={rightArrow}
            downArrow={downArrow}
            defaultParentOpen={defaultParentOpen}
          />
        ))}
    </aside>
  );
};
