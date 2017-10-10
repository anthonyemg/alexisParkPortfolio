import React from 'react';
import particleConfig from '../../../../particlesjs-worksConfig.json';
import FooterLinks from './FooterLinks';
import { Link } from 'react-router-dom';

class WorksGallery extends React.Component {
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

        <div className='works-wrapperBottom'>

          <div className='works-bottomText'>

            <span>Selected Works</span>

            <div className='works-grid'>

              <div className='works-gridComponent'>
                <Link to='/works/partner-app'>
                  <img src='https://static1.squarespace.com/static/55c2e779e4b0c20768545b47/55efd323e4b0f97708b8dabd/578477b4ebbd1aba2d3b9fb2/1468299344323/partner_app.png?format=500w' />
                  <div className='works-gridHover'>Partner App</div>
                </Link>
              </div>

              <div className='works-gridComponent'>
                <Link to='/works/partner-hub'>
                  <img src='https://static1.squarespace.com/static/55c2e779e4b0c20768545b47/55efd323e4b0f97708b8dabd/578477b1d1758e87ad4eb080/1468299594065/partner+hub.png?format=500w' />
                  <div className='works-gridHover'>Partner Hub</div>
                </Link>
              </div>

              <div className='works-gridComponent'>
                <Link to='/works/club-pickup-kiosk'>
                  <img src='https://static1.squarespace.com/static/55c2e779e4b0c20768545b47/55efd323e4b0f97708b8dabd/578477a3ebbd1aba2d3b9f4a/1468299398208/club_pickup_kiosk.png?format=500w' />
                  <div className='works-gridHover'>Club Pickup Kiosk</div>
                </Link>
              </div>

              <div className='works-gridComponent'>
                <Link to='/works/loading-animation'>
                  <img src='https://static1.squarespace.com/static/55c2e779e4b0c20768545b47/55efd323e4b0f97708b8dabd/578477aaebbd1aba2d3b9f71/1468299336926/loading_animation.png?format=500w' />
                  <div className='works-gridHover'>Loading Animation</div>
                </Link>
              </div>

              <div className='works-gridComponent'>
                <Link to='/works/mobile-check-in'>
                  <img src='https://static1.squarespace.com/static/55c2e779e4b0c20768545b47/55efd323e4b0f97708b8dabd/578477b0ebbd1aba2d3b9fab/1468299369341/Mobile+check-in+for+club+pickup.png?format=500w' />
                  <div className='works-gridHover'>Mobile Check In</div>
                </Link>
              </div>

              <div className='works-gridComponent'>
                <Link to='/works/club-insider'>
                  <img src='https://static1.squarespace.com/static/55c2e779e4b0c20768545b47/55efd323e4b0f97708b8dabd/578477a1d1758e87ad4eb02a/1468299388092/club_insider.png?format=500w' />
                  <div className='works-gridHover'>Club Insider</div>
                </Link>
              </div>

              <div className='works-gridComponent'>
                <Link to='/works/anthology'>
                  <img src='https://static1.squarespace.com/static/55c2e779e4b0c20768545b47/55efd323e4b0f97708b8dabd/57847796d1758e87ad4eaffc/1468299417132/Anthology.png?format=500w' />
                  <div className='works-gridHover'>Anthology</div>
                </Link>
              </div>

              <div className='works-gridComponent'>
                <Link to='/works/plannit'>
                  <img src='https://static1.squarespace.com/static/55c2e779e4b0c20768545b47/55efd323e4b0f97708b8dabd/578477b3d1758e87ad4eb085/1468299432078/plannit.io.png?format=500w' />
                  <div className='works-gridHover'>Plannit</div>
                </Link>
              </div>

              <div className='works-gridComponent'>
                <Link to='/works/qriously'>
                  <img src='https://static1.squarespace.com/static/55c2e779e4b0c20768545b47/55efd323e4b0f97708b8dabd/578477bcff7c50fb43837bf6/1468299448831/qriously.png?format=500w' />
                  <div className='works-gridHover'>Qriously</div>
                </Link>
              </div>

              <div className='works-gridComponent'>
                <Link to='/works/minnovative-solutions'>
                  <img src='https://static1.squarespace.com/static/55c2e779e4b0c20768545b47/55efd323e4b0f97708b8dabd/578479169de4bbfb895244c4/1468299590058/minnovative_redesign+copy+2.png?format=500w' />
                  <div className='works-gridHover'>Minnovative Solution</div>
                </Link>
              </div>

            </div>
          </div>
          <FooterLinks />
        </div>
      </div>
    )
  }
}

export default WorksGallery;
