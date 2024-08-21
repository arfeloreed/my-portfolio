import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// variables
import { aboutIcons } from "./variables";
// assets
import myPic from "../assets/images/mypic .webp";

function About() {
  return (
    <section id="about" className="mb-5">
      <div className="container position-relative">
        <div className="stage-cube-con">
          <div className="cubespinner">
            {aboutIcons.map((icon, idx) => {
              return (
                <div className={`face${idx + 1}`} key={idx}>
                  <FontAwesomeIcon icon={icon.icon} color={icon.color} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container">
        <p className="h3 text-center mb-5 pb-5">ABOUT ME</p>

        <div className="row">
          <div className="col-md-4 text-center">
            <div className="polaroid mb-4">
              <span style={{ cursor: "auto" }}>
                <img
                  src={myPic}
                  style={{ maxWidth: "250px", height: "300px" }}
                  alt="Reed's Pic"
                />
              </span>
            </div>
          </div>

          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <span
                  style={{
                    height: "15px",
                    width: "15px",
                    backgroundColor: "#ff5f56",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginRight: "8px",
                  }}
                ></span>
                <span
                  style={{
                    height: "15px",
                    width: "15px",
                    backgroundColor: "#ffbd2e",
                    borderRadius: "50%",
                    display: "inline-block",
                    marginRight: "8px",
                  }}
                ></span>
                <span
                  style={{
                    height: "15px",
                    width: "15px",
                    backgroundColor: "#27c93f",
                    borderRadius: "50%",
                    display: "inline-block",
                  }}
                ></span>
              </div>
              <div
                className="card-body mx-3"
                style={{
                  height: "auto",
                  fontSize: "110%",
                  lineHeight: "200%",
                }}
              >
                <br />
                <p>Hello :)</p>
                <p style={{ textAlign: "justify" }}>
                  I am Arfelo Reed, a programmer specializes in React, Node,
                  PostgreSQL, Python and Bash scripting. I also love to cook,
                  bake and read books. Whether working on a project or whipping
                  up a batch of cookies, I'm always striving to bring my best
                  effort and attention to detail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
