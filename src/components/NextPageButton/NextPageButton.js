import React, { Component } from 'react';
import { connect } from 'react-redux';

class NextPageButton extends Component {
  submitAndContinue = () => {
    const action = {
      type: this.props.actionType,
      payload: this.props.value
    };
    this.props.dispatch(action);
    this.props.history.push(this.props.path);
  }

  render() {
    return (
      <button onClick={this.submitAndContinue}>Next</button>
    )
  }
}

export default connect()(NextPageButton);