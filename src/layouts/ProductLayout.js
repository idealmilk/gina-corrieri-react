import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductLayout = props => {
  return (
    <div className="productLayout">
      <Header {...props} />
      <div className="children">
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default ProductLayout;
