import React from 'react';

import './styles.scss';
import Feature from './Feature';

const Features = ({ features }) => {
	console.log(features)

  	return (
		<div className="features">
			{features.map((feature, pos) => <Feature feature={feature} key={pos} />)}
		</div>
	);
}

export default Features;
