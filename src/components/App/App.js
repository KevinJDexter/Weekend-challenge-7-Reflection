import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import AdditionalComments from '../AdditionalComments/AdditionalComments';
import ThankYou from '../ThankYou/ThankYou';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <br />
        <Router>
          <div>
          <Route exact path="/" component={Feeling} /> 
          <Route exact path="/2" component={Understanding} /> 
          <Route exact path="/3" component={Supported} /> 
          <Route exact path="/4" component={AdditionalComments} /> 
          <Route exact path="/5" component={ThankYou} /> 
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
