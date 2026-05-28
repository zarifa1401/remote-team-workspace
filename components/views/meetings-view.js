"use client";

import { useMemo, useState } from "react";
import MeetingCard from "@/components/cards/meeting-card";
import EmptyState from "@/components/ui/empty-state";
import { panelClass } from "@/lib/utils";

export default function MeetingsView({ meetings }) {
  const [platform, setPlatform] = useState("All");
  const meetingPlatforms = ["All", ...new Set(meetings.map((meeting) => meeting.platform))];

  const filteredMeetings = useMemo(
    () => meetings.filter((meeting) => platform === "All" || meeting.platform === platform),
    [meetings, platform]
  );

  return (
    <>
      <section className={`${panelClass} p-5`}>
        <div className="flex flex-wrap gap-3">
          {meetingPlatforms.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setPlatform(item)}
              className={`rounded-2xl px-4 py-2.5 text-sm font-semibold transition ${
                platform === item
                  ? "bg-gradient-to-r from-rose-400 to-fuchsia-400 text-white shadow-[0_14px_30px_rgba(244,114,182,0.22)]"
                  : "border border-rose-100 bg-white/85 text-slate-600 hover:bg-rose-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {filteredMeetings.length ? (
        <section className="grid gap-4">
          {filteredMeetings.map((meeting) => (
            <MeetingCard key={meeting.id} meeting={meeting} />
          ))}
        </section>
      ) : (
        <EmptyState title="No meetings in this category" description="Switch the filter to browse other sessions." />
      )}
    </>
  );
}
