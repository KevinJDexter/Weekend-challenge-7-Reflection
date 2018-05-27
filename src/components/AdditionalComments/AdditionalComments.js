import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import SubmitButton from '../SubmitButton/SubmitButton';
import ProgressBar from '../ProgressBar/ProgressBar';

class AdditionalComments extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ProgressBar page="4" />
        <h3>Additional Comments</h3>
        <SubmitButton history={this.props.history} />
      </div>
    )
  }
}

export default connect()(AdditionalComments);