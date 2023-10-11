import { Card, CardContent } from '@components/card/card';
import { Skeleton } from '@components/skeleton/skeleton';
import { cn } from '@src/lib/utils';
import { FaArrowCircleDown, FaArrowCircleUp } from 'react-icons/fa';

export type SummaryTileProps = {
  number: number | string;
  label: string | JSX.Element;
  delta: string;
  negative?: boolean;
  className?: string;
  stacked?: boolean;
  loading?: boolean;
};

const SummaryTile = ({
  number,
  label,
  delta,
  negative,
  className,
  stacked,
  loading,
}: SummaryTileProps) => {
  const deltaClass = negative ? '~text-danger' : '~text-beryl';
  const Arrow = negative ? FaArrowCircleDown : FaArrowCircleUp;
  const numberString =
    typeof number === 'number' ? number.toLocaleString('en-US') : number;
  return (
    <Card
      className={cn(
        '~rounded-md ~shadow-lg',
        !stacked && '~h-[150px] ~w-[150px]',
        className
      )}
    >
      <CardContent
        noHeader
        className='~flex ~h-full ~flex-col ~items-center ~p-4'
      >
        <div className='~py-auto ~flex ~flex-1 ~flex-col ~items-center ~justify-center'>
          {!stacked && <div className='~flex-1'></div>} {/* spacer */}
          {loading ? (
            <Skeleton className='~h-6 ~w-24 ~rounded-md' />
          ) : (
            <h5>{numberString}</h5>
          )}
          <p
            className={`caption-2 ~pt-1 ~text-center ~font-normal ~leading-5 ${
              stacked ? '' : '~flex-1'
            }`}
          >
            {loading ? (
              <Skeleton className='~h-4 ~w-28 ~rounded-md' />
            ) : (
              <div className='~flex ~items-center ~gap-2'>{label}</div>
            )}
          </p>
        </div>
        <div
          className={`~flex ~items-center ~whitespace-nowrap ~pt-2 ~text-[10px] ${deltaClass}`}
        >
          {loading ? (
            <Skeleton className='~h-4 ~w-20' />
          ) : (
            <>
              <Arrow className='~text-xs' />
              &nbsp;{delta}&nbsp;
              <span className='~text-card-foreground'>Change</span>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export { SummaryTile };
