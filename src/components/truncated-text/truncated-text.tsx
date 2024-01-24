import { useRef, useEffect, useCallback } from 'react';

type Props = {
  text: string;
  onTruncation?: (isTruncated: boolean) => void;
};

/** Text which truncates when it overflows its container, & knows when it is being truncated. */
const TruncatedText = ({ text, onTruncation }: Props) => {
  const text_ref = useRef<HTMLDivElement>(null);

  // Using useCallback to memoize the function
  const checkTruncation = useCallback(() => {
    if (text_ref.current && onTruncation) {
      onTruncation(text_ref.current.offsetWidth < text_ref.current.scrollWidth);
    }
  }, [onTruncation]);

  useEffect(() => {
    checkTruncation();
  }, [text, checkTruncation]); // Added checkTruncation to the dependency array

  useEffect(() => {
    const resizeObserver = new ResizeObserver(checkTruncation);

    const currentTextRef = text_ref.current;
    if (currentTextRef) resizeObserver.observe(currentTextRef);

    return () => {
      if (currentTextRef) resizeObserver.unobserve(currentTextRef);
    };
  }, [checkTruncation]); // checkTruncation is now a stable function

  return (
    <div className='~truncate' ref={text_ref}>
      {text}
    </div>
  );
};

export { TruncatedText };
