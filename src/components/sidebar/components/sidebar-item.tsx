import { FC } from 'react';
import { SidebarLink } from './sidebar-link';
import { IconType, SidebarItemProps } from '../types';
import { ToggleIcon } from './toggle-icon';
import clsx from 'clsx';

type Props = {
  item: SidebarItemProps;
  location: string;
  openSections: Record<string, boolean>;
  toggleSection: (label: string) => void;
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
};

export const SidebarItem: FC<Props> = ({
  item,
  location,
  openSections,
  toggleSection,
  onMenuClick,
  className,
  rightArrow,
  downArrow,
}) => {
  const isChildActive =
    location === item.link || Boolean(item.linkPattern?.test(location));
  const hasGrandchildren = item.items?.length;

  if (item.link) {
    return (
      <SidebarLink
        to={item.link}
        label={item.label}
        isActive={isChildActive}
        hasChildren={true}
        onMenuClick={onMenuClick}
        className={className?.menuLinkClass}
      />
    );
  }

  return (
    <>
      <div
        className={clsx(
          'flex items-center justify-between pl-4 py-1 cursor-pointer text-text-pri hover:text-text-brand',
          className?.menuClass
        )}
        onClick={() => toggleSection(item.label)}
      >
        <span>{item.label}</span>
        <ToggleIcon
          isOpen={openSections[item.label]}
          rightArrow={rightArrow}
          downArrow={downArrow}
        />
      </div>
      {openSections[item.label] && hasGrandchildren && (
        <ul className='mt-2 ml-4 border-l border-border-sec space-y-2 text-base'>
          {item?.items?.map((grandchild, key) => {
            const isGrandChildActive =
              item.linkPattern?.test(location) || location === grandchild.link;
            console.log(
              'isGrandChildActive',
              item.linkPattern?.test(location),
              {
                isActive: isGrandChildActive,
                location,
                item: grandchild,
              }
            );
            return (
              <li key={grandchild.label + key}>
                <SidebarLink
                  to={grandchild.link!}
                  label={grandchild.label}
                  isActive={isGrandChildActive}
                  hasChildren={true}
                  onMenuClick={onMenuClick}
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
