import React from 'react';

import particleConfig from '../../../../particlesjs-homeConfig.json';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    particlesJS('particles', particleConfig);
  }
  render() {
    return (
      <div className='page-container'>
        <div className='page-wrapperTop' id='particles'>
          <span>LETTUCE TALK</span>
        </div>
        <div className='page-wrapperBottom'>
          <div className='page-bottomText'>
            <span>contact..</span>
          </div>
          <div className='page-bottomLinks'>
            <i  className='fa fa-linkedin fa-lg' />
            <i  className='fa fa-twitter fa-lg' />
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;
