import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@src/lib/utils';

const badgeVariants = cva(
  [
    'body-x-small inline-flex cursor-default items-center rounded-full border px-2.5 py-0.5 transition-colors',
    'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  ],
  {
    variants: {
      /** variant color of the badge */
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground shadow',
        secondary: 'border-transparent bg-secondary text-secondary-foreground',
        success: 'border-transparent bg-success text-success-foreground',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground shadow',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
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

function Badge({
  className,
  variant,
  background,
  color,
  style,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant }), className)}
      style={{ background, color, ...style }}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
