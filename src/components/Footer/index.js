import React from 'react';
import './styles.scss';

const Footer = props => {
  return (
    <footer className="footer">
      <div className="wrap">
        <div>
          Gina Corrieri
        </div>
        <div className="instagram">
          <a 
            href="https://www.instagram.com/ginacorrieri_" 
            target="_blank" 
            rel="noopener noreferrer">
              Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
