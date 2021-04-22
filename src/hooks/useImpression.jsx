import { useEffect, useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
// Polyfill IntersectionObsesrver, e.g. for IE11
import 'intersection-observer';

const VIEWED_DURATION_MS = 1000;

const useImpression = () => {
  const timeoutRef = useRef();
  const [viewSent, setViewSent] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      timeoutRef.current = setTimeout(() => {
        if (!viewSent) {
          setViewSent(true);
          console.log('EVENT TRACKED!');
        }
      }, VIEWED_DURATION_MS);
    } else {
      clearTimeout(timeoutRef.current);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [inView, viewSent]);

  return { trackRef: ref };
};

export default useImpression;
