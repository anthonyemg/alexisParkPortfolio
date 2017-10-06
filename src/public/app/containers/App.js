import React from 'react';
import Render from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from '../components/Home';
import Works from '../components/Works';
import Resume from '../components/Resume';
import Contact from '../components/Contact';

const App = () => (
  <Router>
    <div>
      <h1>alexis park</h1>
      <Route exact path='/' render={() => (
        <Home />
      )} />
      <Route exact path='/works' render={() => (
        <Works />
      )} />
      <Route exact path='/resume' render={() => (
        <Resume />
      )} />
      <Route exact path='/contact' render={() => (
        <Contact />
      )} />
    </div>
  </Router>
)

export default App;
