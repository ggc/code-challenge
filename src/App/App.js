import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';

import styles from './main.css';


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
