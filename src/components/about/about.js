import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
        <section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/profilepic.jpg" alt="" />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>My name is James BakerSmith and I am a Web Developer / Mobile App Developer. 

                I believe if the world was more minimal and intuitive, we would progress as a species more rapidly than we do now. 
                I do my part by creating websites and applications that make the process of using technology much more enjoyable.

                If you have a vision, I would love to help communicate your story to others. Being a workaholic, 
                I dedicate all my passion, energy, sleep until we both are satisfied with the outcome. 

                I am a Bootcamp graduate as well as self taught, I believe I'm different from others due to my unique and diverse thought process. 
                When working on a project I am my own critic; though this can be impeding, 
                I use it as my drive to give myself the strength to always strive for more improvement, to learn more, and be more creative.
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>James Baker-Smith</span><br />
                    <span>Rue Main Hudson<br />
                      Quebec, CA J0P1H0
                    </span><br />
                    <span>+1 (518) 645-1268</span><br />
                    <span>james@pvsameer.io</span><br/>
                    <span>jamesbakersmith5501@gmail.com</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    {/* <a href="#" className="button"><i className="fa fa-download"/>Download Resume</a> */}
                  </p>
                </div>
              </div> {/* end row */}
            </div> {/* end .main-col */}
          </div>
        </section> {/* About Section End*/}
      </React.Fragment>
    );
  }
}