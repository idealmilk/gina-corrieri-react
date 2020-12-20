import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
import Logo from '../../assets/gina-logo-black.png';

const Header = props => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/ ">
            <img src={Logo} alt="Gina Corrieri" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
