import React, { Component } from 'react';
import axios from 'axios';
import AdminFeedbackItem from '../AdminFeedbackItem/AdminFeedbackItem';

class Admin extends Component {
  constructor (props) {
    super(props);

    this.state = {
      feedback: []
    }
  }

  getFeedback = () => {
    axios.get('/api/feedback')
      .then((response) => {
        console.log(response);
        this.setState ({
          feedback: response.data
        });
      })
      .catch((error) => {
        alert('Error getting feedback from database');
      })
  }

  componentDidMount = () => {
    this.getFeedback();
  }

  render() {
    return (
      <div>
        <table style={{margin: "auto"}}>
          <thead>
            <tr>
              <td>Feeling</td>
              <td>Comprehension</td>
              <td>Support</td>
              <td>Comments</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {this.state.feedback.map(item => <AdminFeedbackItem item={item} getFeedback={this.getFeedback}/>)}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Admin;