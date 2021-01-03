import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/utils';

import './styles.scss';
import Logo from '../../assets/gina-logo-black.png';

const mapState = ({ user }) => ({
  currentUser: user.currentUser
});

const Header = props => {
  const { currentUser } = useSelector(mapState);

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
            <span onClick={() => auth.signOut()}>
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
