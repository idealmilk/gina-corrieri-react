import React from 'react';
import Header from '../components/Header';
import MobileNav from '../components/MobileNav';
import Footer from '../components/Footer';

const ProductLayout = props => {
  return (
    <div className="productLayout">
      <Header {...props} />
      <MobileNav {...props} />
      <div className="children">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default ProductLayout;
