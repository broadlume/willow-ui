import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  [
    'tw-reset caption-1 ~inline-flex ~h-12 ~items-center ~justify-center ~rounded-full ~px-6 ~transition-colors',
    'focus-visible:~outline-none focus-visible:~ring-1 focus-visible:~ring-ring focus-visible:~ring-offset-2',
    'disabled:~pointer-events-none disabled:~opacity-50',
  ],
  {
    variants: {
      variant: {
        default:
          '~bg-primary ~text-primary-foreground ~shadow hover:~bg-primary/90',
        destructive:
          '~bg-destructive ~text-destructive-foreground ~shadow-sm hover:~bg-destructive/90',
        outline:
          '~border ~border-border ~bg-transparent ~shadow-sm hover:~bg-accent hover:~text-accent-foreground',
        secondary:
          '~bg-secondary ~text-secondary-foreground ~shadow-sm hover:~bg-secondary/80',
        ghost: 'hover:~bg-accent hover:~text-accent-foreground',
        link: '~text-primary ~underline-offset-4 hover:~underline',
      },
      size: {
        default: '',
        sm: '~text-[10px]',
        lg: '~text-base',
        icon: '~h-12 ~w-12 ~p-0',
      },
    },
    compoundVariants: [
      {
        variant: 'link',
        size: ['default', 'sm', 'lg', 'icon'],
        className: '~h-auto ~w-auto ~px-0 ~py-0',
      },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export { buttonVariants };
