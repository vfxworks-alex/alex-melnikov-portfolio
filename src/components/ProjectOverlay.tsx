import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Project } from "../data/projects";

type ProjectOverlayProps = {
  project: Project;
  projects: Project[];
  previousProject: Project;
  nextProject: Project;
  onSelectProject: (project: Project) => void;
  onClose: () => void;
};

type ProjectMediaProps = {
  project: Project;
};

function ProjectMedia({ project }: ProjectMediaProps) {
  const [displayedProject, setDisplayedProject] = useState(project);
  const [incomingProject, setIncomingProject] = useState<Project | null>(null);

  useEffect(() => {
    if (project.id === displayedProject.id) {
      setIncomingProject(null);
      return;
    }

    if (!project.previewVideo) {
      setDisplayedProject(project);
      setIncomingProject(null);
      return;
    }

    setIncomingProject(project);
  }, [displayedProject.id, project]);

  const handleIncomingReady = (readyProject: Project) => {
    if (readyProject.id !== project.id) {
      return;
    }

    setDisplayedProject(readyProject);
    setIncomingProject(null);
  };

  const mediaProjects =
    incomingProject && incomingProject.id !== displayedProject.id
      ? [displayedProject, incomingProject]
      : [displayedProject];

  return (
    <div
      className={`project-still${displayedProject.videoAspect ? ` project-still--${displayedProject.videoAspect}-video` : ""}`}
    >
      {mediaProjects.map((mediaProject) => {
        const isVisible = mediaProject.id === displayedProject.id;

        return mediaProject.previewVideo ? (
          <video
            className={isVisible ? undefined : "project-still__incoming-media"}
            autoPlay
            muted
            playsInline
            loop
            controls={isVisible}
            preload="auto"
            src={mediaProject.fullVideo ?? mediaProject.previewVideo}
            aria-label={isVisible ? `${mediaProject.title} full video` : undefined}
            aria-hidden={isVisible ? undefined : true}
            tabIndex={isVisible ? undefined : -1}
            onLoadedData={isVisible ? undefined : () => handleIncomingReady(mediaProject)}
            key={mediaProject.id}
          />
        ) : (
          <img
            src={mediaProject.poster}
            alt={`${mediaProject.title} still frame`}
            key={mediaProject.id}
          />
        );
      })}
    </div>
  );
}

export function ProjectOverlay({
  project,
  projects,
  previousProject,
  nextProject,
  onSelectProject,
  onClose,
}: ProjectOverlayProps) {
  const titleId = useId();
  const descriptionId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const thumbnailRailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousDocumentOverflow = document.documentElement.style.overflow;
    const previouslyFocusedElement =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousDocumentOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previouslyFocusedElement?.focus();
    };
  }, [onClose]);

  useEffect(() => {
    const handleNavigationKeyDown = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLVideoElement) {
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        onSelectProject(previousProject);
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        onSelectProject(nextProject);
      }
    };

    window.addEventListener("keydown", handleNavigationKeyDown);

    return () => window.removeEventListener("keydown", handleNavigationKeyDown);
  }, [nextProject, onSelectProject, previousProject]);

  useEffect(() => {
    scrollerRef.current?.scrollTo({ top: 0, behavior: "auto" });

    const thumbnailRail = thumbnailRailRef.current;
    const activeThumbnail = thumbnailRail?.querySelector<HTMLElement>('[aria-current="true"]');

    if (thumbnailRail && activeThumbnail) {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const centeredScrollPosition =
        activeThumbnail.offsetLeft - (thumbnailRail.clientWidth - activeThumbnail.clientWidth) / 2;

      thumbnailRail.scrollTo({
        left: centeredScrollPosition,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    }
  }, [project.id]);

  return createPortal(
    <div
      className="project-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
    >
      <button
        className="project-overlay__close"
        type="button"
        aria-label="Close project"
        onClick={onClose}
        ref={closeButtonRef}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 5 19 19M19 5 5 19" />
        </svg>
      </button>

      <nav className="project-overlay__thumbnail-nav" aria-label="Project thumbnails">
        <div className="project-overlay__thumbnail-rail" ref={thumbnailRailRef}>
          {projects.map((thumbnailProject) => {
            const isActive = thumbnailProject.id === project.id;

            return (
              <button
                className="project-overlay__thumbnail"
                type="button"
                aria-label={`Open project: ${thumbnailProject.title}`}
                aria-current={isActive ? "true" : undefined}
                title={thumbnailProject.title}
                onClick={() => onSelectProject(thumbnailProject)}
                key={thumbnailProject.id}
              >
                <img
                  src={thumbnailProject.poster}
                  alt=""
                  draggable="false"
                  width="160"
                  height="90"
                />
              </button>
            );
          })}
        </div>
      </nav>

      <button
        className="project-overlay__nav project-overlay__nav--previous"
        type="button"
        aria-label={`Previous project: ${previousProject.title}`}
        onClick={() => onSelectProject(previousProject)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m15 5-7 7 7 7" />
        </svg>
      </button>

      <button
        className="project-overlay__nav project-overlay__nav--next"
        type="button"
        aria-label={`Next project: ${nextProject.title}`}
        onClick={() => onSelectProject(nextProject)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m9 5 7 7-7 7" />
        </svg>
      </button>

      <div className="project-overlay__scroller" ref={scrollerRef}>
        <article className="project-overlay__content">
          <ProjectMedia project={project} />

          <header className="project-overlay__header">
            <p className="eyebrow">{project.category}</p>
            <h2 id={titleId}>{project.title}</h2>
            <p className="project-lede" id={descriptionId}>
              {project.description}
            </p>

            <dl className="project-meta">
              <div>
                <dt>Role</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt>Tools</dt>
                <dd>{project.tools.join(", ")}</dd>
              </div>
            </dl>
          </header>

          {project.credit ? <p className="project-credit">{project.credit}</p> : null}
        </article>
      </div>
    </div>,
    document.body,
  );
}
