import React, { Component } from 'react';

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
        <h2>{this.state.title}</h2>
    );
  }
}

export default Header;
