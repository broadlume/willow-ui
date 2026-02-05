import clsx from 'clsx';
import { FC } from 'react';
import { IconType, SidebarItemProps } from '../types';
import {
  getPrimaryLink,
  hasNavigableLink,
  isLocationActive,
} from '../utils/link-matcher';
import { SidebarLink } from './sidebar-link';
import { ToggleIcon } from './toggle-icon';

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
  const isChildActive = isLocationActive(location, item);
  const hasGrandchildren = item.items?.length;
  const primaryLink = getPrimaryLink(item);
  if (hasNavigableLink(item) && primaryLink) {
    return (
      <SidebarLink
        to={primaryLink}
        isActive={isChildActive}
        hasChildren={true}
        onMenuClick={onMenuClick}
        className={className?.menuLinkClass}
        {...item}
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
            const isGrandChildActive = isLocationActive(location, grandchild);
            const grandchildPrimaryLink = getPrimaryLink(grandchild);

            if (!grandchildPrimaryLink) {
              return null;
            }

            return (
              <li key={grandchild.label + key}>
                <SidebarLink
                  to={grandchildPrimaryLink}
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
