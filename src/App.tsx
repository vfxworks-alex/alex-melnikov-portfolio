import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { WorkGrid } from "./components/WorkGrid";
import { projects } from "./data/projects";
import type { Project } from "./data/projects";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="app-shell">
      <Sidebar selectedProject={selectedProject} onBack={() => setSelectedProject(null)} />
      <WorkGrid
        projects={projects}
        selectedProjectId={selectedProject?.id}
        onSelectProject={setSelectedProject}
      />
    </div>
  );
}
