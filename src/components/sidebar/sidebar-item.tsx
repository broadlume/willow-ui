import { ComponentType, FC } from "react";
import { SideBarLink } from "./sidemenu-link";
import { IconType, SidebarItem } from "./types";
import { ToggleIcon } from "./toggle-icon";

type Props = {
  item: SidebarItem;
  location: string;
  openSections: Record<string, boolean>;
  toggleSection: (label: string) => void;
  LinkComponent: ComponentType<any>;
  className?: {
    menuClass?: string;
    menuLinkClass?: string;
  };
  rightArrow: IconType;
  downArrow: IconType
};

export const SideBarItem: FC<Props> = ({
  item,
  location,
  openSections,
  toggleSection,
  LinkComponent,
  className,
  rightArrow,
  downArrow,
}) => {
  const isChildActive = location === item.link;
  const hasGrandchildren = item.items?.length;

  if (item.link) {
    return (
      <SideBarLink
        to={item.link}
        label={item.label}
        isActive={isChildActive}
        hasChildren={true}
        LinkComponent={LinkComponent}
        className={className?.menuLinkClass}
      />
    );
  }

  return (
    <>
      <div
        className={`~flex ~items-center ~justify-between ~pl-4 ~py-1 ~cursor-pointer ~text-black hover:~text-violet-600 ${className?.menuClass}`}
        onClick={() => toggleSection(item.label)}
      >
        <span>{item.label}</span>
        <ToggleIcon isOpen={openSections[item.label]} rightArrow={rightArrow} downArrow={downArrow} />
      </div>
      {openSections[item.label] && hasGrandchildren && (
        <ul className="~mt-2 ~ml-4 ~border-l ~border-gray-200 ~space-y-2 ~text-[14px]">
          {item.items!.map((grandchild, key) => {
            const isGrandChildActive = location === grandchild.link;
            return (
              <li key={grandchild.label + key}>
                <SideBarLink
                  to={grandchild.link!}
                  label={grandchild.label}
                  isActive={isGrandChildActive}
                  hasChildren={true}
                  LinkComponent={LinkComponent}
                  className={className?.menuLinkClass}
                />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
