import React from 'react';
import marked from 'marked';

const Feature = ({ feature }) => {
	console.log(feature);
	const { url, description, styledBy } = feature.fields;

	const featureDesc = marked(description);

	return (
		<div className="feature">
			<p dangerouslySetInnerHTML={{__html: featureDesc}} />
			<p className="styledBy">{styledBy}</p>
			<iframe width="600" height="350" src={url} frameborder="0" title="YouTube" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</div>
	);
}

export default Feature;
