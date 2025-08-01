import React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { cn } from '@src/lib/utils';

interface AvatarProps
  extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
  /** The diameter, in pixels, of the avatar. */
  size?: number;
}

/** An image element with a fallback for representing the user. */
const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, size, style, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      'tw-reset ~relative ~flex ~h-[40px] ~w-[40px] ~shrink-0 ~overflow-hidden ~rounded-full',
      className
    )}
    style={{
      ...(size && { width: `${size}px`, height: `${size}px` }),
      ...style,
    }}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> & {
    /** The image alt text, required for accessibility. */
    alt: string;
  }
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn('~aspect-square ~h-full ~w-full', className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      '~flex ~h-full ~w-full ~items-center ~justify-center ~rounded-full ~bg-muted',
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
