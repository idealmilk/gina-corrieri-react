import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from './../../redux/User/user.actions';
import './styles.scss';
import { Link } from 'react-router-dom';

import Logo from './../../assets/gina-logo-black.png';

const mapState = ({ user }) => ({
  currentUser: user.currentUser
});

const Header = props => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <header className="header">
      <nav id="nav-menu-left" className="nav-menu">
        <p className="nav-link">Lookbook</p>
        <p className="nav-link">Shop</p>
      </nav>
      <nav id="nav-menu-right" className="nav-menu">
        <p className="nav-link">About</p>
        {currentUser && [
          <div>
            <span onClick={() => signOut()}>
              <p className="nav-link">Log Out</p>
            </span>
            <Link to="/dashboard">
              <p className="nav-link">Account</p>
            </Link>
          </div>
        ]}
        {!currentUser && [
          <Link to="/login">
            <p className="nav-link">Login</p>
          </Link>
        ]}
      </nav>
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Gina Corrieri" />
        </Link>
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null
};

export default Header;
