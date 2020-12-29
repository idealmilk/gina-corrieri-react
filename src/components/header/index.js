import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/utils'

import './styles.scss';
import Logo from '../../assets/gina-logo-black.png';

const Header = props => {
  const { currentUser } = props;

  return (
    <header className="header">
      <nav id="nav-menu-left" className="nav-menu">
        <p className="nav-link">Lookbook</p>
        <p className="nav-link">Shop</p>
      </nav>
      <nav id="nav-menu-right" className="nav-menu">
        <p className="nav-link">About</p>
        {currentUser && [
          <span onClick={() => auth.signOut()}>
            <p className="nav-link">Log Out</p>
          </span>
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
