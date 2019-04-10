import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
        <section id="resume">
          {/* Education----------------------------------------------- */}
          <div className="row education">
            <div className="three columns header-col">
              <h1><span>Education</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>University of Life</h3>
                  <p className="info">Master in Graphic Design <span>•</span> <em className="date">April 2007</em></p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                    ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                    Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium.
                  </p>
                </div>
              </div> {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>School of Cool Designers</h3>
                  <p className="info">B.A. in Computer Sciences <span>•</span> <em className="date">March 2015</em></p>
                  <p>
                    This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                    Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                    nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
                    ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat
                  </p>
                </div>
              </div> {/* item end */}
            </div> {/* main-col end */}
          </div> {/* End Education */}
          {/* Work
        ----------------------------------------------- */}
          <div className="row work">
            <div className="three columns header-col">
              <h1><span>Work</span></h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>Avadoo Development</h3>
                  <p className="info">React Developer <span>•</span> <em className="date">Jan 2017 - Present</em></p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                    ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                    Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium.
                  </p>
                </div>
              </div> {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>A.I.M.S</h3>
                  <p className="info">Developer <span>•</span> <em className="date">Jan 2015 - December 2018</em></p>
                  <p>
                    While working with aims I primarily did editing of the wordpress website based in the aircraft industry,
                    it was a great experience for me since I had never worked with it before. 
                    I did some other projects such as building another website for a project of aims.
                  </p>
                </div>
              </div> {/* item end */}
            </div> {/* main-col end */}
          </div> {/* End Work */}
          {/* Skills
        ----------------------------------------------- */}
          <div className="row skill">
            <div className="three columns header-col">
              <h1><span>Skills</span></h1>
            </div>
            <div className="nine columns main-col">
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt.
              </p>
              <div className="bars">
                <ul className="skills">
                  <li><span className="bar-expand photoshop" /><em>React</em></li>
                  <li><span className="bar-expand illustrator" /><em>Vue</em></li>
                  <li><span className="bar-expand wordpress" /><em>Wordpress</em></li>
                  <li><span className="bar-expand css" /><em>SASS</em></li>
                  <li><span className="bar-expand html5" /><em>HTML5</em></li>
                  <li><span className="bar-expand jquery" /><em>jQuery</em></li>
                </ul>
              </div>{/* end skill-bars */}
            </div> {/* main-col end */}
          </div> {/* End skills */}
        </section> {/* Resume Section End*/}
      </React.Fragment>
    );
  }
}