import React from 'react'

class MobileMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className='mobilemenu-container'>
        <div>
          <a href='/#/' onClick={this.props.showMobileMenu}>HOME</a>
        </div>
          <div>
          <a href='/#/works' onClick={this.props.showMobileMenu}>WORKS</a>
        </div>
        <div>
          <a href='/#/resume' onClick={this.props.showMobileMenu}>RESUME</a>
        </div>
        <div>
          <a href='/#/contact' onClick={this.props.showMobileMenu}>CONTACT</a>
        </div>
      </div>
    )
  }
}

export default MobileMenu;
