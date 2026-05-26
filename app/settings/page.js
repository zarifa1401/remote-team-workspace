import { Bell, Palette, ShieldCheck } from "lucide-react";
import Card from "@/components/ui/card";
import PageHeader from "@/components/ui/page-header";
import { settingsGroups } from "@/data/workspace-data";

export default function SettingsPage() {
  const icons = [Palette, Bell, ShieldCheck];

  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Settings"
        title="Workspace controls that match the rest of the product."
        description="Manage preferences, notifications, and team access with the same calm, rounded card system used across every screen."
      />

      <section className="grid gap-4 lg:grid-cols-3">
        {settingsGroups.map((group, index) => {
          const Icon = icons[index] || Palette;

          return (
            <Card key={group.id} className="p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-[20px] bg-gradient-to-br from-rose-100 to-pink-100 text-rose-500 dark:from-white/10 dark:to-white/5 dark:text-rose-100">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold text-slate-900 dark:text-white">{group.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-500 dark:text-slate-300">{group.description}</p>
              <div className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-[22px] border border-rose-100 bg-rose-50/60 px-4 py-3 text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                    <span>{item}</span>
                    <span className="h-6 w-11 rounded-full bg-white shadow-inner dark:bg-white/10" />
                  </div>
                ))}
              </div>
            </Card>
          );
        })}
      </section>
    </div>
  );
}
