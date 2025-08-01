import { Button } from "@components/button"
import clsx from "clsx"
import { ReactNode } from "react"

interface MenuLinkProps {
    title: string | ReactNode,
    eventHandler: () => void,
    className?: string
}

/**
 * MenuLink component renders a styled anchor element.
 *
 * @param {Object} props - The properties object.
 * @param {function} props.eventHandler - The function to be called when the link is clicked.
 * @param {string} props.title - The text to be displayed as the link's title.
 * @returns {JSX.Element} The rendered anchor element.
 */
export const MenuLink = ({
    eventHandler,
    title,
    className
}: MenuLinkProps): JSX.Element => {
    return (
        <Button
            className={clsx(
                'hover:~no-underline ~text-black ~font-bold ~text-base active:~scale-95 transition-transform duration-500',
                className
            )}
            variant='link'
            onClick={eventHandler}
            type="button"
        >
            {title}
        </Button>
    )
}
