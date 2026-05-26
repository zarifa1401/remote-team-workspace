import { cn } from "@/lib/utils";

export default function Skeleton({ className }) {
  return <div className={cn("animate-pulse rounded-[20px] bg-rose-100/80 dark:bg-white/10", className)} />;
}
