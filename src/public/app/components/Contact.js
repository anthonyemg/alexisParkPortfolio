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
    this.handleSubmit = this.handleSubmit.bind(this);
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
  handleSubmit() {
    console.log('submitting')
    fetch('/contactus', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      // body: JSON.stringify({data: this.state.searchQuery}),
    })
    .then(res => res.json())
    .then(data => {
      console.log('client received this data ,', data)
      // this.props.handleVideoListUpdate(data);
    })
    .catch(err => console.log(err));
  }
  render() {
    return (
      <div className='page-container'>
        <div className='page-wrapperTop' id='particles'>
          <span>LETTUCE TALK</span>
        </div>
        <div className='page-wrapperBottom'>
          <div className='contact-bottomText page-bottomText'>
            <div className='contact-form'>
              <div className='contact-nameContainer'>
                <span>Name*</span>
                <div className='contact-firstLastNamesContainer'>
                  <div>
                    <input
                      type='text'
                      name='firstName'
                      value={this.state.firstName}
                      onChange={this.handleFirstNameChange}
                    />
                    <span>First Name</span>
                  </div>
                  <div>
                    <input
                      type='text'
                      name='lastName'
                      value={this.state.lastName}
                      onChange={this.handleFirstNameChange}
                    />
                    <span>Last Name</span>
                  </div>
                </div>
              </div>
              <div className='contact-emailContainer'>
                <span>Your Email Address*</span>
                <input
                  type='text'
                  name='email'
                  value={this.state.email}
                  onChange={this.handleFirstNameChange}
                />
              </div>
              <div className='contact-messageContainer'>
                <span>Message*</span>
                <textarea
                  type='text'
                  name='message'
                  value={this.state.message}
                  onChange={this.handleFirstNameChange}
                />
              </div>
              <div className='contact-buttonContainer'>
                <button onClick={this.handleSubmit}>SUBMIT</button>
              </div>
            </div>
          </div>
        <FooterLinks />
        </div>
      </div>
    )
  }
}

export default Contact;
