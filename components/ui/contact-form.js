"use client";

import { useState } from "react";
import { Send, ShieldCheck } from "lucide-react";
import { useToast } from "@/components/ui/toast-provider";
import Button from "./button";
import Card from "./card";
import Modal from "./modal";
import { inputClass } from "@/lib/utils";

const initialState = {
  name: "",
  email: "",
  topic: "Product Support",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [open, setOpen] = useState(false);
  const { showToast } = useToast();

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setOpen(true);
    showToast({
      title: "Support request ready",
      description: "Your message has been staged with the same polished feedback system used across the app.",
    });
    setForm(initialState);
  }

  return (
    <>
      <Card as="form" onSubmit={handleSubmit} className="p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-500 dark:text-rose-100">Contact form</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-slate-900 dark:text-white">Send a message to support</h3>
          </div>
          <div className="hidden rounded-[20px] bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700 md:flex md:items-center md:gap-2">
            <ShieldCheck className="h-4 w-4" />
            Secure workspace request
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <label className="space-y-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Full name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className={inputClass}
              placeholder="Your name"
            />
          </label>
          <label className="space-y-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Work email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className={inputClass}
              placeholder="team@company.com"
            />
          </label>
        </div>

        <label className="mt-4 block space-y-2">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Topic</span>
          <select name="topic" value={form.topic} onChange={handleChange} className={inputClass}>
            <option>Product Support</option>
            <option>Billing Question</option>
            <option>Feature Request</option>
            <option>Security Review</option>
          </select>
        </label>

        <label className="mt-4 block space-y-2">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows="6"
            className={`${inputClass} h-auto min-h-36 py-3`}
            placeholder="Tell us what your team needs help with."
          />
        </label>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button type="submit">
            <Send className="h-4 w-4" />
            Send message
          </Button>
          <p className="text-sm text-slate-500 dark:text-slate-300">Typical response time: within one business day</p>
        </div>
      </Card>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Support request created"
        description="This confirmation state mirrors how a polished SaaS support interaction could feel inside the product."
      >
        <div className="rounded-[28px] bg-linear-to-br from-rose-50 to-sky-50 p-5 dark:from-white/10 dark:to-white/5">
          <p className="text-sm leading-7 text-slate-600 dark:text-slate-200">
            Thanks for reaching out. A support teammate would normally receive your request, route it by topic, and follow up with next steps from here.
          </p>
        </div>
      </Modal>
    </>
  );
}
