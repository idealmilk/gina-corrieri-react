import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOrderDetailsStart } from './../../redux/Orders/orders.actions';
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';
import MetaDecorator from './../../components/MetaDecorator';
import OrderDetails from './../../components/OrderDetails';

const mapState = ({ ordersData }) => ({
  orderDetails: ordersData.orderDetails
});

const Order = () => {
  const { orderID } = useParams();
  const dispatch = useDispatch();
  const { orderDetails } = useSelector(mapState);
  const { orderTotal } = orderDetails;

  useEffect(() => {

    dispatch(
      getOrderDetailsStart(orderID)
    );

  }, []);

  return (
    <div className="order">
      <MetaDecorator
        title="Order History | Gina Corrieri"
        description="Gina Corrieri is an independent designer and reworker based in London."
      />

      <h1>Order: #{orderID}</h1>

      <OrderDetails order={orderDetails} />

      <div className="total">
        <p>Shipping: £2.75</p>
        <h3>Total: {parseFloat(orderTotal).toFixed(2)}</h3>
      </div>

    </div>
  )

}

export default Order;
