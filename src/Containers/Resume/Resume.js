import React ,{useEffect}from "react";
import "./resume.css";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Intrests from "./Intrests";
import Tools from "./Tools";
import education from "../../assets/education.png";
import programming from "../../assets/programming.png";
import projects from "../../assets/projects.png";
import intrests from "../../assets/intrests.png";
import tools from "../../assets/tools.png";
import Aos from "aos";
import "aos/dist/aos.css";
function Resume() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-down" className="Resume-container">
      <div className="Resume-parent">
        <div className="Resume-header">
          <span className="heading">Resume</span>
          <p>My formal Bio details</p>
        </div>
        <div className="heading-separator">
          <div className="separator-line"></div>
          <div className="separator-blob">
            <div></div>
          </div>
        </div>
        <div className="Resume-card">
          <div class="resume-carousel">
            <div className="resume-left">
              <div className="resume-blob"></div>
              <div className="bullets">
                <div className="bullet-details selected">
                  <div className="bullet-icon">
                    <a href="#education">
                    <i class="fa-solid fa-chalkboard-user"></i>
                    </a>
                  </div>
                  <div className="bullet-name">
                    <a href="#education">
                      <span>Education</span>
                    </a>
                  </div>
                </div>
                <div className="bullet-details selected">
                  <div className="bullet-icon">
                    <a href="#skills">
                    <i class="fa-solid fa-laptop-code"></i>
                    </a>
                  </div>
                  <div className="bullet-name">
                    <a href="#skills">Programming-Skills</a>
                  </div>
                </div>
                <div className="bullet-details selected">
                  <div className="bullet-icon">
                    <a href="#projects">
                    <i class="fa-solid fa-bars-progress"></i>
                    </a>
                  </div>
                  <div className="bullet-name">
                    <a href="#projects">Projects</a>
                  </div>
                </div>
                {/* <div className="bullet-details selected">
                  <div className="bullet-icon">
                    <a href="#intrests">
                    <i class="fa-solid fa-heart-circle-check"></i>
                    </a>
                  </div>
                  <div className="bullet-name">
                    <a href="#intrest">Intrests</a>
                  </div>
                </div> */}
                <div className="bullet-details selected">
                  <div className="bullet-icon">
                    <a href="#tools">
                    <i class="fa-solid fa-wrench"></i>
                    </a>
                  </div>
                  <div className="bullet-name">
                    <a href="#tools">Tools & Technologies</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="resume-right">
              <div className="resume-section" id="education">
                <Education />
              </div>
              <div className="resume-section" id="skills">
                <Skills />
              </div>
              <div className="resume-section" id="projects">
                <Projects />
              </div>
              <div className="resume-section" id="tools">
                <Tools />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
