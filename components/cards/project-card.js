"use client";

import Link from "next/link";
import { ArrowUpRight, Eye } from "lucide-react";
import AvatarStack from "@/components/ui/avatar-stack";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import ProgressBar from "@/components/ui/progress-bar";
import StatusBadge from "@/components/ui/status-badge";

export default function ProjectCard({ project, onQuickView }) {
  return (
    <Card hover className="flex h-full flex-col p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-400 dark:text-rose-200">
            {project.category}
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
            {project.title}
          </h3>
        </div>
        <StatusBadge label={project.status} />
      </div>

      <p className="mt-4 flex-1 text-sm leading-7 text-slate-500 dark:text-slate-300">{project.summary}</p>

      <div className="mt-5 rounded-3xl border border-rose-100 bg-rose-50/60 p-4 dark:border-white/10 dark:bg-white/5">
        <div className="mb-3 flex items-center justify-between gap-3 text-sm">
          <span className="text-slate-500 dark:text-slate-300">Completion</span>
          <span className="font-semibold text-slate-700 dark:text-white">{project.progress}%</span>
        </div>
        <ProgressBar value={project.progress} tone={project.progress > 95 ? "emerald" : "rose"} />
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-500 ring-1 ring-inset ring-rose-100 dark:bg-white/6 dark:text-slate-200 dark:ring-white/10"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between gap-4">
        <AvatarStack names={project.team} size="sm" />
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-300">
          {project.health}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button as={Link} href={`/projects/${project.id}`}>
          View details
          <ArrowUpRight className="h-4 w-4" />
        </Button>
        <Button variant="secondary" onClick={() => onQuickView(project)}>
          <Eye className="h-4 w-4" />
          Quick view
        </Button>
      </div>
    </Card>
  );
}
