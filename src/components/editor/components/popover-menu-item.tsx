import { Popover, PopoverContent, PopoverTrigger } from '@src/components/popover/popover';
import clsx from 'clsx';

interface PopoverMenuItemContentProps {
    title: string | React.ReactNode
    content: string | React.ReactNode
    darkMode: boolean
}

export const PopoverMenuItemContent = ({title, content, darkMode}: PopoverMenuItemContentProps) => {
    return (
        <Popover>
            <PopoverTrigger type='button' className="~bg-transparent ~border-none ~shadow-none ~p-0 focus:~outline-none hover:~cursor-pointer">
                {title}
            </PopoverTrigger>
            <PopoverContent align="start" alignOffset={110} sideOffset={-30} side="right" className={clsx("~bg-white ~rounded-lg ~shadow-lg ~p-1 ~z-50", 
                { "~bg-gray-900": darkMode })}>
                {content}
            </PopoverContent>
        </Popover>
    );
}
