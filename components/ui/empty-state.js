import { Inbox } from "lucide-react";
import Button from "./button";
import Card from "./card";

export default function EmptyState({
  title = "Nothing to show right now",
  description = "Try adjusting your filters or search query to explore more results.",
  actionLabel,
  onAction,
}) {
  return (
    <Card className="flex min-h-72 flex-col items-center justify-center px-6 py-10 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-[22px] bg-linear-to-br from-rose-100 to-pink-100 text-rose-500 dark:from-white/10 dark:to-white/5 dark:text-rose-100">
        <Inbox className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">{title}</h3>
      <p className="mt-2 max-w-md text-sm leading-7 text-slate-500 dark:text-slate-300">{description}</p>
      {actionLabel && onAction ? (
        <Button className="mt-5" onClick={onAction}>
          {actionLabel}
        </Button>
      ) : null}
    </Card>
  );
}
