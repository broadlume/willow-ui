import { createContext, useContext } from 'react';

export interface NodeViewContextType {
  fetchOptions: (query: string) => Promise<{ label: string; value: string }[]>;
  darkMode?: boolean;
}

export const NodeViewContext = createContext<NodeViewContextType>({
  fetchOptions: async () => {
    console.error(
      'NodeViewContext Provider is missing! Did you wrap your editor?'
    );
    return [];
  },
  darkMode: false,
});

export const useNodeViewContext = () => {
  return useContext(NodeViewContext);
};
