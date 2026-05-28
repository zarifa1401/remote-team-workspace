"use client";

import { useMemo, useState } from "react";
import { Filter, Search } from "lucide-react";
import ProjectCard from "@/components/cards/project-card";
import EmptyState from "@/components/ui/empty-state";
import ProjectQuickViewModal from "@/components/ui/project-quick-view-modal";
import { inputClass, panelClass } from "@/lib/utils";

export default function ProjectsView({ projects }) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const statuses = ["All", ...new Set(projects.map((project) => project.status))];

  const filteredProjects = useMemo(() => {
    const searchValue = query.toLowerCase();

    return projects.filter((project) => {
      const matchesQuery =
        project.title.toLowerCase().includes(searchValue) ||
        project.summary.toLowerCase().includes(searchValue) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(searchValue));

      return matchesQuery && (status === "All" || project.status === status);
    });
  }, [projects, query, status]);

  return (
    <>
      <section className={`${panelClass} p-5`}>
        <div className="grid gap-4 lg:grid-cols-[1fr_240px]">
          <label className="block space-y-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Search projects</span>
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by title, category, or technology"
                className={`${inputClass} pl-10`}
              />
            </div>
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Status filter</span>
            <div className="relative">
              <Filter className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <select value={status} onChange={(event) => setStatus(event.target.value)} className={`${inputClass} pl-10`}>
                {statuses.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>
          </label>
        </div>
      </section>

      {filteredProjects.length ? (
        <section className="grid gap-4 md:grid-cols-2 2xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onQuickView={setActiveProject} />
          ))}
        </section>
      ) : (
        <EmptyState
          title="No projects match this view"
          description="Try a broader query or switch the status filter to explore more work."
          actionLabel="Reset filters"
          onAction={() => {
            setQuery("");
            setStatus("All");
          }}
        />
      )}

      <ProjectQuickViewModal project={activeProject} open={Boolean(activeProject)} onClose={() => setActiveProject(null)} />
    </>
  );
}
