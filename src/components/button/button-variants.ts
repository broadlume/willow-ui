import { cva } from 'class-variance-authority';

const buttonVariants = cva(
  [
    '~inline-flex ~h-9 ~items-center ~justify-center ~gap-2 ~overflow-hidden ~rounded-[100px] ~px-4 ~font-founders_grotesk ~text-xs ~font-semibold ~uppercase ~leading-none ~shadow',
    'focus-visible:~ring-ring focus-visible:~outline-none focus-visible:~ring-1 focus-visible:~ring-offset-2',
    'disabled:~cursor-not-allowed',
  ],
  {
    variants: {
      variant: {
        default:
          '~text-primary-foreground ~bg-surface-cta ~text-surface-pri hover:~bg-[var(--color-cta-75)] disabled:~bg-[var(--color-cta-50)]',
        destructive:
          '~text-primary-foreground ~bg-surface-destructive ~text-surface-pri hover:~bg-[var(--color-red-400)] disabled:~bg-[var(--color-red-200)]',
        // TODO: @dhavaljbroadlume confirm hover color with designer
        outline:
          '~bg-surface-pri ~text-text-pri ~shadow-none ~outline ~outline-1 ~outline-offset-[-1px] ~outline-border-pri hover:~opacity-75 disabled:~opacity-50',
        secondary:
          '~bg-secondary ~text-secondary-foreground hover:~bg-secondary/80 ~bg-[var(--color-cta-15)] ~text-text-cta ~shadow-sm ~outline ~outline-1 ~outline-offset-[-1px] ~outline-[var(--color-cta-100)] hover:~opacity-75 disabled:~opacity-50',
        ghost:
          '~bg-transparent ~shadow-none hover:~bg-[var(--color-grey-10)] disabled:~bg-[var(--color-grey-5)]',
        link: '~bg-transparent ~text-text-cta ~underline-offset-4 ~shadow-none hover:~text-[var(--color-cta-75)] hover:~underline disabled:~text-[var(--color-cta-50)]',
      },
      size: {
        default: '',
        sm: '~text-[10px]',
        lg: '~text-base',
        icon: '~h-12 ~w-12 ~p-0 !~outline-none',
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
