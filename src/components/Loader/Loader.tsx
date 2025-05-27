import { AiOutlineLoading3Quarters } from 'react-icons/ai'
const Loader = ({
    className = '',
}: {
    className?: string
}) => {
    return (
        <AiOutlineLoading3Quarters
            className={`~animate-spin ~w-10 ~h-10 ${className}`}
        />
    )
}
export {Loader}