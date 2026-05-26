import { ArrowUpRight } from "lucide-react";
import Card from "@/components/ui/card";

const toneMap = {
  rose: "from-rose-100 to-pink-100 text-rose-500",
  sky: "from-sky-100 to-cyan-100 text-sky-500",
  violet: "from-violet-100 to-fuchsia-100 text-violet-500",
  amber: "from-amber-100 to-orange-100 text-amber-500",
};

export default function AnalyticsCard({ icon: Icon, title, value, detail, accent, tone = "rose" }) {
  const trendingUp = accent.startsWith("+");

  return (
    <Card hover className="p-5">
      <div className="flex items-start justify-between gap-4">
        <div className={`flex h-14 w-14 items-center justify-center rounded-[22px] bg-gradient-to-br ${toneMap[tone] || toneMap.rose}`}>
          <Icon className="h-5 w-5" />
        </div>
        <span
          className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${
            trendingUp ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-500"
          }`}
        >
          {trendingUp ? <ArrowUpRight className="h-3.5 w-3.5" /> : null}
          {accent}
        </span>
      </div>
      <p className="mt-5 text-sm text-slate-500 dark:text-slate-300">{title}</p>
      <p className="mt-2 font-display text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">
        {value}
      </p>
      <p className="mt-3 text-sm text-slate-500 dark:text-slate-300">{detail}</p>
    </Card>
  );
}
