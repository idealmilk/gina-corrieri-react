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
      <div className="thumb">
        <Link to={`/product/${documentID}`}>
          <Tilt className="Tilt" options={{ max : 25, reverse: true }} >
            <img src={productThumbnail} alt={productName} />
          </Tilt>
        </Link>
      </div>

      <div className="details">
        <ul>
          <li>
            <span className="name">
              <Link to={`/product/${documentID}`}>
                {productName}
              </Link>
            </span>
          </li>
          <li>
            <span className="price">
              £{productPrice}
            </span>
          </li>
          <li>
            <div className="addToCart">
              <Button {...configAddToCartBtn} onClick={() => handleAddToCart(product)}>
                Add to cart
              </Button>
            </div>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Product;
