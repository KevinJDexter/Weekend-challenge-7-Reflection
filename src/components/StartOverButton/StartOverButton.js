import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StartOverButton extends Component {
  render() {
    return (
      <Link to="/">Leave New Feedback</Link>
    )
  }
}

export default StartOverButton;