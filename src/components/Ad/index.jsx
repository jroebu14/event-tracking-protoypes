import React, { forwardRef } from 'react';
import './ad.css';

const Ad = forwardRef((props, ref) => (
  <div ref={ref} className="ad">
    ADVERTISEMENT
  </div>
));

export default Ad;
