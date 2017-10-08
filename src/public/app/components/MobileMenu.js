import React from 'react';
import { NavLink } from 'react-router-dom';

class MobileMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className='mobilemenu-container'>
        <div>
          <NavLink
            className='mobilemenu-links'
            exact
            to="/"
            activeStyle={{color: 'rgb(255,255,255)'}}
            onClick={this.props.showMobileMenu}
            >HOME
          </NavLink>
        </div>
        <div>
          <NavLink
            className='mobilemenu-links'
            to="/works"
            activeStyle={{color:'rgb(255,255,255)'}}
            onClick={this.props.showMobileMenu}
            >WORKS
          </NavLink>
        </div>
        <div>
          <NavLink
            className='mobilemenu-links'
            to="/resume"
            activeStyle={{color:'rgb(255,255,255)'}}
            onClick={this.props.showMobileMenu}
             >RESUME
          </NavLink>
        </div>
        <div>
          <NavLink
            className='mobilemenu-links'
            to="/contact"
            activeStyle={{color: 'rgb(255,255,255)'}}
            onClick={this.props.showMobileMenu}
             >CONTACT
          </NavLink>
        </div>
      </div>
    )
  }
}

export default MobileMenu;
