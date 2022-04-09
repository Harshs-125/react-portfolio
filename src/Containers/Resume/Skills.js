import React from "react";
import "./skills.css";
function Skills(props) {
  return (
    <div className="Skills-container">
      <div className="skills-parent">
        <div className="skills-card">
          <div className="skills-name">
            <span>Java Core</span>
          </div>
          <div className="skill-bar">
            <div className="pos" style={{ width: "80%", height:"100%" }}></div>
            <div className="neg" style={{ width: "20%",height:"100%"}}></div>
          </div>
        </div>
        <div className="skills-card">
          <div className="skills-name">
            <span>C/C++</span>
          </div>
          <div className="skill-bar">
            <div className="pos" style={{ width: "70%", height:"100%" }}></div>
            <div className="neg" style={{ width: "30%",height:"100%"}}></div>
          </div>
        </div>
        <div className="skills-card">
          <div className="skills-name">
            <span>Javascript</span>
          </div>
          <div className="skill-bar">
            <div className="pos" style={{ width: "60%", height:"100%" }}></div>
            <div className="neg" style={{ width: "40%",height:"100%"}}></div>
          </div>
        </div>
        <div className="skills-card">
          <div className="skills-name">
            <span>React js/Redux</span>
          </div>
          <div className="skill-bar">
            <div className="pos" style={{ width: "70%", height:"100%" }}></div>
            <div className="neg" style={{ width: "30%",height:"100%"}}></div>
          </div>
        </div>
        <div className="skills-card">
          <div className="skills-name">
            <span>Node js</span>
          </div>
          <div className="skill-bar">
            <div className="pos" style={{ width: "80%", height:"100%" }}></div>
            <div className="neg" style={{ width: "20%",height:"100%"}}></div>
          </div>
        </div>
        <div className="skills-card">
          <div className="skills-name">
            <span>Express js</span>
          </div>
          <div className="skill-bar">
            <div className="pos" style={{ width: "80%", height:"100%" }}></div>
            <div className="neg" style={{ width: "20%",height:"100%"}}></div>
          </div>
        </div>
        <div className="skills-card">
          <div className="skills-name">
            <span>HTML/CSS</span>
          </div>
          <div className="skill-bar">
            <div className="pos" style={{ width: "80%", height:"100%" }}></div>
            <div className="neg" style={{ width: "20%",height:"100%"}}></div>
          </div>
        </div>
        <div className="skills-card">
          <div className="skills-name">
            <span>DataStructures</span>
          </div>
          <div className="skill-bar">
            <div className="pos" style={{ width: "60%", height:"100%" }}></div>
            <div className="neg" style={{ width: "40%",height:"100%"}}></div>
          </div>
        </div>
        <div className="skills-card">
          <div className="skills-name">
            <span>MongoDB</span>
          </div>
          <div className="skill-bar">
            <div className="pos" style={{ width: "60%", height:"100%" }}></div>
            <div className="neg" style={{ width: "40%",height:"100%"}}></div>
          </div>
        </div>
        <div className="skills-card">
          <div className="skills-name">
            <span>MySQL</span>
          </div>
          <div className="skill-bar">
            <div className="pos" style={{ width: "50%", height:"100%" }}></div>
            <div className="neg" style={{ width: "50%",height:"100%"}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
