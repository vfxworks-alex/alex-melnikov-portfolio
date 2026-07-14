import type { Project } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

type WorkGridProps = {
  projects: Project[];
  selectedProjectId?: string;
  onSelectProject: (project: Project) => void;
};

export function WorkGrid({ projects, selectedProjectId, onSelectProject }: WorkGridProps) {
  return (
    <main className="work-panel" id="work">
      <section className="masonry-grid" aria-label="Motion projects">
        {projects.map((project, index) => (
          <ProjectCard
            project={project}
            index={index}
            isSelected={selectedProjectId === project.id}
            onSelect={() => onSelectProject(project)}
            key={project.id}
          />
        ))}
      </section>
    </main>
  );
}
