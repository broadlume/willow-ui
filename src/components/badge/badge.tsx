import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@src/lib/utils';

const badgeVariants = cva(
  [
    'tw-reset body-x-small ~inline-flex ~cursor-default ~items-center ~rounded-full ~border ~px-3 ~py-0.5 ~transition-colors',
    'focus:~outline-hidden focus:~ring-2 focus:~ring-ring focus:~ring-offset-2',
  ],
  {
    variants: {
      /** Variant color of the badge. */
      variant: {
        default:
          '~border-transparent ~bg-primary ~text-primary-foreground ~shadow',
        secondary:
          '~border-transparent ~bg-secondary ~text-secondary-foreground',
        success: '~border-transparent ~bg-success ~text-success-foreground',
        destructive:
          '~border-transparent ~bg-destructive ~text-destructive-foreground ~shadow',
        outline: '~text-foreground',
      },
      /** Relative size of the badge. */
      size: {
        default: '',
        small: '~text-[10px]',
        xs: '~py-0 ~text-[10px]',
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
