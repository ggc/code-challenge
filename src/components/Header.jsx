import React, { Component } from 'react';
// import style from '../stylesheets/main.css';

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
        <div id="header">{this.state.title}</div>
    );
  }
}

export default Header;
