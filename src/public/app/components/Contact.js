import React from 'react';

import particleConfig from '../../../../particlesjs-homeConfig.json';

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
          <div className='page-bottomLinks'>
            <a href='https://www.linkedin.com/in/alexispark/' target='about_blank'>
              <i className='fa fa-linkedin fa-lg' />
            </a>
            <a href='https://twitter.com/theuxdesigner' target='about_blank'>
              <i className='fa fa-twitter fa-lg' />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;
