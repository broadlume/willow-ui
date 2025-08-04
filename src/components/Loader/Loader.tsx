import classNames from 'classnames';

const Loader = ({
  name,
  className = '',
}: {
  name?: string;
  className?: string;
}) => {
  return (
    <AiOutlineLoading3Quarters
      {...props}
      className={`h-10 w-10 animate-spin ${className}`}
    />
  );
};
export { Loader };
