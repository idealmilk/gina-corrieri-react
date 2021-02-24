import React from 'react';
import EmailPassword from '../../components/EmailPassword';
import MetaDecorator from '../../components/MetaDecorator';

const Reset = props => {
  return (
    <div>
      <MetaDecorator
        title="Password Reset | Gina Corrieri"
        description="Gina Corrieri is an independent designer and reworker based in London."
      />
      <EmailPassword />
    </div>
  );
}

export default Reset;
