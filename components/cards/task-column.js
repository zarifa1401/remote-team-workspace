import { CalendarRange, CircleDot, UserRound } from "lucide-react";
import Card from "@/components/ui/card";
import EmptyState from "@/components/ui/empty-state";
import ProgressBar from "@/components/ui/progress-bar";
import StatusBadge from "@/components/ui/status-badge";
import { formatDate } from "@/lib/utils";

const toneByStatus = {
  Backlog: "amber",
  "In Progress": "rose",
  Review: "sky",
  Completed: "emerald",
};

export default function TaskColumn({ title, tasks }) {
  return (
    <Card className="p-5">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-display text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
          {title}
        </h3>
        <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-600 dark:bg-white/10 dark:text-rose-100">
          {tasks.length}
        </span>
      </div>

      <div className="mt-5 space-y-4">
        {tasks.length ? (
          tasks.map((task) => (
            <article
              key={task.id}
              className="rounded-[24px] border border-rose-100 bg-rose-50/60 p-4 transition hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/8"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="text-base font-semibold text-slate-900 dark:text-white">{task.title}</h4>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">{task.project}</p>
                </div>
                <StatusBadge label={task.priority} priority />
              </div>

              <div className="mt-4">
                <div className="mb-2 flex items-center justify-between text-xs text-slate-500 dark:text-slate-300">
                  <span>Completion</span>
                  <span>{task.progress}%</span>
                </div>
                <ProgressBar value={task.progress} compact tone={toneByStatus[task.status] || "rose"} />
              </div>

              <div className="mt-4 space-y-2 text-sm text-slate-500 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <UserRound className="h-4 w-4" />
                  {task.assignee}
                </div>
                <div className="flex items-center gap-2">
                  <CalendarRange className="h-4 w-4" />
                  {formatDate(task.dueDate)}
                </div>
                <div className="flex items-center gap-2">
                  <CircleDot className="h-4 w-4" />
                  {task.status}
                </div>
              </div>
            </article>
          ))
        ) : (
          <EmptyState
            title={`No ${title.toLowerCase()} tasks`}
            description="This column will fill once tasks match the current search and filters."
          />
        )}
      </div>
    </Card>
  );
}
