import React, { Component } from 'react';
import { request } from './request';
import { Provider } from 'react-redux';

import { ARTICLES_QUERY, ARTICLEBYID_QUERY } from './queries';

import store from './store';
import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';

import styles from './stylesheets/style.css';


class App extends Component {
  // definition
  constructor(props) {
    super(props);
  }

  // Renders
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Main />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
