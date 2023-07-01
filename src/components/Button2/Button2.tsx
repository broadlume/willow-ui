import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@src/lib/utils';

const buttonVariants = cva(
  'inline-flex min-w-[160px] items-center justify-center rounded-full border-[2px] px-[16px] text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'caption-1 min-h-[44px] border-heart bg-primary text-primaryForeground hover:bg-primaryHover hover:text-primaryForegroundHover',
        secondary:
          'body-x-small min-h-[30px] border border-white bg-secondary text-secondaryForeground ring-offset-ash hover:bg-secondaryHover hover:text-secondaryForegroundHover',
        'secondary-dark':
          'body-x-small min-h-[30px] border border-ash bg-secondaryDark text-secondaryDarkForeground hover:bg-secondaryDarkHover hover:text-secondaryDarkForegroundHover',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  disabled?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
