import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@src/lib/utils';

const badgeVariants = cva(
  [
    'tw-reset font-medium text-xs inline-flex cursor-default items-center rounded-sm px-2 py-1 transition-colors gap-2.5',
    'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
    'h-5',
  ],
  {
    variants: {
      /** Variant color of the badge. */
      variant: {
        default: 'border-transparent bg-surface-cta-bg text-surface-cta',
        secondary: 'border-transparent bg-surface-opt text-icon-pri',
        success: 'border-transparent  bg-surface-success text-text-success',
        destructive:
          'border-transparent bg-surface-destructive-bg text-text-destructive',
        warning:
          'border-transparent bg-surface-progress text-text-progress',
        outline: 'border border-border-sec bg-surface-pri text-text-pri',
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
