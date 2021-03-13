import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ScrollHorizontal from 'react-scroll-horizontal';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { fetchProductStart, setProduct } from './../../redux/Products/products.actions';
import { selectCartItems } from './../../redux/Cart/cart.selectors';
import { addProduct } from './../../redux/Cart/cart.actions';
import Button from './../forms/Button';
import './styles.scss';
import MobilePageTitle from '../MobilePageTitle';

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

	const { productThumbnail, productImage1, productImage2, productImage3, productImage4,
		productName, productPrice, productDesc, productSize, productStyle, productColour,
		productHeight, productNeckline, productLength, productWidth, productShoulder,
		productArmhole, productWaist} = product;

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

	const [open, setOpen] = useState(false);

	const handleTriggerClick = () => {
		setOpen(!open);
	};

	// These null values are to add padding around horizontal scroll
	const productImage0 = null;
	const productImage5 = null;

	const images = [productImage0, productImage1, productImage2, productImage3, productImage4, productImage5]
	const mobileImage = [productImage1, productImage2, productImage3, productImage4];

	const productImages = images.map((image, pos) => {
		if (image) {
			return <img alt={pos} key={pos} src={image} className="productImage" />
		}
	});

	const mobileProductImages = []
	
	mobileImage.forEach((image, pos) => {
		if (image) {
			mobileProductImages.push(<img src={image} alt={pos} className="carouselImage" />)
		}
	});



	return (
		<div className="productCard">
			<MobilePageTitle title={productName}/>
			<div className="hero">
				<img src={productThumbnail} alt={productName} />
			</div>

			<AliceCarousel>
				{mobileProductImages}
			</AliceCarousel>

			<div className="productDetails">
				<h1>
					{productName}
				</h1>
				<p className="desc" dangerouslySetInnerHTML={{ __html: productDesc }}></p>
				<p>
					<strong>Style:</strong> {productStyle}
				</p>
				<p>
					<strong>Colour:</strong> {productColour}
				</p>
				<p>
					<strong>Available in size:</strong> {productSize}
				</p>
				{/* <Collapsible trigger={<p><strong>Measurements </strong><span className="trigger">{open ? '-' : '+'}</span></p>}
					{...{ open, handleTriggerClick }} overflowWhenOpen="visible">
					<p>
						{productNeckline > 0 ? `Neckline: ${productNeckline}` : ''}
					</p>
					<p>
						{productLength > 0 ? `Length: ${productLength}` : ''}
					</p>
					<p>
						{productLength > 0 ? `Height: ${productHeight}` : ''}
					</p>
					<p>
						{productWidth > 0 ? `Width: ${productWidth}` : ''}
					</p>
					<p>
						{productShoulder > 0 ? `Shoulder: ${productShoulder}` : ''}
					</p>
					<p>
						{productArmhole > 0 ? `Armhole: ${productArmhole}` : ''}
					</p>
					<p>
						{productWaist > 0 ? `Waist: ${productWaist}` : ''}
					</p>
				</Collapsible> */}
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
			<ScrollHorizontal  reverseScroll = { true }>
            	{productImages}
        	</ScrollHorizontal>
		</div>
	);
}

export default ProductCard;
