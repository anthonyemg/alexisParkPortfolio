import React from 'react';
import FooterLinks from '../components/FooterLinks';

const LoadingAnimation = () => (
  <div>
    <div className="page-container">
      <div className="works-wrapperTop">
        <span>Loading Animation</span>
      </div>
      <div className="page-wrapperBottom">
        <div className="worksTemplate-bottomText page-bottomText">
          <div>
            <div class="sqs-block-content">
              <p class="text-align-center">
                Fun <strong>loading animations</strong> I designed and implemented on the Starbucks
                partner Android and iOS apps.
              </p>
              <p>
                <strong>Background:</strong>
              </p>
              <p>
                We had a bit of downtime so I wanted to add some fun element to our apps. Prior to
                this, the apps had default iOS and android loading spinners implemented.&nbsp;
              </p>
              <p>
                Upon reviewing a couple options for the animation (mug and a starbucks to-go cup),
                we determined that although the to-go cup is iconic, it enforced the brand too much
                and could potentially look too busy (outline of the cup + logo dot).&nbsp;
              </p>
              <p>The below gifs show the latest loading animations for both apps.</p>
              <p>&nbsp;</p>
              <p class="text-align-center">
                <strong>Android</strong>
              </p>
              <img src="https://static1.squarespace.com/static/55c2e779e4b0c20768545b47/t/577dd79e9f74568b965ba2ff/1467865040974/fun+loading+animation+I+designed+and+got+implemented+on+the+Android+partner+app.?format=500w" />
              <p>android loading</p>
              <strong>iOS</strong>
              <img src="https://static1.squarespace.com/static/55c2e779e4b0c20768545b47/t/577dd8372e69cfa9dd2f1511/1467865179116/?format=500w" />
              <p>iOS loading</p>
            </div>
          </div>
        </div>
        <FooterLinks />
      </div>
    </div>
  </div>
);

export default LoadingAnimation;
