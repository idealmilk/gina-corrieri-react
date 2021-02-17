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
    productPrice,
    productQuantity
  } = product;

  if (!documentID || !productThumbnail || !productName || !productPrice ||
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

  const activeProduct = 
    <Tilt className="tilt" options={{ max : 25, reverse: true }} >
      <Link to={`/product/${documentID}`} className="thumb">
        <img src={productThumbnail} alt={productName} />
      </Link>
    </Tilt>;

  const inactiveProduct =
    <Tilt className="tilt" options={{ max : 25, reverse: true }} >
      <div className="thumb">
        <img src={productThumbnail} alt={productName} className="inactiveImg"/>
        <h3>SOLD OUT</h3>
      </div>
    </Tilt>;

  return (
    <div className="product">
      <div>
        
        {productQuantity > 0 ? activeProduct : inactiveProduct}
        
      </div>

      <div 
        className="details"
        style={ productQuantity > 0 ? { opacity:'1'} : {opacity : '0.5'} }
      >
        <div className="name">
          {productQuantity <= 0 ? productName :
            <Link to={`/product/${documentID}`}>
              {productName}
            </Link>
          }
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
