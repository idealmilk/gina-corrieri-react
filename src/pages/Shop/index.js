import React from 'react';

import MetaDecorator from './../../components/MetaDecorator';
import ProductResults from '../../components/ProductResults';

const Shop = ({ }) => {
  return (
    <div className="shopPage">
      <MetaDecorator
        title="Shop | Gina Corrieri"
        description="Gina Corrieri is an independent designer and reworker based in London."
      />
      <ProductResults />
    </div>
  );
};

export default Shop;
