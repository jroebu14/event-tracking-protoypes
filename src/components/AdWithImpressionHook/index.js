import Ad from '../Ad';
import useImpression from '../../hooks/useImpression';

const AdWithImpressionHook = () => {
  const { trackRef } = useImpression();

  return <Ad ref={trackRef} />;
};

export default AdWithImpressionHook;
