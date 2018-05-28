import React from 'react';
import AdminFeedbackItemDeleteButton from '../AdminFeedbackItemDeleteButton/AdminFeedbackItemDeleteButton';

const AdminFeedbackItem = (props) => (
  <tr>
    <td>{props.item.feeling}</td>
    <td>{props.item.understanding}</td>
    <td>{props.item.support}</td>
    <td>{props.item.comments}</td>
    <td><AdminFeedbackItemDeleteButton /></td>
    </tr>
)

export default AdminFeedbackItem;