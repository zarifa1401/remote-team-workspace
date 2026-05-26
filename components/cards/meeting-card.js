import { CalendarClock, Link2, UsersRound } from "lucide-react";
import AvatarStack from "@/components/ui/avatar-stack";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import StatusBadge from "@/components/ui/status-badge";
import { formatShortDay, formatTimeRange } from "@/lib/utils";

export default function MeetingCard({ meeting }) {
  return (
    <Card className="p-5">
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex w-full max-w-[88px] shrink-0 flex-col items-center justify-center rounded-[24px] bg-gradient-to-br from-rose-100 to-pink-100 px-4 py-5 text-center text-rose-600 dark:from-white/10 dark:to-white/5 dark:text-rose-100">
          <p className="text-xs font-semibold uppercase tracking-[0.18em]">Date</p>
          <p className="mt-2 font-display text-lg font-bold">{formatShortDay(meeting.date)}</p>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
                {meeting.title}
              </h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">Hosted by {meeting.host}</p>
            </div>
            <StatusBadge label={meeting.platform} />
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <div className="rounded-3xl border border-rose-100 bg-rose-50/60 p-4 dark:border-white/10 dark:bg-white/5">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-white">
                <CalendarClock className="h-4 w-4 text-rose-400" />
                {formatTimeRange(meeting.date, meeting.endDate)}
              </div>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">
                {meeting.type} session • {meeting.duration}
              </p>
            </div>

            <div className="rounded-3xl border border-rose-100 bg-rose-50/60 p-4 dark:border-white/10 dark:bg-white/5">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-white">
                <UsersRound className="h-4 w-4 text-rose-400" />
                {meeting.participants.length} participants
              </div>
              <div className="mt-3">
                <AvatarStack names={meeting.participants} />
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <Button>
              <Link2 className="h-4 w-4" />
              Join meeting
            </Button>
            <Button variant="secondary">View agenda</Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
