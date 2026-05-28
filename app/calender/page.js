import { CalendarRange, Clock3 } from "lucide-react";
import Card from "@/components/ui/card";
import PageHeader from "@/components/ui/page-header";
import { calendarEvents, meetings } from "@/data/workspace-data";
import { formatDate, formatTime } from "@/lib/utils";

export default function CalendarPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Calendar"
        title="A lightweight planning board for the week ahead."
        description="Keep upcoming sessions, reviews, and leadership syncs visible in the same soft dashboard language as the rest of the workspace."
      />

      <section className="grid gap-4 xl:grid-cols-[1.1fr_0.95fr]">
        <Card className="p-5">
          <div className="grid grid-cols-7 gap-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-300">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-7 gap-3">
            {Array.from({ length: 35 }).map((_, index) => {
              const day = index + 1;
              const highlight = [5, 8, 12, 18, 23, 27].includes(day);

              return (
                <div
                  key={day}
                  className={`min-h-24 rounded-[22px] border p-3 ${
                    highlight
                      ? "border-rose-200 bg-linear-to-br from-rose-50 to-pink-50 dark:border-white/10 dark:from-white/10 dark:to-white/5"
                      : "border-rose-100 bg-white/75 dark:border-white/10 dark:bg-white/5"
                  }`}
                >
                  <p className="text-sm font-semibold text-slate-700 dark:text-white">{day}</p>
                  {highlight ? <div className="mt-3 h-2.5 w-2.5 rounded-full bg-rose-400" /> : null}
                </div>
              );
            })}
          </div>
        </Card>

        <div className="space-y-4">
          <Card className="p-5">
            <div className="flex items-center gap-3">
              <CalendarRange className="h-5 w-5 text-rose-500 dark:text-rose-100" />
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Upcoming events</p>
                <p className="text-sm text-slate-500 dark:text-slate-300">Scheduled moments across the workspace</p>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              {calendarEvents.map((event) => (
                <div key={event.id} className="rounded-3xl border border-rose-100 bg-rose-50/60 p-4 dark:border-white/10 dark:bg-white/5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">{event.title}</p>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">{formatDate(event.date)}</p>
                    </div>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-500 ring-1 ring-inset ring-rose-100 dark:bg-white/6 dark:text-slate-200 dark:ring-white/10">
                      {event.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-5">
            <div className="flex items-center gap-3">
              <Clock3 className="h-5 w-5 text-rose-500 dark:text-rose-100" />
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">Today&apos;s meetings</p>
                <p className="text-sm text-slate-500 dark:text-slate-300">Fast glance schedule</p>
              </div>
            </div>
            <div className="mt-5 space-y-3">
              {meetings.slice(0, 3).map((meeting) => (
                <div key={meeting.id} className="flex items-center justify-between gap-3 rounded-3xl border border-rose-100 bg-white/75 px-4 py-3 dark:border-white/10 dark:bg-white/5">
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{meeting.title}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-300">{meeting.platform}</p>
                  </div>
                  <span className="text-sm font-semibold text-rose-500 dark:text-rose-100">{formatTime(meeting.date)}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
