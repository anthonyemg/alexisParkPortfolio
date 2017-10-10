import React from 'react';
import Render from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import Menu from '../components/Menu';
import MobileMenu from '../components/MobileMenu';

import Home from '../components/Home';
import WorksGallery from '../components/WorksGallery';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Works from '../components/Works';

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
          <Route exact path='/' component={Home} />
          <Route exact path='/worksgallery' component={WorksGallery} />
          <Route exact path='/resume' component={Resume} />
          <Route exact path='/contact' component={Contact} />
          <Route path='/works' component={Works} />
        </div>
      </Router>
    )
  }
}

export default App;
