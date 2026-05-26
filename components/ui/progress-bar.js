import { cn } from "@/lib/utils";

const tones = {
  rose: "bg-gradient-to-r from-rose-300 via-pink-400 to-fuchsia-400",
  sky: "bg-gradient-to-r from-sky-300 via-cyan-400 to-blue-400",
  emerald: "bg-gradient-to-r from-emerald-300 via-teal-400 to-cyan-400",
  amber: "bg-gradient-to-r from-amber-300 via-orange-400 to-rose-400",
};

export default function ProgressBar({ value, compact = false, tone = "rose" }) {
  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-full bg-rose-100/80 dark:bg-white/10",
        compact ? "h-2" : "h-3"
      )}
    >
      <div
        className={cn(
          "h-full rounded-full shadow-[0_8px_18px_rgba(244,114,182,0.22)]",
          tones[tone] || tones.rose
        )}
        style={{ width: `${Math.max(0, Math.min(100, value))}%` }}
      />
    </div>
  );
}
