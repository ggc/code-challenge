import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

// import style from './style.css';

import Articles from '../Articles/Articles.js';
import ArticleDetails from '../ArticleDetails/ArticleDetails.js';
import NewArticle from '../EditArticle/NewArticle.js';
import EditArticle from '../EditArticle/EditArticle.js';

class Main extends Component {
  // Renders
  render() {
    return (
      <Switch>
          <Route exact path="/" component={Articles} />
          <Route path="/new" component={NewArticle} />
          <Route path="/:articleID/1" component={EditArticle} />
          <Route path="/:articleID" component={ArticleDetails} />
      </Switch>
    );
  }
}

export default Main;