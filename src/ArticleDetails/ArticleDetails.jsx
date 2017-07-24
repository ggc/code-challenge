import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { request } from '../App/actions/request';
import { ARTICLEBYID_QUERY } from '../App/actions/queries';
import style from '../App/style.css';

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
        <h1>{this.props.articleDetails[0].title}</h1>
        <h2>{this.props.articleDetails[0].author}</h2>
        <p>{this.props.articleDetails[0].content}</p>
        <p>{this.props.articleDetails[0].published}</p>
        <p>{
          this.props.articleDetails[0].tags.map( (tag,index) => {
            return (
              <span key={index}> #{tag} </span>
            )
          })
        }</p>
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
