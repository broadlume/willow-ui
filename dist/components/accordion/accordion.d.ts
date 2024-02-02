import React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { AccordionHeader } from '@radix-ui/react-accordion';
/** A vertically stacked set of interactive headings that each reveal a section of content. */
declare const Accordion: React.ForwardRefExoticComponent<(Omit<AccordionPrimitive.AccordionSingleProps & React.RefAttributes<HTMLDivElement>, "ref"> | Omit<AccordionPrimitive.AccordionMultipleProps & React.RefAttributes<HTMLDivElement>, "ref">) & React.RefAttributes<HTMLDivElement>>;
declare const AccordionItem: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const AccordionTrigger: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & {
    /** Whether the accordion trigger is the whole header, or only the caret. */
    caretOnly?: boolean | undefined;
    /** Whether the caret appears at the left of the header, or the right. */
    caretAlign?: "left" | "right" | undefined;
    /** Additional classes to apply to the caret. */
    caretClasses?: string | undefined;
    /** Whether or not to omit the caret entirely. */
    noCaret?: boolean | undefined;
} & React.RefAttributes<HTMLButtonElement>>;
declare const AccordionContent: React.ForwardRefExoticComponent<Omit<AccordionPrimitive.AccordionContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export { Accordion, AccordionItem, AccordionHeader, AccordionTrigger, AccordionContent, };
//# sourceMappingURL=accordion.d.ts.map