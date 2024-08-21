import React from "react";
// variables
import { projects } from "./variables";

function Work() {
  return (
    <section id="work" className="py-5">
      <div className="container my-5">
        <div className="title-box text-center">
          <p className="h3">PROJECTS</p>
          <div className="line-mf"></div>
        </div>

        <div className="row mt-5">
          {projects.map((item, idx) => {
            return (
              <div className="col-md-4" key={idx}>
                <div className="work-box">
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <div className="work-img">
                      <img src={item.img} alt="" className="img-fluid" />
                    </div>
                    <div className="work-content">
                      <div className="row">
                        <div className="col">
                          <p className="h4">{item.name}</p>
                          <span>{item.desc}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Work;
