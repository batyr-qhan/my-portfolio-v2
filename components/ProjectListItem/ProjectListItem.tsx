import { Project } from "@/data/projects";

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
      {isEmbedded ? (
        <div className="projects__picture">
          <iframe
            src={iFrameSrc}
            style={{
              width: "100%",
              aspectRatio: 1.35,
              border: "none",
              pointerEvents: "none",
            }}
          ></iframe>
        </div>
      ) : (
        <picture className="projects__picture">
          <source media="(min-width: 62.5em)" srcSet={largeImage} />
          <img
            className="projects__image"
            src={smallImage}
            alt="screenshot of design portfolio website"
            width-="343"
            height="253"
          />
        </picture>
      )}
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

export default ProjectListItem;
