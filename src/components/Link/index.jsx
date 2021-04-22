import React, { forwardRef } from 'react';

const Link = forwardRef((props, ref) => (
  <a ref={ref} href="http://www.bbc.com">
    CLICK ME!
  </a>
));

export default Link;
