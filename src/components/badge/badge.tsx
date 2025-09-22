import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@src/lib/utils';

const badgeVariants = cva(
  [
    'tw-reset font-medium text-2xs inline-flex cursor-default items-center rounded px-2 py-1.5 transition-colors',
    'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
    'h-5',
  ],
  {
    variants: {
      /** Variant color of the badge. */
      variant: {
        default: 'border-transparent bg-surface-cta text-text-pri ',
        secondary: 'border-transparent bg-(--var(--grey-10%)) text-icon-pri',
        success: 'border-transparent  bg-(--var(--green-100)) text-(--var(--green-600))' ,
        destructive:
          'border-transparent bg-(--var(--red-50)) text-(--var(--red-500))',
        outline: 'text-text-pri border-border-sec bg-surface-pri',
      },
      /** Relative size of the badge. */ 
      size: {
        default: '',
        small: 'text-2xs',
        xs: 'py-0 text-2xs',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  /** Arbitrary background color of the badge */
  background?: string;
  className?: string;
  style?: React.CSSProperties;
  /** Arbitrary text color of the badge */
  color?: string;
}

/** A small visual indicator used to highlight importance, status, or additional context about an item. */
function Badge({
  className,
  variant,
  size,
  background,
  color,
  style,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, size }), className)}
      style={{ background, color, ...style }}
      {...props}
    />
  );
}

export { Badge };
