import Link from "next/link";
import { Globe, Mail, MessagesSquare } from "lucide-react";
import Card from "@/components/ui/card";
import { footerNavigation, supportLinks } from "@/data/workspace-data";

const socials = [
  { label: "Website", icon: Globe },
  { label: "Community", icon: MessagesSquare },
  { label: "Email", icon: Mail },
];

export default function SiteFooter() {
  return (
    <Card className="mt-8 p-6 md:p-7">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-rose-500 dark:text-rose-200">
            Remote Team Workspace
          </p>
          <p className="mt-3 max-w-sm text-sm leading-7 text-slate-500 dark:text-slate-300">
            A clean SaaS dashboard for projects, tasks, meetings, and collaboration across distributed teams.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">Navigation</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {footerNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-rose-100 bg-rose-50/60 px-3 py-2 text-sm text-slate-600 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">Support & Social</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {supportLinks.slice(0, 2).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-2xl border border-rose-100 bg-rose-50/60 px-3 py-2 text-sm text-slate-600 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              >
                {item.label}
              </Link>
            ))}
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href="#"
                  className="inline-flex items-center gap-2 rounded-2xl border border-rose-100 bg-rose-50/60 px-3 py-2 text-sm text-slate-600 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                >
                  <Icon className="h-4 w-4" />
                  {social.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-rose-100 pt-4 text-sm text-slate-500 dark:border-white/10 dark:text-slate-300">
        Copyright 2026 BloomSpace. Crafted for remote product teams.
      </div>
    </Card>
  );
}
