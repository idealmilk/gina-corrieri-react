import React from 'react';

import './styles.scss';
import { client } from './../../contentful/client'
import MetaDecorator from './../../components/MetaDecorator';
import Landing from './../../components/Landing';

class Homepage extends React.Component {
  state = {
		project: [],
	};

	componentDidMount() {
		client.getEntries()
		.then((response) => {
			this.setState({
				project: response.items.filter(item => (item.sys.contentType.sys.id === 'project'))
			})
		})
		.catch(console.error)
  };

  render() {
    return (
      <section className="homepage">
        <MetaDecorator
          title="Gina Corrieri"
          description="Gina Corrieri is an independent designer and reworker based in London."
        />
        <Landing project={this.state.project} />
      </section>
    );
  };
};

export default Homepage;
