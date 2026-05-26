import Link from "next/link";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";

export default function NotFound() {
  return (
    <Card className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-16 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-500 dark:text-rose-100">404</p>
      <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight text-slate-900 dark:text-white">
        This workspace view could not be found.
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-300 md:text-base">
        The route may have moved, or the project identifier may not exist in this demo dataset.
      </p>
      <Button as={Link} href="/" className="mt-6">
        Return to dashboard
      </Button>
    </Card>
  );
}
