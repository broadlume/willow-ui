import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Loader = ({
  className = '',
  ...props
}: {
  className?: string;
} & Parameters<typeof AiOutlineLoading3Quarters>[0]) => {
  return (
    <AiOutlineLoading3Quarters
      {...props}
      className={`~h-10 ~w-10 ~animate-spin ${className}`}
    />
  );
};
export { Loader };
