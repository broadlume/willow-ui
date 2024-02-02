import React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
interface AvatarProps extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root> {
    /** The diameter, in pixels, of the avatar. */
    size?: number;
}
/** An image element with a fallback for representing the user. */
declare const Avatar: React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLSpanElement>>;
declare const AvatarImage: React.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarImageProps & React.RefAttributes<HTMLImageElement>, "ref"> & {
    /** The image alt text, required for accessibility. */
    alt: string;
} & React.RefAttributes<HTMLImageElement>>;
declare const AvatarFallback: React.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarFallbackProps & React.RefAttributes<HTMLSpanElement>, "ref"> & React.RefAttributes<HTMLSpanElement>>;
export { Avatar, AvatarImage, AvatarFallback };
//# sourceMappingURL=avatar.d.ts.map