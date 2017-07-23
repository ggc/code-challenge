import React, { Component } from 'react';
import { request } from '../request';
import { ARTICLES_QUERY } from '../queries';
import { Link } from 'react-router-dom'

import style from '../stylesheets/style.css';

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
            console.log(`Title ${article.author}`)
            return (
              <div key={index}>
                <Link to={`${article.id}`}>
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
