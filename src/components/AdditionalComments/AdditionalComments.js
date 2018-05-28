import React, {Component} from 'react';
import {connect} from 'react-redux';
import SubmitButton from '../SubmitButton/SubmitButton';
import ProgressBar from '../ProgressBar/ProgressBar';
import FeedbackInput from '../FeedbackInput/FeedbackInput';

class AdditionalComments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      comments: event.target.value
    })
  }

  render() {
    return (
      <div>
        <ProgressBar page="4" />
        <h3>Is there anything else you would like us to know?</h3>
        <FeedbackInput value={this.state.comments} handleChange={this.handleChange} type="text"/>
        <SubmitButton history={this.props.history} actionType="SUBMIT_COMMENTS_AND_FINISH" value={this.state.comments} />
      </div>
    )
  }
}

export default connect()(AdditionalComments);