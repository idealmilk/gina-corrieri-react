import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Footer = props => {
  return (
    <footer className="footer">
      <div className="footerMain">
        <div className="wrap">
          <div className="info">
            <a 
              href = "mailto: info@ginacorrieri.com"
              className="email"
              target="_blank"
              rel="noopener noreferrer">
                Contact
            </a>
            <Link to="/faq">
              FAQ
            </Link>
          </div>
          <div className="socials">
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
