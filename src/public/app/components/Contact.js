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
  handleFirstNameChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
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
                name='firstName'
                placeholder='First Name'
                value={this.state.firstName}
                onChange={this.handleFirstNameChange}
              />
              <input
                type='text'
                name='lastName'
                placeholder='Last Name'
                value={this.state.lastName}
                onChange={this.handleFirstNameChange}
              />
              <input
                type='text'
                name='email'
                placeholder='Email'
                value={this.state.email}
                onChange={this.handleFirstNameChange}
              />
              <input
                type='text'
                name='message'
                placeholder='Message'
                value={this.state.message}
                onChange={this.handleFirstNameChange}
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
