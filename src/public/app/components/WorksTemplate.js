import React from 'react';
import FooterLinks from './FooterLinks';

class WorksTemplate extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='page-container'>
        <div className='works-wrapperTop'>
          <span>Partner app</span>
        </div>
        <div className='page-wrapperBottom'>
          <div className='worksTemplate-bottomText page-bottomText'>
            <img src='https://static1.squarespace.com/static/55c2e779e4b0c20768545b47/t/577f30d49f7456bb2e333cc7/1467953373787/?format=750w' />
          </div>
          <FooterLinks />
        </div>
      </div>
    )
  }
}

export default WorksTemplate;
