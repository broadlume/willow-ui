import { ReactNode } from "react"

interface MenuLinkProps {
    title: string | ReactNode,
    eventHandler: () => void
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
    title
}: MenuLinkProps): JSX.Element => {
    return (
        <a className='~no-underline ~text-black ~font-bold' href='javascript:void(0);' onClick={eventHandler}>{title}</a>
    )
}
