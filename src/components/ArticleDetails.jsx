import React, { Component } from 'react';
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
    // request(articleById_QUERY(this.props.id))
    // .then(response => {
    //   console.log('Query results...: ', response)
    //   this.setState({ article: response.data.article });
    // })
    // .catch(
    //   reason => {
    //     console.log('Promise rejected because ', reason)
    //   }
    // )
  }

  handleClick() {
    this.props.onClick();
  }

  // Renders
  render() {
    return (
      <section>
        <h1>
          <input defaultValue={this.props.articleDetails[0].author} />
        </h1>
        <p>{this.props.articleDetails[0].excerpt}</p>
        <p>{this.props.articleDetails[0].id}</p>
        <button onClick={this.handleClick.bind(this)}>Get state</button>
      </section>
    );
  }
}

export default ArticleDetails;
