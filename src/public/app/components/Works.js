import React from 'react';
import FooterLinks from './FooterLinks';
import { HashRouter as Router, Route } from 'react-router-dom';

import PartnerApp from '../works/PartnerApp';
import PartnerHub from '../works/PartnerHub';
import ClubPickupKiosk from '../works/ClubPickupKiosk';
import LoadingAnimation from '../works/LoadingAnimation';
import MobileCheckIn from '../works/MobileCheckIn';
import ClubInsider from '../works/ClubInsider';
import Anthology from '../works/Anthology';
import Plannit from '../works/Plannit';
import Qriously from '../works/Qriously';
import MinnovativeSolutions from '../works/MinnovativeSolutions';

class Works extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Route exact path={`${this.props.match.path}/partner-app`} component={PartnerApp} />
        <Route exact path={`${this.props.match.path}/partner-hub`} component={PartnerHub} />
        <Route exact path={`${this.props.match.path}/club-pickup-kiosk`} component={ClubPickupKiosk} />
        <Route exact path={`${this.props.match.path}/loading-animation`} component={LoadingAnimation} />
        <Route exact path={`${this.props.match.path}/mobile-check-in`} component={MobileCheckIn} />
        <Route exact path={`${this.props.match.path}/club-insider`} component={ClubInsider} />
        <Route exact path={`${this.props.match.path}/anthology`} component={Anthology} />
        <Route exact path={`${this.props.match.path}/plannit`} component={Plannit} />
        <Route exact path={`${this.props.match.path}/qriously`} component={Qriously} />
        <Route exact path={`${this.props.match.path}/minnovative-solutions`} component={MinnovativeSolutions} />
      </div>
    )
  }
}

export default Works;
