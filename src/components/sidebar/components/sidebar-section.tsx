import { FC, useEffect } from 'react';
import { IconType, SidebarItemProps } from '../types';
import { SidebarLink } from './sidebar-link';
import { ToggleIcon } from './toggle-icon';
import { SidebarItemList } from './sidebar-item-list';

type Props = {
  item: SidebarItemProps;
  location: string;
  openSections: Record<string, boolean>;
  toggleSection: (label: string) => void;
  closeAllSections: () => void;
  onMenuClick: (props: {
    to: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
  }) => JSX.Element;
  className?: {
    menuClass?: string;
    menuLinkClass?: string;
  };
  rightArrow: IconType;
  downArrow: IconType;
  defaultParentOpen?: boolean;
};

export const SidebarSection: FC<Props> = ({
  item,
  location,
  openSections,
  toggleSection,
  closeAllSections,
  onMenuClick,
  className,
  rightArrow,
  downArrow,
  defaultParentOpen = false,
}) => {
  const hasChildren = item.items?.length;
  const isActive =
    item.linkPattern?.test(location) || location + '/' === item.link;

  if (item.link && !hasChildren) {
    return (
      <SidebarLink
        key={item.label}
        to={item.link}
        label={item.label}
        isActive={isActive}
        onClick={closeAllSections}
        onMenuClick={onMenuClick}
        className={className?.menuLinkClass}
      />
    );
  }

  const isOpen = openSections[item.label] ?? defaultParentOpen;
  return (
    <div key={item.label}>
      <div
        className='flex items-center justify-between text-text-pri text-base tracking-widest cursor-pointer pt-1 pb-1 font-semibold hover:text-text-brand'
        onClick={() => toggleSection(item.label)}
        data-testid={`sidebar-section-${item.label}`}
      >
        <span>{item.label}</span>
        <ToggleIcon
          isOpen={isOpen}
          rightArrow={rightArrow}
          downArrow={downArrow}
        />
      </div>
      {isOpen && item.items && (
        <SidebarItemList
          items={item.items}
          location={location}
          openSections={openSections}
          toggleSection={toggleSection}
          onMenuClick={onMenuClick}
          className={className}
          rightArrow={rightArrow}
          downArrow={downArrow}
        />
      )}
    </div>
  );
};
