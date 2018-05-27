import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class StartOverButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Link to="/">Leave New Feedback</Link>
    )
  }
}

export default StartOverButton;