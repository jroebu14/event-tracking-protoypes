import React, { forwardRef } from 'react';
import './button.css';

const Button = forwardRef((props, ref) => (
  <button ref={ref} className="button">
    CLICK ME!
  </button>
));

export default Button;
