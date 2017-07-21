import React, { Component } from 'react';
import { request } from '../request';
import { ARTICLES_QUERY } from '../queries';
import style from '../stylesheets/style.css';

class Main extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
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
      <section>{this.state.articles.map( (article,index) => 
          <div key={index}>
              <h1>
                  {article.author}
              </h1>
              <p>
                  {article.excerpt}
              </p>
          </div>
          )}
      </section>
    );
  }
}

      // <pre>{JSON.stringify(this.state.articles, null, 2)}</pre>
export default Main;
