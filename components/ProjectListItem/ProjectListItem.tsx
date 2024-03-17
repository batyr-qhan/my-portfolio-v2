import { Project } from "@/data/projects";
import Image from "next/image";

import "./styles/project-list-item.css";

function ProjectListItem({
  name,
  isEmbedded,
  tags,
  largeImage,
  smallImage,
  projectLink,
  codeLink,
  iFrameSrc,
}: Project) {
  return (
    <div className="projects__item">
      <picture className="projects__picture">
        {isEmbedded ? (
          <iframe src={iFrameSrc} className="projects__iframe"></iframe>
        ) : (
          <>
            <source media="(min-width: 62.5em)" srcSet={largeImage} />
            {smallImage && (
              <Image
                className="projects__image"
                src={smallImage ?? ""}
                alt="screenshot of design portfolio website"
                width={343}
                height={253}
                priority={true}
              />
            )}
          </>
        )}
      </picture>
      <h3 className="projects__name">{name}</h3>
      <p className="projects__tags">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
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

export default ProjectListItem;
