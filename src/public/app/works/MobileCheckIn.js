import React from 'react';
import FooterLinks from '../components/FooterLinks';

const MobileCheckIn = () => (
  <div>
    <div className="page-container">
      <div className="works-wrapperTop">
        <span>Mobile Check In</span>
      </div>
      <div className="page-wrapperBottom">
        <div className="worksTemplate-bottomText page-bottomText">
          <div>
            <img src="https://static1.squarespace.com/static/55c2e779e4b0c20768545b47/t/55f27016e4b0ce0cd8d19233/1441951790652/?format=1000w" />

            <div class="sqs-block-content">
              <p class="text-align-center">&nbsp;</p>
              <p class="text-align-center">
                <strong>Mobile Check-in for Club Pickup Orders</strong>
              </p>
              <p>
                <strong>Problems:</strong>
              </p>
              <p>
                Mobile Check-in has been launched, but users are having trouble understanding the
                need for different features to be turned on.
              </p>
              <p>Mobile Check-in is rolling out to drive thru and curbside pickup.</p>
              <p>
                <strong>Scenario:</strong>
              </p>
              <p>
                Once the order that is placed by the member online/app is ready to be picked up in
                the club, the member can "check in" ahead of time to let the club know that they are
                on their way. Using push notifications and location services, we will detect and
                alert when the member is in the club, and automagically bring out their order to
                them to the club pickup area. No checking in on the kiosk, no hassle, in and out,
                wham bam thank you mam.&nbsp;
              </p>
              <p>
                <strong>Process:</strong>
              </p>
              <p>
                We interviewed users to see if they understood the mobile check-in process. Many
                confusions arose from users not understanding what's going to be happening to their
                perishable orders, and not understanding why their location had to be tracked.&nbsp;
              </p>
            </div>

            <img src="https://static1.squarespace.com/static/55c2e779e4b0c20768545b47/t/55f27263e4b0355f89acdd1e/1441952391465/?format=750w" />

            <p>
              We explored ways to introduce these features without it being intrusive or jarring.
              Tutorial? In-context introduction... these were some of the ideas.
            </p>

            <p>
              <strong>Currently:</strong>
            </p>
            <p>
              The project is live and has been becoming a part of the club pickup's positive
              feedback we've been receiving.&nbsp;We're exploring more ways to improve this feature
              as it requires some of the app features to be enabled. We're also exploring different
              ways the clubs can enhance this experience without the member having to leave their
              vehicle.
            </p>
          </div>
        </div>
        <FooterLinks />
      </div>
    </div>
  </div>
);

export default MobileCheckIn;
