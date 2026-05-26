import PageHeader from "@/components/ui/page-header";
import ProjectsView from "@/components/views/projects-view";
import { projects } from "@/data/workspace-data";

export default function ProjectsPage() {
  return (
    <div className="space-y-6 ">
      <PageHeader
        eyebrow="Projects"
        title="Every initiative in one polished portfolio view."
        description="Browse delivery cards with shared styling, pastel status badges, hover motion, and quick access to deeper project details."
      />
      <ProjectsView projects={projects} />
    </div>
  );
}
