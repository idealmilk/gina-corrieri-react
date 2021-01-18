import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductsStart } from './../../redux/Products/products.actions';
import Product from './Product';
import './styles.scss';

const mapState = ({ productsData }) => ({
  products: productsData.products
});

const ProductResults = ({ }) => {
  const dispatch = useDispatch();
  const { filterType } = useParams();
  const { products } = useSelector(mapState);

  console.log(filterType)

  const { data } = products;

  useEffect(() => {
    dispatch(
      fetchProductsStart({ filterType })
    )
  }, [filterType]);

  if (!Array.isArray(data)) return null;
  if (data.length < 1) {
    return (
      <div className="products">
        <p>
          No search results.
        </p>
      </div>
    );
  }

  return (
    <div className="productResults">
      <div className="filter">
        <div className="wrap">
          <p>
            {filterType === undefined ? "Shop All" : <a href="/shop">Shop All</a>}
          </p>
          <p>
            {filterType === "mens" ? "Mens" : <a href="/shop/mens">Womens</a>}
          </p>
          <p>
            {filterType === "womens" ? "Women" : <a href="/shop/womens">Womens</a>}
          </p>
        </div>
      </div>

      <div className="products">

        <div className="productResults">
          {data.map((product, pos) => {
            const { productThumbnail, productName, productPrice } = product;
            if (!productThumbnail || !productName ||
              typeof productPrice === 'undefined') return null;

            const configProduct = {
              ...product
            };

            return (
              <Product key={pos} {...configProduct} />
            );
          })}
        </div>

      </div>

    </div>
  );
};

export default ProductResults;
