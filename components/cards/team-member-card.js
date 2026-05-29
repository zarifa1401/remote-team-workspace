import { Mail, MessageSquareMore, PhoneCall } from "lucide-react";
import Card from "@/components/ui/card";
import StatusBadge from "@/components/ui/status-badge";
import { getAvailabilityTone, getInitials } from "@/lib/utils";

export default function TeamMemberCard({ member }) {
  return (
    <Card hover className="flex h-full flex-col p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="flex h-14 w-14 items-center justify-center rounded-[22px] bg-gradient-to-br from-rose-300 to-fuchsia-400 text-sm font-semibold text-white">
              {getInitials(member.name)}
            </div>
            <span
              className={`absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-white dark:border-[#241829] ${getAvailabilityTone(member.status)}`}
            />
          </div>
          <div>
            <h3 className="font-display text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
              {member.name}
            </h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">{member.role}</p>
          </div>
        </div>
        <StatusBadge label={member.availability} className="hidden lg:inline-flex" />
      </div>

      <p className="mt-5 text-sm leading-7 text-slate-500 dark:text-slate-300">{member.bio}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {member.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-500 ring-1 ring-inset ring-rose-100 dark:bg-white/6 dark:text-slate-200 dark:ring-white/10"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="mt-6 grid gap-3 rounded-3xl border border-rose-100 bg-rose-50/60 p-4 text-sm dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center justify-between gap-3">
          <span className="text-slate-500 dark:text-slate-300">Location</span>
          <span className="font-medium text-slate-700 dark:text-white">{member.location}</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <span className="text-slate-500 dark:text-slate-300">Timezone</span>
          <span className="font-medium text-slate-700 dark:text-white">{member.timezone}</span>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2">
        {[Mail, MessageSquareMore, PhoneCall].map((Icon, index) => (
          <button
            key={index}
            type="button"
            className="rounded-2xl border border-rose-100 bg-white/85 p-2.5 text-slate-500 hover:text-rose-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
          >
            <Icon className="h-4 w-4" />
          </button>
        ))}
      </div>
    </Card>
  );
}
