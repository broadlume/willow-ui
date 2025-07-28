import React, {
  createContext,
  useContext,
  useRef,
  useLayoutEffect,
  useState,
} from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '@src/lib/utils';
import { cva } from 'class-variance-authority';

const tabListVariants = cva(
  '~relative ~inline-flex ~h-9 ~items-center ~justify-center ~bg-surface-pri ~text-muted-foreground',
  {
    variants: {
      variant: {
        default: '',
        pills: '~rounded-full ~border ~border-black ~p-1',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const sliderVariants = cva(
  '~pointer-events-none ~absolute ~transition-all ~duration-300 ~ease-in-out',
  {
    variants: {
      variant: {
        default: '~z-10 ~border-primary',
        pills: '~bottom-1 ~top-1 ~rounded-full ~bg-black',
      },
      orientation: {
        horizontal: '~left-0 ~h-full ~border-b-2',
        vertical: '~top-0 ~w-full ~border-r-2',
      },
    },
    // TODO: compound variant may make default pill variant effectively redundant
    compoundVariants: [
      {
        variant: 'pills',
        orientation: 'horizontal',
        className:
          '~bottom-1 ~top-1 ~h-auto ~rounded-full ~border-none ~bg-black',
      },
    ],
    defaultVariants: {
      variant: 'default',
    },
  }
);

const tabTriggerVariants = cva(
  [
    'caption-1 ~inline-flex ~min-h-0 ~items-center ~justify-center ~whitespace-nowrap ~px-3 ~py-1 ~ring-offset-background ~transition-all',
    'focus-visible:~outline-none focus-visible:~ring-2 focus-visible:~ring-ring focus-visible:~ring-offset-2',
    'disabled:~pointer-events-none disabled:~opacity-50',
  ],
  {
    variants: {
      variant: {
        default: cn(
          '~h-full ~border-b ~border-border',
          'data-[state=inactive]:~font-normal data-[state=active]:~text-foreground'
        ),
        pills:
          '~z-10 ~rounded-full ~text-foreground data-[state=active]:~text-white',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const TabsContext = createContext({
  variant: 'default' as TabsProps['variant'],
  orientation: 'horizontal' as TabsProps['orientation'],
});
interface TabsProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root> {
  variant?: 'default' | 'pills';
  orientation?: 'horizontal' | 'vertical';
}

/** A set of layered sections of content, known as tab panels, that are displayed one at a time. */
const Tabs = ({
  variant = 'default',
  orientation = 'horizontal',
  className,
  ...props
}: TabsProps) => (
  <TabsContext.Provider value={{ variant, orientation }}>
    <TabsPrimitive.Root
      className={cn('tw-reset', className)}
      {...props}
      orientation={orientation}
    />
  </TabsContext.Provider>
);

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, children, ...props }, forwardedRef) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const internalRef = useRef<React.ElementRef<typeof TabsPrimitive.List>>(null);
  const ref = (forwardedRef as React.RefObject<HTMLDivElement>) || internalRef;

  // get variant from context
  const { variant, orientation } = useContext(TabsContext);

  // track if it's the first render
  const [isFirstRender, setIsFirstRender] = useState(true);

  useLayoutEffect(() => {
    // technically doesn't run on window resize, but we're ignoring that
    function updateSlider() {
      const container = ref.current;
      const activeTab = container?.querySelector('[data-state="active"]');
      if (activeTab && sliderRef.current) {
        const activeTabElement = activeTab as HTMLElement;
        if (orientation === 'horizontal') {
          sliderRef.current.style.transform = `translateX(${activeTabElement.offsetLeft}px)`;
          sliderRef.current.style.width = `${activeTabElement.offsetWidth}px`;
        } else {
          sliderRef.current.style.transform = `translateY(${activeTabElement.offsetTop}px)`;
          sliderRef.current.style.height = `${activeTabElement.offsetHeight}px`;
        }
        // after updating the slider position, set isFirstRender to false
        setIsFirstRender(false);
      }
    }

    updateSlider();

    const observer = new MutationObserver(updateSlider);
    observer.observe((ref as React.MutableRefObject<HTMLDivElement>).current, {
      attributes: true,
      subtree: true,
    });
    return () => observer.disconnect();
  }, [ref]);

  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn(tabListVariants({ variant }), className)}
      {...props}
    >
      <div // slider
        ref={sliderRef}
        className={cn(
          sliderVariants({ variant, orientation }),
          isFirstRender ? '~transition-none' : ''
        )}
      />
      {children}
    </TabsPrimitive.List>
  );
});
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  // get variant from context
  const { variant } = useContext(TabsContext);

  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(tabTriggerVariants({ variant }), className)}
      {...props}
    />
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      '~mt-2 ~ring-offset-background',
      'focus-visible:~outline-none focus-visible:~ring-2 focus-visible:~ring-ring focus-visible:~ring-offset-2',
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
