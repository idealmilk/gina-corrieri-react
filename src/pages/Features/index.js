import React from 'react';

import MetaDecorator from './../../components/MetaDecorator';
import Features from './../../components/Features';

const FeaturesIndex = ({}) => {
  return (
    <div>
      <MetaDecorator
        title="Features | Gina Corrieri"
        description="Gina Corrieri is an independent designer and reworker based in London."
      />
      <Features />
    </div>
  );
}

export default FeaturesIndex;
