import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { request } from '../request';
import { articleById_QUERY } from '../queries';
import style from '../stylesheets/style.css';

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
  
  handleClick() {
    console.log('Link will be to', this.props.articleDetails)
  }

  // Renders
  render() {
    return (
      <section>
        <h1>{this.props.articleDetails[0].author}</h1>
        <p>{this.props.articleDetails[0].excerpt}</p>
        <p>{this.props.articleDetails[0].id}</p>
        <Link to='/'>
          <button onClick={this.handleDelete.bind(this)}>Delete</button>
        </Link>
        <Link to={`${this.props.articleDetails[0].id}/1`}>
          <button>Modify</button>
        </Link>
        <button onClick={this.handleClick.bind(this)}>Get state</button>
      </section>
    );
  }
}

export default ArticleDetails;
