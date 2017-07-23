import React, { Component } from 'react';
import { request } from '../request';
import { articleById_QUERY } from '../queries';
import style from '../stylesheets/style.css';

class EditArticle extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // lifecycle
  componentWillMount() {
    this.setState({
      id: this.props.articleDetails[0].id,
      author: this.props.articleDetails[0].author,
      title: this.props.articleDetails[0].title,
      excerpt: this.props.articleDetails[0].excerpt,
      content: this.props.articleDetails[0].content
    })
  }

  handleClick() {
    this.props.onClick();
  }

  handleChange(event) {
    let name = event.target.name;
    console.log('setState',name, 'to', event.target.value);
    this.setState({[name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('State submitted: ', this.state);
    this.props.onSubmit(this.state);
  }

  // Renders
  render() {
    // author, content, published, tags and title
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
          </label>
          <label>
            Content:
            <input type="text" name="excerpt" value={this.state.excerpt} onChange={this.handleChange} />
          </label>
          <label>
            Author:
            <input type="text" name="author" value={this.state.author} onChange={this.handleChange} />
          </label>

          <input type="submit" />
          <button onClick={this.handleClick.bind(this)}> Get state </button>
        </form>
      </section>
    );
  }
}

export default EditArticle;
