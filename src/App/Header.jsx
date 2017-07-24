import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = {
      title: 'Billin code chanllenge',
    };
  }

  // lifecycle
  componentWillMount() {
  }

  // Renders
  render() {
    return (
        <div id="header">
      <div>
          <Link to='/'>
            <button> Back </button>
          </Link>
          <Link to='/new'>
            <button> New article </button>
          </Link>
          {this.state.title}
        </div>
        
      </div>
    );
  }
}

export default Header;
