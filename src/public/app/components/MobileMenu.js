import React from 'react'

class MobileMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className='mobilemenu-container'>
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
    )
  }
}

export default MobileMenu;
