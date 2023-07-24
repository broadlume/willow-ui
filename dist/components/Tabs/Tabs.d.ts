import React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
interface TabsProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> {
    variant?: 'default' | 'pills';
}
/** A set of layered sections of content, known as tab panels, that are displayed one at a time. */
declare const Tabs: ({ variant, className, ...props }: TabsProps) => import("react/jsx-runtime").JSX.Element;
declare const TabsList: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsListProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const TabsTrigger: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const TabsContent: React.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export { Tabs, TabsList, TabsTrigger, TabsContent };
//# sourceMappingURL=Tabs.d.ts.map