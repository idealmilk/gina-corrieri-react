import React from 'react';
import Header from './../components/Header';
import MobileNav from '../components/MobileNav';
import Footer from './../components/Footer';

const HomepageLayout = props => {
	return (
		<div className="fullHeight">
			<Header {...props} />
			<MobileNav {...props} />
			{props.children}
			<Footer />
		</div>
	);
};

export default HomepageLayout;
