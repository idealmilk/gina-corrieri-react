import React from 'react';

import './styles.scss';
import FAQItem from './FAQItem';
import MobilePageTitle from '../MobilePageTitle';

const FAQ = ({ items }) => {
	return (
		<div className="faq">
			<MobilePageTitle title="FAQ"/>
			{items.map((item, pos) => <FAQItem item={item} key={pos} />)}
		</div>
	);
}

export default FAQ;
