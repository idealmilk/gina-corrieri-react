import React from 'react';

import { client } from './../../contentful/client';
import MetaDecorator from './../../components/MetaDecorator';
import AboutInfo from './../../components/AboutInfo';
import MobilePageTitle from '../../components/MobilePageTitle';

class About extends React.Component {
	state = {
		siteMetaData: [],
	};

	componentDidMount() {
		client.getEntries()
		.then((response) => {
			this.setState({
				siteMetaData: response.items.filter(item => (item.sys.contentType.sys.id === 'siteMetaData'))
			})
		})
		.catch(console.error)
	};

	render() {
		return (
			<div>
				<MetaDecorator
					title="About | Gina Corrieri"
					description="Gina Corrieri is an independent designer and reworker based in London."
				/>
				<AboutInfo siteMetaData={this.state.siteMetaData} />
			</div>
		)
	}
}

export default About;
