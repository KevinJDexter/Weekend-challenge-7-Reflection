import React, {Component} from 'react';
import {connect} from 'react-router-dom';

class SubmitButton extends Component {
  constructor(props) {
    super(props);
  }

  submitAndContinue = () => {
    this.props.history.push('/5');
  }

  render() {
    return (
      <button onClick={this.submitAndContinue}>Submit</button>
    )
  }
}

export default SubmitButton;