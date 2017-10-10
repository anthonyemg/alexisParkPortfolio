import React from 'react';
import { NavLink } from 'react-router-dom';

class MobileMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className='mobilemenu-container' style={this.props.showMobileMenu ? {left: '20%'} : {}}>
        <div>
          <NavLink
            className='mobilemenu-links'
            exact
            to="/"
            activeStyle={{color: 'rgb(255,255,255)'}}
            onClick={this.props.handleShowMobileMenu}
            >HOME
          </NavLink>
        </div>
        <div>
          <NavLink
            className='mobilemenu-links'
            to="/worksgallery"
            activeStyle={{color:'rgb(255,255,255)'}}
            onClick={this.props.handleShowMobileMenu}
            >WORKS
          </NavLink>
        </div>
        <div>
          <NavLink
            className='mobilemenu-links'
            to="/resume"
            activeStyle={{color:'rgb(255,255,255)'}}
            onClick={this.props.handleShowMobileMenu}
             >RESUME
          </NavLink>
        </div>
        <div>
          <NavLink
            className='mobilemenu-links'
            to="/contact"
            activeStyle={{color: 'rgb(255,255,255)'}}
            onClick={this.props.handleShowMobileMenu}
             >CONTACT
          </NavLink>
        </div>
      </div>
    )
  }
}

export default MobileMenu;
