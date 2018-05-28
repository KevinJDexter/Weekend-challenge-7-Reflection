import React, {Component} from 'react';
import {connect} from 'react-redux';
import NextPageButton from '../NextPageButton/NextPageButton';
import ProgressBar from '../ProgressBar/ProgressBar';
import FeedbackInput from '../FeedbackInput/FeedbackInput';

class Understanding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      understanding: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      understanding: event.target.value
    })
  }

  render() {
    return (
      <div>
        <ProgressBar page="2"/>
        <h3>How well are you understanding the material?</h3>
        <FeedbackInput value={this.state.understanding} handleChange={this.handleChange} />
        <NextPageButton path="/3" history={this.props.history} actionType="SUBMIT_UNDERSTANDING" value={this.state.understanding}/>
      </div>
    )
  }
}

export default connect()(Understanding);