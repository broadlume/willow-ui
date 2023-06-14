type Props = {
  input: string;
  color?: string;
};

export const TagsTypographyDemo = ({ input, color }: Props) => {
  return (
    <div className='grid grid-cols-[auto_1fr] items-baseline gap-[10px]'>
      <p className='body-medium' style={{ color }}>
        h1
      </p>
      <h1 style={{ color }}>{input}</h1>
      <p className='body-medium' style={{ color }}>
        h2
      </p>
      <h2 style={{ color }}>{input}</h2>
      <p className='body-medium' style={{ color }}>
        h3
      </p>
      <h3 style={{ color }}>{input}</h3>
      <p className='body-medium' style={{ color }}>
        h4
      </p>
      <h4 style={{ color }}>{input}</h4>
      <p className='body-medium' style={{ color }}>
        h5
      </p>
      <h5 style={{ color }}>{input}</h5>
      <p className='body-medium' style={{ color }}>
        h6
      </p>
      <h6 style={{ color }}>{input}</h6>
      <p className='body-medium' style={{ color }}>
        p
      </p>
      <p style={{ color }}>{input}</p>
      <p className='body-medium' style={{ color }}>
        a
      </p>
      <a
        className='mr-auto'
        onClick={(e) => e.preventDefault()}
        href='#'
        style={{ color }}
      >
        {input}
      </a>
    </div>
  );
};
