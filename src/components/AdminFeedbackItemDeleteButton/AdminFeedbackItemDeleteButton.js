import React, {Component} from 'react';
import axios from 'axios';

class AdminFeedbackItemDeleteButton extends Component {
  deleteItem = () => {
    axios.delete(`/api/feedback/${this.props.id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        alert('Could not delete feedback item');
      })
  }

  render () {
    return (
      <button onClick={this.deleteItem}>Delete</button>
    )
  }
}

export default AdminFeedbackItemDeleteButton;