import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import NextPageButton from '../NextPageButton/NextPageButton';

class Feeling extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Feeling</h3>
        <NextPageButton path="/2" history={this.props.history} />
      </div>
    )
  }
}

export default connect()(Feeling);