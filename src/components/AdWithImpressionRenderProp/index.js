import Ad from '../Ad';
import ImpressionRenderProp from '../ImpressionRenderProp';

const AdRenderPropImpressions = () => (
  <ImpressionRenderProp>
    {({ trackRef }) => <Ad ref={trackRef} />}
  </ImpressionRenderProp>
);

export default AdRenderPropImpressions;
