import { useCallback, useState } from "react";
import { ProjectOverlay } from "./components/ProjectOverlay";
import { Sidebar } from "./components/Sidebar";
import { WorkGrid } from "./components/WorkGrid";
import { projects } from "./data/projects";
import type { Project } from "./data/projects";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const selectProject = useCallback((project: Project) => setSelectedProject(project), []);
  const closeProject = useCallback(() => setSelectedProject(null), []);
  const selectedProjectIndex = selectedProject
    ? projects.findIndex((project) => project.id === selectedProject.id)
    : -1;
  const previousProject =
    selectedProjectIndex >= 0
      ? projects[(selectedProjectIndex - 1 + projects.length) % projects.length]
      : null;
  const nextProject =
    selectedProjectIndex >= 0 ? projects[(selectedProjectIndex + 1) % projects.length] : null;

  return (
    <div
      className="app-shell"
      inert={selectedProject ? true : undefined}
      aria-hidden={selectedProject ? true : undefined}
    >
      <Sidebar />
      <WorkGrid
        projects={projects}
        selectedProjectId={selectedProject?.id}
        onSelectProject={selectProject}
      />
      {selectedProject && previousProject && nextProject ? (
        <ProjectOverlay
          project={selectedProject}
          projects={projects}
          previousProject={previousProject}
          nextProject={nextProject}
          onSelectProject={selectProject}
          onClose={closeProject}
        />
      ) : null}
    </div>
  );
}
