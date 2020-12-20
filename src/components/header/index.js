import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
import Logo from '../../assets/gina-logo-black.png';

const Header = props => {
  return (
    <header className="header">
      <nav id="nav-menu-left" className="nav-menu">
        <p className="nav-link">Lookbook</p>
        <p className="nav-link">Shop</p>
      </nav>
      <nav id="nav-menu-right" className="nav-menu">
        <p className="nav-link">About</p>
        <p className="nav-link">Account</p>
      </nav>
      <div className="logo">
        <Link to="/ ">
          <img src={Logo} alt="Gina Corrieri" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
