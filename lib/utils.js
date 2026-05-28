export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(dateValue, options = {}) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    ...options,
  }).format(new Date(dateValue));
}

export function formatDateTime(dateValue) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(dateValue));
}

export function formatShortDay(dateValue) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
  }).format(new Date(dateValue));
}

export function formatTime(dateValue) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(dateValue));
}

export function formatTimeRange(start, end) {
  return `${formatTime(start)} - ${formatTime(end)}`;
}

export function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function getStatusTone(status) {
  const tones = {
    Planning: "bg-rose-50 text-rose-600 ring-1 ring-inset ring-rose-100",
    Review: "bg-sky-50 text-sky-600 ring-1 ring-inset ring-sky-100",
    Retrospective: "bg-violet-50 text-violet-600 ring-1 ring-inset ring-violet-100",
    Presentation: "bg-indigo-50 text-indigo-600 ring-1 ring-inset ring-indigo-100",
    Zoom: "bg-sky-50 text-sky-600 ring-1 ring-inset ring-sky-100",
    "Google Meet": "bg-emerald-50 text-emerald-600 ring-1 ring-inset ring-emerald-100",
    "Microsoft Teams": "bg-violet-50 text-violet-600 ring-1 ring-inset ring-violet-100",
    "Slack Huddle": "bg-amber-50 text-amber-600 ring-1 ring-inset ring-amber-100",
    "In Progress": "bg-rose-50 text-rose-600 ring-1 ring-inset ring-rose-100",
    "In Review": "bg-sky-50 text-sky-600 ring-1 ring-inset ring-sky-100",
    Completed: "bg-emerald-50 text-emerald-600 ring-1 ring-inset ring-emerald-100",
    Backlog: "bg-slate-100 text-slate-600 ring-1 ring-inset ring-slate-200",
    default: "bg-slate-100 text-slate-600 ring-1 ring-inset ring-slate-200",
  };

  return tones[status] || tones.default;
}

export function getPriorityTone(priority) {
  const tones = {
    High: "bg-rose-100 text-rose-700 ring-1 ring-inset ring-rose-200",
    Medium: "bg-amber-100 text-amber-700 ring-1 ring-inset ring-amber-200",
    Low: "bg-emerald-100 text-emerald-700 ring-1 ring-inset ring-emerald-200",
  };

  return tones[priority] || getStatusTone("default");
}

export function getAvailabilityTone(status) {
  const tones = {
    online: "bg-emerald-400",
    away: "bg-amber-400",
    offline: "bg-slate-300",
  };

  return tones[status] || tones.offline;
}

export function getNotificationTone(tone) {
  const tones = {
    accent: "border-rose-100 bg-rose-50/80 text-rose-700",
    warning: "border-amber-100 bg-amber-50/80 text-amber-700",
    success: "border-emerald-100 bg-emerald-50/80 text-emerald-700",
    default: "border-slate-200 bg-slate-50/80 text-slate-700",
  };

  return tones[tone] || tones.default;
}

export const panelClass =
  "rounded-[28px] border border-rose-100/80 bg-white/92 shadow-[0_24px_60px_rgba(236,188,214,0.18)] backdrop-blur";

export const softPanelClass =
  "rounded-[24px] border border-rose-100/70 bg-rose-50/60 shadow-[0_16px_40px_rgba(236,188,214,0.12)]";

export const cardHoverClass =
  "transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(236,188,214,0.24)]";

export const inputClass =
  "h-12 w-full rounded-2xl border border-rose-100 bg-white/85 px-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-rose-300 focus:ring-4 focus:ring-rose-100";

export const buttonBaseClass =
  "inline-flex items-center justify-center gap-2 rounded-2xl text-sm font-semibold transition duration-200 focus:outline-none focus:ring-4 focus:ring-rose-100 disabled:cursor-not-allowed disabled:opacity-60";
