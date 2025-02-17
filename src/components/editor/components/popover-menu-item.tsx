import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";

interface PopoverMenuItemContentProps {
    title: string | React.ReactNode
}

export const PopoverMenuItemContent = ({title}: PopoverMenuItemContentProps) => {
    return (
        <Popover>
            <PopoverTrigger>{title}</PopoverTrigger>
                <PopoverContent className="~bg-white ~rounded-lg ~shadow-lg ~p-4 ~text-lg">
                    <ul className='~grid ~gap-4'>
                        <li>Tone</li>
                        <li>Tone</li>
                        <li>Tone</li>
                        <li>Tone</li>
                        <li>Tone</li>
                    </ul>
                </PopoverContent>
        </Popover>
    );
}
