import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Tilt from 'react-tilt';
import Button from './../../forms/Button';
import { useDispatch } from 'react-redux';
import { addProduct } from './../../../redux/Cart/cart.actions';

const Product = (product) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    documentID,
    productThumbnail,
    productName,
    productPrice
  } = product;
  if (!documentID || !productThumbnail || !productName ||
    typeof productPrice === 'undefined') return null;

  const configAddToCartBtn = {
    type: 'button'
  };

  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(
      addProduct(product)
    );
    history.push('/cart');
  };

  return (
    <div className="product">
      <div>
        
        <Tilt className="tilt" options={{ max : 25, reverse: true }} >
          <Link to={`/product/${documentID}`} className="thumb">
            <img src={productThumbnail} alt={productName} />
          </Link>
        </Tilt>
        
      </div>

      <div className="details">
        <div className="name">
          <Link to={`/product/${documentID}`}>
            {productName}
          </Link>
        </div>
        <div className="price">
          £{parseFloat(productPrice).toFixed(2)}
        </div>
          {/*<li>
            <div className="addToCart">
              <Button {...configAddToCartBtn} onClick={() => handleAddToCart(product)}>
                Add to cart
              </Button>
            </div>
          </li>*/}
      </div>

    </div>
  );
};

export default Product;
