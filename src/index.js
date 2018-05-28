import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';
import logger from 'redux-logger';

const postFeedbackToDatabase = (feedback) => {
  axios.post('/api/feedback', feedback)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
}

const feedback = (state = {}, action ) => {
  if (action.type === 'SUBMIT_FEELING') {
    state.feeling = action.payload;
  } else if (action.type === 'SUBMIT_UNDERSTANDING') {
    state.understanding = action.payload;
  } else if (action.type === 'SUBMIT_SUPPORTED') {
    state.supported = action.payload;
  } else if (action.type === 'SUBMIT_COMMENTS_AND_FINISH') {
    state.additionalComments = action.payload;
    // postFeedbackToDatabase(state);
    state = {};
  }
  return state;
}

const store = createStore(
  combineReducers({
    feedback
  }),
  applyMiddleware(logger),
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
