import React from 'react';
import SweetScroll from 'sweet-scroll';
import particleConfig from '../../../../particlesjs-homeConfig.json';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      container: 'white',
      icon: 'black',
    }
    this.scrollDown = this.scrollDown.bind(this);
    this.handleBottomLinkHover = this.handleBottomLinkHover.bind(this);
  }
  componentDidMount() {
    particlesJS('particles', particleConfig);
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
  scrollDown() {
    const sweetScroll = new SweetScroll();
    const height = window.innerHeight;
    sweetScroll.to(height, 0);
  }
  handleBottomLinkHover() {
    if(this.state.test === 'rgba(255,255,255,0.4)') {
      this.setState({
        container: 'white',
        icon: 'black',
      })
    } else {
      this.setState({
        container: 'rgba(255,255,255,0.4)',
        icon: 'rgb(76,76,76)',
      })
    }
  }

  render() {
    return (
      <div className='page-container'>
        <div className='page-wrapperTop' id='particles' style={{height:'100vh'}}>
          <span>ALEXIS</span>
          <span>PARK</span>
          <i className='home-scrollButton fa fa-angle-down fa-lg' onClick={() => this.scrollDown()} />
        </div>
        <div className='page-wrapperBottom'>
          <div className='home-bottomText page-bottomText'>
            <span>Hi there! I'm glad you found me.</span>
            <span>Here you'll find some of my <a href='/#/works' className='highlighted-text'>latest work samples</a>, and some of <a href='/#/for-fun' className='highlighted-text'>my doodles</a>.</span>
            <span>I think there's some really good stuff here - I hope you think so too.</span>
            <span><a href='/#/contact' className='highlighted-text'>Talk to me</a>. I look forward to working with you!</span>
          </div>
          <div className='page-bottomLinks'>
            <a href='https://www.linkedin.com/in/alexispark/' target='about_blank'  style={{backgroundColor: this.state.container, color: this.state.icon}} onMouseEnter={this.handleBottomLinkHover} onMouseLeave={this.handleBottomLinkHover} >
              <i className='fa fa-linkedin fa-lg' />
            </a>
            <a href='https://twitter.com/theuxdesigner' target='about_blank' style={{backgroundColor: this.state.container, color: this.state.icon}} onMouseEnter={this.handleBottomLinkHover} onMouseLeave={this.handleBottomLinkHover} >
              <i className='fa fa-twitter fa-lg' />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
