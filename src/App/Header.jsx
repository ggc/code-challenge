import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './main.css';

class Header extends Component {
  // definition
  constructor(props) {
    super(props);
  }

  // Renders
  render() {
    return (
      <div id="header" className={styles.header}>
        <p> Billin Code Challenge </p>
        <div>
          <Link to='/new'>
            <button> New article </button>
          </Link>
          <Link to='/'>
            <button> Back </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
