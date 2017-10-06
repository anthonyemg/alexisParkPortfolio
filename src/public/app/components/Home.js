import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='home-container'>
        <div className='home-wrapperTop'>
          <span>ALEXIS</span>
          <span>PARK</span>
        </div>
        <div className='home-wrapperBottom'>
          <div className='home-bottomText'>
            <span>Hi there! I'm glad you found me.</span>
            <span>Here you'll find some of my latest work samples, and some of my doodles.</span>
            <span>I think there's some really good stuff here - I hope you think so too.</span>
            <span>Talk to me. I look forward to working with you!</span>
          </div>
          <div className='home-bottomLinks'>
            <i  className='fa fa-linkedin fa-lg' />
            <i  className='fa fa-twitter fa-lg' />
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
