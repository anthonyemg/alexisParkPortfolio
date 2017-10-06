import React from 'react';

import particleConfig from '../../../../particlesjs-resumeConfig.json';

class Resume extends React.Component {
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
          <span>RESUME</span>
        </div>
        <div className='page-wrapperBottom'>
          <div className='page-bottomText'>
            <span>Alexis Park</span>
            <span>User Experience Designer</span>
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

export default Resume;
