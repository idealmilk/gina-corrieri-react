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
                    {filterType === "hoodie" ? "Hoodies" : <a href="/shop/hoodie">Hoodies</a>}
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

    data.sort(function(a, b) {
        return b.productCategory - a.productCategory;
    });

    data.sort(function (a, b) {

        // Sort by votes
        // If the first item has a higher number, move it down
        // If the first item has a lower number, move it up
        if (parseFloat(a.productQuantity) > parseFloat(b.productQuantity)) return -1;
        if (parseFloat(a.productQuantity) < parseFloat(b.productQuantity)) return 1;
    
        // If the votes number is the same between both items, sort alphabetically
        // If the first item comes first in the alphabet, move it up
        // Otherwise move it down
        if (a.productCategory < b.productCategory) return 1;
        if (a.productCategory > b.productCategory) return -1;
    
    });

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
