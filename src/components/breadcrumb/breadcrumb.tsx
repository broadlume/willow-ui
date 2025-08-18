import clsx from 'clsx';
import React from 'react';

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
    <div className={clsx(`my-4 flex flex-row`, className)} {...props}>
      {children}
    </div>
  );
};

type BreadCrumbItemProps = {
  label: string;
  isLast?: boolean;
  isFirst?: boolean;
  customIcon?: () => JSX.Element;
  classNames?: { wrapper?: string[]; label?: string[]; separator?: string[] };
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'classesName'>;

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
  classNames = { wrapper: [], label: [], separator: [] },
  id,
  isLast = false,
  isFirst = false,
  onClick,
  customIcon: CustomIcon,
  ...props
}: React.PropsWithChildren<BreadCrumbItemProps>) => {
  return (
    <div
      id={id + 'wrapper'}
      className={clsx(
        `flex flex-row items-center justify-between`,
        classNames.wrapper
      )}
      {...props}
    >
      <span
        id={id}
        onClick={onClick}
        className={clsx(
          'font-sans text-sm font-normal',
          onClick && 'hover:cursor-pointer',
          !classNames.label?.length &&
            (isLast ? 'text-text-cta' : !isFirst && 'text-text-opt'),
          classNames.label
        )}
      >
        {label}
      </span>
      {!isLast ? (
        CustomIcon ? (
          <CustomIcon />
        ) : (
          <span
            className={clsx(
              'inline-block text-ash-light mx-2 text-sm',
              classNames.separator
            )}
          >
            /
          </span>
        )
      ) : null}
    </div>
  );
};

export { BreadCrumb, BreadCrumbItem };
