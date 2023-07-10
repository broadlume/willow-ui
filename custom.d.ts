declare module '*.svg' {
  import { ReactElement, SVGProps } from 'react';
  export const ReactComponent: (props: SVGProps<SVGSVGElement>) => ReactElement;
  const src: string;
  export default src;
}
