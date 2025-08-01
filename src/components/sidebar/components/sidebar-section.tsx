import { FC } from "react";
import { IconType, SidebarItemProps } from "../types";
import { SidebarLink } from "./sidebar-link";
import { ToggleIcon } from "./toggle-icon";
import { SidebarItemList } from "./sidebar-item-list";

type Props = {
  item: SidebarItemProps;
  location: string;
  openSections: Record<string, boolean>;
  toggleSection: (label: string) => void;
  closeAllSections: () => void;
  onMenuClick: (props: { to: string; children: React.ReactNode; className?: string; onClick?: () => void }) => JSX.Element;
  className?: {
    menuClass?: string;
    menuLinkClass?: string;
  };
  rightArrow: IconType;
  downArrow: IconType;
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
}) => {
  const isActive = location === item.link || location + "/" === item.link;
  const hasChildren = item.items?.length;

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

  return (
    <div key={item.label}>
      <div
        className="~flex ~items-center ~justify-between ~text-black ~text-sm ~tracking-widest ~cursor-pointer ~pt-1 ~pb-1 ~font-bold hover:~text-violet-600"
        onClick={() => toggleSection(item.label)}
      >
        <span>{item.label}</span>
        <ToggleIcon isOpen={openSections[item.label]} rightArrow={rightArrow} downArrow={downArrow} />
      </div>
      {openSections[item.label] && item.items && (
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
