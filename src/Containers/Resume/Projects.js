import React,{useEffect}from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import './Projects.css';
import Button from '@mui/material/Button';
function Projects(props) {
 
  return (
    <div className="project-container">
      <div className="project-parent">
        <div className="project-card">
          <div className="project-heading">
            <div>GST</div>
            <p>Giving and Sharing Trust Website Node js Project</p>
          </div>
          <div className="project-tools">
            <span>Technologies used:</span>
            <div>Nodejs</div>
            <div>Expressjs</div>
            <div>MongoDB</div>
            <div>Razor pay api</div>
          </div>
          <hr></hr>
        </div>
        <div className="project-card">
          <div className="project-heading">
            <div>Movie app</div>
            <p>A movie list web app.React APP</p>
          </div>
          <div className="project-tools">
            <span>Technologies used:</span>
            <div>React js</div>
            <div>Redux</div>
            <div>IMDB API</div>
          </div>
          <hr></hr>
        </div>
        <div className="project-card">
          <div className="project-heading">
            <div>Codeial</div>
            <p>This is web site made with React & Node(Currently Ongoing)</p>
          </div>
          <div className="project-tools">
              <span>Technologies used</span>
              <div>Nodejs</div>
              <div>React js</div>
              <div>Redux</div>
              <div>MongoDB</div>
              <div>Socket.io</div>
          </div>
          <hr></hr>
        </div>
      </div>
    </div>
  );
}

export default Projects;
