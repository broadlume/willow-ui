import { Button } from '@components/button';
import clsx from 'clsx';
import { ReactNode } from 'react';

interface MenuLinkProps {
  title: string | ReactNode;
  eventHandler: () => void;
  className?: string;
  tabIndex?: number;
  isActive?: boolean;
}

/**
 * MenuLink component renders a styled anchor element.
 *
 * @param {Object} props - The properties object.
 * @param {function} props.eventHandler - The function to be called when the link is clicked.
 * @param {string} props.title - The text to be displayed as the link's title.
 * @param {boolean} props.isActive - Whether the menu item is currently active.
 * @returns {JSX.Element} The rendered anchor element.
 */
export const MenuLink = ({
  eventHandler,
  title,
  className,
  tabIndex = -1,
  isActive = false,
}: MenuLinkProps): JSX.Element => {
  return (
    <Button
      className={clsx(
        'hover:no-underline text-black font-bold text-base active:scale-95 transition-transform duration-500 min-w-6 min-h-6',
        {
          'bg-surface-opt rounded': isActive,
        },
        className
      )}
      variant='link'
      onClick={eventHandler}
      type='button'
      tabIndex={tabIndex}
    >
      {title}
    </Button>
  );
};
