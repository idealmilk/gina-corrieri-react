import React from 'react';

import './styles.scss';
import MetaDecorator from './../../components/MetaDecorator';
import Landing from './../../components/Landing';

const Homepage = props => {
  return (
    <section className="homepage">
      <MetaDecorator
        title="Gina Corrieri"
        description="Gina Corrieri is an independent designer and reworker based in London."
      />
      <Landing />
    </section>
  );
};

export default Homepage;
