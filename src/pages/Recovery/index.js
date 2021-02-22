import React from 'react';
import EmailPassword from './../../components/EmailPassword';
import MetaDecorator from './../../components/MetaDecorator';

const Recovery = props => {
  return (
    <div>
      <MetaDecorator
        title="Password Recovery | Gina Corrieri"
        description="Gina Corrieri is an independent designer and reworker based in London."
      />
      <EmailPassword />
    </div>
  );
}

export default Recovery;
