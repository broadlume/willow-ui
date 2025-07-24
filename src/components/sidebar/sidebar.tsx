import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { SideBarLink } from "./side-menu-link";

 type SidebarItem = {
  label: string;
  link?: string;
  hidden?: boolean;
  items?: SidebarItem[];
};
type SideBarProps = {
  items: SidebarItem[];
  location: string;
  LinkComponent: React.ComponentType<any>; // allow injected LinkComponent to carry any shape
  rightArrow?: any;  // Accept right arrow component (e.g., ChevronRight)
  downArrow?: any;   // Accept down arrow component (e.g., ChevronLeft)
  className?: {                         // Accept a className object for custom styling
    Menuclass?: string;
    menulinkClass?: string;
  };
};

 export const  SideBar: React.FC<SideBarProps> = ({ items, location, LinkComponent, rightArrow = ChevronRight, downArrow = ChevronDown, className }) => {
  const getInitialOpenSections = (pathname: string, items: SidebarItem[]): Record<string, boolean> => {
    const open: Record<string, boolean> = {};
    for (const item of items) {
      if (item.link === pathname) continue;
      if (item.items) {
        for (const child of item.items) {
          if (child.link === pathname) {
            open[item.label] = true;
            break;
          }
          if (child.items) {
            for (const grandchild of child.items) {
              if (grandchild.link === pathname) {
                open[child.label] = true;
                open[item.label] = true;
              }
            }
          }
        }
      }
    }
    return open;
  };

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

  const ToggleIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
    const Icon = isOpen ? downArrow : rightArrow;
    return <Icon className="~w-4 ~h-4 ~text-neutral-500" />;
  };

  return (
    <aside className="~w-64 ~h-screen ~border-r ~py-6 ~px-8 ~bg-neutral-100 ~text-sm ~flex ~flex-col ~gap-6 ">
      {items.filter((item) => !item.hidden).map((item) => {
        const isActive = location === item.link || location + "/" === item.link;
        const hasChildren = item.items?.length;
        if (item.link && !hasChildren) {
          // top-level links like HOME and COMPANIES
          return (
            <SideBarLink
              key={item.label}
              to={item.link}
              label={item.label}
              isActive={isActive}
              onClick={closeAllSections}
              LinkComponent={LinkComponent}
              className={className?.menulinkClass}
            />
          );
        }

        return (
          <div key={item.label}>
            {/* Section Title (e.g. PRODUCTS) */}
            <div
              className="~flex ~items-center ~justify-between ~text-black ~text-sm ~tracking-widest ~cursor-pointer ~pt-1 ~pb-1 ~font-bold hover:~text-violet-600"
              onClick={() => toggleSection(item.label)}
            >
              <span>{item.label}</span>
              <ToggleIcon isOpen={openSections[item.label]} />
            </div>
            {openSections[item.label] && (
              <ul className="~mt-2 ~ml-1 ~border-l ~border-gray-200 ~space-y-2 ~text-[14px]">
                {item.items!.map((child) => {
                  const isChildActive = location === child.link;
                  const hasGrandchildren = child.items?.length;
                  return (
                    <li key={child.label}>
                      {child.link ? (
                        <SideBarLink
                          to={child.link}
                          label={child.label}
                          isActive={isChildActive}
                          hasChildren={true}
                          LinkComponent={LinkComponent}
                          className={className?.menulinkClass}
                        />
                      ) : (
                        <>
                          <div
                            className={`~flex ~items-center ~justify-between ~pl-4 ~py-1 ~cursor-pointer ~text-black hover:~text-violet-600 ${className?.Menuclass}`}
                            onClick={() => toggleSection(child.label)}
                          >
                            <span>{child.label}</span>
                            <ToggleIcon isOpen={openSections[child.label]} />
                          </div>
                          {openSections[child.label] && hasGrandchildren && (
                            <ul className="~mt-2 ~ml-4 ~border-l ~border-gray-200 ~space-y-2 ~text-[14px]">
                              {child.items!.map((grandchild) => {
                                const isGrandChildActive = location === grandchild.link;
                                return (
                                  <li key={grandchild.label}>
                                    <SideBarLink
                                      to={grandchild.link!}
                                      label={grandchild.label}
                                      isActive={isGrandChildActive}
                                      hasChildren={true}
                                      LinkComponent={LinkComponent}
                                      className={className?.menulinkClass}
                                    />
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </aside>
  );
};


