import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import SubmitButton from '../SubmitButton/SubmitButton';

class AdditionalComments extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Additional Comments</h3>
        <SubmitButton history={this.props.history} />
      </div>
    )
  }
}

export default connect()(AdditionalComments);