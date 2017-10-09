import React from 'react';
import particleConfig from '../../../../particlesjs-resumeConfig.json';
import FooterLinks from './FooterLinks';

class Resume extends React.Component {
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
          <span>RESUME</span>
        </div>
        <div className='page-wrapperBottom'>
          <div className='resume-wrapper'>
            <div className='resume-bottomText page-bottomText'>

              {/* <div className="sqs-block-content"> */}
                <p className="text-align-center">
                  <span style={{fontSize:'28pt'}}>Alexis Park </span>
                </p>
                {/* <p className="text-align-center"> */}
                  <span className="text-align-center" style={{fontSize:'11pt'}}>User Experience Designer </span>
                <br />
                {/* </p> */}
                <p>
                  <strong><span style={{fontSize:'12pt'}}>:: WORK EXPERIENCE</span></strong>
                  <br />
                  <strong>Mobile Product Designer </strong>
                  <br />
                  Aquent - New York, NY - Jan 2017 to Present
                  <br /><br />
                  <strong>User Experience Designer</strong>
                  <br />
                  <span style={{fontSize:'12pt'}}>Hotwire - Seattle, WA - June 2016 to December 2016</span>
                  <br />
                  Responsibilities
                  <br />
                  <span style={{fontSize:'15pt'}}>• </span>
                  <span style={{fontSize:'10pt'}}>Performed lots of iterative design for Hotwire's new responsive site - mobile break heavy.</span>
                  <br /><br />
                  <strong>Sr User Experience Designer</strong>
                  <br />
                  <span style={{fontSize:'12pt'}}>Starbucks - Seattle, WA - November 2015 to June 2016</span>
                  <br />
                  Responsibilities
                  <br />
                  <span style={{fontSize:'15pt'}}>• </span>
                  <span style={{fontSize:'10pt'}}>
                    Work in collaboration with product owners, analysts and engineers to lead UX/UI efforts for all Partner related projects.
                  </span>
                </p>
                <p>
                  <span style={{fontSize:'12pt'}}><strong>User Experience Architect</strong></span>
                  <br />
                  <span style={{fontSize:'12pt'}}>Walmartlabs - San Bruno, CA - December 2013 to November 2015 </span>
                  <br />
                  <span style={{fontSize:'11pt'}}>Responsibilities</span>
                  <br />
                  <span style={{fontSize:'10pt'}}>
                    • Design and strategize in collaboration with cross-functional teams including product management, business stakeholders and engineers
                    <br />
                    • Wireframe, prototype. User-test proposed designs and interactions for desktop, iOS, and Android phone and tablet </span>
                    <br />
                    <span style={{fontSize:'10pt'}}>
                      • Established and maintained interaction, visual and content pattern guide for Sam’s Club
                    </span>
                  </p>
                  <p>
                    <strong>
                      <span style={{fontSize:'12pt'}}>Assistant Instructor </span>
                    </strong>
                    <br />
                    <span style={{fontSize:'12pt'}}>General Assemb.ly – San Francisco, CA – May 2014 to Nov 2015</span>
                    <br />
                    <span style={{fontSize:'11pt'}}>Responsibilities</span>
                    <br />
                    <span style={{fontSize:'10pt'}}>• Support main instructor by providing feedback to students on their ongoing projects and career progress</span>
                    <br />
                    <span style={{fontSize:'10pt'}}>• Provide guidance and mentorship to future UX talents throughout and beyond the course </span>
                  </p>
                  <p>
                    <strong>
                      <span style={{fontSize:'12pt'}}>User Experience Design Consultant</span></strong>
                      <br />
                      <span style={{fontSize:'12pt'}}>Freelance – Seattle, WA &amp; San Francisco, CA - August 2012 to Present </span>
                      <br />
                      <span style={{fontSize:'11pt'}}>Responsibilities</span>
                      <br />
                      <span style={{fontSize:'10pt'}}>
                        • Recruit users for interviews and usability testing
                        <br />
                        • Perform competitive analysis, content audit for existing platforms
                      </span>
                      <br />
                      <span style={{fontSize:'10pt'}}>
                        • Create and deliver annotated wireframes for proposed design and direction. Create final UI mockups including specs
                      </span>
                      <br />
                      <span style={{fontSize:'11pt'}}>Clients and Projects</span>
                      <br />
                      <span style={{fontSize:'10pt'}}>
                        Agnitus, Publet, Minnovative Solutions, InstaVest, Mediakitz, Plannit.io, Anthology, and Qriously for redesigning the email marketing process, onboarding, site redesign, and various other projects
                      </span>
                    </p>
                    <p>
                      <strong>
                        <span style={{fontSize:'12pt'}}>:: SKILLS </span>
                      </strong>
                      <br />
                      <span style={{fontSize:'10pt'}}>
                        User Research, Personas, Scenarios, User Flows, Storyboarding, Competitive Analysis, Card Sorting, A/ B Testing, Interaction Design, Prototyping, Usability Testing, Content Strategy, Information Architecture, Responsive Design, Sketching, Project Planning, Analytics, Lean UX, Agile UX, Wireframing
                      </span>
                      <br />
                      <br />
                      <strong>
                        <span style={{fontSize:'12pt'}}>:: TOOLS </span>
                      </strong>
                      <br />
                      <span style={{fontSize:'10pt'}}>
                        Adobe Illustrator, Adobe Photoshop, Axure, Omnigraffle, Sketch, HTML/CSS, Framer.js, Flinto, Invision
                      </span>
                    </p>
                    <p>
                      <strong>
                        <span style={{fontSize:'12pt'}}>:: EDUCATION</span>
                      </strong>
                      <br />
                      <span style={{fontSize:'10pt'}}>B.A. in Psychology</span>
                      <br />
                      <span style={{fontSize:'10pt'}}>University of Washington - Seattle, WA — June 2011</span>
                      <br />
                      <span style={{fontSize:'10pt'}}>Front End Development Certificate (HTML, CSS, JavaScript) </span>
                      <span style={{fontSize:'10pt'}}>General Assemb.ly - San Francisco, CA — Feb 2015 </span>
                    </p>
                    <p>
                      <strong>
                        <span style={{fontSize:'12pt'}}>:: LINKS </span>
                      </strong>
                      <br />
                      <span style={{fontSize:'12pt'}}>http://www.alexishpark.com | http://www.linkedin.com/in/alexispark </span>
                    </p>
                    <p>
                      <strong><span style={{fontSize:'12pt'}}>:: GROUPS </span></strong>
                      <br />
                      <span style={{fontSize:'10pt'}}>IxDA - Interaction Design Association </span>
                      <span style={{fontSize:'13px'}}>—</span>
                      <span style={{fontSize:'10pt'}}> June 2013 to Present </span>
                      <br />
                      <span style={{fontSize:'13.3333px'}}>AIGA - The Professional Association for Design (American Institute of Graphic Arts) - June 2013 to Present
                      </span>
                    </p>
                  </div>

            </div>
          <FooterLinks />
        </div>
      </div>
    )
  }
}

export default Resume;
