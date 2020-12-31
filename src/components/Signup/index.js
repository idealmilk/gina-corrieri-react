import React, { Component } from 'react';

import './styles.scss';
import FormInput from '../forms/FormInput/';
import Button from '../forms/Button/';

const initialState = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className="sign-up">
        <div className="wrap">
          <h2>Sign up</h2>
          <div className="formWrap">
            <form>
              <FormInput
                type="text"
                name="displayName"
                value={displayName}
                placeholder="Full Name"
                onChange={this.handleChange}
              />
              <FormInput
                type="email"
                name="email"
                value={email}
                placeholder="Email Address"
                onChange={this.handleChange}
              />
              <FormInput
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={this.handleChange}
              />
              <FormInput
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                placeholder="Confirm Password"
                onChange={this.handleChange}
              />
              <Button type="submit">
                Sign Up
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default Signup;
