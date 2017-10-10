import React from 'react';
import FooterLinks from './FooterLinks';
import { HashRouter as Router, Route } from 'react-router-dom';

import PartnerApp from '../works/PartnerApp';
import test from '../works/test';

class Works extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* <Route exact path={this.props.match.path} component={PartnerApp} /> */}
        <Route exact path={`${this.props.match.path}/test`} component={test} />
        <Route exact path={`${this.props.match.path}/two`} component={PartnerApp} />
      </div>
    )
  }
}

export default Works;
