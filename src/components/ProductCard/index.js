import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchProductStart, setProduct } from './../../redux/Products/products.actions';
import { selectCartItems } from './../../redux/Cart/cart.selectors';
import { addProduct } from './../../redux/Cart/cart.actions';
import Button from './../forms/Button';
import './styles.scss';

const mapState = state => ({
  product: state.productsData.product,
});

const mapCart = createStructuredSelector({
  cartItems: selectCartItems,
});

const ProductCard = ({}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { productID } = useParams();
  const { product } = useSelector(mapState);
  const { cartItems } = useSelector(mapCart);

  const {
    productThumbnail,
    productName,
    productPrice,
    productDesc,
    productSize,
    productStyle,
    productColour,
    productNeckline,
    productLength,
    productWidth,
    productShoulder,
    productArmhole,
    productWaist
  } = product;

  useEffect(() => {
    dispatch(
      fetchProductStart(productID)
    )

    return () => {
      dispatch(
        setProduct({})
      )
    }

  }, []);

  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(
      addProduct(product)
    );
    history.push('/cart');
  };

  const configAddToCartBtn = {
    type: 'button'
  };

  const inCart = cartItems.some(x => x.documentID === product.documentID);

  const addToCart = () => {
    if (inCart) {
      return (
        <button className="inactiveButton" title="No more items in stock">
          Out of stock
        </button>
      )
    } else {
      return (
        <Button {...configAddToCartBtn} onClick={() => handleAddToCart(product)} >
          Add to cart
        </Button>
      )
    };
  };

  return (
    <div className="productCard">
      <div className="hero">
        <img src={productThumbnail} />
      </div>
      <div className="productDetails">
        <ul>
          <li>
            <h1>
              {productName}
            </h1>
          </li>
          <li>
            <span
              className="desc"
              dangerouslySetInnerHTML={{ __html: productDesc }} />
          </li>
          <li>
            <span>
              <strong>Style:</strong> {productStyle}
            </span>
          </li>
          <li>
            <span>
              <strong>Colour:</strong> {productColour}
            </span>
          </li>
          <li>
            <span>
              <strong>Available in size:</strong> {productSize}
            </span>
          </li>
          <li>
            <span>
              <strong>Measurements +</strong>
            </span>
          </li>
        </ul>
      </div>
      <div className="buy">
        <div className="price">
          <span style={ inCart ? { color:'rgb(230, 230, 230)'} : {color: 'black'}}>
            £{productPrice}
          </span>
        </div>
        <div className="addToCart">
          {addToCart()}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
