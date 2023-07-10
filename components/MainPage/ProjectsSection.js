import { projectsData } from "@/data/projects";
import React from "react";

export default function ProjectsSection() {
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
              <ProjectItem
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

function ProjectItem({
  name,
  tags,
  largeImage,
  smallImage,
  projectLink,
  codeLink,
}) {
  return (
    <div className="projects__item">
      <picture className="projects__picture">
        <source media="(min-width: 62.5em)" srcset={largeImage} />
        <img
          className="projects__image"
          src={smallImage}
          alt="screenshot of design portfolio website"
          width-="343"
          height="253"
        />
      </picture>
      <h3 className="projects__name">{name}</h3>
      <p className="projects__tags">
        {tags.map((tag, idx) => (
          <span key={idx}>{tag}</span>
        ))}
      </p>
      <div className="projects__links">
        {projectLink && (
          <a href={projectLink} className="underline" target="_blank">
            View Project
          </a>
        )}
        {codeLink && (
          <a href={codeLink} className="underline" target="_blank">
            View Code
          </a>
        )}
      </div>
    </div>
  );
}
