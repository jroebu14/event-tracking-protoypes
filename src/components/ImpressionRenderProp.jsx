import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
// Polyfill IntersectionObsesrver, e.g. for IE11
import 'intersection-observer';

const VIEWED_DURATION_MS = 1000;

const ImpressionRenderProp = ({ children: render }) => {
  const [viewSent, setViewSent] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      const timeoutId = setTimeout(() => {
        if (!viewSent && inView) {
          setViewSent(true);
          console.log('EVENT TRACKED!');
        }
      }, VIEWED_DURATION_MS);

      return () => clearTimeout(timeoutId);
    }
  }, [inView]);

  return render({
    trackRef: ref,
  });
};

export default ImpressionRenderProp;
