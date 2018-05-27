import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import NextPageButton from '../NextPageButton/NextPageButton';

class Understanding extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3>Understanding</h3>
        <NextPageButton path="/3" history={this.props.history} />
      </div>
    )
  }
}

export default connect()(Understanding);