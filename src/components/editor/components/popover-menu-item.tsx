import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";

interface PopoverMenuItemContentProps {
    title: string | React.ReactNode
    content: string | React.ReactNode
}

export const PopoverMenuItemContent = ({title, content}: PopoverMenuItemContentProps) => {
    return (
        <Popover>
            <PopoverTrigger className="~bg-transparent ~border-none ~shadow-none ~p-0 focus:~outline-none hover:~cursor-pointer">
                {title}
            </PopoverTrigger>
            <PopoverContent align="start" alignOffset={10} side="right" className="~bg-white ~rounded-lg ~shadow-lg ~p-1 ~z-50">
                {content}
            </PopoverContent>
        </Popover>
    );
}
