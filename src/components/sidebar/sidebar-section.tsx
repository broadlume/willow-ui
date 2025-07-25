import { ComponentType, FC } from "react";
import { IconType, SidebarItem } from "./types";
import { SideBarLink } from "./sidemenu-link";
import { ToggleIcon } from "./toggle-icon";
import { SideBarItemList } from "./sidebar-item-list";

type Props = {
  item: SidebarItem;
  location: string;
  openSections: Record<string, boolean>;
  toggleSection: (label: string) => void;
  closeAllSections: () => void;
  LinkComponent: ComponentType<any>;
  className?: {
    menuClass?: string;
    menuLinkClass?: string;
  };
  rightArrow: IconType;
  downArrow: IconType
};

export const SideBarSection: FC<Props> = ({
  item,
  location,
  openSections,
  toggleSection,
  closeAllSections,
  LinkComponent,
  className,
  rightArrow,
  downArrow,
}) => {
  const isActive = location === item.link || location + "/" === item.link;
  const hasChildren = item.items?.length;

  if (item.link && !hasChildren) {
    return (
      <SideBarLink
        key={item.label}
        to={item.link}
        label={item.label}
        isActive={isActive}
        onClick={closeAllSections}
        LinkComponent={LinkComponent}
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
        <SideBarItemList
          items={item.items}
          location={location}
          openSections={openSections}
          toggleSection={toggleSection}
          LinkComponent={LinkComponent}
          className={className}
          rightArrow={rightArrow}
          downArrow={downArrow}
        />
      )}
    </div>
  );
};
