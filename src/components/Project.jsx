import React from "react";
import { projectsData } from "../data/data";
import { LuMousePointerClick } from "react-icons/lu";

function Project() {
  return (
    <section id="Projects">
      <div className="container project-container">
        <h2>Feature Projects</h2>

        <div className="projects-content">
          {
          projectsData.map(({ img, des, name, tech, prokectlink,figmalink,githublink }, index) => {
            return (
              <article className="project-card" key={index}>
                <img src={img} alt="" />
                <h5>{name}</h5>
                <small>{des}</small>
                <div>
                <a href={prokectlink}><LuMousePointerClick /></a>
                <a href={figmalink}><LuMousePointerClick /></a>
                <a href={githublink}><LuMousePointerClick /></a>
                </div>
              </article>
            );
          })
          }
        </div>
      </div>
    </section>
  );
}

export default Project;
