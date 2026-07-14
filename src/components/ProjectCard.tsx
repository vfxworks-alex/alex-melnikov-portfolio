import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
  isSelected: boolean;
  onSelect: () => void;
};

export function ProjectCard({ project, index, isSelected, onSelect }: ProjectCardProps) {
  return (
    <article
      className={`project-card project-card--${project.size}${isSelected ? " is-selected" : ""}`}
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <button
        type="button"
        className="project-button"
        aria-label={`Open ${project.title} project details`}
        aria-pressed={isSelected}
        onClick={onSelect}
      >
        <div className="project-media">
          <span
            className="project-poster"
            aria-hidden="true"
            style={{ backgroundImage: `url(${project.poster})` }}
          />
          {project.previewVideo ? (
            <video
              autoPlay
              muted
              playsInline
              loop
              preload="metadata"
              poster={project.poster}
              src={project.previewVideo}
              aria-label={`${project.title} motion preview`}
            />
          ) : (
            <span className="motion-placeholder" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          )}
          <span className="media-sheen" aria-hidden="true" />
          <div className="project-caption">
            <span>{project.title}</span>
            <span>
              {project.category} / {project.year}
            </span>
          </div>
        </div>
      </button>
    </article>
  );
}
