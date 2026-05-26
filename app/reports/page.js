import { Activity, ArrowUpRight, BarChart3, Clock3 } from "lucide-react";
import Card from "@/components/ui/card";
import PageHeader from "@/components/ui/page-header";
import ProgressBar from "@/components/ui/progress-bar";
import { projects, reportHighlights } from "@/data/workspace-data";


export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Reports"
        title="A compact analytics workspace for leadership snapshots."
        description="Surface completion, responsiveness, attendance, and project momentum without introducing a second visual language."
      />

      <section className="grid gap-4 md:grid-cols-3">
        {reportHighlights.map((item, index) => {
          const icons = [BarChart3, Clock3, Activity];
          const Icon = icons[index] || BarChart3;

          return (
            <Card key={item.id} className="p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-[20px] bg-linear-to-br from-rose-100 to-pink-100 text-rose-500 dark:from-white/10 dark:to-white/5 dark:text-rose-100">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-4 text-sm text-slate-500 dark:text-slate-300">{item.label}</p>
              <p className="mt-2 font-display text-4xl font-semibold text-slate-900 dark:text-white">{item.value}</p>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">{item.detail}</p>
            </Card>
          );
        })}
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.1fr_0.95fr]">
        <Card className="p-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Delivery health</p>
              <p className="text-sm text-slate-500 dark:text-slate-300">Progress across active projects</p>
            </div>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-600">
              <ArrowUpRight className="h-4 w-4" />
              +11%
            </span>
          </div>
          <div className="mt-5 space-y-4">
            {projects.map((project, index) => (
              <div key={project.id} className="rounded-3xl border border-rose-100 bg-rose-50/60 p-4 dark:border-white/10 dark:bg-white/5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{project.title}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-300">{project.health}</p>
                  </div>
                  <span className="text-sm font-semibold text-slate-700 dark:text-white">{project.progress}%</span>
                </div>
                <div className="mt-3">
                  <ProgressBar value={project.progress} tone={index % 2 === 0 ? "rose" : "sky"} compact />
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-5">
          <p className="text-sm font-semibold text-slate-900 dark:text-white">Executive summary</p>
          <p className="mt-2 text-sm leading-7 text-slate-500 dark:text-slate-300">
            The workspace is trending positively overall, with strong meeting attendance and healthy delivery velocity on the flagship initiatives. The primary area to watch remains the mobile release, where QA is still resolving sync confidence before launch.
          </p>
          <div className="mt-6 grid gap-3">
            {[
              "Focus additional QA support on the mobile workflow project.",
              "Use the completed marketing release as the reference for future reporting cards.",
              "Keep stakeholder-facing work in review until the approval flow walkthrough is complete.",
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-rose-100 bg-white/75 px-4 py-3 text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
}
