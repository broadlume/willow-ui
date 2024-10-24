import clsx from 'clsx';
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

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
