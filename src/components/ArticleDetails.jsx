import React, { Component } from 'react';
import { request } from '../request';
import { ARTICLES_QUERY } from '../queries';
import style from '../stylesheets/style.css';

class ArticleDetails extends Component {
  // definition
  constructor(props) {
    super(props);
  }

  // lifecycle
  componentWillMount() {
    request(ARTICLES_QUERY).then(response => {
      this.setState({ articles: response.data.articles });
    });
  }

  // Renders
  render() {
    return (
      <section>
        <p>Oh</p>
      </section>
    );
  }
}

      // <pre>{JSON.stringify(this.state.articles, null, 2)}</pre>
export default ArticleDetails;
