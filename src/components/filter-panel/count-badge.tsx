import { Badge } from "@components/badge/badge";

export const CountBadge = ({ count }: { count: number }) => (
  <Badge variant={'secondary'} className={'!rounded !px-1 !py-0.5 !text-xs !text-text-pri'}>
    {count}
  </Badge>
);