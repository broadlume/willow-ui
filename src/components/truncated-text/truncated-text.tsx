import { useRef, useCallback } from 'react';
import { useResizeDetector } from 'react-resize-detector';

type Props = {
  children?: React.ReactNode;
  onTruncation?: (isTruncated: boolean) => void;
};

const TruncatedText = ({ children, onTruncation }: Props) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const onResize = useCallback(() => {
    if (targetRef.current && onTruncation) {
      const { scrollWidth, offsetWidth } = targetRef.current;
      onTruncation(offsetWidth < scrollWidth);
    }
  }, [onTruncation, targetRef]);

  useResizeDetector({ onResize, targetRef });

  return (
    <div className='~truncate ~bg-gray-200' ref={targetRef}>
      {children}
    </div>
  );
};

export { TruncatedText };
