import React from 'react';
import Render from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import Menu from '../components/Menu';
import MobileMenu from '../components/MobileMenu';

import Home from '../components/Home';
import Works from '../components/Works';
import Resume from '../components/Resume';
import Contact from '../components/Contact';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMobileMenu: false,
    }
    this.showMobileMenu = this.showMobileMenu.bind(this);
  }
  showMobileMenu() {
    const showHide = this.state.showMobileMenu ? false : true;
    this.setState({
      showMobileMenu: showHide,
    })
  }
  render() {
    return (
      <Router>
        <div>
          <Menu
            showMobileMenu = {this.showMobileMenu}
          />
          {this.state.showMobileMenu &&
            <MobileMenu
              showMobileMenu = {this.showMobileMenu}
            />
          }
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
  }
}

export default App;
