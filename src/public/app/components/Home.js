import React from 'react';

import particleConfig from '../../../../particlesjs-homeConfig.json';

class Home extends React.Component {
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
          <span>ALEXIS</span>
          <span>PARK</span>
        </div>
        <div className='page-wrapperBottom'>
          <div className='page-bottomText'>
            <span>Hi there! I'm glad you found me.</span>
            <span>Here you'll find some of my latest work samples, and some of my doodles.</span>
            <span>I think there's some really good stuff here - I hope you think so too.</span>
            <span>Talk to me. I look forward to working with you!</span>
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

export default Home;
