type ButtonProps = {
  variant: 'primary' | 'secondary' | 'secondary-dark';
  onClick?: (e: React.MouseEvent) => void;
  children: React.ReactNode;
};
export const Button = ({
  variant = 'primary',
  onClick,
  children,
}: ButtonProps) => {
  const variantContainerStyles = {
    primary: ' min-h-[44px] border-heart bg-heart hover:bg-white',
    secondary: 'min-h-[30px] border-white bg-ash hover:bg-white',
    'secondary-dark': 'min-h-[30px] border-ash bg-white hover:bg-ash',
  };
  const variantTextStyles = {
    primary: 'caption-1 text-white group-hover:text-heart',
    secondary: 'body-x-small text-white group-hover:text-ash',
    'secondary-dark': 'body-x-small text-ash group-hover:text-white',
  };

  return (
    <button
      className={`group inline-flex min-w-[160px] items-center justify-center rounded-full border-[2px] px-[16px] transition-colors ${variantContainerStyles[variant]}`}
      onClick={(e) => onClick && onClick(e)}
    >
      <p className={`transition-colors ${variantTextStyles[variant]}`}>
        {children}
      </p>
    </button>
  );
};
