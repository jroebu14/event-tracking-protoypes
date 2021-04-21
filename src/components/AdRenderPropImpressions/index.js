import Ad from '../Ad';
import ImpressionRenderProp from '../ImpressionRenderProp';

const AdRenderPropImpressions = () => (
  <ImpressionRenderProp>
    {({ trackRef }) => <Ad ref={trackRef}>ADVERTISEMENT IS TRACKED</Ad>}
  </ImpressionRenderProp>
);

export default AdRenderPropImpressions;
