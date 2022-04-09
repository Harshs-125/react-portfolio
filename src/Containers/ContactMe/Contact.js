import React, { useState, useRef } from "react";
import "./contact.css";
import env from "./email";
import Typical from "react-typical";
import emailjs from "@emailjs/browser";

function Contact(props) {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    message: "",
  });
  function eventHandle(event) {
    console.log("handle change");
    const { name, value } = event.target;
    setDetails((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  const form = useRef();

  function sendEmail(e) {
    console.log(form);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_h5yl7gy",
        "template_yssxmkf",
        form.current,
        "CanVY7qf0DbcGYyA3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="contact-section">
      <div className="contact-parent">
        <div className="contact-header">
          <span class="heading">Contact ME</span>
          <p>Lets Keep in Touch</p>
          <div className="heading-separator">
            <div className="separator-line"></div>
            <div className="separator-blob">
              <div></div>
            </div>
          </div>
        </div>
        <div className="contact-card">
          <div className="contact-subheading">
            <h1
              style={{
                color: "white",
                margin: "10px 20px",
                fontWeight: "bold",
              }}
            >
              <Typical loop={Infinity} steps={["Get in Touch", 1000]} />
            </h1>
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
          </div>
          <div className="contact-mid">
            <div className="contact-bg" style={{ color: "white" }}></div>
            <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
                <div className="ip-grp">
                  <label className="ip-label">Name</label>
                  <input
                    onChange={eventHandle}
                    className="ip"
                    name="name"
                    type={"text"}
                    placeholder="Enter Name"
                    value={details.name}
                  ></input>
                </div>
                <div className="ip-grp">
                  <label className="ip-label">Email</label>
                  <input
                    onChange={eventHandle}
                    className="ip"
                    name="email"
                    type={"email"}
                    placeholder="Enter Email"
                    value={details.email}
                  ></input>
                </div>
                <div className="ip-grp">
                  <label className="ip-label">Message</label>
                  <input
                    onChange={eventHandle}
                    className="ip"
                    name="message"
                    type={"text"}
                    placeholder="Type Message"
                    value={details.message}
                  ></input>
                </div>
                <div className="ip-grp">
                  <input type="submit" value="send"></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
