import React from 'react';

import './style.scss';
import FAQItem from './FAQItem';

const FAQ = ({ items }) => {
	return (
		<div className="faq">
			{items.map((item, pos) => <FAQItem item={item} key={pos} />)}
		</div>
	);
}

export default FAQ;
