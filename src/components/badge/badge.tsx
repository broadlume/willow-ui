import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@src/lib/utils';

const badgeVariants = cva(
  [
    'tw-reset font-2xl text-2xs inline-flex cursor-default items-center rounded px-2 py-1 transition-colors gap-2 shadow',
    'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
    'h-5',
  ],
  {
    variants: {
      /** Variant color of the badge. */
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground shadow',
        secondary: 'border-transparent bg-secondary text-secondary-foreground',
        success: 'border-transparent bg-success text-success-foreground',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground shadow',
        outline: 'text-foreground',
      },
      /** Relative size of the badge. */
      size: {
        default: '',
        small: 'text-[10px]',
        xs: 'py-0 text-[10px]',
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
