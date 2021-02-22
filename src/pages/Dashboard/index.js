import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrderHistory } from './../../redux/Orders/orders.actions';
import OrderHistory from './../../components/OrderHistory';
import './styles.scss';
import MetaDecorator from './../../components/MetaDecorator';

const mapState = ({ user, ordersData }) => ({
  currentUser: user.currentUser,
  orderHistory: ordersData.orderHistory.data
});

const Dashboard = props => {
  const dispatch = useDispatch();
  const { currentUser, orderHistory } = useSelector(mapState);

  useEffect(() => {
    dispatch(
      getUserOrderHistory(currentUser.id)
    );

  }, []);

  return (
    <div>
      <MetaDecorator
        title="Order History | Gina Corrieri"
        description="Gina Corrieri is an independent designer and reworker based in London."
      />
      <h1>
        Order History
      </h1>

      <OrderHistory orders={orderHistory} />
    </div>
  );
};

export default Dashboard;
