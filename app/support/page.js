import { ChevronRight, Headset, ShieldCheck, Sparkles } from "lucide-react";
import ContactForm from "@/components/ui/contact-form";
import Card from "@/components/ui/card";
import PageHeader from "@/components/ui/page-header";
import { faqs, supportCards, supportLinks } from "@/data/workspace-data";

export default function SupportPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Contact & Support"
        title="Support that feels as polished as the product."
        description="Keep help, onboarding, and security guidance inside the same soft SaaS layout as the rest of the workspace."
      />

      <section className="grid gap-4 md:grid-cols-3">
        {supportCards.map((card, index) => {
          const icons = [Headset, ShieldCheck, Sparkles];
          const Icon = icons[index] || Headset;

          return (
            <Card key={card.title} className="p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-[20px] bg-gradient-to-br from-rose-100 to-pink-100 text-rose-500 dark:from-white/10 dark:to-white/5 dark:text-rose-100">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold text-slate-900 dark:text-white">{card.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-500 dark:text-slate-300">{card.detail}</p>
              <p className="mt-4 text-sm font-semibold text-rose-500 dark:text-rose-100">{card.metric}</p>
            </Card>
          );
        })}
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.3fr_0.95fr]">
        <ContactForm />

        <div className="space-y-4">
          <Card className="p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-400 dark:text-rose-200">Support links</p>
            <div className="mt-5 space-y-3">
              {supportLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between rounded-[24px] border border-rose-100 bg-rose-50/60 px-4 py-4 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/8"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{link.label}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-300">{link.description}</p>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-400 dark:text-slate-300" />
                </a>
              ))}
            </div>
          </Card>

          <Card className="p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-400 dark:text-rose-200">FAQ</p>
            <div className="mt-5 space-y-3">
              {faqs.map((item) => (
                <div key={item.question} className="rounded-[24px] border border-rose-100 bg-rose-50/60 p-4 dark:border-white/10 dark:bg-white/5">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.question}</p>
                  <p className="mt-2 text-sm leading-7 text-slate-500 dark:text-slate-300">{item.answer}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
