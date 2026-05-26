import Link from "next/link";
import {
  CalendarClock,
  FolderKanban,
  ListTodo,
  MoveRight,
  UsersRound,
} from "lucide-react";
import AnalyticsCard from "@/components/cards/analytics-card";
import AvatarStack from "@/components/ui/avatar-stack";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import ProgressBar from "@/components/ui/progress-bar";
import StatusBadge from "@/components/ui/status-badge";
import {
  meetings,
  projects,
  recentActivity,
  tasks,
  teamMembers,
  workspaceUser,
} from "@/data/workspace-data";
import { formatShortDay, formatTimeRange } from "@/lib/utils";

export default function DashboardPage() {
  const activeProjects = projects.filter((project) => project.status !== "Completed").length;
  const pendingTasks = tasks.filter((task) => task.status !== "Completed").length;
  const stats = [
    {
      title: "Active Projects",
      value: activeProjects,
      detail: "Currently moving across product, design, and engineering.",
      accent: "12%",
      icon: FolderKanban,
      tone: "rose",
    },
    {
      title: "Pending Tasks",
      value: pendingTasks,
      detail: "Work items still in backlog, progress, or review.",
      accent: "8%",
      icon: ListTodo,
      tone: "sky",
    },
    {
      title: "Team Members",
      value: teamMembers.length,
      detail: "Remote collaborators working across time zones.",
      accent: "No change",
      icon: UsersRound,
      tone: "violet",
    },
    {
      title: "Upcoming Meetings",
      value: meetings.length,
      detail: "Planning, reviews, and client-facing syncs.",
      accent: "25%",
      icon: CalendarClock,
      tone: "amber",
    },
  ];

  const chartValues = [12, 20, 18, 24, 22, 30, 28, 39];
  const pointString = chartValues
    .map((value, index) => `${(index / (chartValues.length - 1)) * 100},${100 - (value / 40) * 100}`)
    .join(" ");
  const areaString = `0,100 ${pointString} 100,100`;
  const donutBreakdown = { completed: 64, progress: 24, pending: 12 };

  return (
    <div className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.45fr)_340px]">
        <div className="space-y-6">
          <Card className="overflow-hidden p-6 md:p-7">
            <div className="absolute inset-x-0 top-0 h-28 bg-linear-to-r from-rose-100/80 via-white to-sky-100/80 dark:from-rose-900/40 dark:via-slate-950 dark:to-sky-900/40" />
            <div className="relative">
              <p className="inline-flex items-center rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-rose-500 dark:bg-white/10 dark:text-rose-100">
                {workspaceUser.tagline}
              </p>
              <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-5xl">
                {workspaceUser.title}, {workspaceUser.name}! 👋
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-300 md:text-base">
                Here&apos;s what&apos;s happening with your team today. Keep projects, tasks, meetings, and people aligned inside one calm workspace.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button as={Link} href="/projects">
                  Explore projects
                  <MoveRight className="h-4 w-4" />
                </Button>
                <Button as={Link} href="/reports" variant="secondary">
                  Open reports
                </Button>
              </div>
            </div>
          </Card>

          <section className="grid gap-4 md:grid-cols-2 2xl:grid-cols-4">
            {stats.map((stat) => (
              <AnalyticsCard key={stat.title} {...stat} />
            ))}
          </section>

          <section className="grid gap-4 xl:grid-cols-[1.3fr_0.95fr]">
            <Card className="p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Projects Overview</p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">Delivery momentum this month</p>
                </div>
                <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-600 dark:bg-white/10 dark:text-rose-100">
                  This month
                </span>
              </div>
              <div className="chart-grid mt-6 rounded-[24px] border border-rose-100/70 bg-gradient-to-b from-rose-50/70 to-white p-4 dark:border-white/10 dark:from-white/5 dark:to-transparent">
                <svg viewBox="0 0 100 100" className="h-64 w-full">
                  <defs>
                    <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#f472b6" stopOpacity="0.32" />
                      <stop offset="100%" stopColor="#f472b6" stopOpacity="0.02" />
                    </linearGradient>
                  </defs>
                  <polygon points={areaString} fill="url(#chartFill)" />
                  <polyline
                    points={pointString}
                    fill="none"
                    stroke="#f472b6"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="mt-4 grid grid-cols-4 gap-3 text-xs text-slate-400 dark:text-slate-300">
                  {["May 1", "May 7", "May 14", "May 28"].map((label) => (
                    <span key={label}>{label}</span>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="p-5">
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Tasks Progress</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">Current sprint completion</p>
              </div>
              <div className="mt-6 flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-between">
                <div
                  className="flex h-48 w-48 items-center justify-center rounded-full"
                  style={{
                    background: `conic-gradient(#f472b6 0 ${donutBreakdown.completed}%, #38bdf8 ${donutBreakdown.completed}% ${donutBreakdown.completed + donutBreakdown.progress}%, #e2e8f0 ${donutBreakdown.completed + donutBreakdown.progress}% 100%)`,
                  }}
                >
                  <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-white text-center dark:bg-[#241829]">
                    <p className="font-display text-4xl font-semibold text-slate-900 dark:text-white">64%</p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">Completed</p>
                  </div>
                </div>

                <div className="w-full space-y-4 md:max-w-[210px]">
                  {[
                    { label: "Completed", value: "64%", count: 72, dot: "bg-rose-400" },
                    { label: "In Progress", value: "24%", count: 27, dot: "bg-sky-400" },
                    { label: "Pending", value: "12%", count: 13, dot: "bg-slate-300" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <span className={`h-3 w-3 rounded-full ${item.dot}`} />
                        <span className="text-sm text-slate-600 dark:text-slate-200">{item.label}</span>
                      </div>
                      <span className="text-sm font-semibold text-slate-900 dark:text-white">
                        {item.value} <span className="ml-1 text-slate-400">({item.count})</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </section>

          <section className="grid gap-4 xl:grid-cols-2">
            <Card className="p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Recent Activity</p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">Latest team updates</p>
                </div>
                <Link href="/messages" className="text-sm font-semibold text-rose-500 dark:text-rose-100">
                  View all
                </Link>
              </div>
              <div className="mt-5 space-y-4">
                {recentActivity.map((item, index) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className="mt-1 h-3 w-3 rounded-full bg-gradient-to-br from-rose-400 to-fuchsia-400" />
                      {index < recentActivity.length - 1 ? <span className="mt-2 h-full w-px bg-rose-100 dark:bg-white/10" /> : null}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.title}</p>
                      <p className="mt-1 text-sm text-rose-500 dark:text-rose-100">{item.detail}</p>
                      <p className="mt-2 text-xs font-medium text-slate-400 dark:text-slate-300">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">Top Projects</p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">Most active delivery tracks</p>
                </div>
                <Link href="/projects" className="text-sm font-semibold text-rose-500 dark:text-rose-100">
                  View all
                </Link>
              </div>
              <div className="mt-5 space-y-4">
                {projects.slice(0, 4).map((project, index) => (
                  <div key={project.id} className="rounded-3xl border border-rose-100 bg-rose-50/60 p-4 dark:border-white/10 dark:bg-white/5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">{project.title}</p>
                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-300">{project.status}</p>
                      </div>
                      <span className="text-sm font-semibold text-slate-700 dark:text-white">{project.progress}%</span>
                    </div>
                    <div className="mt-3">
                      <ProgressBar value={project.progress} tone={index === 1 ? "sky" : "rose"} compact />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </section>
        </div>

        <aside className="space-y-4">
          <Card className="p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Upcoming Meetings</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">Next sessions on your calendar</p>
              </div>
              <Link href="/calendar" className="text-sm font-semibold text-rose-500 dark:text-rose-100">
                View calendar
              </Link>
            </div>
            <div className="mt-5 space-y-4">
              {meetings.map((meeting) => (
                <div key={meeting.id} className="rounded-[24px] border border-rose-100 bg-white/85 p-4 dark:border-white/10 dark:bg-white/5">
                  <div className="flex gap-4">
                    <div className="flex min-w-[58px] flex-col items-center justify-center rounded-[20px] bg-rose-50 px-3 py-3 text-center text-rose-600 dark:bg-white/10 dark:text-rose-100">
                      <p className="text-lg font-semibold leading-none">{formatShortDay(meeting.date).split(" ")[1]}</p>
                      <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em]">
                        {formatShortDay(meeting.date).split(" ")[0]}
                      </p>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-sm font-semibold text-slate-900 dark:text-white">{meeting.title}</p>
                          <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">
                            {formatTimeRange(meeting.date, meeting.endDate)}
                          </p>
                        </div>
                        <StatusBadge label={meeting.platform} />
                      </div>
                      <div className="mt-4 flex items-center justify-between gap-3">
                        <AvatarStack names={meeting.participants} size="sm" limit={3} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Team Activity</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">Current availability</p>
              </div>
              <Link href="/team-members" className="text-sm font-semibold text-rose-500 dark:text-rose-100">
                View all
              </Link>
            </div>
            <div className="mt-5 space-y-4">
              {teamMembers.map((member) => (
                <div key={member.id} className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-linear-to-br from-rose-300 to-fuchsia-400 text-xs font-semibold text-white">
                      {member.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">{member.name}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-300">{member.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-300">
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        member.status === "online"
                          ? "bg-emerald-400"
                          : member.status === "away"
                            ? "bg-amber-400"
                            : "bg-slate-300"
                      }`}
                    />
                    {member.availability}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </aside>
      </div>
    </div>
  );
}
