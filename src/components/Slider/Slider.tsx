import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

import { cn } from '@src/lib/utils';

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'tw-reset ~group ~relative ~flex ~w-full ~cursor-pointer ~touch-none ~select-none ~items-center',
      'data-[disabled]:~cursor-not-allowed data-[disabled]:~opacity-50',
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className='~relative ~h-1.5 ~w-full ~grow ~overflow-hidden ~rounded-full ~bg-primary/20'>
      <SliderPrimitive.Range className='~absolute ~h-full ~bg-primary' />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className={cn(
        '~block ~h-4 ~w-4 ~rounded-full ~border ~border-primary/50 ~bg-background ~shadow ~transition-colors',
        'focus-visible:~outline-none focus-visible:~ring-1 focus-visible:~ring-ring'
      )}
    />
    <SliderPrimitive.Thumb // Needed for a second thumb, somehow doesn't show up if only 1 value is given
      className={cn(
        '~block ~h-4 ~w-4 ~rounded-full ~border ~border-primary/50 ~bg-background ~shadow ~transition-colors',
        'focus-visible:~outline-none focus-visible:~ring-1 focus-visible:~ring-ring'
      )}
    />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
