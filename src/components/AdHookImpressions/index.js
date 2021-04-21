import Ad from '../Ad';
import useImpression from '../../hooks/useImpression';

const AdRenderPropImpressions = () => {
  const { trackRef } = useImpression();

  return <Ad ref={trackRef}>ADVERTISEMENT IS TRACKED</Ad>;
};

export default AdRenderPropImpressions;
