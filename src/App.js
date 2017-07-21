import React, { Component } from 'react';
import { request } from './request';
import { ARTICLES_QUERY, ARTICLEBYID_QUERY } from './queries';

import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';

import styles from './stylesheets/style.css';


class App extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  // lifecycle
  componentWillMount() {
    // request(ARTICLES_QUERY).then(response => {
    //   this.setState({ articles: response.data.articles });
    // });
  }

  // Renders
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
