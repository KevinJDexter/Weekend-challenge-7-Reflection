import React, {Component} from 'react';
import {connect} from 'react-redux';
import NextPageButton from '../NextPageButton/NextPageButton';
import ProgressBar from '../ProgressBar/ProgressBar';
import FeedbackInput from '../FeedbackInput/FeedbackInput';

class Feeling extends Component {
  constructor(props) {
    super(props);

    this.state = {
      feeling: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      feeling: event.target.value
    })
  }

  render() {
    return (
      <div>
        <ProgressBar page="1" />
        <h3>How are you feeling today?</h3>
        <FeedbackInput value={this.state.feeling} handleChange={this.handleChange} />
        <NextPageButton path="/2" history={this.props.history} actionType="SUBMIT_FEELING" value={this.state.feeling} />
      </div>
    )
  }
}

export default connect()(Feeling);