import React from 'react';
import { useDispatch } from 'react-redux';
import { removeCartItem, addProduct, reduceCartItem } from './../../../redux/Cart/cart.actions';

const Item = (product) => {
  const dispatch = useDispatch();
  const {
    productName,
    productThumbnail,
    productPrice,
    quantity,
    documentID
  } = product;

  const handleRemoveCartItem = (documentID) => {
    dispatch(
      removeCartItem({
        documentID
      })
    );
  }

  const handleAddProduct = (product) => {
    dispatch(
      addProduct(product)
    )
  }

  const handleReduceItem = (product) => {
    dispatch(
      reduceCartItem(product)
    );
  }

  return (
    <table className="cartItem" border="0" cellSpacing="0" cellPadding="10">
      <tbody>
        <tr>
          <td>
            <img src={productThumbnail} alt={productName} />
          </td>
          <td className="productName">
            <p>{productName}</p>
          </td>
          <td className="productQuantity">
            <p>
              <span className="cartBtn"
                onClick={() => handleReduceItem(product)}>
                {`< `}
              </span>
              <span>
                {quantity}
              </span>
              <span className="cartBtnInactive">
                {/* onClick={() => handleAddProduct(product)} */}
                {` >`}
              </span>
            </p>
          </td>
          <td>
            <p>£{productPrice.toFixed(2)}</p>
          </td>
          <td>
            <p onClick={() => handleRemoveCartItem(documentID)} className="remove">
              Remove
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Item;
