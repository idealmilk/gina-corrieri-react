import React from 'react';
import './styles.scss';

const Footer = props => {
  return (
    <footer className="footer">
      <div className="footerMain">
        <div className="wrap">
          <div className="info">
            <a 
              href = "mailto: info@ginacorrieri.com"
              className="email">
                Contact
            </a>
          </div>
          <div className="contact">
            <a 
              href="https://www.instagram.com/ginacorrieri_" 
              target="_blank" 
              rel="noopener noreferrer">
                Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
