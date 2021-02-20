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

    console.log(data);

    useEffect(() => {
        dispatch(
            fetchProductsStart({ filterType })
        )
    }, [filterType]);

    const filter = 
        <div className="filter">
            <div className="wrap">
                <p>
                    {filterType === undefined ? "Shop All" : <a href="/shop">Shop All</a>}
                </p>
                <p>
                    {filterType === "tshirt" ? "T Shirts" : <a href="/shop/tshirt">T Shirts</a>}
                </p>
                <p>
                    {filterType === "trousers" ? "Trousers" : <a href="/shop/trousers">Trousers</a>}
                </p>
                <p>
                    {filterType === "bag" ? "Bags" : <a href="/shop/bag">Bags</a>}
                </p>
            </div>
        </div>

    if (!Array.isArray(data)) return null;
    
    if (data.length < 1) {
        return (
            <div className="productResults">
                {filter}
                
            </div>
        );
    }

    return (
        <div className="productResults">
            {filter}
            <div className="products">
                {data.map((product, pos) => {
                    const { productThumbnail, productName, productPrice, productQuantity } = product;
                    if (!productThumbnail || !productName || !productPrice ||
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
    );
};

export default ProductResults;
