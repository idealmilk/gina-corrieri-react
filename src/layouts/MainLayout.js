import React from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';
import FullPageLoader from '../components/FullPageLoader';

const MainLayout = props => {
  return (
    <div className="mainLayout">
      <Header {...props} />
      <div className="pageTitle">
        <h2>
          {props.children.type.name}
        </h2>
      </div>
      <div className="main">
        {props.children}
      </div>
      <Footer />
      <FullPageLoader />
    </div>
  );
};

export default MainLayout;
