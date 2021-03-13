import React, { useState, useEffect } from 'react';
import { Link, useLocation  } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from './../../redux/User/user.actions';
import { selectCartItemsCount } from './../../redux/Cart/cart.selectors';
import './styles.scss';

import Logo from './../../assets/transparency_logo.gif';
import AdminToolbar from './../AdminToolbar';

const mapState = (state) => ({
	currentUser: state.user.currentUser,
	totalNumCartItems: selectCartItemsCount(state)
});

const Header = props => {
	const location = useLocation();
	const [activeMenu, setActiveMenu] = useState(false);
	const dispatch = useDispatch();
	const { currentUser, totalNumCartItems } = useSelector(mapState);

	const signOut = () => {
		dispatch(signOutUserStart());
	};

	useEffect(() => {
		setActiveMenu(false);
	}, [location]);

	return (
		<div className="header">
			<AdminToolbar />
			<header className="headerMain">
				<div className="wrap">
					<div className="logo">
						<Link to="/">
							<img src={Logo} alt="Gina Corrieri Logo" />
						</Link>
					</div>

					<nav className={`mainMenu ${activeMenu ? 'active' : ''}`}>
						<ul>
						<li>
							<Link to="/about">
							About
							</Link>
						</li>
						<li>
							<Link to="/shop">
							Shop
							</Link>
						</li>
						<li>
							<Link to="/features">
							Features
							</Link>
						</li>
						</ul>
					</nav>

				<div className="callToActions">

					<ul>

					<li className="cart">
						<Link to="/cart">
							Cart <span className="cartSize">0{totalNumCartItems}</span>
						</Link>
					</li>

					{currentUser && [
						<li key={1}>
							<div className="dropdown">
								<div class="dropbtn">Account</div>
								<div class="dropdown-content">

									<Link to="/orders">
										Order History
										<i className="fas fa-user-circle"></i>
									</Link>

									<span onClick={() => signOut()}>
										LogOut
										<i className="fas fa-sign-out-alt"></i>
									</span>
								</div>
							</div>
					  	</li>
					]}

					{!currentUser && [
						<li key={2}>
						<Link to="/login">
							Login
							<i className="fas fa-user-circle"></i>
						</Link>
						</li>
					]}

					<li className="mobileMenu">
						<span onClick={() => setActiveMenu(!activeMenu)}>
						<i className="fas fa-bars"></i>
						</span>
					</li>

					</ul>

				</div>
				</div>
			</header>
		</div>
	);
};

Header.defaultProps = {
  currentUser: null
};

export default Header;
