import React from 'react';
import { type VariantProps } from 'class-variance-authority';
declare const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "success" | null | undefined;
    size?: "small" | "default" | "xs" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
    /** Arbitrary background color of the badge */
    background?: string;
    /** Arbitrary text color of the badge */
    color?: string;
}
/** A small visual indicator used to highlight importance, status, or additional context about an item. */
declare function Badge({ className, variant, size, background, color, style, ...props }: BadgeProps): JSX.Element;
export { Badge };
//# sourceMappingURL=badge.d.ts.map