import React from "react";
import Typical from "react-typical";
import './Profile.css';
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="col">
            <div className="col-icon">
              <a href="https://www.facebook.com/profile.php?id=100037285901209">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/itsh.a.r.s.h/">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/harsh-soni-2a73331b2/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/Harshs-125">
                <i class="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
           <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello I'M <span className="highlighted-text">Harsh</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full Stack Dev",
                    2000,
                    "MERN Stack Dev",
                    2000,
                    "Programmer",
                    2000,
                  ]}
                />
              </h1>
              <span>Building momentum by building Websites</span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{" "}
            </button>
            <a href="Resume.pdf" download="Resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
