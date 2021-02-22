import React from 'react';

import './styles.scss';
import MetaDecorator from './../../components/MetaDecorator';
import SignIn from './../../components/SignIn';

const Login = props => {
  return (
    <div>
      <MetaDecorator
        title="Login | Gina Corrieri"
        description="Gina Corrieri is an independent designer and reworker based in London."
      />
      <SignIn />
    </div>
  );
};

export default Login;
