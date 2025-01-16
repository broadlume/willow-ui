import React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { type VariantProps } from 'class-variance-authority';
/** A two-state button that can be either on or off. */
declare const Toggle: React.ForwardRefExoticComponent<Omit<TogglePrimitive.ToggleProps & React.RefAttributes<HTMLButtonElement>, "ref"> & VariantProps<(props?: ({
    style?: "default" | "outline" | null | undefined;
    shape?: "default" | "pill" | null | undefined;
    size?: "default" | "sm" | "lg" | "xs" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string> & React.RefAttributes<HTMLButtonElement>>;
export { Toggle };
//# sourceMappingURL=toggle.d.ts.map