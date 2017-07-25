import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import style from './Articles.css';

console.log('Style: ', style)
const divStyle = {
  color: 'red', 
  background: 'cyan'
}

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
    console.log('Style: ', style.class1)
    return (
      <section className={style.section}>{this.props.articles.map( (article,index) => {
            return (
              <div key={index} className={style.card}>
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
