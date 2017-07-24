import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { ARTICLES_QUERY } from '../App/actions/queries';
import { request } from '../App/actions/request';

import style from '../App/style.css';

class Articles extends Component {
  // definition
  constructor(props) {
    super(props);
  }

  // lifecycle
  componentWillMount() {
    this.props.handleInit();
  }

  // Renders
  render() {
    return (
      <section>{this.props.articles.map( (article,index) => {
            return (
              <div key={index}>
                <Link to={`/${article.id}`}>
                  <h1>
                      {article.author}
                  </h1>
                  <p>
                      {article.excerpt}
                  </p>
                </Link>
              </div>
            )
          }
        )}
      </section>
    );
  }
}

      // <pre>{JSON.stringify(this.state.articles, null, 2)}</pre>
export default Articles;
