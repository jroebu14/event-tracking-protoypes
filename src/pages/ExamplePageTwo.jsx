import React from 'react';
import PlaceholderText from '../components/PlaceholderText';
import AdWithImpressionRenderProp from '../components/AdWithImpressionRenderProp';
import AdWithImpressionHook from '../components/AdWithImpressionHook';

const ExamplePageTwo = () => (
  <div className="wrapper">
    <h1>Example page one</h1>
    <PlaceholderText />
    <PlaceholderText />
    <AdWithImpressionRenderProp />

    <PlaceholderText />
    <AdWithImpressionRenderProp />

    <PlaceholderText />
    <AdWithImpressionHook />

    <PlaceholderText />
    <AdWithImpressionHook />
  </div>
);

export default ExamplePageTwo;
