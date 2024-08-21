import React from "react";
import { Icon } from "@iconify/react";
// variables
import { skills } from "./variables";

function Skills() {
  return (
    <section id="skills" className="py-5">
      <div className="container text-white text-center">
        <p className="h3 my-5">SKILLS</p>

        <div className="row mb-5">
          <div className="col text-center">
            <ul className="list-inline mx-auto skill-icon">
              {skills.map((skill, i) => {
                return (
                  <li className="list-inline-item mx-3" key={i}>
                    <span>
                      <div className="text-center skills-tile">
                        <Icon
                          icon={skill.icon}
                          style={{ fontSize: "3rem", marginTop: "10px" }}
                        />
                        <p className="my-2" style={{ fontSize: "0.9rem" }}>
                          {skill.name}
                        </p>
                      </div>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
