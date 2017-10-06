import React from 'react';
import SweetScroll from 'sweet-scroll';

import particleConfig from '../../../../particlesjs-homeConfig.json';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.scrollDown = this.scrollDown.bind(this);
  }
  componentDidMount() {
    particlesJS('particles', particleConfig);
  }
  scrollDown() {
    const sweetScroll = new SweetScroll();
    const height = window.innerHeight;
    sweetScroll.to(height, 0);
    console.log('scrolling down')
  }
  render() {
    return (
      <div className='page-container' id='container'>
        <div className='page-wrapperTop' id='particles'>
          <span>ALEXIS</span>
          <span>PARK</span>
          <i className='home-scrollButton fa fa-angle-down fa-lg' onClick={() => this.scrollDown()} />
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
