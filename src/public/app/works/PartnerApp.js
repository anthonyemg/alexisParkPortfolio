import React from 'react';
import FooterLinks from '../components/FooterLinks';

const PartnerApp = () => (
  <div>
    <div className='page-container'>
      <div className='works-wrapperTop'>
        <span>Partner App</span>
      </div>
      <div className='page-wrapperBottom'>
        <div className='worksTemplate-bottomText page-bottomText'>
          <div>

            <img src='https://static1.squarespace.com/static/55c2e779e4b0c20768545b47/t/577f30d49f7456bb2e333cc7/1467953373787/?format=1000w' />

            <p><strong>Role:</strong> UX/UI</p>

            <p>The app was in its alpha phase when I joined sbux. Much of the foundation was completed by a local creative agency. After I joined, I designed and implemented further features, and did a lot of work to clean up inconsistencies and establish a set styleguide for both iOS and android.</p>

          </div>
        </div>
        <FooterLinks />
      </div>
    </div>
  </div>
);

export default PartnerApp;
