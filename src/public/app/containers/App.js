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
      shiftMenu: false,
    }
    this.handleShowMobileMenu = this.handleShowMobileMenu.bind(this);
  }
  handleShowMobileMenu() {
    console.log('test')
    const showHideMobileMenu = this.state.showMobileMenu ? false : true;
    const shiftMenu = this.state.shiftMenu ? false : true;
    this.setState({
      showMobileMenu: showHideMobileMenu,
      shiftMenu: shiftMenu,
    })
  }
  render() {
    return (
      <Router>
        <div className='app' style={this.state.shiftMenu ? {float: 'right', paddingRight: '80%'} : {float: 'right', paddingRight: '0%'}}>
          <Menu
            handleShowMobileMenu = {this.handleShowMobileMenu}
            showMobileMenu = {this.state.showMobileMenu}
          />
          <MobileMenu
            handleShowMobileMenu = {this.handleShowMobileMenu}
            showMobileMenu = {this.state.showMobileMenu}
          />
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
