import { cn, getPriorityTone, getStatusTone } from "@/lib/utils";

export default function StatusBadge({ label, priority = false, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold",
        priority ? getPriorityTone(label) : getStatusTone(label),
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-75" />
      {label}
    </span>
  );
}
