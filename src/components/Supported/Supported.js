import React, {Component} from 'react';
import {connect} from 'react-redux';
import NextPageButton from '../NextPageButton/NextPageButton';
import ProgressBar from '../ProgressBar/ProgressBar';
import FeedbackInput from '../FeedbackInput/FeedbackInput';

class Supported extends Component {
  constructor(props) {
    super(props);

    this.state = {
      supported: ''
    }
  }

  handleChange = (event) => {
    this.setState ({
      supported: event.target.value
    })
  }

  render() {
    return (
      <div>
        <ProgressBar page="3" />
        <h3>How well do you feel supported?</h3>
        <FeedbackInput value={this.state.supported} handleChange={this.handleChange} type="text" />
        <NextPageButton path="/4" history={this.props.history} actionType="SUBMIT_SUPPORTED" value={this.state.supported} />
      </div>
    )
  }
}

export default connect()(Supported);