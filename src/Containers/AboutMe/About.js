import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import "./about.css";
function About(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-up" className="about-container">
      <div className="about-parent">
        <d  iv className="about-header">
          <span class="heading">About ME</span>
          <p>Why Choose me?</p>
          <div className="heading-separator">
            <div className="separator-line"></div>
            <div className="separator-blob">
              <div></div>
            </div>
          </div>
        </d>
        <div className="about-card">
          <div className="left-card"></div>
          <div className="right-card">
            <div className="card-top">
              Hello everyone I'm Harsh and I'm a Undergraduate Computer Science
              Student pursuing my BE from IET DAVV Indore.and I'M a full stack
              Web Developer also having background knowledge of MERN Stack with
              Redux. Along with developing websites I'm hardworking and willing
              to be asset for an organization.
            </div>
            <div className="card-mid">
              <h2>Here are a few Highlights:</h2>
              <div className="highlights">
                <div className="highlight-blob"></div>
                <div className="highlight-key">
                  <span>Full Stack Web Developer(MERN)</span>
                </div>
              </div>
              <div className="highlights">
                <div className="highlight-blob"></div>
                <div className="highlight-key">
                  <span>Backend using nodejs</span>
                </div>
              </div>
              <div className="highlights">
                <div className="highlight-blob"></div>
                <div className="highlight-key">
                  <span>React and Redux</span>
                </div>
              </div>
              <div className="highlights">
                <div className="highlight-blob"></div>
                <div className="highlight-key">
                  <span>Building REST APIs</span>
                </div>
              </div>
              <div className="highlights">
                <div className="highlight-blob"></div>
                <div className="highlight-key">
                  <span>Database(Mongoose , sql)</span>
                </div>
              </div>
              <div className="highlights">
                <div className="highlight-blob"></div>
                <div className="highlight-key">
                  <span>JAVA standard</span>
                </div>
              </div>
              <div className="highlights">
                <div className="highlight-blob"></div>
                <div className="highlight-key">
                  <span>Compititive Programming using java SE</span>
                </div>
              </div>
            </div>
            <div className="card-foot">
              <button className="btn primary-btn">
                {""}
                Hire Me{" "}
              </button>
              <a href="Resume.pdf" download="Resume.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
