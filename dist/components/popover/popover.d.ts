import React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
/** Displays rich content in a portal, triggered by a button. */
declare const Popover: React.FC<PopoverPrimitive.PopoverProps>;
declare const PopoverTrigger: React.ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const PopoverContent: React.ForwardRefExoticComponent<Omit<PopoverPrimitive.PopoverContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export { Popover, PopoverTrigger, PopoverContent };
//# sourceMappingURL=popover.d.ts.map