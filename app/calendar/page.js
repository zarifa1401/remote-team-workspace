import { CalendarRange, Clock3 } from "lucide-react";
import Card from "@/components/ui/card";
import PageHeader from "@/components/ui/page-header";
import { calendarEvents, meetings } from "@/data/workspace-data";
import { formatDate, formatTime } from "@/lib/utils";

export default function CalendarPage() {
  const currentDate = new Date();

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const firstDayOfMonth = new Date(
    currentYear,
    currentMonth,
    1
  ).getDay();

  const daysInMonth = new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDate();

  const daysArray = [
    ...Array(firstDayOfMonth).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const highlightedDays = [5, 8, 12, 18, 23, 27];

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Calendar"
        title="A lightweight planning board for the week ahead."
        description="Keep upcoming sessions, reviews, and leadership syncs visible in the same soft dashboard language as the rest of the workspace."
      />

      <section className="grid gap-4 xl:grid-cols-[1.1fr_0.95fr]">
        <Card className="p-5">
          {/* Month Title */}
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              {currentDate.toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </h2>
          </div>

          {/* Week Days */}
          <div className="grid grid-cols-7 gap-3 text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-300">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="mt-4 grid grid-cols-7 gap-3">
            {daysArray.map((day, index) => {
              const highlight = highlightedDays.includes(day);

              const isToday =
                day === currentDate.getDate();

              return (
                <div
                  key={index}
                  className={`min-h-24 rounded-[22px] border p-3 transition-all duration-200 ${
                    highlight
                      ? "border-rose-200 bg-linear-to-br from-rose-50 to-pink-50 dark:border-white/10 dark:from-white/10 dark:to-white/5"
                      : "border-rose-100 bg-white/75 dark:border-white/10 dark:bg-white/5"
                  } ${
                    isToday
                      ? "ring-2 ring-rose-300 dark:ring-rose-200"
                      : ""
                  }`}
                >
                  {day ? (
                    <>
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-slate-700 dark:text-white">
                          {day}
                        </p>

                        {isToday ? (
                          <span className="rounded-full bg-rose-400 px-2 py-0.5 text-[10px] font-bold text-white">
                            Today
                          </span>
                        ) : null}
                      </div>

                      {highlight ? (
                        <div className="mt-3 h-2.5 w-2.5 rounded-full bg-rose-400" />
                      ) : null}
                    </>
                  ) : null}
                </div>
              );
            })}
          </div>
        </Card>

        <div className="space-y-4">
          {/* Upcoming Events */}
          <Card className="p-5">
            <div className="flex items-center gap-3">
              <CalendarRange className="h-5 w-5 text-rose-500 dark:text-rose-100" />

              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  Upcoming events
                </p>

                <p className="text-sm text-slate-500 dark:text-slate-300">
                  Scheduled moments across the workspace
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {calendarEvents.map((event) => (
                <div
                  key={event.id}
                  className="rounded-3xl border border-rose-100 bg-rose-50/60 p-4 dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        {event.title}
                      </p>

                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">
                        {formatDate(event.date)}
                      </p>
                    </div>

                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-500 ring-1 ring-inset ring-rose-100 dark:bg-white/6 dark:text-slate-200 dark:ring-white/10">
                      {event.tag}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Meetings */}
          <Card className="p-5">
            <div className="flex items-center gap-3">
              <Clock3 className="h-5 w-5 text-rose-500 dark:text-rose-100" />

              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  Today&apos;s meetings
                </p>

                <p className="text-sm text-slate-500 dark:text-slate-300">
                  Fast glance schedule
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {meetings.slice(0, 3).map((meeting) => (
                <div
                  key={meeting.id}
                  className="flex items-center justify-between gap-3 rounded-3xl border border-rose-100 bg-white/75 px-4 py-3 dark:border-white/10 dark:bg-white/5"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {meeting.title}
                    </p>

                    <p className="text-sm text-slate-500 dark:text-slate-300">
                      {meeting.platform}
                    </p>
                  </div>

                  <span className="text-sm font-semibold text-rose-500 dark:text-rose-100">
                    {formatTime(meeting.date)}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}