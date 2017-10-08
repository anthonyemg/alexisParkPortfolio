import React from 'react';
import particleConfig from '../../../../particlesjs-homeConfig.json';
import FooterLinks from './FooterLinks';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    }
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
  }
  componentDidMount() {
    particlesJS('particles', particleConfig);
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
  handleFirstNameChange(e, field) {
    const newState = {}
    newState[field] = e.target.value;
    this.setState(newState);
  }
  render() {
    return (
      <div className='page-container'>
        <div className='page-wrapperTop' id='particles'>
          <span>LETTUCE TALK</span>
        </div>
        <div className='page-wrapperBottom'>
          <div className='contact-bottomText page-bottomText'>
            <span>contact..</span>
            <form className='contact-form' action='' method='post'>
              <input
                type='text'
                placeholder='First Name'
                value={this.state.firstName}
                onChange={(e) => this.handleFirstNameChange(e,'firstName')}
              />
              <input
                type='text'
                placeholder='Last Name'
                value={this.state.lastName}
                onChange={(e) => this.handleFirstNameChange(e,'lastName')}
              />
              <input
                type='text'
                placeholder='Email'
                value={this.state.email}
                onChange={(e) => this.handleFirstNameChange(e,'email')}
              />
              <input
                type='text'
                placeholder='Message'
                value={this.state.message}
                onChange={(e) => this.handleFirstNameChange(e,'message')}
              />
              <input type='submit' placeholder='save' />
            </form>
          </div>
        <FooterLinks />
        </div>
      </div>
    )
  }
}

export default Contact;
