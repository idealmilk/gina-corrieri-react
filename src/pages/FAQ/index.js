import React from 'react';

import { client } from './../../contentful/client';
import MetaDecorator from './../../components/MetaDecorator';
import FAQ from './../../components/FAQ';

class FAQIndex extends React.Component {
	state = {
		faq: [],
	};

	componentDidMount() {
		client.getEntries()
		.then((response) => {
			console.log(response)
			this.setState({
				faq: response.items.filter(item => (item.sys.contentType.sys.id === 'faq'))
			})
		})
		.catch(console.error)
	};

	render() {
		console.log(this.state.faq);
		
		return (
			<div>
				<FAQ items={this.state.faq} />
			</div>
		)
	}
}

export default FAQIndex;

