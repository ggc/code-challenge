import React, { Component } from 'react';
import { request } from '../request';
import { ARTICLES_QUERY } from '../queries';
import { Switch, Route } from 'react-router-dom'

import style from '../stylesheets/style.css';

import Articles from '../containers/Articles.js';
import ArticleDetails from '../containers/ArticleDetails.js';

class Main extends Component {
  // // definition
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     articles: [],
  //   };
  // }

  // // lifecycle
  // componentWillMount() {
  //   request(ARTICLES_QUERY).then(response => {
  //     this.setState({ articles: response.data.articles });
  //   });
  // }

  // Renders
  render() {
    return (
      <Switch>
          <Route exact path="/" component={Articles} />
          <Route path="/:articleID" component={ArticleDetails} />
      </Switch>
    );
  }
}

      // <pre>{JSON.stringify(this.state.articles, null, 2)}</pre>
export default Main;
