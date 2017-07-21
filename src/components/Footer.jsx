import React, { Component } from 'react';
import style from '../stylesheets/style.css';

class Footer extends Component {
  // definition
  constructor(props) {
    super(props);
  }

  // lifecycle
  componentWillMount() {
  }

  // Renders
  render() {
    return (
      <div id="footer">Billin code challenges footer</div>
    );
  }
}

export default Footer;
