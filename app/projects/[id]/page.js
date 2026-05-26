import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarRange, CheckCircle2, Sparkles } from "lucide-react";
import AvatarStack from "@/components/ui/avatar-stack";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import PageHeader from "@/components/ui/page-header";
import ProgressBar from "@/components/ui/progress-bar";
import StatusBadge from "@/components/ui/status-badge";
import { projects, tasks } from "@/data/workspace-data";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export default async function ProjectDetailsPage({ params }) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  const projectTasks = tasks.filter((task) => task.projectId === project.id);

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Project Details"
        title={project.title}
        description={project.description}
        actions={
          <Button as={Link} href="/projects" variant="secondary">
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Button>
        }
      />

      <section className="grid gap-4 xl:grid-cols-[1.45fr_0.92fr]">
        <Card className="p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-rose-500 dark:bg-white/10 dark:text-rose-100">
                <Sparkles className="h-3.5 w-3.5" />
                {project.category}
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <StatusBadge label={project.status} />
                <StatusBadge label={project.priority} priority />
              </div>
            </div>
            <div className="rounded-[24px] bg-rose-50 px-5 py-4 text-right text-rose-600 dark:bg-white/10 dark:text-rose-100">
              <p className="text-xs font-semibold uppercase tracking-[0.18em]">Completion</p>
              <p className="mt-1 font-display text-3xl font-semibold">{project.progress}%</p>
            </div>
          </div>

          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between text-sm text-slate-500 dark:text-slate-300">
              <span>Task progress</span>
              <span>
                {project.tasksDone}/{project.tasksTotal} complete
              </span>
            </div>
            <ProgressBar value={project.progress} />
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-[24px] border border-rose-100 bg-rose-50/60 p-4 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400 dark:text-slate-300">Deadline</p>
              <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{formatDate(project.deadline)}</p>
            </div>
            <div className="rounded-[24px] border border-rose-100 bg-rose-50/60 p-4 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400 dark:text-slate-300">Health</p>
              <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{project.health}</p>
            </div>
            <div className="rounded-[24px] border border-rose-100 bg-rose-50/60 p-4 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400 dark:text-slate-300">Milestone</p>
              <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{project.milestone}</p>
            </div>
          </div>

          <div className="mt-6 rounded-[26px] border border-rose-100 bg-white/75 p-5 dark:border-white/10 dark:bg-white/5">
            <div className="flex items-center gap-3">
              <CalendarRange className="h-5 w-5 text-rose-500 dark:text-rose-100" />
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Assigned team</p>
                <p className="text-sm text-slate-500 dark:text-slate-300">Cross-functional ownership for this initiative</p>
              </div>
            </div>
            <div className="mt-4">
              <AvatarStack names={project.team} />
            </div>
          </div>
        </Card>

        <div className="grid gap-4">
          <Card className="p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-400 dark:text-rose-200">Technologies</p>
            <div className="mt-4 flex flex-wrap gap-2">
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

          <Card className="p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-400 dark:text-rose-200">Recent update</p>
            <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-300">{project.recentUpdate}</p>
          </Card>
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.05fr_1.3fr]">
        <Card className="p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-400 dark:text-rose-200">Task progress</p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-slate-900 dark:text-white">Active work items</h3>
          <div className="mt-5 space-y-4">
            {projectTasks.length ? (
              projectTasks.map((task) => (
                <div key={task.id} className="rounded-[24px] border border-rose-100 bg-rose-50/60 p-4 dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">{task.title}</p>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">{task.assignee}</p>
                    </div>
                    <StatusBadge label={task.status} />
                  </div>
                  <div className="mt-3">
                    <ProgressBar value={task.progress} compact />
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-[24px] border border-dashed border-rose-200 px-4 py-8 text-sm text-slate-500 dark:border-white/10 dark:text-slate-300">
                No linked tasks yet for this project view.
              </div>
            )}
          </div>
        </Card>

        <Card className="p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-400 dark:text-rose-200">Activity timeline</p>
          <h3 className="mt-2 font-display text-2xl font-semibold text-slate-900 dark:text-white">Latest project changes</h3>
          <div className="mt-5 space-y-5">
            {project.activity.map((event, index) => (
              <div key={event.id} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="mt-1 h-3 w-3 rounded-full bg-gradient-to-br from-rose-400 to-fuchsia-400" />
                  {index < project.activity.length - 1 ? <span className="mt-2 h-full w-px bg-rose-100 dark:bg-white/10" /> : null}
                </div>
                <div className="pb-2">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{event.title}</p>
                  <p className="mt-1 text-sm leading-7 text-slate-500 dark:text-slate-300">{event.detail}</p>
                  <div className="mt-2 inline-flex items-center gap-2 text-xs font-medium text-slate-400 dark:text-slate-300">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {event.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
}
