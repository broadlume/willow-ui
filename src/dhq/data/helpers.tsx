import type { Lead } from './leads';

export const extractOrderItems = (lead: Lead) => {
  const {
    source: {
      items: { nodes },
    },
  } = lead;

  return nodes;
};
