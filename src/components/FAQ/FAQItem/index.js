import React from 'react';

const FAQItem = ({ item }) => {
    const { question, answer } = item.fields;
    
	return (
		<div className="item">
            <h3>{question}</h3>
            <p>{answer}</p>
		</div>
	);
}

export default FAQItem;
