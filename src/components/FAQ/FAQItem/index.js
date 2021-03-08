import React from 'react';

const FAQItem = ({ item }) => {
    console.log(item)
    const { question, answer } = item.fields;
	return (
		<div>
            <h3>{question}</h3>
            <p>{answer}</p>
		</div>
	);
}

export default FAQItem;
