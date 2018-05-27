import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import NextPageButton from '../NextPageButton/NextPageButton';
import StartOverButton from '../StartOverButton/StartOverButton';

class ThankYou extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Thank You</h3>
        <StartOverButton />
      </div>
    )
  }
}

export default connect()(ThankYou);