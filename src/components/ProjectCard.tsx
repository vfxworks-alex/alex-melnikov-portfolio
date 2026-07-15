import { useEffect, useRef } from "react";
import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
  isSelected: boolean;
  onSelect: () => void;
};

export function ProjectCard({ project, index, isSelected, onSelect }: ProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const grid = card?.parentElement;

    if (!card || !grid || typeof ResizeObserver === "undefined") {
      return;
    }

    const updateGridSpan = () => {
      const gridStyles = window.getComputedStyle(grid);
      const rowHeight = Number.parseFloat(gridStyles.gridAutoRows);
      const rowGap = Number.parseFloat(gridStyles.rowGap);

      if (!rowHeight || Number.isNaN(rowGap)) {
        return;
      }

      const span = Math.ceil((card.offsetHeight + rowGap) / (rowHeight + rowGap));
      card.style.gridRowEnd = `span ${span}`;
    };

    const resizeObserver = new ResizeObserver(updateGridSpan);
    resizeObserver.observe(card);
    updateGridSpan();

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <article
      ref={cardRef}
      className={`project-card project-card--size-${project.size} project-card--aspect-${project.videoAspect ?? "square"}${isSelected ? " is-selected" : ""}`}
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
            <span>{project.category}</span>
          </div>
        </div>
      </button>
    </article>
  );
}
