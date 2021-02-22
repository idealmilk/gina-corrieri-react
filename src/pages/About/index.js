import React from 'react';

import MetaDecorator from './../../components/MetaDecorator';
import AboutInfo from './../../components/AboutInfo';

const About = ({}) => {
  return (
    <div>
      <MetaDecorator
        title="About | Gina Corrieri"
        description="Gina Corrieri is an independent designer and reworker based in London."
      />
      <AboutInfo />
    </div>
  );
}

export default About;
