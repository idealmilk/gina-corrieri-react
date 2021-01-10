import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductStart, setProduct } from './../../redux/Products/products.actions';

import './styles.scss';

const mapState = state => ({
  product: state.productsData.product
})

const ProductCard = ({}) => {
  const dispatch = useDispatch();
  const { productID } = useParams();
  const { product } = useSelector(mapState);

  const {
    productName
  } = product;

  useEffect(() => {
    dispatch(
      fetchProductStart(productID)
    )

  }, []);

  return (
    <div>
      <h1>
        {productName}
      </h1>
    </div>
  );
}

export default ProductCard;
