import React from 'react';
import { Link } from 'react-router-dom';

const ExamplePageOne = () => (
  <div className="wrapper">
    <h1>Event tracking prototypes!</h1>
    <ul>
      <li>
        <Link to="/example-page-1">Example page one</Link>
      </li>
      <li>
        <Link to="/example-page-2">Example page two</Link>
      </li>
    </ul>
  </div>
);

export default ExamplePageOne;
