"use client";

import { useMemo, useState } from "react";
import { Flag, Search } from "lucide-react";
import TaskColumn from "@/components/cards/task-column";
import { inputClass, panelClass } from "@/lib/utils";

const statuses = ["Backlog", "In Progress", "Review", "Completed"];
const priorities = ["All", "High", "Medium", "Low"];

export default function TasksView({ tasks }) {
  const [query, setQuery] = useState("");
  const [priority, setPriority] = useState("All");

  const filteredTasks = useMemo(() => {
    const searchValue = query.toLowerCase();

    return tasks.filter((task) => {
      const matchesQuery =
        task.title.toLowerCase().includes(searchValue) ||
        task.project.toLowerCase().includes(searchValue) ||
        task.assignee.toLowerCase().includes(searchValue);

      return matchesQuery && (priority === "All" || task.priority === priority);
    });
  }, [priority, query, tasks]);

  return (
    <>
      <section className={`${panelClass} p-5`}>
        <div className="grid gap-4 lg:grid-cols-[1fr_220px]">
          <label className="block space-y-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Search tasks</span>
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by task, assignee, or project"
                className={`${inputClass} pl-10`}
              />
            </div>
          </label>

          <label className="block space-y-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Priority filter</span>
            <div className="relative">
              <Flag className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <select value={priority} onChange={(event) => setPriority(event.target.value)} className={`${inputClass} pl-10`}>
                {priorities.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </div>
          </label>
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-4">
        {statuses.map((status) => (
          <TaskColumn key={status} title={status} tasks={filteredTasks.filter((task) => task.status === status)} />
        ))}
      </section>
    </>
  );
}
