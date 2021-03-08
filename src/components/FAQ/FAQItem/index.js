import React from 'react';
import marked from 'marked';

const FAQItem = ({ item }) => {
    const { question, answer } = item.fields;

    const itemAnswer = marked(answer);

	return (
		<div className="item">
            <h3>{question}</h3>
            <p dangerouslySetInnerHTML={{__html: itemAnswer}} />
		</div>
	);
}

export default FAQItem;
