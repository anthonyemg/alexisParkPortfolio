import React from 'react';

import particleConfig from '../../../../particlesjs-worksConfig.json';

class Works extends React.Component {
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
          <span>WORKS</span>
        </div>
        <div className='page-wrapperBottom'>
          <div className='page-bottomText'>
            <span>Selected Works</span>
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

export default Works;
