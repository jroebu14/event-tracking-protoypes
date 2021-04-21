import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
// Polyfill IntersectionObsesrver, e.g. for IE11
import 'intersection-observer';

const VIEWED_DURATION_MS = 1000;

const useImpression = () => {
  const [viewSent, setViewSent] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    let timeout;

    if (inView) {
      timeout = setTimeout(() => {
        if (!viewSent) {
          setViewSent(true);
          console.log('EVENT TRACKED!');
        }
      }, VIEWED_DURATION_MS);

      return () => clearTimeout(timeout);
    } else {
      clearTimeout(timeout);
    }
  }, [inView, viewSent]);

  return { trackRef: ref };
};

export default useImpression;
