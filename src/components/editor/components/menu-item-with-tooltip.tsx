import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@components/tooltip/tooltip';

interface MenuItemWithTooltipProps {
    children: React.ReactNode;
    tooltipContent: string;
    key?: string | number;
}

export const MenuItemWithTooltip: React.FC<MenuItemWithTooltipProps> = ({ children, tooltipContent, key }) => {
    return (
        <TooltipProvider>
            <Tooltip key={key}>
                <TooltipTrigger>{children}</TooltipTrigger>
                <TooltipContent>{tooltipContent}</TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};
