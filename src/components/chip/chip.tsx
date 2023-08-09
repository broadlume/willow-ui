import { Badge } from '@components/badge/badge';
import React from 'react';

type ChipProps = {
  children: React.ReactNode;
};

const Chip = (props: ChipProps) => {
  return <Badge {...props} />;
};

export { Chip };
