import { projectsData } from "@/data/projects";
import React from "react";
import ProjectListItem from "../ProjectListItem/ProjectListItem";

export default function ProjectsList() {
  return (
    <section className="projects">
      <div className="wrapper projects__wrapper">
        <div className="projects__grid">
          <h2 className="projects__headline header-xl">Projects</h2>
          <a href="#contact" className="projects__contact underline">
            Contact me
          </a>

          {projectsData.map((proj) => {
            return (
              <ProjectListItem
                key={proj.id}
                name={proj.name}
                tags={proj.tags}
                largeImage={proj.largeImage}
                smallImage={proj.smallImage}
                projectLink={proj.projectLink}
                codeLink={proj.codeLink}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

