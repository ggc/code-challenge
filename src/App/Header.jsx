import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import styles from './main.css';

class Header extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = {
      title: 'Billin code chanllenge',
    };
  }

  // Renders
  render() {
    return (
      <div id="header">
        <Link to='/new'>
          <button> New article </button>
        </Link>
        <Link to='/'>
          <button> Back </button>
        </Link>
        <p> Billin Code Challenge </p>
      </div>
    );
  }
}

export default Header;
