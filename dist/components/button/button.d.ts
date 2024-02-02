import React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { buttonVariants } from './button-variants';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
/** An interactive element that triggers an action or event when clicked. */
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button };
//# sourceMappingURL=button.d.ts.map