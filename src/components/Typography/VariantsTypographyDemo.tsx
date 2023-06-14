type VariantDemoItemProps = {
  input: string;
  color?: string;
  className: string;
  children: React.ReactNode;
};
const VariantDemoItem = ({
  input,
  color,
  className,
  children,
}: VariantDemoItemProps) => (
  <>
    <p className='body-medium' style={{ color }}>
      {children}
    </p>
    <p className={className} style={{ color }}>
      {input}
    </p>
  </>
);

type Props = {
  input: string;
  color?: string;
};
export const VariantsTypographyDemo = (props: Props) => {
  const variants = {
    'body-large': 'Body (Large)',
    'body-medium': 'Body (Medium)',
    'body-small': 'Body (Small)',
    'body-x-small': 'Body (X-Small)',
    'caption-1': 'Caption 1',
    'caption-2': 'Caption 2',
  };
  return (
    <div className='grid grid-cols-[auto_1fr] items-baseline gap-[10px]'>
      {Object.entries(variants).map(([className, label]) => (
        <VariantDemoItem key={className} className={className} {...props}>
          {label}
        </VariantDemoItem>
      ))}
    </div>
  );
};
