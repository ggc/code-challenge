import React, { Component } from 'react';
import { request } from '../App/actions/request';
import { ARTICLEBYID_QUERY } from '../App/actions/queries';
import style from '../App/style.css';

class EditArticle extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // lifecycle
  componentWillMount() {
    this.setState({
      id: this.props.articleDetails[0].id,
      author: this.props.articleDetails[0].author,
      title: this.props.articleDetails[0].title,
      excerpt: this.props.articleDetails[0].excerpt,
      content: this.props.articleDetails[0].content,
      published: this.props.articleDetails[0].published,
      tags: this.props.articleDetails[0].tags.toString()
    })
  }

  handleClick() {
    console.log('Comp state: ', this.state);
  }

  handleChange(event) {
    let name = event.target.name;
    switch(name) {
      case 'published':
        let selectBool = event.target.value == 'true'? true : false;
        this.setState({[name]: selectBool});
        break;
      default:
        this.setState({[name]: event.target.value});
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    // this.setState((prevState, props) => {
    //   return {
    //     tags: prevState.tags.split(',').map( tag => '"'+tag.trim()+'"' )
    //   }
    // });
    
    console.log('State submitted: ', this.state);
    this.props.onSubmit(this.state);
  }

  // Renders
  render() {
    // author, content, published, tags and title
    return (
      <section>
        <button onClick={this.handleClick}> Get state </button>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
          </label>
          <label>
            Author:
            <input type="text" name="author" value={this.state.author} onChange={this.handleChange} />
          </label>
          <label>
            Content:
            <textarea name="content" value={this.state.content} onChange={this.handleChange} />
          </label>

          <label>
            Published:
            <select name="published" value={this.state.published} onChange={this.handleChange}>
              <option value={true}>Published</option>
              <option value={false}>Private</option>
            </select>
          </label>

          <label>
            Tags:
            <input type="text" name="tags" value={this.state.tags} onChange={this.handleChange} />
          </label>
          
          <input type="submit" />
        </form>
      </section>
    );
  }
}

export default EditArticle;
