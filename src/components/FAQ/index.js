import React from 'react';

import FAQItem from './FAQItem';

const FAQ = ({ items }) => {
	return (
		<div>
			{items.map((item, pos) => <FAQItem item={item} key={pos} />)}
		</div>
	);
}

export default FAQ;
