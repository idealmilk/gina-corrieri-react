import React from 'react';

import './styles.scss';
import Feature from './Feature';
import MobilePageTitle from '../MobilePageTitle';

const Features = ({ features }) => {
	const sortedFeatures = features.sort((a, b) => new Date(b.fields.releaseDate) - new Date(a.fields.releaseDate));

  return (
		<div className="features">
			<MobilePageTitle title="Features"/>
			{sortedFeatures.map((feature, pos) => <Feature feature={feature} key={pos} />)}
		</div>
	);
}

export default Features;
