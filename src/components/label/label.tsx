import React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@src/lib/utils';

const labelVariants = cva(
  'tw-reset ~leading-none peer-disabled:~cursor-not-allowed peer-disabled:~opacity-50'
);

/** An accessible label associated a control. */
const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants> & {required?: boolean}
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  >
    {props.children}{props.required ? <span style={{"color": "#BE1147"}}>*</span> : ""}
    </LabelPrimitive.Root>
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
