import React, { Component } from 'react';

import style from './main.css';

class Footer extends Component {
  // definition
  constructor(props) {
    super(props);
  }

  // Renders
  render() {
    return (
      <div id="footer" className={style.footer}>Billin code challenges footer</div>
    );
  }
}

export default Footer;
