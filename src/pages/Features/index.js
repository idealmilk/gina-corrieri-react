import React from 'react';

import { client } from './../../contentful/client';
import MetaDecorator from './../../components/MetaDecorator';
import Features from './../../components/Features';

class FeaturesIndex extends React.Component {
	state = {
		features: [],
	};

	componentDidMount() {
		client.getEntries()
		.then((response) => {
			console.log(response)
			this.setState({
				features: response.items.filter(item => (item.sys.contentType.sys.id === 'feature'))
			})
		})
		.catch(console.error)
	};

	render() {
		console.log(this.state.features);
		
		return (
			<div>
				<MetaDecorator
					title="Features | Gina Corrieri"
					description="Gina Corrieri is an independent designer and reworker based in London."
				/>
				<Features features={this.state.features} />
			</div>
		)
	}
}

export default FeaturesIndex;


