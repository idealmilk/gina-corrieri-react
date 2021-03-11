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

const Orders = props => {
	const dispatch = useDispatch();
	const { currentUser, orderHistory } = useSelector(mapState);

	useEffect(() => {
		dispatch(
			getUserOrderHistory(currentUser.id)
		);

	}, []);

  	return (
      	<div className="orders">
        	<MetaDecorator
				title="Orders | Gina Corrieri"
				description="Gina Corrieri is an independent designer and reworker based in London."
        	/>
        	<OrderHistory orders={orderHistory} />
      	</div>
  	);
};

export default Orders;
