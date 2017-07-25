import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Header from './Header.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';

import style from './main.css';


class App extends Component {
  // definition
  constructor(props) {
    super(props);
  }

  // Renders
  render() {
    return (
      <Provider store={store}>
        <div className={style.app}>
          <Header />
          <Main />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
