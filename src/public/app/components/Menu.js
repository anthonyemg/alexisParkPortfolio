import React from 'react';

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='menu-container'>
        <span>ALEXIS</span>
        <div className='menu-wrapper'>
          <div>
            <a href='/#/'>HOME</a>
          </div>
            <div>
            <a href='/#/works'>WORKS</a>
          </div>
          <div>
            <a href='/#/resume'>RESUME</a>
          </div>
          <div>
            <a href='/#/contact'>CONTACT</a>
          </div>
        </div>
        <div className='menu-containerBurger' onClick={this.props.showMobileMenu}>
          <i className='fa fa-bars fa-lg' />
        </div>
      </div>
    )
  }
}

export default Menu;
