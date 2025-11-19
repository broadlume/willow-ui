export const CountBadge = ({ count }: { count: number }) => (
  <span className='bg-surface-cta flex h-5 w-5 items-center justify-center rounded-full text-xs font-medium text-white'>
    {count}
  </span>
);
