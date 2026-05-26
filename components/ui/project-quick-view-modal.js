"use client";

import AvatarStack from "./avatar-stack";
import Card from "./card";
import Modal from "./modal";
import ProgressBar from "./progress-bar";
import StatusBadge from "./status-badge";
import { formatDate } from "@/lib/utils";

export default function ProjectQuickViewModal({ project, open, onClose }) {
  return (
    <Modal open={open} onClose={onClose} title={project?.title} description={project?.description}>
      {project ? (
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-400 dark:text-rose-200">
                  Delivery status
                </p>
                <h4 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{project.health}</h4>
              </div>
              <StatusBadge label={project.status} />
            </div>

            <div className="mt-5">
              <div className="mb-2 flex items-center justify-between text-sm text-slate-500 dark:text-slate-300">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <ProgressBar value={project.progress} />
            </div>

            <div className="mt-5 rounded-[24px] border border-rose-100 bg-rose-50/60 p-4 dark:border-white/10 dark:bg-white/5">
              <p className="text-sm font-medium text-slate-700 dark:text-white">Recent update</p>
              <p className="mt-2 text-sm leading-7 text-slate-500 dark:text-slate-300">{project.recentUpdate}</p>
            </div>
          </Card>

          <Card className="p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-400 dark:text-rose-200">
              Team & stack
            </p>
            <div className="mt-4">
              <AvatarStack names={project.team} />
            </div>
            <p className="mt-5 text-sm text-slate-500 dark:text-slate-300">
              Deadline: <span className="font-medium text-slate-700 dark:text-white">{formatDate(project.deadline)}</span>
            </p>
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
          </Card>
        </div>
      ) : null}
    </Modal>
  );
}
