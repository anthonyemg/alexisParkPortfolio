import React from 'react';

class FooterLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      container: 'white',
      icon: 'black',
    }
    this.handleBottomLinkHover = this.handleBottomLinkHover.bind(this);
  }
  handleBottomLinkHover() {
    if (this.state.container === 'rgba(255,255,255,0.4)') {
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
      <div className='footerLinks'>
        <a
          href='https://www.linkedin.com/in/alexispark/'
          target='about_blank'
          style={{backgroundColor: this.state.container, color: this.state.icon}}
          onMouseEnter={this.handleBottomLinkHover}
          onMouseLeave={this.handleBottomLinkHover}
          >
          <i className='fa fa-linkedin fa-lg' />
        </a>
        <a
          href='https://twitter.com/theuxdesigner'
          target='about_blank'
          style={{backgroundColor: this.state.container, color: this.state.icon}}
          onMouseEnter={this.handleBottomLinkHover}
          onMouseLeave={this.handleBottomLinkHover}
          >
          <i className='fa fa-twitter fa-lg' />
        </a>
      </div>
    )
  }
}

export default FooterLinks;
