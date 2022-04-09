import React ,{useEffect}from "react";
import "./Education.css";
import Aos from "aos";
import "aos/dist/aos.css";
function Education(props) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []); 
  return (
    <div data-aos="fade-up" className="education-container">
      <div className="education-parent">
        <div className="edu-blob"></div>
        <div className="education-card">
          <div className="education-heading">
            <span>Institute Of Engineering and Technology DAVV,Indore Mp.</span>
          </div>
          <div className="education-subheading">
            <span>
              Bachelor Of Engineering from Computer Science Engineering with 8.3
              cgpa
            </span>
          </div>
          <div className="education-duration">
            <span>2019-present</span>
          </div>
        </div>
      </div>
      <div className="education-parent">
        <div className="edu-blob"></div>
        <div className="education-card">
          <div className="education-heading">
            <span>Sanskar Acedmy , Ashoknagar Mp</span>
          </div>
          <div className="education-subheading">
            <span>
              Higher Secondary Schooling with Science Stream and scored 81.2% in
              CBSE examination
            </span>
          </div>
          <div className="education-duration">
            <span>2017-2019</span>
          </div>
        </div>
      </div>
      <div className="education-parent">
        <div className="edu-blob"></div>
        <div className="education-card">
          <div className="education-heading">
            <span>Tara Sadan Sr. sec. School ,Ashoknagar Mp</span>
          </div>
          <div className="education-subheading">
            <span>Secondary Education with 9.2 Cgpa</span>
          </div>
          <div className="education-duration">
            <span>2017</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
