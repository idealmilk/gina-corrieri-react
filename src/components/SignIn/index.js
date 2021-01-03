import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { signInUser, signInWithGoogle } from './../../redux/User/user.actions';

import './styles.scss';
import AuthWrapper from '../AuthWrapper';
import Button from '../forms/Button';
import FormInput from '../forms/FormInput';

const mapState = ({ user }) => ({
  signInSuccess: user.signInSuccess
});

const SignIn = props => {
  const { signInSuccess } = useSelector(mapState);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (signInSuccess) {
      resetForm();
      props.history.push('/');
    }
  }, [signInSuccess]);

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleGoogleSignIn = () => {
    dispatch(signInWithGoogle());
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signInUser({ email, password }));
  }

  const configAuthWrapper = {
    headline: 'Log In'
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={e => setEmail(e.target.value)}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            handleChange={e => setPassword(e.target.value)}
          />
          <Button type="submit">
            Login
          </Button>
          <div className="social-sign-in">
            <div className="row">
              <Button onClick={handleGoogleSignIn}>
                Sign in with Google
              </Button>
            </div>
          </div>
          <div className="links">
            <Link to="/recovery">
              Forgotten Password?
            </Link>
          </div>
        </form>
      </div>
    </AuthWrapper>
  );
}

export default withRouter(SignIn);
