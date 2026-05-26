import Card from "./card";

export default function PageHeader({ eyebrow, title, description, actions }) {
  return (
    <Card className="relative overflow-hidden p-6 md:p-7">
      <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-r from-rose-100/70 via-white to-sky-100/70 dark:from-rose-900/40 dark:via-slate-950 dark:to-sky-900/40" />
      <div className="relative flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-rose-500 dark:text-rose-200">
            {eyebrow}
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            {title}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 dark:text-slate-300 md:text-base">
            {description}
          </p>
        </div>
        {actions ? <div className="relative flex flex-wrap gap-3">{actions}</div> : null}
      </div>
    </Card>
  );
}
