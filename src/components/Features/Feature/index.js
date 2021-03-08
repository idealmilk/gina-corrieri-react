import React from 'react';

const Feature = ({ feature }) => {
	console.log(feature);
	const { url, description, styledBy } = feature.fields;

	return (
		<div className="feature">
			<p className="desc">{description}</p>
			<p className="styledBy">{styledBy}</p>
			<iframe width="600" height="350" src={url} frameborder="0" title="YouTube" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</div>
	);
}

export default Feature;
