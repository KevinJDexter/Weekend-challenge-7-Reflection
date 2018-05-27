import React from 'react';

const ProgressBar = (props) => (
  <div>
  <h5>{props.page} of 4 pages</h5>
  <canvas height="15px" style={{backgroundColor: "teal"}}></canvas>
  </div>
)

export default ProgressBar;