import React from 'react';
import Header from './../components/Header';
import MobileNav from '../components/MobileNav';
import Footer from './../components/Footer';

const MainLayout = props => {
  return (
    <div className="mainLayout">
      <Header {...props} />
      <MobileNav {...props} />
      <div className="pageTitle">
        <h2>
          {props.children.type.name}
        </h2>
      </div>
      <div className="main">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
