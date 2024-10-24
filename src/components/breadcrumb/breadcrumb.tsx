import clsx from 'clsx';
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

/**
 * Functional component for rendering a breadcrumb.
 *
 * @param className - Additional CSS classes to be applied to the breadcrumb container.
 * @param children - The breadcrumb items to be rendered.
 * @param props - Additional HTML attributes to be spread on the breadcrumb container.
 * @returns JSX element representing the breadcrumb.
 */
const BreadCrumb = ({
  className = '',
  children,
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) => {
  return (
    <div className={clsx(`flex flex-row my-4`, className)} {...props}>
      {children}
    </div>
  );
};

/**
 * Functional component for rendering a single breadcrumb item.
 *
 * @param label - The label text for the breadcrumb item.
 * @param classNames - Additional CSS classes to be applied to the breadcrumb item.
 * @param id - The unique identifier for the breadcrumb item.
 * @param isLast - Indicates whether this breadcrumb item is the last one.
 * @param onClick - The function to be called when the breadcrumb item is clicked.
 * @param customIcon - A custom icon component to be displayed instead of the default chevron icon.
 * @param props - Additional HTML attributes to be spread on the breadcrumb item container.
 * @returns JSX element representing the breadcrumb item.
 */
const BreadCrumbItem = ({
  label,
  classNames = { wrapper: [], label: [] },
  id,
  isLast = false,
  onClick,
  customIcon: CustomIcon,
  ...props
}: React.PropsWithChildren<
  {
    label: string;
    isLast?: boolean;
    customIcon?: () => JSX.Element;
    classNames?: { wrapper?: string[]; label?: string[] };
  } & React.HTMLAttributes<HTMLDivElement>
>) => {
  return (
    <div
      id={id + 'wrapper'}
      className={clsx(
        `~flex ~flex-row ~items-center ~justify-between`,
        classNames.wrapper
      )}
      {...props}
    >
      <span
        id={id}
        onClick={onClick}
        className={clsx(
          `~text-xs ~font-bold`,
          onClick ? '~underline hover:~cursor-pointer' : '',
          classNames.label
        )}
      >
        {label}
      </span>
      {!isLast ? (
        CustomIcon ? (
          <CustomIcon />
        ) : (
          <FaChevronRight className='~text-willow-ash-light ~mx-1.5 ~text-xs' />
        )
      ) : null}
    </div>
  );
};

export { BreadCrumb, BreadCrumbItem };
