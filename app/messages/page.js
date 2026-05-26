import { MessageSquareText, Send } from "lucide-react";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import PageHeader from "@/components/ui/page-header";
import { messages } from "@/data/workspace-data";
export const metadata = {
  title: "Messages",
  description: "A clean inbox view for remote team conversations.",
}

export default function MessagesPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Messages"
        title="A clean inbox view for remote team conversations."
        description="Keep async collaboration organized with message previews, unread indicators, and a focused conversation panel."
      />

      <section className="grid gap-4 xl:grid-cols-[0.95fr_1.15fr]">
        <Card className="p-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Inbox</p>
              <p className="text-sm text-slate-500 dark:text-slate-300">Recent conversations</p>
            </div>
            <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-600 dark:bg-white/10 dark:text-rose-100">
              3 unread
            </span>
          </div>
          <div className="mt-5 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`rounded-[24px] border p-4 ${
                  message.unread
                    ? "border-rose-200 bg-gradient-to-r from-rose-50 to-pink-50 dark:border-white/10 dark:from-white/10 dark:to-white/5"
                    : "border-rose-100 bg-white/75 dark:border-white/10 dark:bg-white/5"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{message.sender}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-300">{message.role}</p>
                  </div>
                  <span className="text-xs text-slate-400 dark:text-slate-300">{message.time}</span>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-500 dark:text-slate-300">{message.preview}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-[22px] bg-gradient-to-br from-rose-100 to-pink-100 text-rose-500 dark:from-white/10 dark:to-white/5 dark:text-rose-100">
              <MessageSquareText className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">Sarah Johnson</p>
              <p className="text-sm text-slate-500 dark:text-slate-300">UI/UX Designer</p>
            </div>
          </div>
          <div className="mt-6 space-y-4">
            {[
              "I shared a revised header direction with softer spacing and a lighter pastel chart treatment.",
              "Looks great. Let’s keep the same card rhythm on projects and meetings so the dashboard feels unified.",
              "Perfect. I’ll mirror the same spacing system across the filter rows and detail panels too.",
            ].map((message, index) => (
              <div
                key={message}
                className={`max-w-[80%] rounded-[24px] px-4 py-3 text-sm leading-7 ${
                  index % 2 === 0
                    ? "bg-rose-50 text-slate-700 dark:bg-white/10 dark:text-slate-100"
                    : "ml-auto bg-gradient-to-r from-rose-400 to-fuchsia-400 text-white"
                }`}
              >
                {message}
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-3 rounded-[24px] border border-rose-100 bg-white/75 p-3 dark:border-white/10 dark:bg-white/5">
            <input
              type="text"
              placeholder="Write a message..."
              className="h-11 flex-1 rounded-2xl bg-transparent px-3 text-sm text-slate-700 outline-none placeholder:text-slate-400 dark:text-white"
            />
            <Button>
              <Send className="h-4 w-4" />
              Send
            </Button>
          </div>
        </Card>
      </section>
    </div>
  );
}
