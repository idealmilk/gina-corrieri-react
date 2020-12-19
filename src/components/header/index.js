import React from 'react';

import './styles.scss';
import Logo from '../../assets/gina-logo-black.png'

const Header = props => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="Gina Corrieri" />
        </div>
      </div>
    </header>
  );
};

export default Header;
