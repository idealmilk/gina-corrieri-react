import React from 'react';
import HamburgerMenu from './HamburgerMenu';
import './styles.scss';

const MobileNav = props => {
	return (
		<div className="mobileNav">
			<HamburgerMenu />
		</div>
	);
};

export default MobileNav;
