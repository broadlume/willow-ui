import { Card, CardContent } from '@components/card/card';
import { Skeleton } from '@components/skeleton/skeleton';
import { cn } from '@src/lib/utils';
import { FaArrowCircleDown, FaArrowCircleUp } from 'react-icons/fa';

// Component to display the main number
const NumberDisplay = ({ loading, numberString }) =>
  loading ? (
    <Skeleton className='h-6 w-24 rounded-md' />
  ) : (
    <h5>{numberString}</h5>
  );

// Component to display the label
const LabelDisplay = ({ loading, label }) =>
  loading ? (
    <Skeleton className='h-4 w-28 rounded-md' />
  ) : (
    <div className='flex items-center gap-2'>{label}</div>
  );

// Component to display the delta value with arrow
const DeltaDisplay = ({ loading, Arrow, deltaString, deltaClass, stacked }) => (
  <div
    className={`flex items-center whitegap-nowrap pt-2 text-[10px] ${deltaClass}`}
  >
    {loading ? (
      <Skeleton className='h-4 w-20' />
    ) : deltaString ? (
      // Show the arrow only if there is a delta value.
      <>
        <Arrow className='text-xs' />
        &nbsp;{deltaString}&nbsp;
        <span className='text-card-foreground'>Change</span>
      </>
    ) : (
      // Place the invisble arrow as a spacer if there is no delta value.
      // If stacked, don't put the spacer.
      !stacked && <Arrow className='invisible text-xs' />
    )}
  </div>
);

type DefaultNumProps = {
  /** The previous value. If no value is supplied, custom formatting is used. */
  previous?: number;
};
type CustomNumProps = {
  /** FOR CUSTOM FORMATTING: What number + unit to show as the change, i.e. "3%", "-8 second". */
  delta?: string;
  /** FOR CUSTOM FORMATTING: Whether to show negative colors + arrows. */
  negative?: boolean;
};
export type SummaryTileNumProps = DefaultNumProps &
  CustomNumProps & {
    /** The current value. */
    current?: number | string;
    /** Label, i.e. "Total Sales" or "Users", or a JSX component to go where the label would be. */
    label?: string | JSX.Element;
    /** Should the colors for negative & positive be swapped? */
    negativeIsGood?: boolean;
  };

export type SummaryTileProps = SummaryTileNumProps & {
  /** Whether to display loading placeholder. */
  loading?: boolean;
  /** Classnames for the Card container. */
  className?: string;
  /** Whether to remove y-padding to display the tile as one of a stacked tile group. */
  stacked?: boolean;
};

const SummaryTile = ({
  current,
  previous,
  label,
  delta,
  negative,
  negativeIsGood = false,
  stacked = false,
  loading = false,
  className,
}: SummaryTileProps) => {
  // Determine whether to use custom or default formatting.
  const noCustomFormatting =
    current !== undefined &&
    typeof current === 'number' &&
    previous !== undefined;

  // Function to get the number as a string with formatting.
  const getNumberString = () => {
    if (noCustomFormatting) return current.toLocaleString('en-US');
    return (
      current?.toLocaleString('en-US') ||
      (typeof current === 'number' ? current.toLocaleString('en-US') : current)
    );
  };

  // Function to calculate and get the delta string.
  const getDeltaString = () => {
    if (noCustomFormatting) {
      const delta = ((current - previous) / previous) * 100;
      return `${Math.round(delta).toLocaleString('en-US')}%`;
    }
    return delta;
  };

  // Function to determine if the number is negative.
  const isNegative = noCustomFormatting ? current < previous : negative;

  // Function to determine if the delta is good or not.
  const isDeltaGood = isNegative ? !negativeIsGood : negativeIsGood;

  // Classes and components based on conditions.
  const deltaClass = isDeltaGood ? 'text-danger' : 'text-beryl';
  const Arrow = isNegative ? FaArrowCircleDown : FaArrowCircleUp;

  return (
    <Card
      className={cn(
        'rounded-md shadow-lg',
        !stacked && 'h-[150px] w-[150px]',
        className
      )}
    >
      <CardContent
        noHeader
        className='flex h-full flex-col items-center p-4'
      >
        <div className='py-auto flex flex-1 flex-col items-center justify-center'>
          {!stacked && <div className='flex-1'></div>} {/* spacer */}
          <NumberDisplay loading={loading} numberString={getNumberString()} />
          <p
            className={`caption-2 pt-1 text-center font-normal leading-5 ${
              stacked ? '' : 'flex-1'
            }`}
          >
            <LabelDisplay loading={loading} label={label} />
          </p>
        </div>

        <DeltaDisplay
          loading={loading}
          Arrow={Arrow}
          deltaString={getDeltaString()}
          deltaClass={deltaClass}
          stacked={stacked}
        />
      </CardContent>
    </Card>
  );
};

export { SummaryTile };
