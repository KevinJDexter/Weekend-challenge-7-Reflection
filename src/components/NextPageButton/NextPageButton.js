import React, {Component} from 'react';
import {connect} from 'react-redux';

class NextPageButton extends Component {
  constructor(props) {
    super(props);
  }

  submitAndContinue = () => {
    this.props.history.push(this.props.path);
  }

  render() {
    return (
      <button onClick={this.submitAndContinue}>Next</button>
    )
  }
}

export default NextPageButton;