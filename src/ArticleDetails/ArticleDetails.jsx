import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import style from './ArticleDetails.css';

class ArticleDetails extends Component {
  // definition
  constructor(props) {
    super(props);
  }

  // lifecycle
  componentWillMount() {
    this.props.handleInit(this.props.id);
  }

  handleDelete() {
    this.props.onDelete(this.props.articleDetails[0].id);
  }

  // Renders
  render() {
    return (
      <section className={style.card}>
        <h1>{this.props.articleDetails[0].title}</h1>
        <h2>{this.props.articleDetails[0].author}</h2>
        <p>{this.props.articleDetails[0].content}</p>
        <p>{this.props.articleDetails[0].published}</p>
        <p>{
          this.props.articleDetails[0].tags.map( (tag,index) => {
            return (
              <span key={index} className={style.tag}> #{tag} </span>
            )
          })
        }</p>

        <Link to='/'>
          <button onClick={this.handleDelete.bind(this)}>
            Delete
          </button>
        </Link>

        <Link to={`${this.props.articleDetails[0].id}/1`}>
          <button>
            Modify
          </button>
        </Link>
      </section>
    );
  }
}

export default ArticleDetails;
