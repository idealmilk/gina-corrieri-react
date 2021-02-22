import React from 'react';
import Checkout from './../../components/Checkout';
import MetaDecorator from './../../components/MetaDecorator';

const Cart = ({}) => {
  return (
    <div>
      <MetaDecorator
        title="Cart | Gina Corrieri"
        description="Gina Corrieri is an independent designer and reworker based in London."
      />
      <Checkout />
    </div>
  );
}

export default Cart;
