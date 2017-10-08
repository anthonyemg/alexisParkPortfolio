import React from 'react';
import particleConfig from '../../../../particlesjs-homeConfig.json';
import FooterLinks from './FooterLinks';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    particlesJS('particles', particleConfig);
    document.body.scrollTop = document.documentElement.scrollTop = 0;
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
          </div>
        <FooterLinks />
        </div>
      </div>
    )
  }
}

export default Contact;
