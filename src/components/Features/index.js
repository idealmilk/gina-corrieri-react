import React from 'react';

import './styles.scss';
import Feature from './Feature';
import MobilePageTitle from '../MobilePageTitle';

const Features = ({ features }) => {
	console.log(features)

  	return (
		<div className="features">
			<MobilePageTitle title="Features"/>
			{features.map((feature, pos) => <Feature feature={feature} key={pos} />)}
		</div>
	);
}

export default Features;
