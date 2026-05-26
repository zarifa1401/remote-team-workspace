import Skeleton from "@/components/ui/skeleton";
import { panelClass } from "@/lib/utils";

export default function Loading() {
  return (
    <div className="space-y-6">
      <div className={`${panelClass} p-6`}>
        <Skeleton className="h-4 w-32" />
        <Skeleton className="mt-4 h-10 w-72" />
        <Skeleton className="mt-3 h-4 w-full max-w-2xl" />
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className={`${panelClass} p-5`}>
            <Skeleton className="h-14 w-14 rounded-[22px]" />
            <Skeleton className="mt-4 h-4 w-24" />
            <Skeleton className="mt-3 h-10 w-20" />
            <Skeleton className="mt-4 h-3 w-full rounded-full" />
          </div>
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className={`${panelClass} p-5`}>
            <Skeleton className="h-5 w-40" />
            <Skeleton className="mt-4 h-4 w-full" />
            <Skeleton className="mt-2 h-4 w-4/5" />
            <Skeleton className="mt-6 h-28 w-full rounded-[24px]" />
          </div>
        ))}
      </div>
    </div>
  );
}
