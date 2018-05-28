import React, {Component} from 'react';
import {connect} from 'react-redux';

class SubmitButton extends Component {
  submitAndContinue = () => {
    const action = {
      type: this.props.actionType,
      payload: this.props.value
    }
    this.props.dispatch(action);
    this.props.history.push('/5');
  }

  render() {
    return (
      <button onClick={this.submitAndContinue}>Submit</button>
    )
  }
}

export default connect()(SubmitButton);