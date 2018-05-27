import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import NextPageButton from '../NextPageButton/NextPageButton';
import ProgressBar from '../ProgressBar/ProgressBar';

class Supported extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ProgressBar page="3" />
        <h3>Supported</h3>
        <NextPageButton path="/4" history={this.props.history} />
      </div>
    )
  }
}

export default connect()(Supported);