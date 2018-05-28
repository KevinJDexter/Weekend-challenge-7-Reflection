import React from 'react';

const FeedbackInput = (props) => (
      <input type="text" value={props.value} onChange={props.handleChange} />
    )

export default FeedbackInput;