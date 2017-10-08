import React from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='menu-container'>
        <span>ALEXIS</span>
        <div className='menu-wrapper'>
          <NavLink
            className='menu-links'
            exact
            to="/"
            activeStyle={{color: 'rgb(255,255,255)'}}
            >HOME
          </NavLink>
          <NavLink
            className='menu-links'
            to="/works"
            activeStyle={{color:'rgb(255,255,255)'}}
            >WORKS
          </NavLink>
          <NavLink
            className='menu-links'
            to="/resume"
            activeStyle={{color:'rgb(255,255,255)'}}
             >RESUME
          </NavLink>
          <NavLink
            className='menu-links'
            to="/contact"
            activeStyle={{color: 'rgb(255,255,255)'}}
             >CONTACT
          </NavLink>
        </div>
        <div className='menu-containerBurger' onClick={this.props.showMobileMenu}>
          <i className='fa fa-bars fa-lg' />
        </div>
      </div>
    )
  }
}

export default Menu;
