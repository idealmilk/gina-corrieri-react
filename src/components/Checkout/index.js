import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from './../../redux/Cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import './styles.scss';
import Button from './../forms/Button';
import Item from './Item';

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

const Checkout = ({ }) => {
  const history = useHistory();
  const { cartItems, total } = useSelector(mapState);

  const errMsg = 'You have no items in your cart.';

  return (
    <div className="checkout">
      <div className="cart">
        {cartItems.length > 0 ? (
          <div>
            <table border="0" cellPadding="0" cellSpacing="0">
              <tbody>
                <tr>
                  <td>
                    <table className="checkoutHeader" border="0" cellPadding="10" cellSpacing="0">
                      <tbody>
                        <tr>
                          <th>
                            Product
                          </th>
                          <th>
                            Name
                          </th>
                          <th>
                            Quantity
                          </th>
                          <th>
                            Price
                          </th>
                          <th>
                            Remove
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td  className="items">
                    <table border="0" cellSpacing="0" cellPadding="0">
                      <tbody>
                        {cartItems.map((item, pos) => {
                          return (
                            <tr key={pos}>
                              <td>
                                <Item {...item} />
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="breakdown">
              <div className="calculation">
                <div className="subtotal">
                  <div className="key">
                    <p>Subtotal</p>
                  </div>
                  <div className="value">
                    <p>£{total}</p>
                  </div>
                </div>
                <div className="shipping">
                  <div className="key">
                    <p>Shipping</p>
                  </div>
                  <div className="value">
                    <p>£2.75</p>
                  </div>
                </div>
                <div className="total">
                  <div className="key">
                    <p>Total</p>
                  </div>
                  <div className="value">
                    <p>£{total + 2.75}</p>
                  </div>
                </div>
              </div>

              <Button onClick={() => history.push('/payment')}>
                Proceed to Checkout
              </Button>
            </div>

            {/* <Button onClick={() => history.goBack()}>
              Continue Shopping
            </Button> */}
          </div>
                               
            
        ) : (
            <p>
              {errMsg}
            </p>
          )}
        
      </div>
    </div>
  );
};

export default Checkout;
